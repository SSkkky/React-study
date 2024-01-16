import axios from 'axios';
import { create } from 'zustand';

export const useStore = create((set)=>{
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967`

    return{
        list:[],
        getList : ()=>{
            axios(url)
            .then(res => {
                set((state)=>{
                    console.log('res :', res.data)
                    return{list : res.data}
                })
            })
        }
    }
})