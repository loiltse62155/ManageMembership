import { createStore, combineReducers } from 'redux';
//tạo reducer

const defaultState = {
    arrayCard: [
        // { id: 1, brandName: 'CGV', barcode: 4444423423423424, isShow: false },
        // { id: 2, brandName: 'Galaxy Cinemas', barcode: 3432423423423424, isShow: false },
        // { id: 3, brandName: 'VinID', barcode: 12212112121212, isShow: false },
        // { id: 4, brandName: 'Emart', barcode: 424242424242424, isShow: false },
        // { id: 5, brandName: 'FStudent', barcode: 3432423423423424, isShow: false },
        // { id: 6, brandName: 'SaigonBus', barcode: 3432423423423424, isShow: false },
        // { id: 7, brandName: 'Auchan Loyalty', barcode: 3432423423423424, isShow: false },
        // { id: 8, brandName: 'Gongcha', barcode: 3432423423423424, isShow: false },
    ],
    isShow: true,
    isAdding: false
};

//tạo reducer

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_ISSHOWING':
            return {
                ...state,
                isShow: !state.isShow
            }
        case 'ADD_CARD':
            return {
                ...state,
                arrayCard: [{
                    id: state.arrayCard.length + 1,
                    brandName: action.brandName,
                    barcode: action.barcode,
                    isShow: true
                }].concat(state.arrayCard)

            }
    }
    return state;
}

const store = createStore(reducer);

export default store;