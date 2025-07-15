
// Question 1 answer 193.204
const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];
const msftAverage = msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4];
console.log(msftAverage / msftData.length);

// Question 2 answer [190.15, 194.21, 191.07, 190.44, 200.15, 205.67]
msftData.push(205.67);
console.log(msftData);

//Question 3 answer -2.57
const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
}
const disneyChange = (parseFloat(disneyData.open) - parseFloat(disneyData.high) + parseFloat(disneyData.low) - parseFloat(disneyData.close)).toFixed(2);
console.log(disneyChange);

// Question 4  answer{
// 	open: "120.54",
// 	high: "122.56",
// 	low: "120.54",
// 	close: "121.09",
// 	volume: "1512311"
// }
disneyData.volume = "1512311";
console.log(disneyData);

// Question 5 answer Strong Bullish
const bacData = [190.15, 194.21, 191.07, 192.44, 129000];
if (bacData[3] > bacData[2]) {
	console.log("Bullish");
}
else if (bacData[3] < bacData[2]) {
    console.log("Bearish");
}
else if (bacData[3] === bacData[2]) {
    console.log("Neutral");
}   

// Question 6 answer Bullish 
const disneyDatas = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}

if (disneyDatas.close > disneyDatas.open) {
    if (disneyData.volume > 100000) {
        console.log("Strong Bullish");
    } else {
        console.log("bullish");
    }
} else if (disneyDatas.close < disneyDatas.open) {
    if (disneyDatas.volume > 100000) {
        console.log("Strong Bearish");
    } else {
        console.log("Bearish");
    }
} else {
    console.log("Neutral");
};