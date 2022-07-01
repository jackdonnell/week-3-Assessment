console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const pictureCompliment = (event) => {
	event.preventDefault()
	alert('you did a dope mouseover, my guy')
}

let pic = document.querySelector('img')
pic.addEventListener('mouseover', pictureCompliment)
