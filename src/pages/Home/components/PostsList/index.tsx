import { IPost } from '../..';
import { Post, PostsListContainer } from './styles';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostsListProps {
  posts: IPost[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <PostsListContainer>
      {posts.map((post) => (
        <Post key={post.number} to={`/post/${post.number}`}>
          <header>
            <strong>{post.title}</strong>
            <span>
              {formatDistance(new Date(post.created_at), new Date(), {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
          </header>

          <main>{post.body}</main>
        </Post>
      ))}
    </PostsListContainer>
  );
};
