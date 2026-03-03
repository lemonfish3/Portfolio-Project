import { useState } from 'react';



function ImageAPI() {
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClick = async () => {
        setLoading(true);
        setError("");
        const response = await fetch('http://localhost:5001/api/image/random');

        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        const data = await response.json();
        setImageUrl(data.imageUrl);
        setCaption(data.caption);
        setLoading(false);
    }


    return (
        <div className="flex flex-col items-center text-center p-10 space-y-4">
            <h1 className="text-3xl font-bold">Image API</h1>
            <p className="text-gray-700">Click the button to get a random image from the API.</p>
            <button onClick={handleClick} className="bg-blue-100 text-black px-4 py-2 rounded hover:bg-blue-200 transform transition-transform duration-300 hover:-translate-y-1">
                {loading ? 'Loading...' : 'Get Random Image'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {imageUrl && (
                <div>
                    <img src={imageUrl} alt="Random Image" className="w-100 h-100 object-cover" />
                    <p className="text-gray-700">{caption}</p> 
                </div>)}
        </div>
    );
}

export default ImageAPI