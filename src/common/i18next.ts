import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { experience } from '../data/experience';
import { SKILLS_DATA } from '../data/skills';
import { PORTFOLIO } from '../data/portfolio';

export enum TextStrings {
  name,
  about_me,
  experience,
  portfolio,
  skills,
  image_caption,
  brief,
  presentation,
  soft_skills,
  hard_skills,
  programming_langs,
  frameworks,
  tools,
  calendar_title,
  calendar_desc,
  try,
  source_code,
}

const resources = {
  en: {
    translation: {
      [TextStrings.name]: 'Ivan Martinez',
      [TextStrings.about_me]: 'About me',
      [TextStrings.experience]: 'Experience',
      [TextStrings.portfolio]: 'Portfolio',
      [TextStrings.skills]: 'Skills',
      [TextStrings.image_caption]: 'Computer Engineer/Web Developer',
      [TextStrings.brief]:
        'Hi, my name is Ivan, I\'m a computer engineer with MS in Computer Science',
      [TextStrings.presentation]:
        "I am a computer engineer with a master's degree in computer science. I am interested in software development, and more specifically in backend development. I am skilled at teamwork and have experience with agile methodologies. I consider myself self-taught and have experience in research.",
      [TextStrings.soft_skills]: 'Soft skills',
      [TextStrings.hard_skills]: 'Hard skills',
      [TextStrings.programming_langs]: 'Programming languages',
      [TextStrings.frameworks]: 'Frameworks',
      [TextStrings.tools]: 'Tools',
      [TextStrings.calendar_title]: 'Calendar App',
      [TextStrings.calendar_desc]:
        'This is a calendar application demo with features as: login, register, save an event, update event and delete event. The backend is made with NodeJS and express',
      [TextStrings.try]: 'Try',
      [TextStrings.source_code]: 'Source code',
    },
  },
  es: {
    translation: {
      [TextStrings.name]: 'Iván Martínez',
      [TextStrings.about_me]: 'Acerca de mi',
      [TextStrings.experience]: 'Experiencia',
      [TextStrings.portfolio]: 'Portafolio',
      [TextStrings.skills]: 'Habilidades',
      [TextStrings.image_caption]: 'Ingeniero en Computación/Desarrollador Web',
      [TextStrings.brief]:
        'Hola, soy Iván, soy ingeniero en computación con MS en Ciencias de la computación',
      [TextStrings.presentation]:
        'Soy ingeniero en computación con maestría en ciencias de la computación. Estoy interesado en el desarrollo de software, y más concretamente en el desarrollo backend. Soy habilidoso para el trabajo en equipo y tengo experiencia con metodologías ágiles. Me considero autodidacta y tengo experiencia en la investigación.',
      [TextStrings.soft_skills]: 'Habilidades blandas',
      [TextStrings.hard_skills]: 'Habilidades técnicas',
      [TextStrings.programming_langs]: 'Lenguajes de programación',
      [TextStrings.frameworks]: 'Frameworks',
      [TextStrings.tools]: 'Herramientas',
      [TextStrings.calendar_title]: 'Aplicación de calendario',
      [TextStrings.calendar_desc]:
        'Esta es una aplicación de calendario con funciones como: iniciar sesión, registrarse, guardar un evento, actualizar un evento y eliminar un evento. El backend está hecho con NodeJS y express.',
      [TextStrings.try]: 'Ver',
      [TextStrings.source_code]: 'Código fuente',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

experience.forEach((exp, expIndex) => {
  i18n.addResource(
    'es',
    'translation',
    `exp_${expIndex}_position`,
    exp.position_es
  );
  i18n.addResource(
    'en',
    'translation',
    `exp_${expIndex}_position`,
    exp.position
  );

  exp.duties.forEach((duty, dutyIndex) => {
    i18n.addResource(
      'en',
      'translation',
      `exp_${expIndex}_duty_${dutyIndex}`,
      duty
    );
  });
  exp.duties_es.forEach((duty, dutyIndex) => {
    i18n.addResource(
      'es',
      'translation',
      `exp_${expIndex}_duty_${dutyIndex}`,
      duty
    );
  });

  SKILLS_DATA.soft.en.forEach((skill, index) => {
    i18n.addResource('en', 'translation', `soft_skill_${index}`, skill);
  });

  SKILLS_DATA.soft.es.forEach((skill, index) => {
    i18n.addResource('es', 'translation', `soft_skill_${index}`, skill);
  });

  PORTFOLIO.forEach(pItem => {
    i18n.addResource('en', 'translation', `portfolio_${pItem.id}_title`, pItem.en.title);
    i18n.addResource('en', 'translation', `portfolio_${pItem.id}_desc`, pItem.en.desc);

    i18n.addResource('es', 'translation', `portfolio_${pItem.id}_title`, pItem.es.title);
    i18n.addResource('es', 'translation', `portfolio_${pItem.id}_desc`, pItem.es.desc);
  });
});

export default i18n;
