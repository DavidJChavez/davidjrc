import { en, type TranslationKey } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'es'];

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { en, es };

export function getLocale(locale: string | undefined): Locale {
	return locale === 'es' ? 'es' : 'en';
}

export function useTranslations(locale: string | undefined) {
	const lang = getLocale(locale);
	const dict = dictionaries[lang];

	return function t(key: TranslationKey): string {
		return dict[key];
	};
}

export function localizedPath(path: string, locale: Locale): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (locale === DEFAULT_LOCALE) return normalized;
	return `/es${normalized === '/' ? '' : normalized}`;
}

export function alternateLocale(locale: Locale): Locale {
	return locale === 'en' ? 'es' : 'en';
}

export { type TranslationKey } from './en';
