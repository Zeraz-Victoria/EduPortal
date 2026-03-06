import React, { useState, useEffect } from 'react';
import LandingPage from './landing/LandingPage';
import EduPlanApp from './eduplan/App';
import EduLegalApp from './edulegal/App';
import AsistenciaApp from './asistencia/App';

type Route = '/' | '/eduplan' | '/edulegal' | '/asistencia';

function getRoute(): Route {
    const hash = window.location.hash.replace('#', '') || '/';
    if (hash === '/eduplan') return '/eduplan';
    if (hash === '/edulegal') return '/edulegal';
    if (hash === '/asistencia') return '/asistencia';
    return '/';
}

function App() {
    const [route, setRoute] = useState<Route>(getRoute);

    useEffect(() => {
        const handleHashChange = () => setRoute(getRoute());
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigate = (to: Route) => {
        window.location.hash = to;
        setRoute(to);
    };

    if (route === '/eduplan') return <EduPlanApp onBack={() => navigate('/')} />;
    if (route === '/edulegal') return <EduLegalApp onBack={() => navigate('/')} />;
    if (route === '/asistencia') return <AsistenciaApp onBack={() => navigate('/')} />;
    return <LandingPage onNavigate={navigate} />;
}

export default App;
