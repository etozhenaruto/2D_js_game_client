import { LS } from ".";

const KEYS = {
    SESSION_ID: 'SESSION_ID'
}

export const userAPI = {
    getSessionID: () => LS.getItem(KEYS.SESSION_ID),
    setSessionID: (id: any) => LS.setItem(KEYS.SESSION_ID, id)
}