import { useEffect, useState } from 'react';
import './App.css';
import { Characters } from './Characters';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Deatils } from './Deatils';

export type Character = {
  name: string;
  id: number;
  image: string;
};

const fetchCharacters = (pageNumber: number) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNumber}`
  ).then((response) => response.json());
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [maxPageNumber, setMaxPageNumber] = useState<number>(0);

  useEffect(() => {
    fetchCharacters(pageNumber).then((ch) => {
      const { info, results } = ch;
      setMaxPageNumber(info.pages)
      setCharacters(results);
    });
  }, [pageNumber]);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/:id" element={<Deatils />} />
        <Route
          path="/"
          element={
            <Characters
              characters={characters}
              pageNumber={pageNumber}
              maxPageNumber={maxPageNumber}
              setupPageNumber={setPageNumber}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
