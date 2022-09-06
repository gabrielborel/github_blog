import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
      line-height: 1.6;
    }

    span {
      color: ${(props) => props.theme.span};
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
`;

export const SearchIssuesInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.input};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.label};
  }
`;
