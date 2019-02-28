// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.gender = info.gender;
        this.location = info.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    };
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    };
}