export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

export interface StudentConstructor { 
    new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}

export function createStudentFunction(stores: StudentConstructor, firstName: string, lastName: string): StudentClassInterface {
    return new stores(firstName, lastName);
}