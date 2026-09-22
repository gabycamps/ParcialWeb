import { getDictionary, type Locale } from "@/app/[lang]/dictionaries"

export default async function LanguageSwitcher({ lang }: { lang: Locale }) {
    const dict = await getDictionary()

    return (
    <nav className="flex gap-4 bg-indigo-500 rounded-md">
        <span>{dict.language}:</span>
        <a href="/es">{dict.spanish}</a>
        <a href="/en">{dict.english}</a>
    </nav>
    )
}
