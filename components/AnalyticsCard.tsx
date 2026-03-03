interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon: string;
}

export default function AnalyticsCard({ title, value, icon }: AnalyticsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        <span className="text-4xl">{icon}</span>
      </div>
      <p className="text-5xl font-bold text-primary">{value}</p>
    </div>
  );
}
