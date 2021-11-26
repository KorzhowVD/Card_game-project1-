
let chooseLevel = document.getElementById("level");

// выделение выбранного уровня

let activeLevel = document.querySelectorAll('level__choose');
activeLevel.forEach(chooseLevel => {
	chooseLevel.addEventListener('click', () => {
		activeLevel.forEach(lvl => lvl.classList.remove('active_level'));
		chooseLevel.classList.add('active_level');
	});
})







// let addGameField = document.createElement('div');
// addGameField.className = 'wrapped_game';
// document.body.append(addGameField);



// let button = getElementById('button');
// let 

