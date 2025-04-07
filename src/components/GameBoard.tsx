import GameField from './GameField';

type GameBoard = {
  id: number;
  value: string | null;
  isActive: boolean;
  xPos: number;
  yPos: number;
}

const initialGameBoard : GameBoard[][] = [
  [
    {
      id: 1,
      value: null,
      isActive: false,
      xPos: 0,
      yPos: 0,
    },
    {
      id: 2,
      value: null,
      isActive: false,
      xPos: 1,
      yPos: 0,
    },
    {
      id: 3,
      value: null,
      isActive: false,
      xPos: 2,
      yPos: 0,
    }
  ],
  [
    {
      id: 4,
      value: null,
      isActive: false,
      xPos: 0,
      yPos: 1,
    },
    {
      id: 5,
      value: null,
      isActive: false,
      xPos: 1,
      yPos: 1,
    },
    {
      id: 6,
      value: null,
      isActive: false,
      xPos: 2,
      yPos: 1,
    }
  ],
  [
    {
      id: 7,
      value: null,
      isActive: false,
      xPos: 0,
      yPos: 2,
    },
    {
      id: 8,
      value: null,
      isActive: false,
      xPos: 1,
      yPos: 2,
    },
    {
      id: 9,
      value: null,
      isActive: false,
      xPos: 2,
      yPos: 2,
    }
  ]
];

const GameBoard = ({ turns, onSelectSquare, players}) => {

  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const {xPos, yPos } = square;
    const { symbol } = player;
    
    gameBoard[yPos][xPos].value = symbol;
  }
  
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleClickSquare = (rowIndex: number, colIndex: number, playerSymbol: string = 'x') => {
    
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      
  //     if (!updatedGameBoard[rowIndex][colIndex].value) {
  //       updatedGameBoard[rowIndex][colIndex].value = playerSymbol;
        
  //       onSelectSquare();
  //     }
      
  //     return updatedGameBoard;
  //   })
    
    
  // }

  return (
    <div id="game-board">
      <ol>
        {gameBoard.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => 
                  <GameField key={col.id} value={col.value} rowIndex={rowIndex} colIndex={colIndex} players={players} onInteraction={onSelectSquare} />
              )}
            </ol>
          </li>
        )}
      </ol>
    </div>
  )
}

export default GameBoard;