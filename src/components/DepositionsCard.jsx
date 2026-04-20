export default function DepositionsCard({ title, image, description }) {
    return (
        <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg">
            <div className="flex justify-center px-6 py-4">
                <img
                    src={image}
                    alt={title}
                    className="w-8 h-12 object-cover rounded-full"
                />
                <h3 className="flex justify-center font-bold text-xl mb-2">{title}</h3>
            </div>
            <div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    )
}