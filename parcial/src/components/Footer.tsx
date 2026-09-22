import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Footer() {
    const dict = await getDictionary();
    return (
        <footer className="bg-gray-800 text-white py-5 w-full">
            <div className="container mx-auto text-center">
                
            </div>
        </footer>
    );
}