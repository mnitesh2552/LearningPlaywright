let score = 5;

if (score >= 9 && score <= 10) {
    console.log("Severity: Critical — Block release");
}
else if (score >= 7 && score <= 8) {
    console.log("Severity: High");
}
else if (score >= 4 && score <= 6) {
    console.log("Severity: Medium");
}
else if (score >= 1 && score <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("Invalid score");
}
