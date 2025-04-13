import type { PlayerType } from './players';

export type GameTurn = {
  square: {
    xPos: number;
    yPos: number;
  };
  player: PlayerType;
};