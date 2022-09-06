import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileArea = styled.header`
  display: flex;
  gap: 2rem;
  position: relative;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  background: ${(props) => props.theme.profile};
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
  }

  div {
    margin-top: auto;
    display: flex;
    gap: 1.5rem;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.subtitle};

      svg {
        opacity: 0.4;
      }
    }
  }

  a {
    line-height: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.75rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
