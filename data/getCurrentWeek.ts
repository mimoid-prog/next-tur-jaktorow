const getCurrentWeek = (schedule) => {
  let currentWeek = 1;

  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule.length; j++) {
      const match = schedule[i].matches[j];

      if (match.teamOne.includes("Tur") || match.teamTwo.includes("Tur")) {
        if (match.scoreOne === "" || match.scoreTwo === "") {
          currentWeek = i + 1;
          break;
        }
      }
    }
  }

  return currentWeek;
};

export default getCurrentWeek;
