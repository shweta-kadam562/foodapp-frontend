const initialState= { 
    list: []
};

const restaurant = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_RESTAURANT'){
        return {...state, list: action.payload}
    }


    return state;
};

export default restaurant; 