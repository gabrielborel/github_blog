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

  const searchPosts = (filterValue: string) => {
    const searchedPosts = posts.filter((post) =>
      post.body.includes(filterValue)
    );

    setPosts(searchedPosts);
  };

  return (
    <HomeContainer>
      <UserProfile />

      <SearchForm searchPost={searchPosts} numberOfPosts={posts.length} />

      <PostsList posts={posts} />
    </HomeContainer>
  );
};
