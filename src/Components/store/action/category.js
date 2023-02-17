export const listCategory= () => (dispatch) =>{
    fetch('http://localhost:8585/api/category/allcategories')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_CATEGORY',payload: data}) )
}
export   const  addCategory = (data) => {

    return {
        type: 'ADD_CATEGORY',
        payload: data
    }
}