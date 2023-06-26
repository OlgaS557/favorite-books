import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating({ stars, randomRating, onChange }) {
  const [value, setValue] = useState(stars);
  
  useEffect(() => {
    setValue(stars);
  }, [stars]);

  useEffect(() => {
    if (randomRating !== null) {
      setValue(randomRating);
    }
  }, [randomRating]);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Rating
    type="radio"
      name="simple-controlled"
      value={value}
      onChange={handleRatingChange}
    />
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function BasicRating({ stars, onChange }) {
//   // const [stars, setStars] = React.useState(0);

//   const handleRatingChange = (event, newValue) => {
//     onChange(newValue);
//   };
//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >

//       <Rating
//         name="simple-controlled"
//         value={stars}
//         onChange={handleRatingChange}
//       // onChange={(event, newValue) => {
//       //   setValue(newValue);
//       // }}
//       />
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function BasicRating({stars, onChange}) {

//     const handleRatingChange = (event, value) => {
//       onChange(value);
//     };

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Rating
//         name="simple-controlled"
//         value={stars}
//         onChange={handleRatingChange}
//       />
//     </Box>
//   );
// }