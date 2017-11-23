const fs = require('fs');
const util = require('./util.js');

const DEFAULT_OUTPUT_FILE = 'recommendation_output.txt';

const DEFAULT_TOTAL_USER_COUNT = 100;
const DEFAULT_USER_NUMBER_START = 1;

const PREFERENCE_RATIO = {
  NONE: 10,
  FPS: 29,
  ACTION: 36,
  RPG: 25,
};


const TITLE_PREFIX = 'game_';

class Recommendation {
  constructor(id, userId, gameId, title, preference) {
    this.id = id;
    this.userId = userId;
    this.gameId = gameId;
    this.title = title;
    this.preference = preference;
  }

  print() {
    console.log(`-----------
      id: ${this.id}
      userId: ${this.userId}
      gameId: ${this.gameId}
      title: ${this.title}
      preference: ${this.preference}
    `);
  }
}

const generatedRandomListOfRecommendation = (listSize = DEFAULT_TOTAL_USER_COUNT) => {
  const recommendations = [];

  const PREFERENCE_RATIO_WEIGHT_TABLE = util.generateExpandedWeightTable(PREFERENCE_RATIO);

  for (let i = DEFAULT_USER_NUMBER_START; i < listSize + DEFAULT_USER_NUMBER_START; i++) {
    // TODO: hoist these to be more memory-efficient
    const id = i;
    const userId = i;
    const gameId = i;
    const title = TITLE_PREFIX + i;
    const preference = util.getRandomFieldValue(PREFERENCE_RATIO_WEIGHT_TABLE);
    const recommendation = new Recommendation(id, userId, gameId, title, preference);
    recommendations.push(recommendation);
    // user.print();
  }

  return recommendations;
};

// simple CLI
// [usage] node fakerecommendation.js <NUMBER_OF_RECOMMENDATIONS_TO_GENERATE>
if (process.argv.length > 2) {
  const cmd = process.argv[2];
  const parsedNumberCmd = parseInt(cmd, 10);
  if (Number.isInteger(parsedNumberCmd) && parsedNumberCmd > 0) {
    console.log(`generating random list of: ${parsedNumberCmd} recommendations...`);
    const generatedRecommendation = generatedRandomListOfRecommendation(parsedNumberCmd);

    // TODO: add option to specify an alternate output_file_name
    fs.writeFile(DEFAULT_OUTPUT_FILE, JSON.stringify(generatedRecommendation), (err) => {
      if (err) {
        console.error('error detected:', err);
        return;
      }
      console.log('--> successfully created file at:', DEFAULT_OUTPUT_FILE);
      console.log('done!');
    });
  }
} else {
  console.log(`
    Utility script used to generate initial User data to populate a dataset
      [usage] node fakeRecommendation.js <NUMBER_OF_RECOMMENDATIONS_TO_GENERATE>
    `);
}

module.exports.generatedRandomListOfRecommendation = generatedRandomListOfRecommendation;
