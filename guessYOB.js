const pastPresident = [
  {
    id: 1,
    name: "Dr. Nnamdi Azikiwe",
    yearOfBirth: 1904,
  },
  {
    id: 2,

    name: "Maj-Gen. Johnson Aguiyi-Ironsi",
    yearOfBirth: 1924,
  },
  {
    id: 3,

    name: "Gen. Yakubu Gowon",
    yearOfBirth: 1934,
  },
  {
    id: 4,

    name: "Gen Muritala Muhammed",
    yearOfBirth: 1938,
  },
  {
    id: 5,

    name: "Gen Olusegun Obasanjo",
    yearOfBirth: 1937,
  },
  {
    id: 6,

    name: "Alhaji Shehu Shagari",
    yearOfBirth: 1925,
  },
  {
    id: 7,

    name: "Maj-Gen. Muhammadu Buhari",
    yearOfBirth: 1942,
  },
  {
    id: 8,

    name: "Gen. Ibrahim Babangida",
    yearOfBirth: 1941,
  },
  {
    id: 9,

    name: "Chief Ernest Shonekan",
    yearOfBirth: 1936,
  },
  {
    id: 10,

    name: "Gen. Sani Abacha",
    yearOfBirth: 1943,
  },
  {
    id: 11,

    name: "Gen. Abdulsalami Abubakar",
    yearOfBirth: 1942,
  },
  {
    id: 12,

    name: "Chief Olusegun Obasanjo",
    yearOfBirth: 1937,
  },
  {
    id: 13,

    name: "Alhaji Umaru Musa Yaradua",
    yearOfBirth: 1951,
  },
  {
    id: 14,

    name: "Dr. Goodluck Jonathan",
    yearOfBirth: 1957,
  },
  {
    id: 15,

    name: "Bola Tinubu",
    yearOfBirth: 1952,
  },
];
let score = 0;
let presSet = new Set();

const username = prompt("Please enter your Username", "Daucko");
const cohortNumber = prompt("Please enter your Cohort No", "14");
const passcode = prompt("Please enter your passcode", 62730);

let guessApp = () => {
  let presId = Math.floor(Math.random() * 14) + 1;
  let quiz = pastPresident.filter((_, index) => index + 1 === presId);

  let inputYearOfBirth = prompt(`What is the birth year of ${quiz[0].name}`);
  while (inputYearOfBirth.length != 4 || inputYearOfBirth[0] != 1) {
    alert(
      "Please enter a valid year format (YYYY) and ensure it starts with 1"
    );
    inputYearOfBirth = prompt(`What is the birth year of ${quiz[0].name}`);
  }

  if (quiz[0].yearOfBirth == inputYearOfBirth) {
    score += 10;
  } else {
    presSet.add(quiz[0]);
    score += 0;
  }
};

for (let i = 0; i < 10; i++) {
  guessApp();
}
alert(
  `${username} of Cohort ${cohortNumber} with passcode ${passcode}, your score is ${score}% and you got ${presSet.size} wrong`
);

let presSetArr = Array.from(presSet);
let missedQuiz = presSetArr.map((pres) => {
  return `\n ${pres.name} with year of birth: ${pres.yearOfBirth}`;
});

if (missedQuiz.length == 0) {
  alert(`You aced all the questions`);
} else {
  alert(`Answer to the quiz you got wrong are: ${missedQuiz}`);
}
