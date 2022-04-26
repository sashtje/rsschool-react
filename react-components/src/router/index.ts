import About from '../pages/About';
import FormPage from '../pages/FormPage';
import Page404 from '../pages/Page404';
import PhotoDetails from '../pages/PhotoDetails';

export const routes = [
  { path: 'about', element: About },
  { path: 'form', element: FormPage },
  { path: 'photo/:id', element: PhotoDetails },
  { path: '404', element: Page404 },
];
