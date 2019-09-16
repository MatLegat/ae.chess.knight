import Board from '../api/models/board.js'

describe('Board', () => {

  let board
  const resetBoard = () => {
    board = new Board()
  }

  beforeEach(() => {
    resetBoard()
  })

  it('must be of size 8x8', () => {
    expect(Board.height).toBe(8)
    expect(Board.width) .toBe(8)

    expect(() => { Board.height = 2 }) .toThrow()
    expect(() => { Board.width = 'b' }).toThrow()
  })

  it('must have two valid sets', () => {
    expect(Board.validSets.length).toBe(2)
    expect(Board.validSets.includes('black')) .toBe(true)
    expect(Board.validSets.includes('white')) .toBe(true)
    expect(Board.validSets.includes('purple')).toBe(false)
  })

  it('must validate positions', () => {
    expect(Board.validatePosition([1,2])).toBe(true)
    expect(Board.validatePosition([7,7])).toBe(true)
    expect(Board.validatePosition([0,0])).toBe(true)

    expect(Board.validatePosition([-1,4])) .toBe(false)
    expect(Board.validatePosition([0,8]))  .toBe(false)
    expect(Board.validatePosition([71,-6])).toBe(false)
  })

  it('must place only valid pieces', () => {
    expect(() => { 
      board.placePiece('knighto', [1,1], 'white')
    }).toThrow()
    expect(() => { 
      board.placePiece('knight', [-1,1], 'white')
    }).toThrow()
    expect(() => { 
      board.placePiece('knight', [1,1], 'red')
    }).toThrow()
    expect(board.placedPieces).toEqual({})

    const newPiece = board.placePiece('kNiGht', [1,1], 'whiTe')
    expect(newPiece).not.toBeNull()
    expect(board.placedPieces[newPiece.id]).toEqual(newPiece)
    expect(Object.keys(board.placedPieces).length).toBe(1)
  })

  it('must respect pieces maximum per set', () => {
    expect(board.placedPieces).toEqual({})
    const firstPiece = board.placePiece('knight', [1,1], 'white')
    expect(board.placedPieces[firstPiece.id]).toEqual(firstPiece)


    expect(() => { 
      board.placePiece('knight', [5,5], 'white')
    }).toThrow()
    expect(() => { 
      board.placePiece('knight', [1,1], 'black')
    }).toThrow()
    expect(Object.keys(board.placedPieces).length).toBe(1)

    const secondPiece = board.placePiece('knight', [5,5], 'black')
    expect(board.placedPieces[secondPiece.id]).toEqual(secondPiece)
    expect(Object.keys(board.placedPieces).length).toBe(2)
  })

  it('must allow only valid movements', () => {
    let piece = board.placePiece('knight', [4,4], 'white')

    expect(Object.keys(board.placedPieces).length).toBe(1)

    expect(() => { 
      board.movePiece(piece, [5,5])
    }).toThrow()

    board.movePiece(piece, [6,3])
    expect([piece.x, piece.y]).toEqual([6,3])
    piece = board.movePiece(piece, [4,4])
    expect([piece.x, piece.y]).toEqual([4,4])
    board.movePiece(piece, [6,5])
    expect([piece.x, piece.y]).toEqual([6,5])
    board.movePiece(piece, [4,4])
    board.movePiece(piece, [2,5])
    expect([piece.x, piece.y]).toEqual([2,5])
    board.movePiece(piece, [4,4])
    board.movePiece(piece, [2,3])
    expect([piece.x, piece.y]).toEqual([2,3])
    board.movePiece(piece, [0,2])

    expect(() => { 
      board.movePiece(piece, [-2,1])
    }).toThrow()
    expect(() => { 
      board.movePiece(piece, [1,-1])
    }).toThrow()
    
    expect([piece.x, piece.y]).toEqual([0,2])

    board.placePiece('knight', [2,3], 'black')
    expect(() => { 
      board.movePiece(piece, [2,3])
    }).toThrow()

  })

})