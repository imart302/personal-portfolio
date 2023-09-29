import calendarImg from '../assets/calendar.png';

export interface IPortfolioItem {
  id: string;
  imgDemoUrl: string;
  sourceCodeUrl?: string;
  demoUrl?: string;
  es: {
    title: string;
    desc: string;
  };
  en: {
    title: string;
    desc: string;
  }
}

export const PORTFOLIO: IPortfolioItem[] = [
  {
    id: 'calendar-app',
    imgDemoUrl: calendarImg,
    sourceCodeUrl: '',
    demoUrl: '',
    es: {
      title: 'Aplicación de calendario',
      desc: 'Esta es una aplicación de calendario con funciones como: iniciar sesión, registrarse, guardar un evento, actualizar un evento y eliminar un evento. El backend está hecho con NodeJS y express.',
    },
    en: {
      title: 'Calendar Application',
      desc: 'This is a calendar application demo with features as: login, register, save an event, update event and delete event. The backend is made with NodeJS and express',
    }   
  },
  {
    id: 'chat-app',
    imgDemoUrl: calendarImg,
    sourceCodeUrl: '',
    demoUrl: '',
    es: {
      title: 'Aplicación de chat en tiempo real',
      desc: 'Esta es una aplicación de chat en tiempo real, contiene características como: Registro, login, cambiar foto de perfil, ingresar con google, chat en vivo, agregar contactos, borrar contactos',
    },
    en: {
      title: 'Real time chat application',
      desc: 'This is a real time chat app, it contains features like: Registration, login, change profile photo, log in with google, live chat, add contacts, delete contacts',
    }
    
  }

]