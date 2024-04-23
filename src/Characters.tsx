import React from 'react';
import { Character } from './App';
import { useNavigate } from 'react-router-dom';

interface CharactersProps {
  characters: Character[];
  pageNumber: number;
  maxPageNumber: number;
  setupPageNumber: (value: number) => void;
}

export const Characters: React.FC<CharactersProps> = ({
  characters,
  pageNumber,
  maxPageNumber,
  setupPageNumber,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {characters.map((ch) => (
          <div key={ch.id} onClick={() => navigate(`/${ch.id}`)}>
            <p>{ch.name}</p>
            <img src={ch.image} alt="image" />
          </div>
        ))}
      </div>

      {pageNumber > 1 && (
        <button onClick={() => setupPageNumber(pageNumber - 1)}>
          Previous Page
        </button>
      )}

      {pageNumber < maxPageNumber && (
        <button onClick={() => setupPageNumber(pageNumber + 1)}>
          Next Page
        </button>
      )}
    </>
  );
};
