// Global variables declaration
const font = document.querySelectorAll('.fontName');
const sample = document.querySelectorAll('.sampleFont');
const backToTopButton = document.getElementById("backToTopButton");

// Get each font name
sample.forEach(e => e.style.fontFamily = e.previousElementSibling.children[0].children[0].innerText);

// When the user selects a different option, change each font card font size
function changeFontSize() {
	const value = document.getElementById("select_id").value;
	sample.forEach(e => e.style.fontSize = value);
}	

// When the user types anything, use it in each font card
function changeText() {
	let textId = document.getElementById("text_id").value;
	if(textId === ""){
		textId = "Then came the night of the first failing star."
	}	
	sample.forEach(e => e.innerHTML = "<p>"+textId+"</p>");
}

// When the user clicks on the button, check which configuration is currently (if it has flex class) and change main div to either list or grid layout
function listGrid() {
	const main = document.querySelector('.main');
	main.classList.contains('flex') ? main.classList.remove("flex") : main.classList.add("flex");
	const listOrGrid = document.querySelector('#listOrGrid');
	let color = "";
	main.classList.contains('flex') ? color = document.querySelector('i.fas.fa-border-all').style.color : color = document.querySelector('i.fas.fa-list-ul').style.color;
	main.classList.contains('flex') ? listOrGrid.innerHTML = "<i class='fas fa-list-ul'></i>" : listOrGrid.innerHTML = "<i class='fas fa-border-all'></i>";
	main.classList.contains('flex') ? document.querySelector('i.fas.fa-list-ul').style.color = color : document.querySelector('i.fas.fa-border-all').style.color = color;
}

// When the user clicks on the button, reset to main configuration: grid configuration, text size 32px, change to white and restore default text
function resetMain() {
	document.querySelector('.main').classList.add("flex");
	document.querySelector('#listOrGrid').innerHTML = "<i class='fas fa-list-ul'></i>";
	document.getElementById("text_id").value = "";
	document.getElementById("select_id").value = "32px";
	changeFontSize();
	changeToWhite();
	sample.forEach(e => e.innerHTML = "<p>Then came the night of the first failing star.</p>");
}

// When the user clicks on the button, change to dark mode: background to black, text to white, logo background image to black
function changeToDark() {
	if (document.querySelector('.nav').style.color === 'white'){
		return;
	}	
	document.querySelector('body').classList.add("black");
	document.querySelector('.nav').style.color = "white";
	document.querySelector('select').style.color = "white";
	const options = document.querySelectorAll('.option');
	options.forEach(e => e.style.backgroundColor = "black");
	document.querySelector('#logo').src = "imgs/logo_dark.jpg";
	document.querySelector('.round').classList.add("black");
	document.querySelector('#text_id').style.color = "white";
	document.querySelector('button.round.black').style.border = "1px solid white";
	document.querySelector('button.round.white').style.border = "1px solid white";
	font.forEach(e => e.style.color = "white");
	sample.forEach(e => e.style.color = "white");
	document.querySelector('i.fas.fa-list-ul') ? document.querySelector('i.fas.fa-list-ul').style.color = "white" : "";
	document.querySelector('i.fas.fa-border-all') ? document.querySelector('i.fas.fa-border-all').style.color = "white" : "";
	document.querySelector('i.fas.fa-redo').style.color = "white";
	document.querySelector('.footer').style.backgroundImage = "linear-gradient(#222222, #646464)";
	document.querySelector('.footer').style.color = "white";
}

// When the user clicks on the button, change back to initial mode: background to white, text to black, logo background image to white
function changeToWhite() {
	if (document.querySelector('.nav').style.color === 'black'){
		return;
	}	
	document.querySelector('body').classList.remove("black");
	document.querySelector('.nav').style.color = "black";
	document.querySelector('select').style.color = "black";
	const options = document.querySelectorAll('.option');
	options.forEach(e => e.style.backgroundColor = "white");
	document.querySelector('#text_id').style.color = "black";
	document.querySelector('#logo').src = "imgs/logo.jpg";
	document.querySelector('button.round.black').style.border = "1px solid black";
	document.querySelector('button.round.white').style.border = "1px solid black";
	font.forEach(e => e.style.color = "black");
	sample.forEach(e => e.style.color = "black");
	document.querySelector('i.fas.fa-list-ul') ? document.querySelector('i.fas.fa-list-ul').style.color = "black" : "";
	document.querySelector('i.fas.fa-border-all') ? document.querySelector('i.fas.fa-border-all').style.color = "black" : "";
	document.querySelector('i.fas.fa-redo').style.color = "black";
	document.querySelector('.footer').style.backgroundImage = "linear-gradient(white, #d9d9d9)";
	document.querySelector('.footer').style.color = "black";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.style.display = "none";
	}
};

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
