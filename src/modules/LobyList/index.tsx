import { useState, useEffect, useRef } from 'react';
import socket from '../../socket';
import { ACTIONS } from '../../socket/actions';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Iroom } from '../../interfaces/RoomI';
import { userAPI } from '../../localStoraga/userAPI';

export const LobyList = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms }) => {
            setRooms(rooms);
        });
    }, []);

    const createRoom = () => {
        const id = v4()
        socket.emit(ACTIONS.CREATE_ROOM, { roomID: id })
        navigate(`/room/${id}`)
    }

    const joinRoom = (id: string) => {
        navigate(`/room/${id}`)
    }

    return (
        <div>
            <h1>Available Rooms</h1>

            <ul>
                {rooms.map(({ id, users }: Iroom) => (
                    <li key={id}>
                        {id}
                        <button onClick={() => joinRoom(id)}>JOIN ROOM</button>
                    </li>
                ))}
            </ul>

            <button onClick={createRoom}>Create New Room</button>
        </div>
    );
}