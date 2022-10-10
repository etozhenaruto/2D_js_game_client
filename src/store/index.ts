import { configureStore } from '@reduxjs/toolkit'
import GameReducer from './gameSlice'
import CharacterReducer from './characterSlice'
import SessionReducer from './SessionSlice'

// ...

export const store = configureStore({
  reducer: {
    game: GameReducer,
    character: CharacterReducer,
    session: SessionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch