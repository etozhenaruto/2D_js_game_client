import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { userAPI } from '../../localStoraga/userAPI';
import socket from '../../socket';
import { ACTIONS } from '../../socket/actions';
import { ERRORS } from '../../socket/errors';

import { takeDamge, attack, selectCharacter } from "../../store/characterSlice"

export const Loby = () => {
  const { id: roomID } = useParams();
  const [clients, updateClients] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (roomID) {
      socket.emit(ACTIONS.JOIN_ROOM, { roomID });
    }

    socket.on(ACTIONS.UPDATE_ROOM, (roomInfo) => {
      updateClients(roomInfo.users)
    })

    socket.on(ERRORS.ROOM_NOT_FIND, () => {
      navigate(`/room-not-find`)
    })

    return () => {
      if (roomID) {
        socket.emit(ACTIONS.LEAVE, { roomID });
      }
    };
  }, [roomID]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      height: '100vh',
    }}>
      CLIENTS
      {clients.map((clientID: any, index: any) => {
        return (
          <div key={clientID} id={clientID}>
            NAME - {clientID}
          </div>
        );
      })}
    </div>
  );
}