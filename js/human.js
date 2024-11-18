export default class Human {
    #name = null;
    #age = null;
    get age() { return this.#age };
    get name() { return this.#name };
    

    set name(value) { this.#name = value };
    set age(value) {
        if (value < 0 || value > 130) {
            throw new error('invalid age');
        } else
            this.#age = value;//# na dile error: Maximum call stack size exceeded
    };
    constructor(name, age) {
        this.#name = name;
        this.age = age;// public ly use kora jabe na jodi # dei
    }
    talk(sentence) {
        console.log(this.#name + 'says:' + sentence);

    }
}
