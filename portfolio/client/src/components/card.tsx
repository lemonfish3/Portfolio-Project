interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}

function Card({ title, description, imageUrl, url}: CardProps) {
    return (
        <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden w-72 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-48 overflow-hidden bg-blue-100">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-700 flex-1">{description}</p>
                </div>
            </a>
        </div>
    );
}

export default Card;