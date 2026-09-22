import { notFound } from 'next/navigation'
import { lang } from 'next/root-params'
import 'server-only'

const dictionaries = {
    es: () => import('./dictionaries/es.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const hasLocale = (locale: string): locale is Locale =>
    locale in dictionaries

export const getDictionary = async () =>{
    const locale = await lang()
    if (!hasLocale(locale)) notFound()
    return dictionaries[locale]()
}