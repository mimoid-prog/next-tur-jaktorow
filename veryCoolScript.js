const info = [
  {
    club: "LKS Tur Jaktorów",
    logo: "tur.jpg"
  },
  {
    club: "Tur Jaktorów",
    logo: "tur.jpg"
  },
  {
    club: "UKS Unia Boryszew",
    logo: "unia-boryszew.jpg"
  },
  {
    club: "GKS Pogoń II Grodzisk Maz.",
    logo: "pogon-grodzisk.jpg"
  },
  {
    club: "KS Teresin",
    logo: "teresin.jpg"
  },
  {
    club: "GLKS Relax Radziwiłłów",
    logo: "relax-radziwillow.jpg"
  },
  {
    club: "MKS Znicz III Pruszków",
    logo: "znicz-pruszkow.jpg"
  },
  {
    club: "KS Błonianka II",
    logo: "blonianka.jpg"
  },
  {
    club: "Klub sportowy Blizne",
    logo: "blizne.jpg"
  },
  {
    club: "LKS Wrzos Międzyborów",
    logo: "wrzos.jpg"
  },
  {
    club: "KS Partyzant Leszno",
    logo: "partyzant.jpg"
  },
  {
    club: "KP Józefowianka Józefów",
    logo: "jozefow.jpg"
  },
  {
    club: "KS Zaborowianka",
    logo: "zaborow.jpg"
  },
  {
    club: "KS Promyk Nowa Sucha",
    logo: "promyk.jpg"
  },
  {
    club: "UKS Tajfun Brochów",
    logo: "tajfun.jpg"
  },
  {
    club: "LZS Błękitni Korytów",
    logo: "blekitni.jpg"
  },
  {
    club: "LKS Osuchów",
    logo: "osuchow.jpg"
  },
  {
    club: "KS Piast Feliksów",
    logo: "feliksow.jpg"
  },
  {
    club: "LKS Chlebnia II",
    logo: "chlebnia.jpg"
  },
  {
    club: "KS Orzeł Kampinos",
    logo: "orzel.jpg"
  },
  {
    club: "PKS Mustangi",
    logo: "mustangi.jpg"
  },
  {
    club: "LKS Chlebnia",
    logo: "chlebnia.jpg"
  },
  {
    club: "KS Mszczonowianka",
    logo: "mszczonowianka.jpg"
  },
  {
    club: "AP Żyrardowianka",
    logo: "zyrardowianka-akademia.jpg"
  },
  {
    club: "GKS Orion-Puls",
    logo: "orion-puls.jpg"
  },
  {
    club: "Wrzos Międzyborów",
    logo: "wrzos.jpg"
  },
  {
    club: "KS Pogoń Wiskitki",
    logo: "pogon-wiskitki.jpg"
  },
  {
    club: "KS Guzovia",
    logo: "guzovia.jpg"
  },
  {
    club: "WISŁA Maciejowice",
    logo: "wisla-maciejowice.jpg"
  },
  {
    club: "Polonia Warszawa SP. Z O.O.",
    logo: "polonia.jpg"
  },
  {
    club: "ŁKS Promnik Łaskarzew",
    logo: "promnik-laskarzew.jpg"
  },
  {
    club: "KS Milan Milanówek",
    logo: "milan-milanowek.jpg"
  },
  {
    club: "GLKS Nadarzyn",
    logo: "glks-nadarzyn.jpg"
  },
  {
    club: "GKS Naprzód Stare Babice",
    logo: "stare-babice.jpg"
  },
  {
    club: "FC Komorów",
    logo: "komorow.jpg"
  },
  {
    club: "TS Gwardia",
    logo: "ts-gwardia.jpg"
  },
  {
    club: "MKS Znicz II Pruszków",
    logo: "znicz-pruszkow.jpg"
  },
  {
    club: "KS Raszyn",
    logo: "ks-raszyn.jpg"
  },
  {
    club: "UKS BSS Irzyk",
    logo: "uks-bss-irzyk.jpg"
  },
  {
    club: "UKS OFFensywa Książenice",
    logo: "ksiazenice.jpg"
  },
  {
    club: "UKS Mazovia Grodzisk Mazowiecki",
    logo: "mazovia-grodzisk.jpg"
  },
  {
    club: "AP Żyrardowianka II",
    logo: "zyrardowianka-akademia.jpg"
  },
  {
    club: "Wrzos Międzyborów",
    logo: "wrzos.jpg"
  }
];

let matchOne = {};
let matchTwo = {};

const table = [];
const schedule = [];

const mainTable = document.getElementsByClassName("extranet-table")[0];

Array.from(mainTable.children[1].children).forEach((row) => {
  const position = row.children[0].innerText;
  const team = row.children[1].innerText;
  const matches = row.children[2].innerText;
  const points = row.children[3].innerText;
  const w = row.children[4].innerText;
  const d = row.children[5].innerText;
  const l = row.children[6].innerText;
  const goals = row.children[7].innerText;

  const index = info.findIndex(
    (el) => el.club.toLowerCase() === team.toLowerCase()
  );

  table.push({
    position,
    team: info[index].club,
    matches,
    points,
    w,
    d,
    l,
    goals,
    logo: index === -1 ? null : info[index].logo
  });
});

const tables = document.getElementsByClassName("extranet-timetable");
const dates = document.getElementsByClassName("date");

Array.from(tables).forEach((table, i) => {
  const rows = table.children[1].children;

  const week = i + 1;
  const weekDate = dates[i].innerHTML.split(" ")[1];

  schedule.push({
    week,
    date: weekDate,
    matches: []
  });

  Array.from(rows).forEach((row) => {
    const leftTeam = row.children[0].innerText;
    const score = row.children[1].innerText;
    const rightTeam = row.children[2].innerText;
    const fullDate = row.children[3].innerText;
    const place = row.children[4].innerText;

    const date = fullDate.length > 0 ? fullDate.slice(0, 10) : "-";
    const time = fullDate.length === 28 ? fullDate.slice(23, 28) : "";

    const isTurWeek = leftTeam.includes("Tur") || rightTeam.includes("Tur");

    const leftTeamIndex = info.findIndex(
      (el) => el.club.toLowerCase() === leftTeam.toLowerCase()
    );
    const rightTeamIndex = info.findIndex(
      (el) => el.club.toLowerCase() === rightTeam.toLowerCase()
    );

    let canceled = false;
    let paused = false;
    let pausedTeam = "";
    let pausedLogo = "";

    let teamOne = "",
      teamTwo = "";

    let logoOne = "",
      logoTwo = "";

    if (leftTeam === "pauzuje w kolejce" || rightTeam === "pauzuje w kolejce") {
      paused = true;

      if (leftTeam !== "pauzuje w kolejce") {
        pausedTeam = info[leftTeamIndex].club;
        pausedLogo = info[leftTeamIndex].logo;
      }

      if (rightTeam !== "pauzuje w kolejce") {
        pausedTeam = info[rightTeamIndex].club;
        pausedLogo = info[rightTeamIndex].logo;
      }
    } else {
      teamOne = info[leftTeamIndex].club;
      teamTwo = info[rightTeamIndex].club;
      logoOne = info[leftTeamIndex].logo;
      logoTwo = info[rightTeamIndex].logo;
    }

    schedule[schedule.length - 1].matches.push({
      date,
      time,
      home: !isTurWeek ? null : place.includes("Tur") ? true : false,
      teamOne,
      teamTwo,
      logoOne,
      logoTwo,
      scoreOne: score.split(":")[0],
      scoreTwo: score.split(":")[1],
      paused,
      pausedTeam,
      pausedLogo,
      canceled
    });
  });
});

const bullets = document.getElementsByClassName("swiper-pagination-bullet");

Array.from(bullets).forEach((bullet, i) => {
  if (Array.from(bullet.classList).includes("actual")) {
    let currentWeek = i;
    let matchOneWeek = i;
    let matchTwoWeek = i + 1;

    let titleOne = "";
    let titleTwo = "";

    let pausedOne = false,
      pausedTwo = false;
    let canceledOne = false,
      canceledTwo = false;

    if (i === 1) {
      matchOneWeek = 0;
      matchTwoWeek = 1;
    } else if (bullets.length - 1 === i) {
      matchOneWeek = bullets.length - 2;
      matchTwoWeek = bullets.length - 1;
    }

    const matchOneData = schedule[matchOneWeek].matches.filter(
      (match) =>
        match.teamOne.includes("Tur") ||
        match.teamTwo.includes("Tur") ||
        match.pausedTeam.includes("Tur")
    )[0];

    const matchTwoData = schedule[matchTwoWeek].matches.filter(
      (match) =>
        match.teamOne.includes("Tur") ||
        match.teamTwo.includes("Tur") ||
        match.pausedTeam.includes("Tur")
    )[0];

    let logosOne = [matchOneData.logoOne, matchOneData.logoTwo];
    let logosTwo = [matchTwoData.logoOne, matchTwoData.logoTwo];

    let clubsOne = [matchOneData.teamOne, matchOneData.teamTwo];
    let clubsTwo = [matchTwoData.teamOne, matchTwoData.teamTwo];

    let homeOne =
      matchOneData.home === null
        ? ""
        : matchOneData.home === false
        ? "(wyjazd)"
        : "(u nas)";

    let homeTwo =
      matchTwoData.home === null
        ? ""
        : matchTwoData.home === false
        ? "(wyjazd)"
        : "(u nas)";

    if (currentWeek === 0 && !matchOneData.scoreOne) {
      titleOne = `Pierwszy mecz`;
      titleTwo = `Drugi mecz`;
      scoreOne = "wkrótce";
      scoreTwo = "wkrótce";
      isTextOne = true;
      isTextTwo = true;
    } else if (currentWeek < bullets.length - 2) {
      titleOne = `Poprzedni mecz`;
      titleTwo = `Następny mecz`;
      scoreOne = `${matchOneData.scoreOne} : ${matchOneData.scoreTwo}`;
      scoreTwo = "wkrótce";
      isTextOne = false;
      isTextTwo = true;
    } else {
      titleOne = `Przedostatni mecz sezonu`;
      titleTwo = `Ostatni mecz sezonu`;
      scoreOne = `${matchOneData.scoreOne} : ${matchOneData.scoreTwo}`;
      isTextOne = false;

      if (currentWeek === bullets.length - 1) {
        scoreTwo = `${matchTwoData.scoreOne} : ${matchTwoData.scoreTwo}`;
        isTextTwo = false;
      } else {
        scoreTwo = "wkrótce";
        isTextTwo = true;
      }
    }

    /* ---- PAUZUJE -----*/
    if (matchOneData.paused) {
      pausedOne = true;
      logosOne = [matchOneData.pausedLogo];
      clubsOne = [matchOneData.pausedTeam];
      homeOne = "";
      scoreOne = "";
    }

    if (matchTwoData.paused) {
      pausedTwo = true;
      logosTwo = [matchTwoData.pausedLogo];
      clubsTwo = [matchTwoData.pausedTeam];
      homeTwo = "";
      scoreTwo = "";
    }

    /* ---- ODWOŁANY -----*/
    if (matchOneData.canceled) {
      canceledOne = true;
      scoreOne = "odwołany";
      isTextOne = true;
    }

    if (matchTwoData.canceled) {
      canceledTwo = true;
      scoreTwo = "odwołany";
      isTextTwo = true;
    }

    matchOne = {
      title: titleOne,
      logos: logosOne,
      score: scoreOne,
      clubs: clubsOne,
      isText: isTextOne,
      date: matchOneData.date,
      time: matchOneData.time,
      home: homeOne,
      paused: pausedOne,
      canceled: canceledOne
    };

    matchTwo = {
      title: titleTwo,
      logos: logosTwo,
      score: scoreTwo,
      clubs: clubsTwo,
      isText: isTextTwo,
      date: matchTwoData.date,
      time: matchTwoData.time,
      home: homeTwo,
      paused: pausedTwo,
      canceled: canceledTwo
    };
  }
});

console.log(table);
console.log(schedule);
console.log({
  matchOne,
  matchTwo
});
