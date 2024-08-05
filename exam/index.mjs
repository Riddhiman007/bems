import {createRequire} from "module"

const require = createRequire(import.meta.url)

const native = require("./exam.node")

export function calculateTotalMarks(allSubjectMarks, excludeSubjects) {
    return native.calculateTotalMarks(JSON.stringify(allSubjectMarks), excludeSubjects)
}

export function calculateTotalMarksPerSubject(oralSubjectMarks, writtenSubjectMarks, exclude_subjects) {
    return native.calculateTotalMarksPerSubject(JSON.stringify(oralSubjectMarks), JSON.stringify(writtenSubjectMarks), exclude_subjects)
}

export function calculateFaPercentage(faMarks, fullMarks) {
    return native.calculateFaPercentage(faMarks, fullMarks)
}

export function calculateSa1Percentage(sa1Marks, fullMarks, fa1Percentage) {
    return native.calculateSa1Percentage(sa1Marks, fullMarks, fa1Percentage)
}

export function calculateSa2Percentage(sa2Marks, fullMarks, sa1Percentage) {
    return native.calculateSa2Percentage(sa2Marks, fullMarks, sa1Percentage)
}