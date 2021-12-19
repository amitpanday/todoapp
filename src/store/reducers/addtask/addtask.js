const initialState = {
    task: [],
    error: false,
    loading: true
};

const createTask = (state = initialState, action) => {
    switch (action.type) {

        case 'list':
            return { ...state, task: [...action.data], error: action.error, loading: action.loading }

        case 'create':
            return { ...state, task: [...state.task, action.data], error: action.error, loading: action.loading }
        case 'update':
            return { ...state, task: [action.data], error: action.error, loading: action.loading }
        case 'delete':
            return {
                ...state, task: state.task.filter(item => item !== action.data), error: action.error, loading: action.loading
            }
        default:
            return state;

    }
};

export default createTask;