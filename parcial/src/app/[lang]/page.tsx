import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary()

  return (
    <main className="flex min-h-screen flex-col p-10 bg-blue-200">
      <div className="flex justify-end p-2">
        <LanguageSwitcher lang={lang}/>
      </div>
      
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-black text-center p-30 ">{dict.welcome}</h1>
        <p className="text-lg text-center text-black">{dict.description}</p>
      </div>

    </main>
  )
}