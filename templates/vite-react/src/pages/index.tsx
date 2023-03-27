import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Shell from '@/components/Shell';
import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';
import SupportPage from '@/pages/Support';

const Pages = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="" element={<Shell />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="support" element={<SupportPage />} />
          </Route>,
        ),
      )}
    />
  );
};

export default Pages;
