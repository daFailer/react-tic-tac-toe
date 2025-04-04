import GameField from './GameField';

const fields = [
  [
    {
      id: 1,
      symbol: '',
      isActive: false,
      xPos: 0,
      yPos: 0,
    },
    {
      id: 2,
      symbol: '',
      isActive: false,
      xPos: 1,
      yPos: 0,
    },
    {
      id: 3,
      symbol: '',
      isActive: false,
      xPos: 2,
      yPos: 0,
    }
  ],
  [
    {
      id: 4,
      symbol: '',
      isActive: false,
      xPos: 0,
      yPos: 1,
    },
    {
      id: 5,
      symbol: '',
      isActive: false,
      xPos: 1,
      yPos: 1,
    },
    {
      id: 6,
      symbol: '',
      isActive: false,
      xPos: 2,
      yPos: 1,
    }
  ],
  [
    {
      id: 7,
      symbol: '',
      isActive: false,
      xPos: 0,
      yPos: 2,
    },
    {
      id: 8,
      symbol: '',
      isActive: false,
      xPos: 1,
      yPos: 2,
    },
    {
      id: 9,
      symbol: '',
      isActive: false,
      xPos: 2,
      yPos: 2,
    }
  ]
];

const GameBoard = () => {
  return (
    <div id="game-board">
      <ol>
        {fields.map((row, index) => 
          <li key={index}>
            <ol>
              {row.map((cell) => 
                  <GameField key={cell.id} {...cell} />
              )}
            </ol>
          </li>
        )}
      </ol>
    </div>
  )
}

export default GameBoard;