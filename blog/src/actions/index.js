import jasonPlaceholder from '../apis/jsonPlaceholder'

//here we are using redux-thunk
//thats why we can use async/wait!
export const fetchPosts =() => {
  return async dispatch => {
    const response = await jasonPlaceholder.get('/posts')

    dispatch({type: "FETCH_POST", payload: response})
  }
}