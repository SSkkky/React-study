import axios from 'axios';
import { create } from 'zustand';

export const useStore = create((set) => {
    return {
        popular: [],
        poster: 'https://image.tmdb.org/t/p/original/',
        thumb: 'https://image.tmdb.org/t/p/w500/',
        getMovie: (type) => {
            axios(`https://api.themoviedb.org/3/movie/${type}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
                .then(res => {
                    set((state) => {
                        console.log('res.data.results : ', res.data.results)
                        return { [type]: res.data.results }
                    });
                });
        }
    }
})