import { getDictionary } from "@/app/[lang]/dictionaries"
import Image from "next/image";
import Link from "next/link";

export default async function Header({ lang }: { lang: string }) {
    const dict = await getDictionary()
    return (
        <header className=" text-white p-4 sticky top-0 w-full bg-orange-500">
            <div className="flex items-center justify-center">
                <Link href={`/${lang}`} className="text-2xl font-bold text-white">
                    <Image src="/pawsome-advice-logo.png" alt="Logo" width={40} height={40} />
                </Link>
                
            </div>
            
        </header>
    )
}