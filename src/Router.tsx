import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layouts/default';
import { Profile } from './pages/Profile';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Profile />} />
      </Route>
    </Routes>
  );
};
