import { useState } from 'react';
import axios from 'axios';

const LinkForm = ({ onSuccess }) => {
  const [longUrl, setLongUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post(
        '/api/links',
        { longUrl, alias, expirationDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onSuccess && onSuccess(res.data);
      setLongUrl('');
      setAlias('');
      setExpirationDate('');
    } catch (err) {
      console.error(err);
      alert('Error creating link');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded space-y-4">
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        placeholder="Custom alias (optional)"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Short Link
      </button>
    </form>
  );
};

export default LinkForm;
