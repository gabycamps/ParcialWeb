import Card from "./Card";

interface Item {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default async function List(breed: any) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed.breed}/images/random`);
    const data = await response.json();
    console.log(breed)
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <img src={data.message} alt={breed} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{breed}</h2>
            </div>
        </div>
    );
}