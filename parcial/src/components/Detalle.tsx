import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Detalle({ params }: { params: { lang: string; id: string } }) {
    const { lang, id } = params;
    const dict = await getDictionary();
    const res = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
    const data = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
            <img src={data.image.url} alt={data.name} className="w-full max-w-md mb-4" />
            <p className="text-lg mb-2">{data.description}</p>
        </div>
    );
}