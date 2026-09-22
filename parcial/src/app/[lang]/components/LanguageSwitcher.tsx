import { getDictionary, type Locale } from '../dictionaries'

export default async function LanguageSwitcher({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang)

    return (
    <nav className="flex gap-4 bg-indigo-500 rounded-md">
        <span>{dict.language}:</span>
        <a href="/es">{dict.spanish}</a>
        <a href="/en">{dict.english}</a>
    </nav>
    )
}
