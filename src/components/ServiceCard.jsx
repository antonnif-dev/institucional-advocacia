export default function ServiceCard({ title, description }) {
    return (
        <div className="bg-black flex items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <h2 className="text-center mb-2">{title}</h2>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}
