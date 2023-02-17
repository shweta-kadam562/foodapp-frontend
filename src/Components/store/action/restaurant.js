export const listRestaurant= () => (dispatch) =>{
    fetch('http://localhost:8585/api/restaurant/allrestaurant')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_RESTAURANT',payload: data}) )
    }