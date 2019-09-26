import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    {title: "Im Gone", duration:"4:03"},
    {title: "Hi there!", duration:"2:40"},
    {title: "Not Fair", duration:"3:22"}
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === "SONG_SELECTED"){
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})