
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../css_modules/booklist.module.css';
import { setSort } from '../../redux/slices/ratingSlice';
import SortPopup from './SortPopUp';
import BookItem from '../bookItem/BookItem';


const BookList = () => {
    const dispatch = useDispatch();
    const sortedItems = useSelector((state) => {
      const {sort, items} = state.ratingReducer;
      console.log('sort', sort);
      if (sort === 'By rating'){
        console.log('By rating', sort);
        return items.slice().sort((a, b) => b.rating - a.rating);
      } 
      return items;
    });
    

    const handleChange = (event) => {
      console.log(event.target.value);
      dispatch(setSort(event.target.value));
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titlebox}>
                    <div className={styles.titel}>My favorite books</div>
                    <div className={styles.rowButtons}>
                        <SortPopup handleChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.books}>
                    {sortedItems?.map((item) => <BookItem book={item} key={item.id} />)}
                </div>
            </div>
        </>
    );
}

export default BookList;
    // const dispatch = useDispatch();
    // const {items, sort} = useSelector((state) => state.ratingReducer);
    // console.log('useSelectoritems', items, sort);
    // const sortItems = (items, sort) => {
    //     if(sort === 'By rating') {
    //         return items.sort((a, b) => b.rating - a.rating);
    //     } else {
    //         return items;
    //     }
    // }

    // useEffect (() => {
    //     const sortedItems = sortItems(sort);
    //     dispatch(setItems(sortedItems));
    //     console.log(sortedItems);
    // }, [dispatch, sort]);
    
//     return (
//         <>
//             <div className={styles.container}>
//                 <div className={styles.titlebox}>
//                     <div className={styles.titel}>My favorite books</div>
//                     <div className={styles.rowButtons}>
//                         <SortPopup />
//                     </div>
//                 </div>
//                 <div className={styles.books}>
//                     {items.map((item) => <BookItem book={item} key={item.id} />)}
//                 </div>

//             </div>
//         </>
//     )
// }

// export default BookList;

 

//   const dispatch = useDispatch();

  //   useEffect(() => {
  //     // Установка данных о книгах при монтировании компонента
  //     dispatch(setRating(items));
  //   }, [dispatch]);


   // const sortedItems = [...items];

  // if (sort === 'By rating') {
  //   sortedItems.sort((a, b) => b.rating - a.rating);
  // }

  //  const sortItems = (sort) => {
  //       if(sort === 'By rating') {
  //           return items.sort((a, b) => b.rating - a.rating);
  //       } else {
  //           return items;
  //       }
  //   }

  //   useEffect (() => {
  //       const sortedItems = sortItems(sort);
  //       dispatch(setSort(sortedItems));
  //       console.log(sortedItems);
  //   }, [dispatch, sort]);

  