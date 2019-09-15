import Game from '../controllers/game.js'

export default {
    movesInOneTurn(req, res) {
        const algebraicPosition = req.body.position || req.query.position
        const game = new Game()
        try {
            game.placeNewPiece(algebraicPosition, 'knight', 'white')
            res.status(200).json(game.getAvailableMoves(algebraicPosition))
        } catch (e) {
            res.status(400).json({err: e.message || e})
        }
    },
    movesInTwoTurns(req, res) {
        const algebraicPosition = req.body.position || req.query.position
        const game = new Game()
        try {
            game.placeNewPiece(algebraicPosition, 'knight', 'white')
            res.status(200).json(game.getAvailableMovesIn2(algebraicPosition))
        } catch (e) {
            res.status(400).json({err: e.message || e})
        }
    }

}