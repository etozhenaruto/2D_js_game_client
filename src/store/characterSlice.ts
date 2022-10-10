import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState = {
    name: 'Vadya',
    HP: 10,
    damage: 1
}

export const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    attack: () => {

    },
    takeDamge: (state, {payload}) => {
      state.HP -= payload
    }
  },
})

export const { attack, takeDamge } = CharacterSlice.actions
export const selectCharacter = (state: RootState) => state.character

export default CharacterSlice.reducer