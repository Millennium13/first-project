import { createStore } from "redux";

const initialState = {
    fruits: []
 }

const redFun = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let newFruits = state.fruits

            newFruits.push(action.payload)

            return{ ...state, fruits: newFruits }

        default:
            break;
    }
    switch (action.type) {
        case"DEL":
        
            const newData = state.fruits.filter(val=> {
                return val.id !== action.payload.id
            })
            console.log(newData);
            return{ ...state, fruits:newData}
        
        default :
            break;
    }
};

const store = createStore(redFun);

export default store;