// import infoAll from "./info";
// import scheduleAll from "./schedule";

// const getMatches = (selected: string) => {
//   const info = infoAll[selected];
//   const schedule = scheduleAll[selected];
//   const currentWeek = info[0].scoredGoals.length;

//   let weekOne,
//     weekTwo,
//     titleOne,
//     titleTwo,
//     scoreOne,
//     scoreTwo,
//     isTextOne,
//     isTextTwo;

//   if (currentWeek === 0) {
//     weekOne = currentWeek;
//     weekTwo = currentWeek + 1;
//   } else if (currentWeek === schedule.length) {
//     weekOne = currentWeek - 2;
//     weekTwo = currentWeek - 1;
//   } else {
//     weekOne = currentWeek - 1;
//     weekTwo = currentWeek;
//   }

//   let turMatchOne = schedule[weekOne].matches.filter(
//     (match) => match.teamOne === 0 || match.teamTwo === 0
//   )[0];

//   let turMatchTwo = schedule[weekTwo].matches.filter(
//     (match) => match.teamOne === 0 || match.teamTwo === 0
//   )[0];

//   if (turMatchOne.teamOne === null || turMatchOne.teamTwo === null) {
//     weekOne += 1;
//     weekTwo += 1;

//     turMatchOne = schedule[weekOne].matches.filter(
//       (match) => match.teamOne === 0 || match.teamTwo === 0
//     )[0];

//     turMatchTwo = schedule[weekTwo].matches.filter(
//       (match) => match.teamOne === 0 || match.teamTwo === 0
//     )[0];
//   } else if (turMatchTwo.teamOne === null || turMatchTwo.teamTwo === null) {
//     weekTwo += 1;

//     turMatchTwo = schedule[weekTwo].matches.filter(
//       (match) => match.teamOne === 0 || match.teamTwo === 0
//     )[0];
//   }

//   let weekDateOne = schedule[weekOne].date;
//   let weekDateTwo = schedule[weekTwo].date;

//   let dateOne = turMatchOne.date;
//   let dateTwo = turMatchTwo.date;

//   let timeOne = turMatchOne.time;
//   let timeTwo = turMatchTwo.time;

//   let homeOne, homeTwo;

//   if (turMatchOne.home === true) homeOne = "(u nas)";
//   else if (turMatchOne.home === false) homeOne = "(wyjazd)";
//   else homeOne = "";

//   if (turMatchTwo.home === true) homeTwo = "(u nas)";
//   else if (turMatchTwo.home === false) homeTwo = "(wyjazd)";
//   else homeTwo = "";

//   let logosOne = {
//     teamOne: info[turMatchOne.teamOne].logo,
//     teamTwo: info[turMatchOne.teamTwo].logo,
//   };
//   let logosTwo = {
//     teamOne: info[turMatchTwo.teamOne].logo,
//     teamTwo: info[turMatchTwo.teamTwo].logo,
//   };

//   let clubsOne = [
//     info[turMatchOne.teamOne].club,
//     info[turMatchOne.teamTwo].club,
//   ];
//   let clubsTwo = [
//     info[turMatchTwo.teamOne].club,
//     info[turMatchTwo.teamTwo].club,
//   ];

//   if (currentWeek === 0) {
//     titleOne = `Pierwszy mecz`;
//     titleTwo = `Drugi mecz`;
//     scoreOne = "wkrótce";
//     scoreTwo = "wkrótce";
//     isTextOne = true;
//     isTextTwo = true;
//   } else if (currentWeek < schedule.length - 1) {
//     titleOne = `Poprzedni mecz`;
//     titleTwo = `Następny mecz`;
//     scoreOne = `${info[turMatchOne.teamOne].scoredGoals[weekOne]} :
//       ${info[turMatchOne.teamTwo].scoredGoals[weekOne]}`;
//     scoreTwo = "wkrótce";
//     isTextOne = false;
//     isTextTwo = true;
//   } else {
//     titleOne = `Przedostatni mecz sezonu`;
//     titleTwo = `Ostatni mecz sezonu`;
//     if (info[turMatchOne.teamOne].scoredGoals[weekOne] === false) {
//       scoreOne = "-";
//     } else {
//       scoreOne = `${info[turMatchOne.teamOne].scoredGoals[weekOne]} :
//       ${info[turMatchOne.teamTwo].scoredGoals[weekOne]}`;
//     }

//     if (currentWeek === schedule.length - 1) {
//       scoreTwo = "wkrótce";
//       isTextTwo = true;
//     } else if (info[turMatchTwo.teamOne].scoredGoals[weekTwo] === false) {
//       scoreTwo = "-";
//     } else {
//       scoreTwo = `${info[turMatchTwo.teamOne].scoredGoals[weekTwo]} :
//       ${info[turMatchTwo.teamTwo].scoredGoals[weekTwo]}`;
//       isTextTwo = false;
//     }

//     isTextOne = false;
//   }

//   if (turMatchOne.canceled) {
//     scoreOne = "odwołany";
//     isTextOne = true;
//   } else if (turMatchTwo.canceled) {
//     scoreTwo = "odwołany";
//     isTextTwo = true;
//   }

//   return {
//     matchOne: {
//       title: titleOne,
//       logos: logosOne,
//       score: scoreOne,
//       clubs: clubsOne,
//       isText: isTextOne,
//       weekDate: weekDateOne,
//       date: dateOne,
//       time: timeOne,
//       home: homeOne,
//     },
//     matchTwo: {
//       title: titleTwo,
//       logos: logosTwo,
//       score: scoreTwo,
//       clubs: clubsTwo,
//       isText: isTextTwo,
//       weekDate: weekDateTwo,
//       date: dateTwo,
//       time: timeTwo,
//       home: homeTwo,
//     },
//   };
// };

// export default getMatches;
