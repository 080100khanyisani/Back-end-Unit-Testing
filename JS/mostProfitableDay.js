export default function mostProfitableDay(days) {
    var dayMap = {};
    for (let i = 0; i < days.length; i++) {
        var day = days[i].day;
        var sales = days[i].sales;
        if (day in dayMap) {
            dayMap[day] += sales;
        } else {
            dayMap[day] = sales;
        }
    }
    var total_sales = 0;
    var mostProfitableDay;
    for (let day in dayMap) {
        if (dayMap[day] > total_sales) {
            total_sales = dayMap[day];
            mostProfitableDay = day;
        }
    }
  	console.log(mostProfitableDay);
    return mostProfitableDay;
}