import { kirilica } from './letterMapping';

export function transliterate(string, locale) {
    if (locale === 'mk') {
        return string;
    }

    return string.split('').map(function (char) {
        return kirilica[char] || char;
    }).join("");
}