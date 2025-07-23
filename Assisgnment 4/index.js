//Question 1
// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
let highestAmdPrice = 0;
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > highestAmdPrice) {
        highestAmdPrice = amdPrices[i];
    }
}
console.log("AMD 52-week high is " + highestAmdPrice);

// question 2
let averageAmdPrice = 0;
for (let i = 0; i < amdPrices.length; i++) {
    averageAmdPrice += amdPrices[i];
}
averageAmdPrice /= amdPrices.length;
console.log("AMD 52-week average is " + averageAmdPrice.toFixed(2));

//question 3
const sma = amdPrices.reduce((acc, price) => acc + price, 0) / amdPrices.length;
console.log("AMD 52-week simple moving average is " + sma.toFixed(2));
const daysAboveSMA = amdPrices.filter(price => price > sma).length;
console.log("AMD 52-week days above SMA is " + daysAboveSMA);

//question 4
const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];
const closingPrices = msftData.map(day => day[3]);

const msftDataAverage = closingPrices.reduce((acc, price) => acc + price, 0) / closingPrices.length;
console.log(`Average closing price of MSFT is ${msftDataAverage.toFixed(2)}`);

//question 5
const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];
const disneyClosingPrices = disneyData.map(day => parseFloat(day.close));
const disneyAverageClosingPrice = disneyClosingPrices.reduce((acc, price) => acc + price, 0) / disneyClosingPrices.length;
console.log(`Average closing price of Disney is ${disneyAverageClosingPrice.toFixed(2)}`);

//question 6
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]
const sortedPrices = [...amdPrices].sort((a, b) => a - b);
const lowestPrices = sortedPrices.slice(0, 3);
let data = []
console.log(`The three lowest prices are ${lowestPrices[0]}, ${lowestPrices[1]}, and ${lowestPrices[2]}`);