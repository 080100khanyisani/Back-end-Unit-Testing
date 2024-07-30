export default function fromWhere(regNo) {
    var upperCaseNo = regNo.toUpperCase();
    if (upperCaseNo.startsWith("CY")) {
        return "Bellville";
    } else if (upperCaseNo.startsWith("CJ")) {
        return "Paarl";
    } else if (upperCaseNo.startsWith("CA")) {
        return "Cape Town";
    } else {
        return "Some other place!";
    }
}