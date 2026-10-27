import React, { useState, useEffect } from 'react';
import LandingPage from './landing/LandingPage';
import EduPlanApp from './eduplan/App';
import EduLegalApp from './edulegal/App';
import SimuladorApp from './simulador/App';
import BibliotecaApp from './biblioteca/App';
import { KioscoStandaloneApp } from './biblioteca/components/KioscoStandaloneApp';

type Route = '/' | '/eduplan' | '/edulegal' | '/simulador' | '/biblioteca' | '/biblioteca/kiosco';

function getRoute(): Route {
    const hash = window.location.hash.replace('#', '') || '/';
    if (hash.startsWith('/biblioteca/kiosco')) return '/biblioteca/kiosco';
    if (hash === '/eduplan') return '/eduplan';
    if (hash === '/edulegal') return '/edulegal';
    if (hash === '/simulador') return '/simulador';
    if (hash === '/biblioteca') return '/biblioteca';
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

    if (route === '/biblioteca/kiosco') return <KioscoStandaloneApp onSalir={() => navigate('/biblioteca')} />;
    if (route === '/eduplan') return <EduPlanApp onBack={() => navigate('/')} />;
    if (route === '/edulegal') return <EduLegalApp onBack={() => navigate('/')} />;
    if (route === '/simulador') return <SimuladorApp onBack={() => navigate('/')} />;
    if (route === '/biblioteca') return <BibliotecaApp onBack={() => navigate('/')} />;
    return <LandingPage onNavigate={navigate} />;
}

export default App;
