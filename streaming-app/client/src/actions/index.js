import streams from '../apis/streams'
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from './types'

//action creators
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

// Action creators

export const createStream = formProps => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await streams.post('/streams', { ...formProps, userId })

  dispatch({ type: CREATE_STREAM, payload: response.data })

  // send the user back to sltream list page
  // after creation of a stream
  history.push('/')

}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams')

  dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`)

  dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formProps) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formProps)

  dispatch({ type: EDIT_STREAM, payload: response.data })
  history.push('/')
}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`)

  dispatch({ type: DELETE_STREAM, payload: id })
}