export const add = (a, b) => {
    return {
        type: "add",
        nombres: { a, b }
    }
}

export const sub = (a, b) => {
    return {
        type: "sub",
        nombres: { a, b }
    }
}

export const mul = (a, b) => {
    return {
        type: "mul",
        nombres: { a, b }
    }
}

export const div = (a, b) => {
    return {
        type: "div",
        nombres: { a, b }
    }
}
