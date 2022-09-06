import { HomeContainer } from './styles';
import { UserProfile } from './components/UserProfile';
import { SearchForm } from './components/SearchForm';
import { PostsList } from './components/PostsList';
import { useEffect, useState } from 'react';
import { api } from '../../libs/api';

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const { data } = await api.get(
      '/search/issues?q=repo:gabrielborel/github_blog'
    );
    setPosts(data.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <UserProfile />

      <SearchForm />

      <PostsList posts={posts} />
    </HomeContainer>
  );
};
