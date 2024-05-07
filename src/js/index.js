window.addEventListener('DOMContentLoaded', () => {
	// modalWindows();
	// scrollup();
	// oversizeForm();
	// callbackForm();
	// inputFile();
	// mobileNav();
	cursor();
	nav();
});

document.addEventListener('click', (event) => {
	console.log(event.target);
})

function scrollup() {
	const scrollup = document.querySelector('.scrollup');
	scrollup.style.opacity = 0;
	document.addEventListener('scroll', () => {
		scrollup.style.opacity = window.scrollY > 300 ? 1 : 0;
	});
	scrollup.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
};

function cursor() {
	document.addEventListener('mousemove', (event) => {
		document.body.style = `background-image: radial-gradient(600px at ${event.pageX}px ${event.pageY}px, rgba(29, 78, 216, 0.2), transparent 80%);`;
	});
}

function nav() {
	document.addEventListener('scroll', (event) => {

		const scrollPosition = window.scrollY;
		// console.log('scrollPosition', scrollPosition)

		var about = document.getElementById('about');
		// var yPosition = about.offsetTop;
		// console.log('about', about.offsetTop, about.clientHeight)

		var projects = document.getElementById('projects');
		// var yPosition = projects.offsetTop;
		// console.log('projects', projects.offsetTop, projects.clientHeight)

		var experience = document.getElementById('experience');
		// var yPosition = experience.offsetTop;
		// console.log('experience', experience.offsetTop, experience.clientHeight)

		// for (let i = 0; i < navLinks.length; i++) {
		// 	navLinks[i].addEventListener('click', scrollToTarget);
		// }
		// console.log(scrollPosition, projects.offsetTop,)

		if (scrollPosition > about.offsetTop - 250 && scrollPosition < about.offsetTop + about.clientHeight - 250) {
			document.querySelectorAll('.nav-link')[0].classList.add('nav-link--active');
		} else {
			document.querySelectorAll('.nav-link')[0].classList.remove('nav-link--active');
		}

		if (scrollPosition > projects.offsetTop - 250 && scrollPosition < projects.offsetTop + projects.clientHeight - 250) {
			document.querySelectorAll('.nav-link')[1].classList.add('nav-link--active');
		} else {
			document.querySelectorAll('.nav-link')[1].classList.remove('nav-link--active');
		}

		if (scrollPosition > experience.offsetTop - 250 && scrollPosition < experience.offsetTop + experience.clientHeight - 250) {
			document.querySelectorAll('.nav-link')[2].classList.add('nav-link--active');
		} else {
			document.querySelectorAll('.nav-link')[2].classList.remove('nav-link--active');
		}
	});
};