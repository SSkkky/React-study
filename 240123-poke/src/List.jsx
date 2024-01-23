// List.tsx
import React, { useEffect } from 'react';
import usePokemonStore from './store';
import './styles.css';

const List = () => {
    const { pokemonList, fetchPokemonList } = usePokemonStore();

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  const handleLoadMore = () => {
    fetchPokemonList();
  };

  return (
    <div className="grid-container">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="grid-item">
          <img
            className="pokemon-image"
            
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default List;
