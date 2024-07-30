export default function countAllFromTown(regNumbersString, town) {
    var regNumbersArray = regNumbersString.split(",");
    var countTown = 0;
    for (var i = 0; i < regNumbersArray.length; i++) {
         var CountedList = regNumbersArray[i].trim();
        if (CountedList.startsWith(town)) {
            countTown++;
        }
    }
    return countTown;
}