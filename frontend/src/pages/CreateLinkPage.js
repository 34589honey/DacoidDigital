import { useState } from 'react';
import Navbar from '../components/Navbar';
import LinkForm from '../components/LinkForm';

const CreateLinkPage = () => {
  const [createdLink, setCreatedLink] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Create a Short Link</h1>
        <LinkForm onSuccess={(data) => setCreatedLink(data.shortUrl)} />
        {createdLink && (
          <div className="mt-4 bg-green-100 p-4 rounded text-green-700">
            Short Link Created:{" "}
            <a
              href={createdLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {createdLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateLinkPage;
