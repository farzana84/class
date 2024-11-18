import Student from "./student.js";

export default class WebDevelopmentStudent extends Student {
    #tecSkill = null;
    get tecSkill() { return this.#tecSkill };
    set tecSkill(value) {this.#tecSkill = value};
    constructor(id, name, age =20, tecSkill) {
        super(id, name, age);
        this.#tecSkill = tecSkill;
    }
    }