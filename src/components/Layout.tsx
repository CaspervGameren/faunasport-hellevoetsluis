import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';

const Layout = () => (
    <>
        <NavBar />

        <div className='min-h-screen flex flex-col'>
            <main className='flex-1'>
                <Outlet />
            </main>
        </div>

        {/* Footer here */}
        <Footer />
    </>
);

export default Layout;