import { LOAD_DATA } from './types';

export const loadData = () => {
    return (dispatch) => {
        fetch('http://45.117.160.28:3330/tasks')
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: LOAD_DATA,
                    payload: response.data || response
                });
            })
            .catch(error => {
                console.log('error', error.message);
            });
    };
};
