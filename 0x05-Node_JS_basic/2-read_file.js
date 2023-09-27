const { error } = require('console');
const fs = require('fs');

const countStudents = (path) => {
    if (!fs.existsSync(path)) {
        throw new error("Cannot load the database");
    }
    if (!fs.statSync(path).isFile()) {
        throw new error("Cannot load the database");
    }
    const fileLines = fs.readFileSync(path, "utf-8")
        .toString("utf-8").trim().split("\n");
    const studentGroups = {};
    const fieldNames = fileLines[0].split(",");
    const studentNames = fieldNames.slice(0, fieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(",");
        const studentValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
        }
        const studentEntries = studentNames
            .map((Name, idx) => [Name, studentValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
    }
    const totalStudents = Object.values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
};

module.exports = countStudents;