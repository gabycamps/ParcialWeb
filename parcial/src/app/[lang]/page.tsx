import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import LanguageSwitcher from './components/LanguageSwitcher'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main>
      <LanguageSwitcher lang={lang} />
      <h1>{dict.welcome}</h1>
      <p>{dict.description}</p>
    </main>
  )
}