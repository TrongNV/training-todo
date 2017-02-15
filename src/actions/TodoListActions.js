import { LOAD_DATA } from './types';
import data from '../reducers/todolist.json';

export const loadData = () => {
    return {
        type: LOAD_DATA,
        payload: data
    };
};
