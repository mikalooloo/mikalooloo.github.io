import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/theme';

export default function App(props) {

  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}