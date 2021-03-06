const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//funcionalidades
function getSubject(subjectNumber) {
    return subjects[+subjectNumber -1]
}

function convertHoursToMinutes(time) {
    const [hour, minute] = time.split(":");
    return Number(hour * 60) + minute;
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}