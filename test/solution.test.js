// Write your tests here!
const findLowestScoringStudent = require('../src/solution');

describe('findLowestScoringStudent',()=>{
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
    const emptyStudents=[];
    it('should return an object when a non empty list is provided',()=>{
        const expected = { name: "Morgan Sutton", score: 7.4 }
        const actual = findLowestScoringStudent(students);
        expect(actual).toEqual(expected);
    })
    it('should return null when an empty student list is given',()=>{
        const actual = findLowestScoringStudent(emptyStudents);
        expect(actual).toBeNull();
    })
})