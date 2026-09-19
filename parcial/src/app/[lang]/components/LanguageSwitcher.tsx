import { getDictionary, type Locale } from '../dictionaries'

export default async function LanguageSwitcher({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang)

    return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
        <span>{dict.language}:</span>
        <a href="/es">{dict.spanish}</a>
        <a href="/en">{dict.english}</a>
    </nav>
    )
}