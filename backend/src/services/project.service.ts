import mongoose from 'mongoose'
import { Project } from '../models/Project'
import {
  CreateProjectInput,
  UpdateProjectInput,
} from '../schemas/project.schema'

class ProjectService {
  async createProject(userId: string, data: CreateProjectInput) {
    const project = await Project.create({
      ...data,
      owner: userId,
      collaborators: [],
    })

    return await project.populate('owner', 'name email')
  }

  async getProjects(userId: string, page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit

    const query: Record<string, unknown> = {
      $or: [{ owner: userId }, { collaborators: userId }],
    }

    if (search) {
      query.name = { $regex: search, $options: 'i' }
    }

    const [projects, total] = await Promise.all([
      Project.find(query)
        .populate('owner', 'name email')
        .populate('collaborators', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Project.countDocuments(query),
    ])

    return {
      projects,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    }
  }

  async getProjectById(projectId: string, userId: string) {
    const project = await Project.findById(projectId)
      .populate('owner', 'name email')
      .populate('collaborators', 'name email')

    if (!project) {
      throw new Error('Project not found')
    }

    const isOwner = project.owner._id.toString() === userId
    const isCollaborator = project.collaborators.some(
      (c: mongoose.Types.ObjectId) => c._id.toString() === userId,
    )

    if (!isOwner && !isCollaborator) {
      throw new Error('Access denied')
    }

    return project
  }

  async updateProject(
    projectId: string,
    userId: string,
    data: UpdateProjectInput,
  ) {
    const project = await Project.findById(projectId)

    if (!project) {
      throw new Error('Project not found')
    }

    if (project.owner.toString() !== userId) {
      throw new Error('Only the project owner can update the project')
    }

    const updatedProject = await Project.findByIdAndUpdate(projectId, data, {
      new: true,
      runValidators: true,
    }).populate('owner', 'name email')

    return updatedProject
  }

  async deleteProject(projectId: string, userId: string) {
    const project = await Project.findById(projectId)

    if (!project) {
      throw new Error('Project not found')
    }

    if (project.owner.toString() !== userId) {
      throw new Error('Only the project owner can delete the project')
    }

    await project.deleteOne()

    return { message: 'Project deleted successfully' }
  }

  async addCollaborator(
    projectId: string,
    userId: string,
    collaboratorId: string,
  ) {
    const project = await Project.findById(projectId)

    if (!project) {
      throw new Error('Project not found')
    }

    if (project.owner.toString() !== userId) {
      throw new Error('Only the project owner can add collaborators')
    }

    if (project.owner.toString() === collaboratorId) {
      throw new Error('Owner is already part of the project')
    }

    if (project.collaborators.some((c) => c.toString() === collaboratorId)) {
      throw new Error('User is already a collaborator')
    }

    project.collaborators.push(new mongoose.Types.ObjectId(collaboratorId))
    await project.save()

    return await project.populate('collaborators', 'name email')
  }

  async removeCollaborator(
    projectId: string,
    userId: string,
    collaboratorId: string,
  ) {
    const project = await Project.findById(projectId)

    if (!project) {
      throw new Error('Project not found')
    }

    if (project.owner.toString() !== userId) {
      throw new Error('Only the project owner can remove collaborators')
    }

    project.collaborators = project.collaborators.filter(
      (c) => c.toString() !== collaboratorId,
    )

    await project.save()

    return await project.populate('collaborators', 'name email')
  }
}

export const projectService = new ProjectService()
