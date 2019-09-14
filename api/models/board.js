import uuid from 'uuid/v4'

// Chess Board Model

// Constant board properties
const height = 8
const width = 8
const validSets = Object.freeze([ 'black', 'white' ])
const maxPieces = {
  knight: 1,
}

class Board {

  // Initilize board
  constructor() {
    this.placedPieces = {/* id: {id, type, set, x, y} */}
  }

  // Constant getters
  static get height() { return height }
  static get width() { return width }
  static get maxPieces() { return maxPieces }
  static get validSets() { return validSets }

  // Check if array position is valid on the board
  static validatePosition(arrPos) {
    const [x, y] = arrPos
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height)
  }

  // Check if array position is taken by some piece
  positionIsTaken(arrPos) {
    const [x, y] = arrPos
    return this.placedPieces.some(piece => piece.x == x && piece.y == y)
  }

  // Place new piece on the board
  placePiece(type, arrPos, set) {
    if (!maxPieces.type) {
      throw "Invalid Piece Type"
    }

    if (!validSets.includes(set)) {
      throw "Invalid Piece Set"
    }

    const similarPieces = this.placedPieces.filter(
      piece => (piece.type == type && piece.set == set)
    )
    if (maxPieces.type <= similarPieces.lenght) {
      throw "Exceeded pieces of same type and set"
    }

    if (this.positionIsTaken(arrPos)) {
      throw "Position already taken"
    }
    
    const [x, y] = arrPos
    const newPiece = { id: uuid(), type, set, x, y }
    this.placedPieces[newPiece.id]

    return newPiece
  }
  
  // Move a piece on the board
  movePiece(piece, newArrPos) {
    if (!this.validatePosition(newArrPos)) {
      throw "Invalid Position"
    }
    
    piece = this.placedPieces[piece.id || piece]
    const [x0, y0] = [piece.x, piece.y]
    const [x1, y1] = newArrPos

    switch (piece.type) {
      case 'knight':
        if (!(
          ((x1 == x0+2 || x1 == x0-2) && (y1 == y0+1 || y1 == y0-1)) ||
          ((y1 == y0+2 || y1 == y0-2) && (x1 == x0+1 || x1 == x0-1))
        )) {
          throw 'Invalid movement for knight'
        }

      break;
      default:
        // No validation 
    }


    if (this.positionIsTaken(newArrPos)) {
      throw "Position already taken"
    }
    [piece.x, piece.y] = [x1, y1]
    return piece
  }
}

export default Board