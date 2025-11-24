import { Plus } from 'lucide-react'

export default function RecentProjects() {
  const projects = [
    {
      name: 'Project 1',
      progress: 67,
      tasks: { completed: 12, total: 18 },
      members: 4,
    },
    {
      name: 'Project 2',
      progress: 53,
      tasks: { completed: 8, total: 15 },
      members: 5,
    },
    {
      name: 'Project 3',
      progress: 62,
      tasks: { completed: 5, total: 8 },
      members: 3,
    },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {project.name}
            </h3>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="text-sm font-semibold text-gray-900">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>
                {project.tasks.completed}/{project.tasks.total} tasks
              </span>
              <span>{project.members} team members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
