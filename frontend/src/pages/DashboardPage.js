import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import LinkTable from '../components/LinkTable';
import AnalyticsChart from '../components/AnalyticsChart';

const DashboardPage = () => {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('/api/links', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLinks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Shortened Links</h1>
        <LinkTable links={links} />
        <AnalyticsChart links={links} />
      </div>
    </div>
  );
};

export default DashboardPage;
