import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import * as actions from '../../redux/slices/ratingSlice';
import userEvent from "@testing-library/user-event";

import BookList from "../bookList/BookList";

jest.mock('react-redux');

const data = [{ id: 1, name: 'Book 1', rating: 0 },
{ id: 2, name: 'Book 2', rating: 0 }];
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe("BookList", () => {
  it('To create BookList with items', () => {
   
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(data);
    const component = render(<BookList />);
    expect(component).toMatchSnapshot();
  });
  it('should dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedSetSort = jest.spyOn(actions, 'setSort');

    render(<BookList />);
    screen.debug();
    const select = screen.getByLabelText('Sort by'); 
    fireEvent.change(select, { target: { value: 'By rating' } });
    screen.debug();
    // fireEvent.click(screen.getByRole('button'));
    // fireEvent.click(screen.getByLabelText('Sort by'));
    // expect(select).toHaveValue('By rating');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedSetSort).toHaveBeenCalledWith('By rating');
    
   
});
});
