import { useState } from 'react';

function ImageAPI() {
  // State variables -> store data when the UI is reloaded
  const [imageUrl, setImageUrl] = useState(''); // save the image URL
  const [caption, setCaption] = useState(''); // save image caption
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingCaption, setLoadingCaption] = useState(false);
  const [error, setError] = useState('');

  // Button 1: Fetch a random image
  const fetchRandomImage = async () => {
    setLoadingImage(true);
    setError('');
    setCaption(''); // clear previous caption when new image loads
    try {
      // import .env varible for API base URL, fallback to localhost if not set
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // Adjust port
      const response = await fetch(`${API_BASE_URL}/api/image/random`);

      if (!response.ok) throw new Error('Failed to fetch image');

      const data = await response.json();
      setImageUrl(data.imageUrl);
      // setCaption(data.caption); 
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoadingImage(false);
    }
  };

  // Button 2: Generate caption for the currently displayed image
  const generateCaption = async () => {
    if (!imageUrl) {
      setError('Please fetch an image first.');
      return;
    }
    setLoadingCaption(true);
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/caption`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });
      if (!response.ok) throw new Error('Failed to generate caption');
      const data = await response.json();
      setCaption(data.caption);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoadingCaption(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-10 space-y-4">
      <h1 className="text-3xl font-bold">Image + AI Caption</h1>
      <p className="text-gray-700">Click the first button to get a random image, then the second to generate a caption.</p>

      {/* Button 1: Get Image */}
      <button
        onClick={fetchRandomImage}
        className="bg-blue-100 text-black px-4 py-2 rounded hover:bg-blue-200 transform transition-transform duration-300 hover:-translate-y-1"
        disabled={loadingImage}
      >
        {loadingImage ? 'Loading Image...' : 'Get Random Image'}
      </button>

      {/* Button 2: Generate Caption (disabled if no image) */}
      <button
        onClick={generateCaption}
        className={`px-4 py-2 rounded transition ${
          imageUrl
            ? 'bg-green-100 hover:bg-green-200'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!imageUrl || loadingCaption}
      >
        {loadingCaption ? 'Generating Caption...' : 'Generate Caption'}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {imageUrl && (
        <div className="space-y-4">
          <img src={imageUrl} alt="Random" className="w-100 h-100 object-cover" />
          {caption && <p className="text-gray-700 italic">"{caption}"</p>}
        </div>
      )}
    </div>
  );
}

export default ImageAPI;