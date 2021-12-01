let chooseLevel = document.querySelector('.level');
let button = document.querySelector('.main_button');
let gameField = document.querySelector('.game_field');
let cloud = document.querySelector('.wrapper')


// выделение выбранного уровня

let activeLevel = document.querySelectorAll('.level__choose');
	// activeLevel = Array.prototype.slice.call(activeLevel);
let flag = false;

activeLevel.forEach((chooseLevel) => {
	chooseLevel.addEventListener('click', () => {
		activeLevel.forEach((lvl) => lvl.classList.remove('active_level'));
		chooseLevel.classList.add('active_level');
		flag = true;
	});
})

// определение числа карт для каждого из уровней

function checkLevel () {
	if (activeLevel[0].classList.contains('active_level')) {
		return 3;
	}
	else if (activeLevel[1].classList.contains('active_level')) {
		return 6;
	} else {
		return 10;
	};
}

// функция появления главного экрана

function clearField () {
	let removeWrapper = document.querySelector('.wrapper_active');
	removeWrapper.classList.remove('wrapper_active');
	gameField.style.display = 'none';
	window.location.reload();
}

// создание карты (вместе с переворотом) и очистка поля после двойного нажатия на карту

function createCard (quantity, bugNumber) {
	for (let i = 0; i < quantity; i++) {
		let card = document.createElement ('div');
		let cardInner = document.createElement('div');
		let cardFront = document.createElement('div');
		let cardBack = document.createElement ('div');

		card.className = 'flip_card';
		gameField.append(card);

		cardInner.className = 'flip_card__inner';
		card.append(cardInner);

		cardFront.className = 'flip_card__front';
		cardInner.append(cardFront);

		cardBack.className = 'flip_card__back';
		cardInner.append(cardBack);
		

		function rotate (){
			cardInner.classList.toggle('rotate');
			if (i === bugNumber - 1) {
				cardBack.classList.add('flip_bugcard__back');
			}
			let cards = document.querySelectorAll('.flip_card');
			cards.forEach(card => card.addEventListener('click', clearField));
		}
		card.addEventListener('click', rotate);		
	}
}

function randomCard (min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function startGame () {
	if (flag === true) {
		cloud.classList.add('wrapper_active');
		gameField.style.display = 'flex';
		createCard(checkLevel(), randomCard(1, checkLevel()));
    } else {
    	alert('Выберите уровень и нажмите "НАЧАТЬ ИГРУ"');
    }
}

button.addEventListener('click', startGame);

