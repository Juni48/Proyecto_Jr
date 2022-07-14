console.log("Hola desde la consola");









const isCompleted = false;
const tasks = [];


const Task = function(description, isCompleted){
    this.description = description;
    this.isCompleted = isCompleted;
}

function addTask(description, isCompleted = false){
    tasks.push(new Task(description, isCompleted));
}

function toggleTaskCompleted(tasks, index) {
    const newTasks = [].concat(tasks);
    if(newTasks[index]) {
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
    }
    return newTasks;
  }

function deleteTask(tasks, index) {
    const newTasks = tasks.filter(function(task, i) {
      return i !== index;
    })
    return newTasks;
  }


addTask("Monalisa", true)
addTask("Noche estrellada")

console.log(tasks)
