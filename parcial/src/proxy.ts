import { NextRequest, NextResponse } from 'next/server'

const locales = ['es', 'en']
const defaultLocale = 'es'
const COOKIE_NAME = 'NEXT_LOCALE'


function getLocale(request: NextRequest) {
    const saved = request.cookies.get(COOKIE_NAME)?.value
    if (saved && locales.includes(saved)) return saved
    const header = request.headers.get('accept-language') ?? ''
    const preferred = header
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())
    return preferred.find((lang) => locales.includes(lang)) ?? defaultLocale
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    const currentLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )

    if (currentLocale) {
    const response = NextResponse.next()
    response.cookies.set(COOKIE_NAME, currentLocale, {
        path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
    return response
    }

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: ['/((?!_next|api|.*\\..*).*)'],
}