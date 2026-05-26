import { Outlet, NavLink } from 'react-router';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
