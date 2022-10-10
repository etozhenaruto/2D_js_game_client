import {useEffect, useRef, useCallback, useState} from 'react';
import socket from '../socket';
import {ACTIONS} from '../socket/actions';

export default function UseLoby(roomID: string | undefined) {
  const [clients, updateClients] = useState<string[]>([]);

  const addNewClient = (newClient: string) => {
    updateClients((list) => {
      if (!list.includes(newClient)) {
        return [...list, newClient]
      }

      return list;
    });
  }

  const createLoby = (id: string) => {
    socket.emit(ACTIONS.CREATE_ROOM, {roomID: id, userID: socket.id})
    addNewClient('vadya')
  }

  const joinLoby = (id: string) => {

  }

  // useEffect(() => {
  //   addNewClient(userName);
  //   socket.emit(ACTIONS.JOIN, {room: roomID})

  //   return () => {
  //     socket.emit(ACTIONS.LEAVE);
  //   };
  // }, [roomID]);

  // //прослушка новых игроков и добавление их влобби 
  // useEffect(() => {
  //   socket.on(ACTIONS.ADD_PEER, (peerData: PeerType) => {
  //     console.log(peerData)
  //     if (peerData.createOffer) {
  //       addNewClient(peerData.peerID);
  //     }
  //   });
  // }, []);

  return {
    clients,
    createLoby
  };
}

type PeerType = {
  peerID: string;
  createOffer: boolean;
}