export default function DepositionsCard({ title, image, description }) {
    return (
        <div className="border max-w-sm rounded overflow-hidden shadow-lg h-90 md:h-45">
            <div className="flex justify-center px-6 py-5">
                <img
                    src={image}
                    alt={title}
                    className="w-8 h-10 object-cover rounded-full"
                />
                <h3 className="flex justify-center font-bold text-lg mb-2">{title}</h3>
            </div>
            <div>
                <p className="text-base">{description}</p>
            </div>
        </div>
    )
}