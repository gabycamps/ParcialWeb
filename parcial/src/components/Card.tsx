import Image from "next/image";


interface CardProps {
    title: string;
    imageUrl: string;
}

export default async function Card({title, imageUrl }: CardProps) {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <Image src={imageUrl} alt={title} width={300} height={300} className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
            </div>

        </div>
    );
}
