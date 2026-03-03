import AnalyticsCard from '@/components/AnalyticsCard';

export default function Dashboard() {
  const analyticsData = [
    {
      title: "Total Views",
      value: "12,458",
      icon: "👁️"
    },
    {
      title: "Total Sales",
      value: "$8,392",
      icon: "💰"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: "📈"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary mb-12">Dashboard</h1>
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {analyticsData.map((data, index) => (
            <AnalyticsCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
            />
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-3xl font-bold text-primary mb-8">Recent Activity</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <p className="font-semibold text-black text-lg">Productivity Pack</p>
                <p className="text-gray-500 mt-1">2 hours ago</p>
              </div>
              <span className="text-primary font-bold text-xl">$29</span>
            </div>
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <p className="font-semibold text-black text-lg">Design Templates</p>
                <p className="text-gray-500 mt-1">5 hours ago</p>
              </div>
              <span className="text-primary font-bold text-xl">$19</span>
            </div>
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <p className="font-semibold text-black text-lg">Business Starter Kit</p>
                <p className="text-gray-500 mt-1">1 day ago</p>
              </div>
              <span className="text-primary font-bold text-xl">$49</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-black text-lg">Developer Tools</p>
                <p className="text-gray-500 mt-1">2 days ago</p>
              </div>
              <span className="text-primary font-bold text-xl">$39</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
