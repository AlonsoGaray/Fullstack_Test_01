import type { Task } from '@/types/api'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-700'
      case 'media':
        return 'bg-yellow-100 text-yellow-700'
      case 'baja':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <h4 className="font-semibold text-gray-900 mb-2">{task.title}</h4>

      {task.description && (
        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      )}

      <p className="text-xs text-gray-500 mb-3">
        {typeof task.project === 'string' ? task.project : task.project.name}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}
          >
            {task.priority}
          </span>
        </div>
        {task.assignedTo && (
          <div
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold"
            title={
              typeof task.assignedTo === 'string'
                ? task.assignedTo
                : task.assignedTo.name
            }
          >
            {typeof task.assignedTo === 'string'
              ? 'U'
              : getInitials(task.assignedTo.name)}
          </div>
        )}
      </div>
    </div>
  )
}
