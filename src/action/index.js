// all actions goes to this file
// easy to edit since they are just simple arraw functions that returns a simple object

export const increment = number => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = number => {
    return {
        type: 'DECREMENT',
        payload: number
    }
}