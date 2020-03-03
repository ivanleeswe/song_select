//Action Creator  //return an action 
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

//export different functions by playing export in front of const instead of export default one function