import de from '../assets/localizations/de.json';
import en from '../assets/localizations/en.json';

/**
 * Define languages and load translations from the respective json files
 * @private
 */
const languages = {
    de: { name: 'Deutsch', translations: de },
    en: { name: 'English', translations: en },
}

/**
 * Get available language keys from languages
 * @private
 */
const availableLanguages = Object.keys(languages);

/**
 * A class that takes care of localizing short strings. Currently supports English and German.
 * Other translations can be easily added by creating corresponding JSON files.
 * 
 * @memberof logic
 */
class Localization {

    language;   // the currently selected language code (string)

    /**
     * Determine the browser's default language
     * @type string
     */
    get defaultLanguage() {
        return window.navigator.language.split('-')[0];
    }

    /**
     * The language code of the currently selected language.
     * @type string
     */
    get currentLanguage() {
        return this.language;
    }

    /**
     * An array of available languages, containing name and code
     * @type object[]
     */
    get availableLanguages() {
        return availableLanguages.map(e => ({ name: languages[e].name, code: e}));
    }
    
    /**
     * Create a new Localization object. This should only happen once when the app is
     * initalized. 
     * 
     * @param {string} [language] the language code of the desired language. If omitted, the browser's
     * default language is used.
     */
    constructor(language) {
        this.setLanguage(language ?? this.defaultLanguage)
    }

    /**
     * Try to set the language of the Localization object. If the language is not available, default
     * to English.
     * 
     * @param {string} language the language code of the desired language.
     */
    setLanguage(language) {
        if(!availableLanguages.find(e => e === language)) {
            this.language = 'en';
            return;
        }
        this.language = language;
    }

    /**
     * Localize a message using a message key. The corresponding messages are saved in the language's
     * JSON file. If a message cannot be found in the current language, default to the English message.
     * 
     * Some messages depend on input parameters. In this case, provide them as additional arguments
     * after the key argument.
     * 
     * @param {string} key the message's key
     * @param  {...string} [replacements] within the messages, replace `'{0}'`, `'{1}'` and so forth
     * with these parameters.
     * @returns {string} the localized message including replacements
     */
    localize(key, ...replacements) {
        let message = languages[this.language]?.translations[key] ?? languages['en'].translations[key];
        for(let i = 0; i < replacements.length; i++) {
            message = message.replace(`{${i}}`, replacements[i])
        }
        return message;
    }

    /**
     * Use an object to do localization. The provided object should be structured such that the
     * localizations are string properties of the object. Example:
     * 
     *     cat = {
     *       en: 'cat',
     *       de: 'Katze',
     *     }
     * 
     * This is mainly used to localize database object, as they cannot be caught in the translation
     * file.
     * 
     * @param {object} object an object that contains the translations
     * @returns {string} the localized version of the object.
     */
    localizeObject(object) {
        return object[this.language] ?? object['en'];
    }

}

export default Localization