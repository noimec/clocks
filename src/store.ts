import { legacy_createStore as createStore } from 'redux'

interface State {
    clocks: { id: number; timezone: string | null }[];
}

const initialState: State = {
    clocks: [],
};

const reducer = (state = initialState, action: any): State => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;