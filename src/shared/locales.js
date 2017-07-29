import once from 'lodash.once';

let userLocale = null;

const getDefaultLocales = once(() => {
  const languageList = [];

  if (window.navigator.languages) {
    languageList.push(...window.navigator.languages);
  } else if (window.navigator.userLanguage) {
    languageList.push(window.navigator.userLanguage);
  }

  // Fallback
  languageList.push('en-GB');

  return languageList;
});

const getDefaultLocale = once(() => getDefaultLocales()[0]);

export const getLocale = () => userLocale || getDefaultLocale();

export const setLocale = (locale) => {
  userLocale = locale;
};
