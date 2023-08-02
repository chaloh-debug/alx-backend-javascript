export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Charles',
    lastName: 'Gitahi',
    age: 24,
    location: 'Nairobi',
};
const student2: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'Nairobi',
};

const studentsList: Array<Student> = [student1, student2];

export const displayStudents = (students: Array<Student>): void => {
    for (const student of students) {
        console.log(
            `${student.firstName} ${student.location}`
        );
    }
}