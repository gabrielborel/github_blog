import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  ArrowSquareOut,
  CaretLeft,
  GithubLogo,
  Calendar,
  ChatCircle,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../libs/api';
import { PostContainer, PostContent, PostInfo } from './styles';

interface IPost {
  body: string;
  comments: number;
  created_at: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const Post = () => {
  const [post, setPost] = useState<IPost>();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(post);

  const fetchPostData = async () => {
    const { data } = await api.get(
      `/repos/gabrielborel/github_blog/issues/${id}`
    );

    setPost(data);
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <PostContainer>
      <PostInfo>
        <header>
          <button onClick={() => navigate(-1)}>
            <CaretLeft weight='bold' size={12} /> Voltar
          </button>

          <a href={post?.html_url}>
            Ver no github <ArrowSquareOut weight='bold' size={12} />
          </a>
        </header>

        <main>
          <strong>{post?.title}</strong>
        </main>

        <footer>
          <span>
            <GithubLogo weight='fill' size={18} />
            {post?.user.login}
          </span>

          <span>
            <Calendar weight='fill' size={18} />
            {post?.created_at &&
              formatDistance(new Date(post?.created_at as string), new Date(), {
                locale: ptBR,
                addSuffix: true,
              })}
          </span>

          <span>
            <ChatCircle weight='fill' size={18} />
            {post?.comments} comentarios
          </span>
        </footer>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post?.body!}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
};
