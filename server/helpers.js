const RANDOM_GAME = [
  "PLAYERUNKNOWN'S BATTLEGROUNDS",
  'Dota 2',
  'Counter-Strike: Global Offensive',
  'Warframe',
  'PAYDAY 2',
  'Team Fortress 2',
  'H1Z1',
  'Grand Theft Auto V',
  'ARK: Survival Evolved',
  "Tom Clancy's Rainbow Six Siege",
];

const getRandomNumberInclusive = (begin = 0, end) => (
  Math.floor(Math.random() * end) + begin
);

const randomGame = () => {
  const numGen = getRandomNumberInclusive(0, RANDOM_GAME.length);
  return {
    game_id: numGen,
    title: RANDOM_GAME[numGen],
  };
};

module.exports.randomGame = randomGame;

