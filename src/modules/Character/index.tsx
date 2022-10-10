import { useDispatch, useSelector } from 'react-redux'

import { takeDamge, attack, selectCharacter } from "../../store/characterSlice"
import CharacterCard from './components/CharacterCard'

export const Character = () => {
    const character = useSelector(selectCharacter)
    const dispatch = useDispatch()

    return (
        <CharacterCard
        name={character.name}
        HP={character.HP}
        damage={character.damage}
        />
    )
}

