// App shell — shared Navbar/Footer around a tiny path router.
// The site is seven static routes; links in the navbar/footer are plain
// relative <a href="./x"> anchors (exactly like the published site), so a
// full-document navigation per page keeps behavior and visuals identical.
import { useEffect } from 'react';
import type { ComponentType } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShoesPage from './pages/ShoesPage';
import StoresPage from './pages/StoresPage';
import ShippingPage from './pages/ShippingPage';
import MagazinePage from './pages/MagazinePage';
import ReturnsPage from './pages/ReturnsPage';

interface Route {
  Page: ComponentType;
  title: string;
  /** the published /stores page renders no footer at any breakpoint */
  footer?: false;
}

// Titles match the published pages' <title> tags.
const ROUTES: Record<string, Route> = {
  '/': { Page: HomePage, title: 'Sneaks' },
  '/about': { Page: AboutPage, title: 'Sneaks' },
  '/shoes': { Page: ShoesPage, title: 'Sneaks' },
  '/stores': { Page: StoresPage, title: 'Find Stores', footer: false },
  '/shipping': { Page: ShippingPage, title: 'Shipping' },
  '/magazine': { Page: MagazinePage, title: 'Magazines' },
  '/returns': { Page: ReturnsPage, title: 'Returns & Exchange' },
};

function currentPath(): string {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

export default function App() {
  const route = ROUTES[currentPath()] ?? ROUTES['/'];

  useEffect(() => {
    document.title = route.title;
  }, [route]);

  return (
    <>
      <Navbar />
      <route.Page />
      {route.footer !== false && <Footer />}
    </>
  );
}
