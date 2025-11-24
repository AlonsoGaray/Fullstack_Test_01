import { apiClient } from './client'
import type {
  Task,
  CreateTaskRequest,
  UpdateTaskRequest,
  ApiSuccess,
} from '@/types/api'

export const tasksApi = {
  getTasks: async (
    projectId?: string,
    page = 1,
    limit = 10,
    status?: string,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(projectId && { project: projectId }),
      ...(status && { status }),
    })
    const response = await apiClient.get<ApiSuccess<Task[]>>(`/tasks?${params}`)
    return response.data.data
  },

  getTaskById: async (id: string) => {
    const response = await apiClient.get<ApiSuccess<Task>>(`/tasks/${id}`)
    return response.data.data
  },

  createTask: async (data: CreateTaskRequest) => {
    const response = await apiClient.post<ApiSuccess<Task>>('/tasks', data)
    return response.data.data
  },

  updateTask: async (id: string, data: UpdateTaskRequest) => {
    const response = await apiClient.put<ApiSuccess<Task>>(`/tasks/${id}`, data)
    return response.data.data
  },

  deleteTask: async (id: string) => {
    await apiClient.delete(`/tasks/${id}`)
  },
}
