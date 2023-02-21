import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    return <div id="appMountPoint">
    {
        location.pathname != "/login" ? 
        (
            <div class="basicLayout">
                <div class="netflix-sans-font-loaded">
                    <div class="our-story-desktop-framework adsplan-banner-enabled">
                        <div>
                            <div class="our-story-container" dir="ltr">
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
