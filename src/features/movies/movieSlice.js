import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {APIKey} from "../../common/Apis/movieApikey";
import movieApi from "../../common/Apis/movieApi";

export const fetchAysncMovies= createAsyncThunk(
    "moives/fetchAysncMovies",async(term)=>{

            const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
            console.log(response,"fetchAysncMovies===>")
            return response.data
            
    }
)
export const fetchAysncShows= createAsyncThunk(
    "moives/fetchAysncShows",async(term)=>{

            const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
            console.log(response,"fetchAysncShows===>")
            return response.data

    }
)
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );


const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
    loading:false
};
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMoives:(state,{payload})=>{
            state.movies=payload;
        },
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow={};
        }
    },
    extraReducers:{
        [fetchAysncMovies.pending]:(state)=>{
            return {
               ...state,
                loading:true
            }
        },
        [fetchAysncMovies.fulfilled]:(state,{payload})=>{
            console.log('fetched Successfully')
            return{...state,
            movies:payload,
            loading:false
        }
        },
        [fetchAysncMovies.rejected]:()=>{
            console.log('rejected')
        },
        [fetchAysncShows.pending]:(state)=>{
            return{...state,
                loading:true}
        },
        [fetchAysncShows.fulfilled]:(state,{payload})=>{
            return{...state,
                shows:payload,
                loading:false}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            return{...state,
                selectMovieOrShow:payload}
        },
    }
});

export const {addMoives,removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMoives = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow =(state)=> state.movies.selectMovieOrShow
export default movieSlice.reducer;