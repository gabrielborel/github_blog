import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostsListContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Post = styled(Link)`
  text-decoration: none;

  padding: 2rem;
  width: 100%;
  max-width: 416px;
  height: 260px;
  background: ${(props) => props.theme.post};
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.label};
  }

  header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme.title};
      line-height: 1.6;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }

  main {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme.text};
    line-height: 1.6;
  }
`;
