import Card from "./Card";

interface Item {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default async function List({ items }: { items: Item[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
}