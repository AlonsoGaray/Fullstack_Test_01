import { authService } from '../src/services/auth.service'
import { projectService } from '../src/services/project.service'
import { taskService } from '../src/services/task.service'
import './setup'

describe('Basic Integration Tests', () => {
  const testUser = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
  }

  // Test 1: User Registration
  it('should register a new user', async () => {
    const result = await authService.register(testUser)

    expect(result.token).toBeDefined()
    expect(result.user.email).toBe(testUser.email)
    expect(result.user.name).toBe(testUser.name)
  })

  // Test 2: User Login
  it('should login with valid credentials', async () => {
    await authService.register(testUser)

    const result = await authService.login({
      email: testUser.email,
      password: testUser.password,
    })

    expect(result.token).toBeDefined()
    expect(result.user.email).toBe(testUser.email)
  })

  // Test 3: Create Project
  it('should create a new project', async () => {
    const authResult = await authService.register(testUser)
    const userId = authResult.user._id.toString()

    const project = await projectService.createProject(userId, {
      name: 'Test Project',
      description: 'Test Description',
    })

    expect(project.name).toBe('Test Project')
    expect(project.owner).toBeDefined()
  })

  // Test 4: Create Task
  it('should create a new task in a project', async () => {
    const authResult = await authService.register(testUser)
    const userId = authResult.user._id.toString()

    const project = await projectService.createProject(userId, {
      name: 'Test Project',
      description: 'Test Description',
    })

    const task = await taskService.createTask(userId, {
      title: 'Test Task',
      description: 'Test task description',
      project: project._id.toString(),
      status: 'pendiente',
      priority: 'media',
    })

    expect(task.title).toBe('Test Task')
    expect(task.status).toBe('pendiente')
    expect(task.priority).toBe('media')
  })

  // Test 5: Get Tasks
  it('should retrieve user tasks', async () => {
    const authResult = await authService.register(testUser)
    const userId = authResult.user._id.toString()

    const project = await projectService.createProject(userId, {
      name: 'Test Project',
      description: 'Test Description',
    })

    await taskService.createTask(userId, {
      title: 'Test Task 1',
      project: project._id.toString(),
      status: 'pendiente',
      priority: 'alta',
    })

    await taskService.createTask(userId, {
      title: 'Test Task 2',
      project: project._id.toString(),
      status: 'en progreso',
      priority: 'media',
    })

    const result = await taskService.getTasks(userId, {})

    expect(result.tasks.length).toBe(2)
    expect(result.pagination.total).toBe(2)
  })
})
