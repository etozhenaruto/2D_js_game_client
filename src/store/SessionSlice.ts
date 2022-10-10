import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState = {
    id: '',
    playersIDlist: [],
    lvl: 1,
}

export const SessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    
  },
})

export const { } = SessionSlice.actions
export const selectGame = (state: RootState) => state.session

export default SessionSlice.reducer