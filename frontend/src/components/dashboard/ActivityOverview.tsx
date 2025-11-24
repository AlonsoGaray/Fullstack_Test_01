export default function ActivityOverview() {
  const chartData = [20, 45, 28, 80, 99, 43, 50]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Activity Overview
      </h2>

      <div className="flex items-end justify-between h-52 gap-4">
        {chartData.map((height, index) => (
          <div key={index} className="flex-1 flex items-end">
            <div
              className="w-full bg-blue-300 rounded-t-lg transition-all hover:bg-blue-400"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  )
}
