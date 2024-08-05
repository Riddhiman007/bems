const test = require("ava")

const {calculateTotalMarks} = require("../exam")

let data = {"English": 34, "Hindi": 45}

function calculateTotalMarksJs(totalMarksPerSubject) {
    let total_marks = 0;
    Object.values(totalMarksPerSubject).forEach((sub) => {
        total_marks += sub;
    });
    return total_marks;
}

test('calculate marks', async (t) => {
    let res = await calculateTotalMarks(JSON.stringify(data), [])
    console.log(res);
    t.is(res, calculateTotalMarksJs(data))
})
