import { Outlet } from 'react-router-dom';
import { CoverImage, LayoutContainer, MainContent } from './styles';
import coverSVG from '../../../assets/logo.svg';

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <CoverImage src={coverSVG} alt='' />

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};
