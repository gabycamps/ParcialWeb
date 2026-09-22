import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import List from '@/components/List'


export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary()

  const response = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await response.json()
  const data_d = Object.keys(data.message)
  return (
    <main className="flex min-h-screen flex-col p-10 bg-amber-50">
      <div className="flex justify-end p-2">
        <LanguageSwitcher lang={lang}/>
      </div>

      <div className="flex">
        <h1 className="text-2x1 font-bold text-black justify-start p-10 ">{dict.title}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 rounded">
          Random
        </button>
      </div>
      
      <div className="bg-black">
        sadsdsa
        {data_d.map((breed: any) => (
          <List key={breed} breed={breed} />
        ))}
      </div>
    </main>
  )
}