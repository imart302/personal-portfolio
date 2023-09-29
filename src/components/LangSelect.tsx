import { useLang } from '../hooks/useLang';
import { Dropup, DropupOption } from './Dropup';

export const LangSelect = () => {
  const { lang, changeLanguage } = useLang();

  const handleOnSelect = (value: string) => {
    if (value === 'es' || value === 'en') {
      changeLanguage(value);
    }
  };

  return (
    <Dropup
      className={{
        bgColor: 'bg-slate-200',
        textColor: 'text-slate-800',
        bgGradient: 'bg-gradient-to-r',
        hoverColorFrom: 'hover:from-g_start1',
        hoverColorTo: 'hover:to-g_end1',
        hoverTextColor: 'hover:text-slate-200',
      }}
      id="flags"
      iconLabel={lang === 'es' ? <span className="fi fi-es"></span> : <span className="fi fi-us"></span>}
    >
      <DropupOption
        value="es"
        onSelect={handleOnSelect}
        className={{
          bgColor: 'bg-slate-200',
          bgGradient: 'bg-gradient-to-r',
          hoverColorFrom: 'hover:from-g_start1',
          hoverColorTo: 'hover:to-g_end1',
        }}
      >
        <span className="fi fi-es"></span>
      </DropupOption>
      <DropupOption
        value="en"
        onSelect={handleOnSelect}
        className={{
          bgColor: 'bg-slate-200',
          bgGradient: 'bg-gradient-to-r',
          hoverColorFrom: 'hover:from-g_start1',
          hoverColorTo: 'hover:to-g_end1',
        }}
      >
        <span className="fi fi-us"></span>
      </DropupOption>
    </Dropup>
  );
};
