const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description){
	/*cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido. */
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);


	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);
	


	/*O Element.classList é uma propriedade somente leitura que retorna uma coleção ativa dos atributos de classe do elemento. */
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);


	/*O appendChild()método anexa um nó (elemento) como o último filho de um elemento. */
	taskList.appendChild(taskContainer);



}

