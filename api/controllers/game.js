import Board from '../models/board'
import cloneDeep from 'lodash.clonedeep'

class Game {
  constructor() {
    this.board = new Board()
  }

  // Parse position from Algebraic Notation (e.g. 'A5') to Array Position (e.g. [0, 4]) 
  static parseToArrPosition(algPos) {
    if (!algPos) {
      throw "Missing parameter"
    }
    const fullPattern = /^[A-Z][0-9]+$/
    algPos = algPos.toUpperCase()

    if (!algPos.match(fullPattern)) {
      throw "Invalid Algebraic Notation"
    }
    
    const x = algPos.charCodeAt(0) - 'A'.charCodeAt(0)
    const y = parseInt(algPos.substring(1)) - 1

    if (!Board.validatePosition([x, y])) {
      throw "Invalid Position"
    }
    return [x, y]
  }

  // Parse position from Array Position (e.g. [0, 4]) to Algebraic Notation (e.g. 'A5')
  static parseToAlgNotation(arrPos) {
    const [x, y] = arrPos
    if (!Board.validatePosition([x, y])) {
      throw "Invalid Position"
    }
    return String.fromCharCode('A'.charCodeAt(0) + x) + (y+1)
  }
  
  // Returns array with all valid positions on a board
  static validPositions() {
    let arr = []
    for(let i = 0; i < Board.height; i++) {
      for(let j = 0; j < Board.width; j++) {
        arr.push([i,j])
      }
    }
    return arr
  }

  // Place new piece on the board with algebraic notation position
  placeNewPiece(algPos, type, set) {
    const arrPos = this.constructor.parseToArrPosition(algPos)
    this.board.placePiece(type, arrPos, set)
  }

  // Get piece currently placed on algebraic notation position
  getPieceOn(algPos) {
    const [x, y] = this.constructor.parseToArrPosition(algPos)
    return Object.values(this.board.placedPieces)
      .find(piece => piece.x == x && piece.y == y)
  }

  // Move piece from one position to another
  movePiece(algPos1, algPos2) {
    const piece = this.getPieceOn(algPos1)
    this.board.movePiece(piece, this.constructor.parseToArrPosition(algPos2))
  }

  // Get available moves for piece on position
  getAvailableMoves(algPos) {
    const piece = this.getPieceOn(algPos)
    return this.constructor.validPositions().filter(position => {
      try {
        const newBoard = cloneDeep(this.board)
        newBoard.movePiece(piece, position)
        return true
      } catch (e) {
        return false;
      } 
    }).map(arrPos => this.constructor.parseToAlgNotation(arrPos)).sort()
  }

  // Get available moves for piece on position in two rounds
  getAvailableMovesIn2(algPos) {
    const moveSets = this.getAvailableMoves(algPos)
      .reduce((accumulator, newPos) => {
        const newGame = cloneDeep(this)
        newGame.movePiece(algPos, newPos)
        accumulator.push(...newGame.getAvailableMoves(newPos))
        return accumulator
      }, [])
    return Array.from(new Set(moveSets)).sort()
  }
}

export default Game