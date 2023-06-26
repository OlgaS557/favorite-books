import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import * as actions from '../../redux/slices/ratingSlice';
import BookItem from "../bookItem/BookItem";

jest.mock('react-redux');

const data = { id: 1, name: 'Book 1', rating: 0 };
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('BookItem', () => {
    it('should create BookItem', () => {
        mockedDispatch.mockReturnValue(jest.fn());
        const component = render(<BookItem book={data} />);
        expect(component).toMatchSnapshot();
    });
    it('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        const mockedSetRating = jest.spyOn(actions, 'setRating');

        render(<BookItem book={data} />);

        const radioButtons = screen.getAllByRole('radio');
        const radioButton1 = radioButtons.find((radioButton) => radioButton.value === '1');
      
        fireEvent.click(radioButton1);
       
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedSetRating).toHaveBeenCalledWith({ id: 1, rating: 1 });
        
        fireEvent.click(screen.getByRole('button'));
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedSetRating).toHaveBeenCalledWith({ id: 1, rating: 1 });
    });
});