import Human from "./human.js";

export default class Student extends Human {

    //# na dile conlose a error dichhilo :Private field '#age' must be declared in an enclosing class
    #id = null;
    #grades = null;

    get ID() { return this.#id};

static get validGrades() {   
    return [
        '-3', '02', '00', '02', '4', '7', '10', '12'
    ]
}

    constructor(studentId, studentName, studentAge = 18) {
        super(studentName, studentAge);
        this.#id = studentId;
        this.#grades = [];
    }
    receiveGrade(grade, subject) {
        this.#grades[subject] = grade;
    }

}