const colorBtn = (event) => {
    event.preventDefault()
	alert('Red')
}


let btn1 = document.querySelector('#color')
btn1.addEventListener('click' , colorBtn)

const placeBtn = (event) => {
    event.preventDefault()
	alert('Koh Rong Sanloem, Cambodia')
}


let btn2 = document.querySelector('#place')
btn2.addEventListener('click' , placeBtn)

const ritualBtn = (event) => {
    event.preventDefault()
	alert('Going to the gym')
}


let btn3 = document.querySelector('#ritual')
btn3.addEventListener('click' , ritualBtn)