const countVotePercentages = (parties) => {
  const totalVotes = parties.reduce((acc, numOfVotes) => acc + numOfVotes, 0);

  const percentages = parties.map((party) => (party / totalVotes) * 100);
  const roundedPercentages = percentages.map((percent) => +percent.toFixed(2));
  const sumRounded = roundedPercentages.reduce(
    (acc, percent) => acc + percent,
    0
  );

  let difference = +(100 - sumRounded).toFixed(2);
  if (difference !== 0) {
    let largestIndex = 0;

    percentages.forEach((percent, index) => {
      const fractionalPart = percent - Math.floor(percent);
      const largestFractionalPart =
        percentages[largestIndex] - Math.floor(percentages[largestIndex]);
      if (fractionalPart > largestFractionalPart) {
        largestIndex = index;
      }
    });

    roundedPercentages[largestIndex] += difference;
  }

  console.log("Election results:");
  roundedPercentages.forEach((percent, index) => {
    console.log(`Party ${index + 1} got ${percent.toFixed(2)}% of the votes.`);
  });
};

const parties = [];
let checkedParties = 0;

while (checkedParties < 6) {
  let numOfVotes = prompt(
    `Enter the number of votes for party ${checkedParties + 1}`
  );

  if (isNaN(+numOfVotes) || +numOfVotes < 0 || +numOfVotes % 1 !== 0) {
    console.log("You can only enter positive integers as input!");
    continue;
  }

  parties.push(+numOfVotes);
  checkedParties++;
}

countVotePercentages(parties);
