import React, {useState} from 'react';
import Rating from './Rating';
import styles from '../../css_modules/bookitem.module.css';
import { useDispatch } from 'react-redux';
import { setRating } from '../../redux/slices/ratingSlice';

const BookItem = ({ book }) => {
    const dispatch = useDispatch();

    const [randomRatingIntervalId, setRandomRatingIntervalId] = useState(null);
    const [randomRating, setRandomRating] = useState(null);

    const handleRatingChange = (ratingValue) => {
        dispatch(setRating({ id: book.id, rating: ratingValue }));
        console.log('id', book.id, 'rating', ratingValue)
    };

    const handleRandomRating = () => {
        if (randomRatingIntervalId) {
          clearInterval(randomRatingIntervalId);
          setRandomRatingIntervalId(null);
          setRandomRating(null);
        } else {
          const intervalId = setInterval(() => {
            const randomRating = Math.floor(Math.random() * 5) + 1;
            dispatch(setRating({ id: book.id, rating: randomRating }));
            setRandomRating(randomRating);
          }, 1000);
          setRandomRatingIntervalId(intervalId);
        }
      };

    return (
        <div className={styles.book}>
            <img className={styles.card} src={book.img} alt={book.name} />
            <Rating stars={book.rating} randomRating={randomRating} onChange={handleRatingChange} />
            <div className={styles.id}>{book.id}</div>
            <div className={styles.book_name}>{book.name}</div>
            <button className={styles.random_button} onClick={handleRandomRating} type='button'>
                {randomRatingIntervalId ? 'Stop Random Rating' : 'Start Random Rating'}
            </button>
        </div>
    );
};

export default BookItem;

// const BookItem = ({book}) => {
//     const dispatch = useDispatch();

//     const handleRatingChange = (ratingValue) => {
//         dispatch(setRating({ id: book.id, rating: ratingValue }));
//         console.log('id',book.id, 'rating', ratingValue)
//       };
     
//     return (
//         <div className={styles.book}>
//             <img className={styles.card} src={book.img} alt={book.name} />
//             <Rating
//              stars={book.rating}
//              onChange={handleRatingChange}
//               />
//             <div className={styles.id}>{book.id}</div>
//             <div className={styles.book_name}>{book.name}</div>
//             <button className={styles.random_button}>RANDOM RATING</button>
//         </div>
//     )
// }

// export default BookItem;

// const BookItem = ({ book }) => {
//     const dispatch = useDispatch();
//     const ratingValue = useSelector((state) => selectRatingById(state, book.id));

//   const handleRatingChange = (event, value) => {
//     dispatch(setRating({ id: book.id, rating: value }));
//     console.log('id', book.id, 'rating', value);
//   };

//   return (
//     <div className={styles.book}>
//       <img className={styles.card} src={book.img} alt={book.name} />
//       <Rating stars={ratingValue} onChange={handleRatingChange} />
//       <div className={styles.id}>{book.id}</div>
//       <div className={styles.book_name}>{book.name}</div>
//       <button className={styles.random_button}>RANDOM RATING</button>
//     </div>
//   );
// }

// export default BookItem;

// useEffect(() => {
//     let randomRatingInterval;

//     if (book.isRandomRatingActive) {
//       randomRatingInterval = setInterval(() => {
//         const randomRating = Math.floor(Math.random() * 5) + 1;
//         dispatch(setRating({ id: book.id, rating: randomRating }));
//       }, 1000);
//     }

//     return () => {
//       clearInterval(randomRatingInterval);
//     };
//   }, [book.isRandomRatingActive, book.id, dispatch]);

//   const handleRandomRating = () => {
//     const isActive = !book.isRandomRatingActive;
//     dispatch(setRandomRatingActive({ id: book.id, isActive }));
//   };

// const handleRatingChange = (ratingValue) => {
//     dispatch(setRating({ id: book.id, rating: ratingValue }));
//     console.log('id', book.id, 'rating', ratingValue)
// };

// return (
//     <div className={styles.book}>
//         <img className={styles.card} src={book.img} alt={book.name} />
//         <Rating stars={book.rating} onChange={handleRatingChange} />
//         <div className={styles.id}>{book.id}</div>
//         <div className={styles.book_name}>{book.name}</div>
//         <button className={styles.random_button} onClick={handleRandomRating}>
//             {book.isRandomRatingActive ? 'Stop Random Rating' : 'Start Random Rating'} RANDOM RATING
//         </button>
//     </div>
// );
// };

// export default BookItem;