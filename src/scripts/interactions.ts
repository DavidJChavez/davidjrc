import { initThemeToggle } from './theme';

const prefersReducedMotion = () =>
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
	const els = document.querySelectorAll<HTMLElement>('.reveal');
	if (!els.length) return;

	if (prefersReducedMotion()) {
		els.forEach((el) => el.classList.add('in'));
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const el = entry.target as HTMLElement;
				const delay = Number(el.dataset.delay ?? 0);
				setTimeout(() => el.classList.add('in'), delay);
				io.unobserve(el);
			});
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
	);

	els.forEach((el) => io.observe(el));
}

function initHeroLetters() {
	const title = document.querySelector<HTMLElement>('.hero-title');
	if (!title) return;

	if (prefersReducedMotion()) {
		title.classList.add('in');
		title.querySelectorAll('.hero-letter').forEach((letter) => {
			(letter as HTMLElement).style.transitionDelay = '0ms';
		});
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const el = entry.target as HTMLElement;
				el.classList.add('in');
				el.querySelectorAll<HTMLElement>('.hero-letter').forEach((letter, i) => {
					letter.style.transitionDelay = `${80 + i * 35}ms`;
				});
				io.unobserve(el);
			});
		},
		{ threshold: 0.2 },
	);

	io.observe(title);
}

function initScrollSpy() {
	const sections = document.querySelectorAll<HTMLElement>('section[id]');
	const links = document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]');
	if (!sections.length || !links.length) return;

	const map = new Map<string, HTMLAnchorElement>();
	links.forEach((link) => {
		const id = link.getAttribute('href')?.slice(1);
		if (id) map.set(id, link);
	});

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const id = entry.target.id;
				links.forEach((link) => link.classList.remove('is-active'));
				map.get(id)?.classList.add('is-active');
			});
		},
		{ rootMargin: '-40% 0px -50% 0px', threshold: 0 },
	);

	sections.forEach((section) => io.observe(section));
}

function initTiltCards() {
	if (prefersReducedMotion()) return;

	document.querySelectorAll<HTMLElement>('.proj-card').forEach((card) => {
		card.addEventListener('mousemove', (e) => {
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;
			card.style.setProperty('--ry', `${x * 6}deg`);
			card.style.setProperty('--rx', `${-y * 6}deg`);
		});

		card.addEventListener('mouseleave', () => {
			card.style.setProperty('--ry', '0deg');
			card.style.setProperty('--rx', '0deg');
		});
	});
}

function initMagneticButtons() {
	if (prefersReducedMotion()) return;

	document.querySelectorAll<HTMLElement>('.btn.magnetic').forEach((btn) => {
		btn.addEventListener('mousemove', (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
		});

		btn.addEventListener('mouseleave', () => {
			btn.style.transform = '';
		});
	});
}

function init() {
	initReveal();
	initHeroLetters();
	initScrollSpy();
	initTiltCards();
	initMagneticButtons();
	initThemeToggle();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
