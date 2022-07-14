
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

function captura(){
  const nombrePint = document.getElementById('inputPintura').value;
  addTask(nombrePint);
}


addTask("Monalisa")
addTask("Noche estrellada")

console.log(tasks)

























// const container = document.getElementById('app');
// container.className = 'recomendaciones';

// const title = createNode('h1', 'Nueva Pintura');
// title.className = "h1P"

// const addButton = createNode('button', 'Add', { type: 'button'});
// addButton.className = "buttonP"

// const input = createNode('input', '', { type: 'text', placeholder: 'New task...'});
// input.className = "inputPintura"


// appendChildren(container, [title, input, addButton]);

// function createNode(type, child, attrs){
//     let node = document.createElement(type);
//     if(attrs){
//         Object.keys(attrs).map(function(attr){
//             node[attr] = attr[attr];
//         });
//     }
//     if (typeof child === "string"){
//         node.appendChild(document.createTextNode(child));
//     } else {
//         node.appendChild(child);
//     }
//     return node
// }

// function appendChildren(node, children){
//     const documentFragment = document.createDocumentFragment();
//     children.forEach(function(child){
//         documentFragment.appendChild(child);
//     })
//     node.appendChild(documentFragment);
// }
















