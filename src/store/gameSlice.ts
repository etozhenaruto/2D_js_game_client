import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import { GAME_STATUS } from './constants'


const initialState = {
    status: GAME_STATUS.HOME
}

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    goToSelectCharacter: (state) => {
        state.status = GAME_STATUS.CHARACTER_SELECT
    },
    goHome: (state) => {
        state.status = GAME_STATUS.HOME
    }
  },
})

export const { goHome, goToSelectCharacter } = GameSlice.actions
export const selectGame = (state: RootState) => state.game

export default GameSlice.reducer