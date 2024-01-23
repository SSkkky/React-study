// store.js
import { create } from 'zustand';
import axios from 'axios';

const usePokemonStore = create((set) => ({
  pokemonList: [],
  offset: 0,
  limit: 8,
  fetchPokemonList: async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
        params: {
          offset: set.offset,
          limit: set.limit,
        },
      });

      // Extract ID from each Pokemon's URL and add it to the result
      const pokemonWithId = response.data.results.map((pokemon) => ({
        ...pokemon,
        id: pokemon.url.split('/')[6],
      }));

      set((state) => ({
        pokemonList: [...state.pokemonList, ...pokemonWithId],
        offset: state.offset + state.limit,
      }));
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  },
}));

export default usePokemonStore;
