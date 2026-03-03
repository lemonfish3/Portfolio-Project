interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}

export default Card;