const ADD_TASK = 'ADD_TASK';

export const addTask = ({taskData}) => {
    return {
        type: ADD_TASK,
        task: taskData,
        id: Math.random()
    }
}




