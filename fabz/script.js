class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.major = major;
    }

    displayInfo() {
        return `
            <strong>Name:</strong> ${this.getName()}<br>
            <strong>Age:</strong> ${this.getAge()}<br>
            <strong>Occupation:</strong> ${this.getOccupation()}<br>
            <strong>Major:</strong> ${this.major}
        `;
    }

    logInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Occupation: ${this.getOccupation()}`);
        console.log(`Major: ${this.major}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const student = new Student('March', 24, 'Instructor', 'Programming');
    document.getElementById('student-info').innerHTML = student.displayInfo();
    student.logInfo();
});
