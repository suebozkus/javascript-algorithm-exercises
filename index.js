
// TODO 1 : Convert Celsius into Fahrenheit (0°C × 9/5) + 32
// TODO 2 : Calculate the average
// TODO 3 : Print a nicely formatted result

const numbers = [38, 12, -10]
const toFahrenheit = (celsius) => {
    const result = (celsius * 1.8) + 32
    return result
}
for (let i = 0; i < numbers.length; i++) {
    const fahrenheit = toFahrenheit(numbers[i])
    console.log("The celcius temperature is: " + numbers[i] + " and the Fahrenheit is: " + fahrenheit)
}