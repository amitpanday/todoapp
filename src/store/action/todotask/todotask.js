const todoTask = {

    getList: function () {
        return dispatch => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json()
                    .then((response) => {
                        dispatch({
                            type: 'list',
                            data: response,
                            error: false,
                            loading: false
                        });
                    }))
                .catch((error) => {
                    console.log({ error })
                })
        }
    },

    create: function (data) {
        return dispatch => {
            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(data)
            })
                .then(response => response.json()
                    .then((response) => {
                        dispatch({
                            type: 'create',
                            data: data,
                            error: false,
                            loading: false
                        });
                    }))
                .catch((error) => {
                    console.log({ error })
                })
        }
    },

    update: function (data) {
        const { id } = data;
        return dispatch => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(data)
            })
                .then(response => response.json()
                    .then((response) => {
                        dispatch({
                            type: 'update',
                            data: data,
                            error: false,
                            loading: false
                        });
                    }))
                .catch((error) => {
                    console.log({ error })
                })
        }
    },

    delete: function (data) {
        const { id } = data;
        console.log(id);
        return dispatch => {
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json()
                    .then((response) => {
                        dispatch({
                            type: 'delete',
                            data: data,
                            error: false,
                            loading: false
                        });
                    }))
                .catch((error) => {
                    console.log({ error })
                })
        }
    }

};

export default todoTask;