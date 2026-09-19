import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import './globals.css'

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: dict.title, description: dict.description }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}