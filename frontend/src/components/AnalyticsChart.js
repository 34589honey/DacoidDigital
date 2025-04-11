import { Bar, Pie } from 'react-chartjs-2';

const AnalyticsChart = ({ links }) => {
  const clickData = {
    labels: links.map((link) => link.shortCode),
    datasets: [
      {
        label: 'Total Clicks',
        data: links.map((link) => link.clicks),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      },
    ],
  };

  // Combine device/browser stats (simplified)
  const deviceCounts = {};
  links.forEach((link) => {
    link.analytics.forEach((a) => {
      const device = a.device || 'Unknown';
      deviceCounts[device] = (deviceCounts[device] || 0) + 1;
    });
  });

  const pieData = {
    labels: Object.keys(deviceCounts),
    datasets: [
      {
        data: Object.values(deviceCounts),
        backgroundColor: ['#60A5FA', '#FBBF24', '#34D399', '#F87171'],
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Click Distribution</h2>
        <Bar data={clickData} />
      </div>
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Device Breakdown</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AnalyticsChart;
