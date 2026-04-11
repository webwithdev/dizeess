'use client';

import { useMemo } from 'react';
import AnalyticsCard from '@/components/AnalyticsCard';

interface PageStat {
  _id: string;
  views: number;
  lastViewed: string;
}

export default function Dashboard() {
  const pageStats: PageStat[] = [
    { _id: 'productivity', views: 1542, lastViewed: '2026-04-10T09:00:00.000Z' },
    { _id: 'money', views: 987, lastViewed: '2026-04-11T12:30:00.000Z' },
  ];

  const totalViews = useMemo(
    () => pageStats.reduce((sum, stat) => sum + (stat.views || 0), 0),
    [pageStats]
  );

  const analyticsData = [
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      icon: '👁️',
    },
    {
      title: 'Total Sales',
      value: '$8,392',
      icon: '💰',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: '📈',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary mb-12">Dashboard</h1>

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

        <div className="bg-white rounded-2xl shadow-sm p-10 mt-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Page Views by Product</h2>

          {pageStats.length === 0 ? (
            <p className="text-gray-500">No page view data yet</p>
          ) : (
            <div className="space-y-6">
              {pageStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-6 border-b border-gray-100 last:border-b-0"
                >
                  <div>
                    <p className="font-semibold text-black text-lg capitalize">
                      {stat._id}
                    </p>
                    <p className="text-gray-500 mt-1">
                      Last viewed: {new Date(stat.lastViewed).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-primary font-bold text-xl">
                    {(stat.views || 0).toLocaleString()} views
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}