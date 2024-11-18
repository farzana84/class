import Student from "./student.js";

export default class ElementarySchoolStudent extends Student {

    //# na dile conlose a error dichhilo :Private field '#age' must be declared in an enclosing class
    #id = null;
    #grades = null;

    get ID() {
        return this.#id
    };
    constructor(id, name, age = 7) {
        super(id, name, age);
    }
     requestSchoolMilk(){
        console.log('Moo!');
        
     }
       
    
    receiveGrade(grade, subject) {
        this.#grades[subject] = grade;
    }

}