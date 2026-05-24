const convertBtn = document.getElementById("convert-btn")

const input = document.getElementById("unit-input")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function () {

    const value = Number(input.value)
    lengthEl.innerHTML = length(value)
    volumeEl.innerHTML = volume(value)
    massEl.innerHTML = mass(value)

})


function length(unit) {

    const feet = (unit * 3.28084).toFixed(3)
    const meter = (unit * 0.3048).toFixed(3)

    if (unit === 1) {
        return `
            <p>
                ${unit} meter = ${feet} feet |
                ${unit} foot = ${meter} meter
            </p>
        `
    }

    return `
        <p>
            ${unit} meters = ${feet} feet |
            ${unit} feet = ${meter} meters
        </p>
    `
}


function volume(unit) {

    const gallons = (unit * 0.264172).toFixed(3)
    const liters = (unit * 3.78541).toFixed(3)

    if (unit === 1) {
        return `
            <p>
                ${unit} liter = ${gallons} gallons |
                ${unit} gallon = ${liters} liters
            </p>
        `
    }

    return `
        <p>
            ${unit} liters = ${gallons} gallons |
            ${unit} gallons = ${liters} liters
        </p>
    `
}


function mass(unit) {

    const pounds = (unit * 2.20462).toFixed(3)
    const kilograms = (unit * 0.453592).toFixed(3)

    if (unit === 1) {
        return `
            <p>
                ${unit} kilo = ${pounds} pounds |
                ${unit} pound = ${kilograms} kilos
            </p>
        `
    }

    return `
        <p>
            ${unit} kilos = ${pounds} pounds |
            ${unit} pounds = ${kilograms} kilos
        </p>
    `
}




const defaultValue = Number(input.value)

lengthEl.innerHTML = length(defaultValue)
volumeEl.innerHTML = volume(defaultValue)
massEl.innerHTML = mass(defaultValue)