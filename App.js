
import React, { Component } from 'react';

import { Provider } from 'react-redux';
// import store from './App/redux/store';
import Main from './App/Main'
// import store from './App/redux/store';
import { createStore, combineReducers } from 'redux';
//tạo reducer

const defaultState = {
    arrayCard: [
        { id: 1, brandName: 'CGV', barcode: 12312313131, isShow: false },
        { id: 2, brandName: 'Galaxy Cinemas', barcode: 123123123123, isShow: false },
        { id: 3, brandName: 'VinID', barcode: 324235252552, isShow: false },
        { id: 4, brandName: 'Emart', barcode: 23525452452452, isShow: false },
        { id: 5, brandName: 'FStudent', barcode: 245245245245, isShow: false },
        { id: 6, brandName: 'SaigonBus', barcode: 24524524524524, isShow: false },
        { id: 7, brandName: 'Auchan Loyalty', barcode: 343423423423424, isShow: false },
        { id: 8, brandName: 'Gongcha', barcode: 3432423423423424, isShow: false },
    ],
    isShow: false,
    isAdding: true,
    isUpdating: false,
    isDeleting: false,
};

//tạo reducer

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_ISSHOWING':
            return {
                ...state,
                isShow: !state.isShow
            }

        case 'TOGGLE_ISADDING':
            return {
                ...state,
                isAdding: !state.isAdding,
                isUpdating: state.isUpdating
            }
        case 'TOGGLE_ISUPDATING':
            return {
                ...state,
                isAdding: state.isAdding,
                isUpdating: !state.isUpdating
            }
        case 'ADD_CARD':
            return {
                ...state,
                arrayCard: [{
                    id: state.arrayCard.length + 1,
                    brandName: action.brandName,
                    barcode: action.barcode,
                    isShow: true
                }].concat(state.arrayCard),


            }
        case 'UPDATE_CARD': {
            return {
                ...state,
                isUpdating: !state.isUpdating,
                arrayCard: state.arrayCard.map(e => {
                    if (e.id !== action.id) return e;
                    return {
                        ...e,
                        brandName: state.brandName,
                        barcode: state.barcode,

                    }
                })

            }
        }
        case 'REMOVE_ITEM': {
            const newArr = () => {
                arr = state.arrayCard;
                for(let i = 0; i<arr.length; i++){
                    if(state.arr[i].id === action.id){
                        arr.splice(i, 1);
                      
                    }
                }
                state = Object.assign({}, state, { quotes: quotes });
                return arr;
            }

            
        }
    }
    return state;
}

const store = createStore(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

