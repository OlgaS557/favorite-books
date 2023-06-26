import { createSlice } from '@reduxjs/toolkit';
import { items } from '../../utils/Data';

const ratingSlice = createSlice({
    name: 'rating',
    initialState: {
      items: items, // исходный список элементов
      sort: '', 
      randomRatingIntervalId: null, // идентификатор интервала для генерации случайных оценок
    },
    reducers: {
      setRating: (state, action) => {
        console.log('action', action);
        const { id, rating } = action.payload;
        console.log(Array.isArray(state.items))
        const item = state.items.find((item) => item.id === id);
        // const item = state.items.filter((item) => item.id === id)[0];
        if (item) {
          item.rating = rating;
        }
      },
      setSort(state, action) {
        console.log('action', action);
        if(action.payload === 'By rating') {
          state.items.sort((a, b) => b.rating - a.rating);
        }
        state.sort = action.payload;
      },
      
    },
  });
  
  export const {
    setRating,
    setSort
  } = ratingSlice.actions;

  export default ratingSlice.reducer;

  // startRandomRating: (state) => {
  //     state.randomRatingIntervalId = setInterval(() => {
  //       const randomIndex = Math.floor(Math.random() * state.items.length);
  //       const randomRating = Math.floor(Math.random() * 5) + 1;
  //       state.items[randomIndex].rating = randomRating;
  //     }, 1000);
  //   },
  //   stopRandomRating: (state) => {
  //     clearInterval(state.randomRatingIntervalId);
  //     state.randomRatingIntervalId = null;
  //   },