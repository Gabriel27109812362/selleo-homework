import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from './App';

interface DetailsProps {}

const fetchCharacter = (id: number) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};

export const Deatils: React.FC<DetailsProps> = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    fetchCharacter(Number(id)).then((ch) => {
      setCharacter(ch);
    });
  }, [id]);

  return (
    <div>
      <p>{character?.name}</p>
      <img src={character?.image} alt="image" />
    </div>
  );
};
