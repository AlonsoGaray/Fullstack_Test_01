import { Search, Bell, Settings } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import StatCard, { type StatCardProps } from '@/components/dashboard/StatCard'
import RecentProjects from '@/components/dashboard/RecentProjects'
import ActivityOverview from '@/components/dashboard/ActivityOverview'
import { useDashboardStats } from '@/hooks/useDashboard'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)
  const { data: stats, isLoading } = useDashboardStats()

  const statCards: StatCardProps[] = [
    {
      title: 'Total Projects',
      value: stats?.projects.total.toString() || '0',
      icon: 'folder' as const,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Active Tasks',
      value: stats?.tasks.total.toString() || '0',
      icon: 'clock' as const,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
    },
    {
      title: 'Completed',
      value: stats?.tasks.byStatus.completada?.toString() || '0',
      icon: 'check' as const,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      title: 'Assigned to Me',
      value: stats?.tasks.assigned.toString() || '0',
      icon: 'trending' as const,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
  ]

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || 'User'}! 👋
          </h1>
          <p className="text-gray-500">
            Here's an overview of your projects and tasks
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            <RecentProjects />

            {stats?.recentTasks && stats.recentTasks.length > 0 && (
              <ActivityOverview />
            )}
          </>
        )}
      </div>
    </div>
  )
}
