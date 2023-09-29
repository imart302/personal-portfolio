import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useLang = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [ , i18] = useTranslation();

  const changeLanguage = (ln: 'es' | 'en') => {
    i18.changeLanguage(ln);
    setLang(ln);
  };

  return {
    lang,
    changeLanguage,
  };
};
