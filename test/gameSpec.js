import Game from '../api/controllers/game.js'

describe('Game', () => {

  let game
  const resetGame = () => {
    game = new Game()
  }

  beforeEach(() => {
    resetGame()
  })

  it('parses from algebraic notation to array position', () => {
    expect(Game.parseToArrPosition('A1')).toEqual([0,0])
    expect(Game.parseToArrPosition('b3')).toEqual([1,2])
    expect(Game.parseToArrPosition('H8')).toEqual([7,7])

    expect(() => {
      Game.parseToArrPosition('I8')
    }).toThrow()
    expect(() => {
      Game.parseToArrPosition('H9')
    }).toThrow()
    expect(() => {
      Game.parseToArrPosition('AA1')
    }).toThrow()

    const letters = 'ABCDEFGH'
    ;[...letters].forEach(c => {
      for (let i = 1; i <= 8; i++) {
        expect(Game.parseToArrPosition(c + i))
          .toEqual([letters.indexOf(c), i-1])
      }
    })
  })

  it('parses from array position to algebraic notation', () => {
    expect(Game.parseToAlgNotation([0,0])).toBe('A1')
    expect(Game.parseToAlgNotation([1,2])).toBe('B3')
    expect(Game.parseToAlgNotation([7,7])).toBe('H8')

    expect(() => {
      Game.parseToAlgNotation([8,7])
    }).toThrow()
    expect(() => {
      Game.parseToAlgNotation([7,8])
    }).toThrow()
    expect(() => {
      Game.parseToAlgNotation([-1,0])
    }).toThrow()

    const letters = 'ABCDEFGH'  
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        expect(Game.parseToAlgNotation([i,j]))
          .toBe(letters[i] + (j+1))
      }
    }
  })

  it('must provide all valid positions on a board', () => {
    const positions = Game.validPositions()
    expect(positions.length).toBe(8*8)

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        expect(positions.some(pos => pos[0]==i && pos[1]==j)).toBe(true)  
      }
    }
  })

  it('must place and get pieces with algebraic notation', () => {
    game.placeNewPiece('B5', 'knight', 'white')
    expect(Object.values(game.board.placedPieces).length).toBe(1)

    expect(game.getPieceOn('B5')).toBe(Object.values(game.board.placedPieces)[0])

    expect(game.getPieceOn('B6')).toBeUndefined()
  })

  it('must provide available moves in one step for a piece', () => {
    game.placeNewPiece('D4', 'knight', 'black')
    expect(game.getAvailableMoves('D4'))
      .toEqual(['B3', 'B5', 'C2', 'C6', 'E2', 'E6', 'F3', 'F5'])

    resetGame()
    game.placeNewPiece('H8', 'knight', 'black')
    expect(game.getAvailableMoves('H8'))
      .toEqual(['F7', 'G6'])
  })

  it('must provide available moves in two steps for a piece', () => {
    game.placeNewPiece('A1', 'knight', 'white')
    expect(game.getAvailableMovesIn2('A1'))
      .toEqual(['A1', 'A3', 'A5', 'B4', 'C1', 'C5', 'D2', 'D4', 'E1', 'E3'])
  })

})