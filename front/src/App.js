import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    return <div id="appMountPoint">
    {
        location.pathname !== "/login" ? 
        (
            <div className="basicLayout">
                <div className="netflix-sans-font-loaded">
                    <div className="our-story-desktop-framework adsplan-banner-enabled">
                        <div>
                            <div className="our-story-container" dir="ltr">
                                <Header/>
                                <Outlet/>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) :
        (
            <>
                <Outlet/>
                <Footer/>
            </>
        )
    }

        
    </div>;
}

export default App;
