import express from 'express';

import Game from '../games/game.js';

const testRouter = (gameDB) => {

    const router = express.Router();

    router.post('creategame/running', (req, res) => {
        const id = req.body.id ?? 'test-game';
        const noPlayers = req.body.players ?? 3;
        const game = new Game(id);
        gameDB.set(id, game);
        
    })

}

export default testRouter