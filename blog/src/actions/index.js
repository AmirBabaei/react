import jasonPlaceholder from '../apis/jsonPlaceholder'
import { async } from 'q'

//here we are using redux-thunk
//thats why we can use async/wait!
export const fetchPosts =() => async dispatch => {

  const response = await jasonPlaceholder.get('/posts')

  dispatch({type: 'FETCH_POSTS', payload: response.data})
}

export const fetchUser = id => async dispatch => {

  const response = await jasonPlaceholder.get(`/users/${id}`)

  dispatch({type: 'FETCH_USER', payload: response.data})
}