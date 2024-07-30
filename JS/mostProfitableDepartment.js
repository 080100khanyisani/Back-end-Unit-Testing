export default function mostProfitableDepartment(items) {
    var saleMap = {};
    for (let i = 0; i < items.length; i++) {
        var dep = items[i].department;
        var sales = items[i].sales;
        saleMap[dep] = (saleMap[dep] || 0) + sales;
    }
    var total_sales = 0;
    var mostProfitableDept;
    for (let department in saleMap) {
        if (saleMap[department] > total_sales) {
            total_sales = saleMap[department];
            mostProfitableDept = department;
        }
    }
	console.log(mostProfitableDept);
    return mostProfitableDept;
}
