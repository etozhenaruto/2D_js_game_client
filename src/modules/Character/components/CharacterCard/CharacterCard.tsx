
const CharacterCard = ({name, damage, HP}: any) => {
    return (
    <div>
        <p>{name}</p>
        <p>{HP}</p>
        <p>{damage}</p>
    </div>
    )
}

export default CharacterCard