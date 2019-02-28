// CODE here for your Lambda Classes
//Person constructor
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

//Instructor constructor
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

//Student constructor
class Student extends Person {
    constructor(studies) {
        super(studies);
        this.previousBackground = studies.previousBackground;
        this.className = studies.className;
        this.favSubjects = studies.favSubjects;
    }
    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i])
        };
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    };
}

//Project Manager constructor
class ProjectManagers extends Instructor {
    constructor(section) {
        super(section);
        this.gradClassName = section.gradClassName;
        this.favInstructor = section.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to channel, @channel standy times!`)
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`)
    };
}