export const INSERT1 = 'INSERT1'
export const DELETETASK = 'DELETE'
export const CLEAR = 'CLEAR'
export const INSERT2 = 'INSERT2'

export const insert1 = (task) => {
    return {
        type: INSERT1,
        task: task
    }
}

export const insert2 = (task) => {
    return {
        type: INSERT2,
        task: task
    }
}

export const deleteTask = task => {
    return {
        type: DELETETASK,
        task: task
    }
}

export const clear = () => {
    return {
        type: CLEAR
    }
}