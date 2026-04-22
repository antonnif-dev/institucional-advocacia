export default function ServiceCard({ title, description }) {
    return (
        <div className="bg-black flex items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 h-45">
                <h3 className="text-center mb-2">{title}</h3>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}
