import React from 'react';
import Counter from '../Counter';
import {screen, render, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

beforeEach(() => {
    console.log("this code runs before each test")
})

afterEach(() => {
    cleanup() // cleans all DOMs
    console.log("this code runs after each test")
})

afterAll(() => {
    console.log("this code runs after all test are ran")
})

test("header renders correct text", () => {
    const component = render(<Counter />);
    const headerElement = component.getByTestId('header')

    expect(headerElement.textContent).toBe("My Counter")

})

// test("header renders correct", () => {
//     const { getByTestId } = render(<Counter />);
//     const headerElement = getByTestId('header')

//     expect(headerElement.textContent).toBe("My Counter")

// })

test("counter initialy start with text of 0", () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("counter");

    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    render(<Counter />);
    const inputEl = screen.getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
    render(<Counter />);
    const addBtn = screen.getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with -", () => {
    render(<Counter />);
    const subBtn = screen.getByTestId("sub-btn");

    expect(subBtn.textContent).toBe("-");
})

test('changing value of input works correctly', () => {
    render(<Counter />);
    const inputEl = screen.getByTestId("input");
    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    expect(inputEl.value).toBe("5")
})

test("clicking on plus button ads 1 to counter", () => {
    render(<Counter />);
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter")
    expect (counterEl.textContent).toBe("0");
    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe("1")
})

test("clicking on subtract button subtracts 1 from counter", () => {
    render(<Counter />);
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter")
    expect (counterEl.textContent).toBe("0");
    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe("1")
})

test("changing input value then clicking on add btn works correctly", () => {
    render(<Counter />);
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on sub btn works correctly", () => {
    render(<Counter />);
    const subBtnEl = screen.getByTestId("sub-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subBtnEl);
    expect(counterEl.textContent).toBe("-5")
})

test("adding and subtracting leads to the correct counter number", () => {
    render(<Counter />);
    const subBtnEl = screen.getByTestId("sub-btn");
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)

    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)

    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("15")
})

test("counter changes color correctly", () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");
    const addBtnEl = screen.getByTestId("add-btn")
    const subBtnEl = screen.getByTestId("sub-btn")

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("green");
    
    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("green");

    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);

    expect(counterEl.className).toBe("");

    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);

    expect(counterEl.className).toBe("red");


})