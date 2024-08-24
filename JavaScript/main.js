// burger menu
const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})






//  form login

// Получаем элементы
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");

// Функция открытия модального окна
const openModal = () => {
  modal.style.display = "block";
};

// Функция закрытия модального окна
const closeModal = () => {
  modal.style.display = "none";
};

// Добавляем обработчики событий
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);


