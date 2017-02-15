import { LOAD_DATA } from '../actions/types';

const INITIAL = {};
export default (state = INITIAL, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return action.payload;
        default:
            return state;
    }
};
