const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// html template for li
const generateTemplate = (todo) => {
	const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
		    <span>${todo}</span>
		    <i class="far fa-trash-alt delete"></i>
	    </li>
    `;
	list.innerHTML += html;
};

// add an entry to the list

addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim().toLowerCase();
	// console.log(todo);
	if (todo.length) {
		generateTemplate(todo);
		addForm.reset(); // reset clears all form fields
		// addForm.add.value = ''; // this would only clear current field
	}
});

// delete an entry from the list

list.addEventListener('click', (e) => {
	// console.log(target);
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// search and filter items while typing
const filterTodos = (term) => {
	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => {
			todo.classList.add('filtered');
		});
	Array.from(list.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => {
			todo.classList.remove('filtered');
		});
};

search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	// console.log(term);
	filterTodos(term);
});
