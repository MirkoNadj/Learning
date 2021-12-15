import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({numberOfIncompleteTask}) => {
    return (
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTask}/>
    </BrowserRouter>
    )
}

// TEST BLOCK example

describe('TodoFooter tests', () => {

    test('should render text "5 incomplete tasks"', () => {
        render(<MockTodoFooter numberOfIncompleteTask={5}/>);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    
    test('should render singular word "task" when number of tasks is one', () => {
        render(<MockTodoFooter numberOfIncompleteTask={1}/>);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

})

// end of TEST BLOCK

test('should render text "5 incomplete tasks"', () => {
    render(<MockTodoFooter numberOfIncompleteTask={5}/>);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should render singular word "task" when number of tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should be visible or not', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
});

test('should contain a <p> tag', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML('p');
});

test('should contain text in paragraph with id "paraId" ', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByTestId('paraId')
    expect(paragraphElement).toHaveTextContent('1 task left');
});

test('should not be falsy', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByTestId('paraId')
    expect(paragraphElement).not.toBeFalsy();
});

test('text content of paragraph should be "1 task left" ', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByTestId('paraId')
    expect(paragraphElement.textContent).toBe('1 task left');
});

// multiple assertions ***NOT RECOMMENDED***

test('text content of paragraph should be "1 task left" ', () => {
    render(<MockTodoFooter numberOfIncompleteTask={1}/>);
    const paragraphElement = screen.getByTestId('paraId')
    expect(paragraphElement.textContent).toBe('1 task left');
    expect(paragraphElement.textContent).toBe('1 task left');
    expect(paragraphElement.textContent).toBe('1 task left');
    // expect(paragraphElement.textContent).toBe('5 task left');
});