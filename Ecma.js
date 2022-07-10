console.log("Hola desde la consola");



const isCompleted = false;


const tasks = [
    {
        description: "Monalisa",
        isCompleted: false,
    },
    {
        description: "Ultima Cena",
        isCompleted: false
    },

    {
        description: "Noche Estrellada",
        isCompleted: false
    },
    {
        description: "Guernica",
        isCompleted: false
    },
    {
        description: "El Grito",
        isCompleted: false
    },
    {
        description: "Creacion de Adan",
        isCompleted: false
    },
    {
        description: "Las meninas",
        isCompleted: false
    },
    {
        description: "Nacimiento de Venus",
        isCompleted: false
    },
    {
        description: "El beso",
        isCompleted: false
    },
    {
        description: "La joven de la Perla",
        isCompleted: false
    },
    {
        description: "La ronda de la Noche",
        isCompleted: false
    },
    {
        description: "La balsa de la Medusa",
        isCompleted: false
    }
];

const toggleTaskCompleted = (index) => {
    tasks[index].isCompleted = !tasks[index].isCompleted;
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
}



toggleTaskCompleted(0)
deleteTask(0)
console.log(tasks)