import { Route, Routes } from 'react-router-dom';
import { Profile } from './pages/Profile';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Profile />} />
    </Routes>
  );
};
