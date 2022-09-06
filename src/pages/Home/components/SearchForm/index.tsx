import { FormEvent, useState } from 'react';
import { SearchFormContainer, SearchIssuesInput } from './styles';

interface SearchFromProps {
  searchPost: (searchValue: string) => void;
  numberOfPosts: number;
}

export const SearchForm = ({ searchPost, numberOfPosts }: SearchFromProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchPost = (e: FormEvent) => {
    e.preventDefault();
    searchPost(searchValue);
  };

  return (
    <SearchFormContainer onSubmit={handleSearchPost}>
      <div>
        <strong>Publicações</strong>

        <span>6 publicações</span>
      </div>

      <SearchIssuesInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type='text'
        placeholder='Buscar conteúdo'
      />
    </SearchFormContainer>
  );
};
