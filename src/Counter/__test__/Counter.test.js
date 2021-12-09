import Counter from '../Counter';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId
})

test("headers renders with correct text", () => {
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter")
})

test("counter initially starts with text of 0", () => {
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test("add button renders with plus sign", () => {
    const addBtn = getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
})

test("subtract button renders with minus sign", () => {
    const subtractBtn = getByTestId("subtract-btn")

    expect(subtractBtn.textContent).toBe("-")    
})

test("change value of input works correctly", () => {
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")

})

test("click on plus btn adds 1 to counter", () => {
    const addbtnEl = getByTestId('add-btn')
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addbtnEl)

    expect(counterEl.textContent).toBe("1")
})

test("click on subtract btn subtract 1 from counter", () => {
    const subtractbtnEl = getByTestId('subtract-btn')
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractbtnEl)

    expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add btn works correctly", () => {
    const addbtnEl = getByTestId('add-btn')
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addbtnEl)

    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract btn works correctly", () => {
    const subtractbtnEl = getByTestId('subtract-btn')
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractbtnEl)

    expect(counterEl.textContent).toBe("-5")
})

test("adding and subtracting leading to the correct counter number", () => {
    const subtractbtnEl = getByTestId('subtract-btn')
    const addbtnEl = getByTestId('add-btn')
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)

    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)

    expect(counterEl.textContent).toBe("15")

})

test("counter contains correct className", () => {
    const subtractbtnEl = getByTestId('subtract-btn')
    const addbtnEl = getByTestId('add-btn');
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input")

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(addbtnEl)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)

    expect(counterEl.className).toBe("red")

})