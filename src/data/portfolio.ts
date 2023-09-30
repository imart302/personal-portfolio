import calendarImg from '../assets/calendar.png';
import chatImg from '../assets/chat.png';
import kymaImg from '../assets/kyma.png';

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
    sourceCodeUrl: 'https://github.com/imart302/10-calendar',
    demoUrl: 'https://calendar-app-w108.onrender.com',
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
    imgDemoUrl: chatImg,
    sourceCodeUrl: 'https://github.com/imart302/s-chat',
    demoUrl: 'https://chat-express-0kyj.onrender.com',
    es: {
      title: 'Aplicación de chat en tiempo real',
      desc: 'Esta es una aplicación de chat en tiempo real, contiene características como: Registro, login, cambiar foto de perfil, ingresar con google, chat en vivo, agregar contactos, borrar contactos',
    },
    en: {
      title: 'Real time chat application',
      desc: 'This is a real time chat app, it contains features like: Registration, login, change profile photo, log in with google, live chat, add contacts, delete contacts',
    }
  },
  {
    id: 'kyma',
    imgDemoUrl: kymaImg,
    sourceCodeUrl: '',
    demoUrl: 'https://imart302.gitlab.io/kyma-web',
    es: {
      title: 'Pagina web de Kyma Studio',
      desc: 'Pagina web hecha con React, Typescript y Material UI para un estudio de música, los servicios y detalles son gestionados usando Firebase.',
    },
    en: {
      title: 'Kyma Studio web page',
      desc: 'Website made with React, Typescript and Material UI for a music studio, services and details are managed using Firebase.',
    }
  }

]