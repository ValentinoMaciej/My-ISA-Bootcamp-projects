//potrzebne do resetu wartości do przycisku resetuj
const receiptAmount = document.getElementById("receipt-amount-id"); //input z rachunkiem
const peopleBlankId = document.getElementById("people-blank-id"); //input z liczbą osób
//potrzebne do wyliczenia wartości napiwkiu odpowiednich do przycisku za niego odpowiadającego
const button5 = document.querySelector(".button-5");
const button10 = document.querySelector(".button-10");
const button15 = document.querySelector(".button-15");
const clickButton = document.querySelector(".click-button"); //wspólna klasa dla wszytskich przycisków powyżej
//potrzebne do resetowania wartości do 0
const calculateButton = document.querySelector(".calculate");
const resetButton = document.querySelector(".reset-button");
//potrzebne do wyliczenia sumy napików na osobę i łącznej sumy na osobę
const sumTip = document.querySelector(".sum-tip");
const sumAll = document.querySelector(".sum-all");

//zmienne-zmienne do określania wartości wprowadzanych przez użytkownika
let receiptBlank;
let peopleBlank;

// funkcja gdzie przycisk reset przyjmuje wartości domyślne
function resetButton1() {
  receiptAmount.value = "";
  peopleBlankId.value = "";
  sumTip.textContent = "PLN 0.00";
  sumAll.textContent = "PLN 0.00";
}
// przycisk resetuj uaktywnia się w momencie gdy jest wpisana wartość osób i rachunku
// "change" event na MDN opisany był jako odpowiedni w momencie gdy dotyczy inputów gdzie użytkownik będzie zmieniał jego wartość
receiptAmount.addEventListener("change", function () {
  receiptBlank = Number(receiptAmount.value);
  peopleBlank = Number(peopleBlankId.value);

  //jeśli rachunek nie jest równy 0 to z przycisku reset usuwany jest atrybut "disable"
  if (receiptBlank !== 0) {
    calculateButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
    //jeśli rachunek będzie wynosił 0 to wróci wartość "disabled" do przycisku Kalkuluj i Resetuj
  } else {
    calculateButton.setAttribute("disabled", "");
    resetButton.setAttribute("disabled", "");
  }
});
// kliknięcie resetuj spowoduje reset do stanu sprzed wpisania wartości
resetButton.addEventListener("click", resetButton1);

//ustalanie zmiennych do wyliczenia (przenieść na górę kodu po ustaleniu odpowiednich)
// const countPeople = parseInt(peopleBlankId.value);
// const summingAll = parseFloat(receiptAmount.value);
// const summingTips = parseFloat(clickButton.value);
// const sum = (summingAll + summingAll * summingTips) / countPeople;
// console.log(sum);

//czas do namysłu na to jak wykalkulować sumy i napiwki
calculateButton.addEventListener("click", function calculations() {
  // document.querySelectorAll('button').forEach(button => {
  //   button.addEventListener('click', () => {
  //       return button.value;
  //   });
  // });
  //próbowałem umieścić to w buttonie, ale nie zdaje egzaminu aby mi wybierało wartość buttona - tutaj się zawiesiłem

  const countPeople = parseInt(peopleBlankId.value);
  const summingAll = parseFloat(receiptAmount.value);
  const summingTips = parseFloat(clickButton.value);
  const sumTipPerson = (summingAll * summingTips) / countPeople;
  const sumAllPerson = (summingAll + summingAll * summingTips) / countPeople;
  sumTip.textContent = "PLN" + sumTipPerson.toFixed(2);
  sumAll.textContent = "PLN" + sumAllPerson.toFixed(2);
});

//już prawie prawie - problem z domyślną wartością napiwku (domyslnie dorzuca mi 5%, nawet po kliknięciu w 10 czy 15%).
