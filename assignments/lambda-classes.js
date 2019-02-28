// CODE here for your Lambda Classes
//Person constructor
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
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
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
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
            return this.favSubjects[i]
        };
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
}

//Project Manager constructor
class ProjectManager extends Instructor {
    constructor(section) {
        super(section);
        this.gradClassName = section.gradClassName;
        this.favInstructor = section.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to channel, @channel standy times!`;
    };
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}.`
    };
}

const joe = new Person ({
    name: 'Joe',
    age: 26,
    location: 'Mechanicsville',
    gender: 'male'
});

const natalie = new Person({
    name: 'Natalie',
    age: 24,
    location: 'Medilline',
    gender: 'female'
});

const andy = new Instructor ({
    name: 'Andy',
    age: 36,
    location: 'Mason',
    gender: 'male',
    specialty: 'react',
    favLanguage: 'JavaScript',
    catchPhrase: 'DRUNK WITH POWER'
});

const sarah = new Instructor ({
    name: 'Sarah',
    age: 28,
    location: 'Libertyville',
    gender: 'female',
    specialty: 'data science',
    favLanguage: 'Python',
    catchPhrase: 'syntactical sugar'
});

const mary = new Student ({
    name: 'Mary',
    age: 32,
    location: 'Gordon',
    gender: 'female',
    previousBackground: 'investment banker',
    className: 'ds3',
    favSubjects: ['Python', 'Linear Regression', 'Data Cleaning']
});

const rick = new Student ({
    name: 'Rick',
    age: 21,
    location: 'Pine Bluff',
    gender: 'male',
    previousBackground: 'mechanic',
    className: 'web12',
    favSubjects: ['HTML', 'React', 'Java']
});

const mark = new Student ({
    name: 'Mark',
    age: 24,
    location: 'Richardson',
    gender: 'male',
    previousBackground: 'doctor',
    className: 'web4',
    favSubjects: ['JavaScript', 'CSS', 'HTML']
});

const molly = new ProjectManager ({
    name: 'Rick',
    age: 46,
    location: 'Birmingham, UK',
    gender: 'female',
    gradClassName: 'web2',
    favInstructor: 'Josh' 
});

const jocelyn = new ProjectManager ({
    name: 'Rick',
    age: 27,
    location: 'Milan',
    gender: 'female',
    gradClassName: 'web2',
    favInstructor: 'Ryan'
});