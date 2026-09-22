import { getDictionary } from "@/app/[lang]/dictionaries"

export default async function Header({ lang }: { lang: string }) {
    const dict = await getDictionary()
    return (
        <header className="bg-indigo-500 text-white p-4 sticky top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">{dict.title}</h1>
            </div>
            
        </header>
    )
}