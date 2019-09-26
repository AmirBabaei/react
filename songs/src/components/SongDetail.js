import React from 'react'
import {connect} from 'react-redux'


const SongDtail = props => {
  console.log(props)
  return <div>Song Detail</div>
}

const mapStatetoProps = state => {
  return { song: state.selectedSong}
}

export default connect(mapStatetoProps)(SongDtail)