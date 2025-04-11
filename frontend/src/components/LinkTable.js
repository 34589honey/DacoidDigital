import QRCode from 'qrcode.react';

const LinkTable = ({ links }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>QR Code</th>
            <th>Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">{link.longUrl}</td>
              <td className="text-blue-600 underline">
                <a href={`https://yourdomain.com/${link.shortCode}`} target="_blank" rel="noopener noreferrer">
                  /{link.shortCode}
                </a>
              </td>
              <td>{link.clicks}</td>
              <td>
                <QRCode value={`https://yourdomain.com/${link.shortCode}`} size={64} />
              </td>
              <td>{new Date(link.createdAt).toLocaleDateString()}</td>
              <td>{link.expirationDate && new Date(link.expirationDate) < new Date() ? 'Expired' : 'Active'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkTable;
