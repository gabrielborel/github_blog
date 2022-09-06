import { HomeContainer } from './styles';
import { UserProfile } from './components/UserProfile';
import { SearchForm } from './components/SearchForm';

export const Home = () => {
  return (
    <HomeContainer>
      <UserProfile />

      <SearchForm />
    </HomeContainer>
  );
};
