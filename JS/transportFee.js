export default function transportFee(shift) {
    var lowerCaseShift = shift.toLowerCase();
    if (lowerCaseShift === "morning") {
        return "R20"
    } else if (lowerCaseShift === "afternoon") {
        return "R10"
    } else if (lowerCaseShift === "nightshift") {
        return "free"
    }
}