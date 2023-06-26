import React from 'react';
import { useSelector } from 'react-redux';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function SortPopup({handleChange}) {
    
    const sort = useSelector((state) => state.ratingReducer.sort);
    console.log('sort', sort);


    return (
      <Box sx={{ minWidth: 130, minHeight: 20 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            size='small'
            value={sort}
            labelId="sort-by-label"
          
            label="Sort by"
            onChange={handleChange}
            // onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value={'By rating'}>By rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

    // const dispatch = useDispatch();
    // const sort = useSelector((state) => state.ratingReducer.sort);
    // console.log('sort', sort);
   
    // const handleChange = (event) => {
    //   console.log(event.target.value);
    //    dispatch(setSort(event.target.value));
    // };

    // const {items, sort} = useSelector((state) => state.ratingReducer);
    // console.log('sort', sort);

    // const handleChange = (event) => {
    //   console.log('Sorting changed:', event.target.value);
    //    dispatch(setSort(event.target.value));
    //    dispatch(setItems(items));
    // };
  
    // useEffect(() => {
    //   console.log('Sorting effect:', sort);
    //   dispatch(setItems(items));
    // }, [sort, dispatch, items]);


    
    // const handleChange = (event) => {
    //   console.log(event.target.value);
    //   dispatch(setSort(event.target.value));
    // };