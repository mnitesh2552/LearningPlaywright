class Student {

    // Static Variable
    static batchName = "Playwright 2X";

    // Constructor
    constructor(name) {
        this.name = name;
    }

    // Non-Static Method
    printStudent() {
        console.log("Student Name =", this.name);
    }

    // Static Method
    static printBatch() {
        console.log("Batch Name =", Student.batchName);
    }
}

let s1 = new Student("Nitesh");
let s2 = new Student("Rahul");
let s3 = new Student("Amit");
let s4 = new Student("Ravi");
let s5 = new Student("Karan");
let s6 = new Student("Vijay");
let s7 = new Student("Ankit");
let s8 = new Student("Neha");
let s9 = new Student("Priya");
let s10 = new Student("Pooja");

s1.printStudent();
s2.printStudent();
s3.printStudent();
s4.printStudent();
s5.printStudent();
s6.printStudent();
s7.printStudent();
s8.printStudent();
s9.printStudent();
s10.printStudent();

Student.printBatch();