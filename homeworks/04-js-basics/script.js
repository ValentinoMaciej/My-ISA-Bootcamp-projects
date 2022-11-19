console.log("Zadanie 1");

function add(a, b) {
  return a + b;
}

console.log(add(2, 4));
console.log(typeof add() === `number`);
//nie do końca wiem oco chodziło w funkcji z zastosowaniem typeof, i nie bardzo wiedziałem jak tego użyć

console.log("Zadanie 2");

const alicjaNowak = {
  name: "Alicja",
  surname: "Nowak",
  hobby: [
    "pierogi",
    " lepienie bałwana",
    " chodzenie na rękach",
    " picie wódeczki.",
  ],
};

const adamWkładam = {
  name: "Adam",
  surname: "Wkładam",
  hobby: ["anime", " siedzenie w samotności", " gry", " latanie."],
};

const osoby = [];

osoby.push(alicjaNowak, adamWkładam);

console.table(osoby);

function show1(alicjaNowak, adamWkładam) {
  console.log(
    "Mam na imię " +
      alicjaNowak.name +
      ", Moje hobby to: " +
      alicjaNowak.hobby.join()
  );
  console.log(
    "Mam na imię " +
      adamWkładam.name +
      ", Moje hobby to: " +
      adamWkładam.hobby.join()
  );
}
console.log(show1(alicjaNowak, adamWkładam));

function show2(alicjaNowak, adamWkładam) {
  console.log(
    `Mam na imię ${alicjaNowak.name}, moje hobby to ${alicjaNowak.hobby.join()}`
  );
  console.log(
    `Mam na imię ${adamWkładam.name}, moje hobby to ${adamWkładam.hobby.join()}`
  );
}

console.log(show2(alicjaNowak, adamWkładam));

// kompletnie nie wiedziałem jak użyć metody for Each

console.log("Zadanie 3");

const stefanBatory = {
  name: "Stefan",
  surname: "Batory",
  address: { street: "Wojenna", city: "Kraków", postcode: "00111" },
  pesel: "98010700765",
  age: 24,
};

const ewaMinge = {
  name: "Ewa",
  surname: "Minge",
  address: { street: "Konfliktowa", city: "Kraków", postcode: "00111" },
  pesel: "95030200995",
  age: 25,
};

const alejandroTevez = {
  name: "Alejandro",
  surname: "Tevez",
  address: { street: "Domowa", city: "Kraków", postcode: "00111" },
  pesel: "90010100765",
  age: 32,
};

const agearray = [];

agearray.push(stefanBatory, ewaMinge, alejandroTevez);

console.table(agearray);

function age30(agearray) {
  if (agearray[0].age > 30) {
    return "true";
  } else {
    return "false";
  }
}

console.log(age30(agearray));

// nie wiem jak wyświetlić true, false do poszczególnych obiektów

console.log("Zadanie 4");

const osobyWiek = [];

osobyWiek.push(stefanBatory, ewaMinge, alejandroTevez);

console.table(osobyWiek);

// const addAge = osobyWiek.age.reduce(([0],[1],[2]) => [0]+[1]+[2];

// console.log(addAge);

//brak zadania - starałem się posiłkować z filmiku, który wrzucił Dominik na Slacka ale nie umiem tego zastosować.

console.log("Zadanie 5");

// function one(x) {
//   return const dodanie;
// }

// function two(y) {
//   return x + y;
// }

//kompletnie nie mam pojęcia jak się zabrać do tego zadania, czy mam zacząć od ustalenie zmiennych, których później używam w funkcjach
//czy to forma callback  ? Póki co JS jest dla mnie niestety czarną magią
