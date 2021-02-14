const DEL_TASK = 'DEL_TASK';

export const deleteTask = (id) => {
    return {
        type: DEL_TASK,
        id: id
    }
}

