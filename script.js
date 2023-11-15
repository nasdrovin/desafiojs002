const students = [

    {
        name: 'nasdrovin',
        firstNote: 9.5,
        secondNote: 6
    },
    {
        name: 'Andressa',
        firstNote: 8.2,
        secondNote: 2
    },
    {
        name: 'Mayk',
        firstNote: 10,
        secondNote: 10
    },
    {
        name: 'Diego',
        firstNote: 7.5,
        secondNote: 5.25
    }
]

function calculateAverage(student) {
    let average = ((student.firstNote + student.secondNote) / 2).toFixed(1)
    if(average >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}!\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}!\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }
}
calculateAverage(students[0])
calculateAverage(students[1])
calculateAverage(students[2])
calculateAverage(students[3])

