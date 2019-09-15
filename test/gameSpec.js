import Game from '../api/controllers/Game.js'

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
})