
const initialState = {
   data:[],
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK': return {
            
            // ...state, 
            data: [
                ...state.data,
                {
                    title: action.task.title,
                    details: action.task.details,
                    date: action.task.date,
                    status: action.task.status,
                    id: action.id,
                },
            ],
        };   
        case 'DEL_TASK': return {}

        default: return state;
    }
};

export default todos;