/*
 * Classes
 *
 * Construa uma classe que abrigue estatísticas de uma determinada equipe.
 * A classe deve salvar todos os jogadores num objeto no formato:
 * {
 *  firstName: string
 *  lastName: string
 *  age: number
 * }
 * A classe deve salvar todos os resultados de partidas num objeto no formato:
 * {
 *  opponent: string
 *  teamPoints: number
 *  opponentPoints: number
 * }
 * A classe não deve permitir que seja excluído jogadores e partidas diretamente.
 * A classe deve ter métodos de acesso para jogadores e para partidas.
 * A classe deve ter métodos que permitam adicionar novos jogadores e novas
 * partidas.
 */

type Player = {
  firstName: string;
  lastName: string;
  age: number;
};
type Game = {
  opponent: string;
  teamPoints: number;
  opponentPoints: number;
};
interface TeamStatistics {
  players: Player[];
  games: Game[];
  addGame: (
    opponent: string,
    teamPoints: number,
    opponentPoints: number,
  ) => Game;
  addPlayer: (firstName: string, lastName: string, age: number) => Player;
}

// code here

export default <TeamStatistics>{};
