const dataBase = require("./db")
const createProffy = require("./createProffy")

dataBase.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "89989321",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",    
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados
    
    //Consultando dados de todos os professores
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //Consultando dados de um unico professor professor
    //unindo as tabelas proffy e classes no trecho JOIN
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id) 
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"

    `)
    //console.log(selectClassesSchedules)
})