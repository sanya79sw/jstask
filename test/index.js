const test = require('ava');
const gradingStudents = require('../src/index');

test('Must be return grades', t => {
    t.deepEqual(gradingStudents([28, 43, 67, 99, 84]), [28, 45, 67, 100, 85]);
});

test('Value is not a number', t => {
    const error = gradingStudents([28, 43, 67, '12', 84]);
    t.is(error.message, '');
});