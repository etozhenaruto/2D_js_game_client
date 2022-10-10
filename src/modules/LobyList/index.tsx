import {useState, useEffect, useRef} from 'react';
import socket from '../../socket';
import {ACTIONS} from '../../socket/actions';
import {v4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

export const LobyList = () => {
  const [rooms, updateRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms}) => {
        updateRooms(rooms);
        console.log(rooms)
    });
  }, []);

  const createRoom = () => {
    const id = v4()
    socket.emit(ACTIONS.CREATE_ROOM, {roomID: id})
    navigate(`/room/${id}`)
  }

  const joinRoom = (id: string) => {
    navigate(`/room/${id}`)
  }

  return (
    <div>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => joinRoom(roomID)}>JOIN ROOM</button>
          </li>
        ))}
      </ul>

      <button onClick={createRoom}>Create New Room</button>
    </div>
  );
}