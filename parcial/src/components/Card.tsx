import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface CardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default async function Card({ id, title, description, imageUrl }: CardProps) {
    const dict = await getDictionary();

    return (
        <div className="card">
            <Image src={imageUrl} alt={title} width={300} height={300} className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>

            <Link href={`/personaje/${id}`} className="inline-link">
                {dict.leerMas}
            </Link>
        </div>
    );
}