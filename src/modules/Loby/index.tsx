import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import useLoby from '../../hooks/useLoby';
import socket from '../../socket';
import { ACTIONS } from '../../socket/actions';

import { takeDamge, attack, selectCharacter } from "../../store/characterSlice"

export const Loby = () => {
  const { id: roomID } = useParams();
  const [clients, updateClients] = useState<string[]>([]);

  useEffect(() => {
    socket.emit(ACTIONS.JOIN_ROOM, { roomID });

    socket.on(ACTIONS.UPDATE_ROOM, (listOfPLayers) => {
      updateClients(listOfPLayers)
    })

    return () => {
      socket.emit(ACTIONS.LEAVE, { roomID, userID: socket.id });
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      height: '100vh',
    }}>
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