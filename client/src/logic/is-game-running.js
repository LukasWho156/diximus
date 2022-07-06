import axios from "axios"
import { serverUrl } from "./server-url"

const isGameRunning = async () => {
    const gameId = window.localStorage.getItem('diximusGameId');
    if(!gameId) return false;
    const res = await axios.get(`${serverUrl}/game/state/${gameId}`);
    return (res.data.state === 'open' || res.data.state === 'running')
}

export {isGameRunning};