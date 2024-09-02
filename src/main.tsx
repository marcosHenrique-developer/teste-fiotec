import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './scss/styles.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProjectView } from './routes/ProjectView.tsx';
import { ProjectDetail } from './routes/ProjectDetail.tsx';
import { FavoritiesView } from './routes/FavoritiesView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'projects/:projectId',
    element: <ProjectView />,
  },
  {
    path: 'detail/:projectId',
    element: <ProjectDetail />,
  },
  {
    path: 'projects/:projectId/detail/:projectId',
    element: <ProjectDetail />,
  },
  {
    path: '/favorities',
    element: <FavoritiesView />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
