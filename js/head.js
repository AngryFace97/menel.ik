const piwko = document.querySelector(`#piwko`)
const drinkLvl = document.querySelector(`#drink-lvl`)

let drinkLvlValue = 0

piwko.addEventListener("click", () => {
    drinkLvlValue += 10;
    drinkLvl.textContent = drinkLvlValue
})