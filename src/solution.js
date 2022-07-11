function findLowestScoringStudent(students) {
    if(students.length === 0){
        return null
    }
    const sorted = students.sort((nameA,nameB)=> nameA.score - nameB.score)
    return sorted[0]
}

module.exports = findLowestScoringStudent;
