import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe('AddInput tests', () => {

    test('should render input element', async () => {
        render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    test('should be able to type in input', async () => {
        render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "Go Grosery Shopping"}})
        expect(inputElement.value).toBe("Go Grosery Shopping")
    });

    test('should have empty input when add button is clicked', async () => {
        render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButtonElement = screen.getByRole('button', {name: /Add/i});
        fireEvent.click(addButtonElement)
        expect(inputElement.value).toBe("")
    });

})