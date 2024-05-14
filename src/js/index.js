window.addEventListener('load', () => {
	loader();
	metrika();
});

document.addEventListener('mousemove', () => {
	cursor();
}, { once: true });

window.addEventListener('scroll', () => {
	nav();
	projects();
}, { once: true });

function loader() {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

function cursor() {
	document.addEventListener('mousemove', (event) => {
		document.body.style = `background-image: radial-gradient(600px at ${event.pageX}px ${event.pageY}px, rgba(29, 78, 216, 0.2), transparent 80%);`;
	});
}

function nav() {
	document.addEventListener('scroll', () => {
		const about = document.getElementById('about');
		const projects = document.getElementById('projects');
		const experience = document.getElementById('experience');

		const scrollPosition = window.scrollY;

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

function projects() {
	const section = document.getElementById('projects');
	let projects = section.querySelectorAll('ul.projects__list>li');
	const details = section.querySelector('.projects__details');
	const moreButton = details.querySelector('.details-button--more');
	const lessButton = details.querySelector('.details-button--less');
	const visible = 3;
	let count = visible;

	renderProjects();
	renderButtons();

	moreButton.addEventListener('click', () => {
		count++;

		projects[count - 1].classList.add('animation-appear');
		setTimeout(() => { projects[count - 1].classList.remove('animation-appear'); }, 2000);

		renderProjects();
		setTimeout(renderButtons, 500);
	});

	lessButton.addEventListener('click', () => {
		count = visible;

		projects.forEach((project, index) => {
			if (index > visible - 1) {
				project.classList.add('animation-disappear');
			}
		});

		setTimeout(() => {
			projects.forEach((project, index) => {
				if (index > visible - 1) {
					project.classList.remove('animation-disappear');
				}
			})
		}, 2000);

		setTimeout(renderProjects, 2000 - 50);
		setTimeout(renderButtons, 500);
	});

	function renderButtons() {

		if (projects.length <= count) {
			moreButton.style.display = "none";
			lessButton.style.removeProperty('display')
		}

		if (projects.length > count) {
			lessButton.style.display = "none";
			moreButton.style.removeProperty('display')
		}
	}

	function renderProjects() {
		projects.forEach((project, index) => {
			if (index < count) {
				project.style.removeProperty('display')
			}

			if (index >= count) {
				project.style.display = "none";
			}
		});
	}
}

function metrika() {
	(function (d, w, c) {
		(w[c] = w[c] || []).push(function () {
			try {
				w.yaCounter97268095 = new Ya.Metrika({ id: 97268095, clickmap: false, trackLinks: false, accurateTrackBounce: true });
			} catch (e) { }
		});

		var n = d.getElementsByTagName("script")[0],
			x = "https://mc.yandex.ru/metrika/watch.js",
			s = d.createElement("script"),
			f = function () {
				n
					.parentNode
					.insertBefore(s, n);
			};
		for (var i = 0; i < document.scripts.length; i++) {
			if (document.scripts[i].src === x) {
				return;
			}
		}
		s.type = "text/javascript";
		s.async = true;
		s.src = x;

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else {
			f();
		}
	})(document, window, "yandex_metrika_callbacks");
}