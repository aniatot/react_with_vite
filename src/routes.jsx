    // Centralized route configuration for the app
// Use React.lazy for code splitting and better scalability
import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Content = lazy(() => import('./Content'));
const ReactConcepts = lazy(() => import('./ReactConcepts'));
const Hooks = lazy(() => import('./Hooks'));
const Components = lazy(() => import('./Components'));
const JavascriptConcepts = lazy(() => import('./JavascriptConcepts'));
const Games = lazy(() => import('./Games'));
const ConceptsRecap = lazy(() => import('./ConceptsRecap'));
const ConceptsRecapList = lazy(() => import('./ConceptsRecapList'));
const ConceptsRecapDay = lazy(() => import('./ConceptsRecapDay'));
const PerspectiveContainer = lazy(() => import('./PerspectiveContainer'));

// Route objects for use with useRoutes or mapping in <Routes>
export const routes = [
  {
    path: '/',
    element: <PerspectiveContainer />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'content', element: <Content /> },
      {
        path: 'reactConcepts',
        element: <ReactConcepts />, // Only renders <Outlet /> for children
        children: [
          { path: 'hooks', element: <Hooks /> },
          { path: 'components', element: <Components /> },
          { path: 'javascript', element: <JavascriptConcepts /> },
        ],
      },
      { path: 'games', element: <Games /> },
      {
        path: 'conceptsRecap',
        children: [
          { index: true, element: <ConceptsRecapList /> },
          { path: 'day/:dayId', element: <ConceptsRecapDay /> },
        ],
      },
    ],
  },
];
