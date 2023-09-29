import { ScrollNavContextProvider } from './context/NavContext';
import { Desktop } from './layouts/Desktop';
import { Mobile } from './layouts/Mobile';

function App() {
  return (
    <>
      <ScrollNavContextProvider >
      <Desktop />
      <Mobile />
      </ScrollNavContextProvider>
    </>
  );
}

export default App;
