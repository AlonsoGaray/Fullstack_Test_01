import { useState } from 'react'
import { Search, Bell, Settings, Plus, Filter } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import { useTasks } from '@/hooks/useTasks'
import { KanbanColumn } from '@/components/task/KanbanColumn'

export default function TasksPage() {
  const user = useAuthStore((state) => state.user)

  const [searchQuery, setSearchQuery] = useState('')

  const { data: tasks, isLoading } = useTasks()

  const groupedTasks = {
    pendiente: tasks?.filter((task) => task.status === 'pendiente') || [],
    'en progreso': tasks?.filter((task) => task.status === 'en progreso') || [],
    completada: tasks?.filter((task) => task.status === 'completada') || [],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4 flex items-center justify-between pl-16 lg:pl-8">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tasks</h1>
            <p className="text-gray-500">Organize and track all your tasks</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>New Task</span>
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Sort
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KanbanColumn
              title="To Do"
              count={groupedTasks.pendiente.length}
              tasks={groupedTasks.pendiente}
              status="pendiente"
            />
            <KanbanColumn
              title="In Progress"
              count={groupedTasks['en progreso'].length}
              tasks={groupedTasks['en progreso']}
              status="en progreso"
            />
            <KanbanColumn
              title="Done"
              count={groupedTasks.completada.length}
              tasks={groupedTasks.completada}
              status="completada"
            />
          </div>
        )}
      </div>
    </div>
  )
}
