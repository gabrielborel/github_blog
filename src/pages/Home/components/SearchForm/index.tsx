import { SearchFormContainer, SearchIssuesInput } from './styles';

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <div>
        <strong>Publicações</strong>

        <span>6 publicações</span>
      </div>

      <SearchIssuesInput type='text' placeholder='Buscar conteúdo' />
    </SearchFormContainer>
  );
};
