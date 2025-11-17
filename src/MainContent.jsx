

// Centralized route config and lazy loading
import MenuToolbar from './MenuToolbar';
import { Routes, Route, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';


// MainContent renders the menu and all routes using a centralized config
function MainContent() {
  // useRoutes returns the element tree for the current route
  const element = useRoutes(routes);
  return (
    <main className="main-content w-100">
      <MenuToolbar />
      {/* Suspense shows fallback while lazy components load */}
      <Suspense fallback={<div>Loading...</div>}>
        {element}
      </Suspense>
    </main>
  );
}

export default MainContent;
