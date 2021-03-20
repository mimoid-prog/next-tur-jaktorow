import getCurrentWeek from "data/getCurrentWeek";

const getMatch = (isLeft, schedule) => {
  const currentWeek = getCurrentWeek(schedule);
  let title, week, score, isText;

  if (isLeft) {
      const match = schedule[currentWeek].matches.fitler(match => match.teamOne.includes("Tur") || )


    if (currentWeek === 0) week = currentWeek;
    else if (currentWeek === schedule.length) week = currentWeek - 2;
    else week = currentWeek - 1;

    if (currentWeek === 0) {
      title = `Pierwszy mecz`;
      score = "wkrótce";
      isText = true;
    } else if (currentWeek < schedule.length - 1) {
        title = `Poprzedni mecz`;
        score = "wkrótce";
        isText = true;
    }
  } else {
    if (currentWeek === 0) week = currentWeek + 1;
    else if (currentWeek === schedule.length) week = currentWeek - 1;
    else week = currentWeek;
  }

  return {
    title,
    logos,
    score,
    clubs,
    isText,
    weekDate,
    date,
    time,
    home
  };
};

export default getMatch;
