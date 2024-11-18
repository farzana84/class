/*
Math
JSON
URLSearchParams
URL

const params = new URLSearchParams();
*/ 
import WebDevelopmentStudent from './web-development-student.js';
import ElementarySchoolStudent from './elementary-school-student.js';
import Student from './student.js' //default export kora thakle curly bracket dea jabe na
import Teacher from './teachers.js' 
import Timecode from './timecode.js';
const student = new Student(1234, 'bob', 20);
const teacher = new Teacher('henrik', 99)
const elementarySchoolStudent = new ElementarySchoolStudent(999, 'Flemming', 10);
const webDevelopmentStudent = new WebDevelopmentStudent(999, 'Flemming', 26, 'javascript');
student.talk('har vi fri nu?');
teacher.talk('Nej!');
elementarySchoolStudent.talk('hahaha');
console.log(webDevelopmentStudent.tecSkill);



/*const buttons = document.getElementsByClassName('menu-buttons');//html coolection
const otherButtons = document.querySelectorAll('.buttons');// nodelist
const newArray = Array.from(buttons);
buttons.forEach(element => {

});*/

console.log('grades:', student.validGrades);
console.log('get grades by class:', Student.validGrades);// static use na korle eta undefined ashto
console.log('time:', Timecode.fromSeconds(5000));


//const myArray = [];

//student.receiveGrade(12, 'Naturfag');
//student.receiveGrade('02', 'Fransk');
//student.age = 300; //eta commit kore disi tai default 20 dekhabe
//student.age ='hest';
//student.age =10;
//student.ID = 123;//error ashe: cannot set value to a read only property ID
//console.log(student.name);
//console.log('grade' , student.grades);


