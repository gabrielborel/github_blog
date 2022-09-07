import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const PostInfo = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.profile};
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    button,
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75rem;
      background: transparent;
      border: 0;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  main {
    strong {
      font-size: 1.5rem;
      color: ${(props) => props.theme.title};
      line-height: 1.3;
    }
  }

  footer {
    margin-top: 0.75rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.span};
    }
  }
`;

export const PostContent = styled.div`
  padding: 0 2.5rem;
`;
