export function getStoredTheme(): 'light' | 'dark' {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: 'light' | 'dark') {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem('theme', theme);
}

export function toggleTheme(): 'light' | 'dark' {
	const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
	applyTheme(next);
	return next;
}

export function initThemeToggle() {
	const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
	buttons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const theme = toggleTheme();
			btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
			const label = btn.querySelector('.theme-label');
			if (label) {
				const light = label.getAttribute('data-theme-light') ?? 'light';
				const dark = label.getAttribute('data-theme-dark') ?? 'dark';
				label.textContent = theme === 'dark' ? dark : light;
			}
		});
	});
}

export function initNoFlashTheme() {
	const theme = getStoredTheme();
	document.documentElement.dataset.theme = theme;
}
