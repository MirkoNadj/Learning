import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockedTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

// function for repetative task (adding many tasks)

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
    const buttonElement = screen.getByRole('button', {name: 'Add'});

    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    });
}

describe('Todo integration tests', () => {

    test('should render the same text as task in list from input when user clicks Add button', async () => {
        render(<MockedTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
        const buttonElement = screen.getByRole('button', {name: 'Add'});
        fireEvent.change(inputElement, {target: {value: "Go Grosery Shopping"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Go Grosery Shopping/i)
        expect(divElement).toBeInTheDocument();
    });

    test('should render multiple items', async () => {
        render(<MockedTodo />);
        addTask(['Go Grosery Shopping', 'Clean Dishes', 'Walk the Dog'])
        const divElements = screen.getAllByTestId('task-container')
        expect(divElements.length).toBe(3);
    });

    test('tasks should not have class "completed"  when initially rendered', async () => {
        render(<MockedTodo />);
        addTask(['Go Grosery Shopping'])
        const divElement = screen.getByText(/Go Grosery Shopping/i)
        expect(divElement).not.toHaveClass('todo-item-active')
    });

    test('tasks should have completed class when clicked', async () => {
        render(<MockedTodo />);
        addTask(['Go Grosery Shopping'])
        const divElement = screen.getByText(/Go Grosery Shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    });
})