import type { TranslationKey } from '../i18n';

export type ProjectPreviewKind = 'ftp' | 'toolbox';

export interface LocalizedText {
	en: string;
	es: string;
}

export interface Project {
	n: string;
	title: string;
	tagline: LocalizedText;
	body: LocalizedText;
	stack: string[];
	year: string;
	repo: string;
	href: string;
	accentLabel: string;
	preview: ProjectPreviewKind;
}

export interface ExperienceItem {
	year: string;
	role: string;
	company: string;
	note: LocalizedText;
}

export interface StackGroup {
	key: 'stackLanguages' | 'stackFrontend' | 'stackBackend' | 'stackInfra';
	items: string[];
}

export const PROJECTS: Project[] = [
	{
		n: '01',
		title: 'MielFTP',
		tagline: {
			en: "A native FTP client that doesn't look like 1998.",
			es: 'Un cliente FTP nativo que no parece de 1998.',
		},
		body: {
			en: 'Native desktop FTP client in Rust with Iced. Dual-pane interface, async network operations with Tokio + suppaftp, and the full Elm cycle (boot / update / view) — no web runtime in sight.',
			es: 'Cliente FTP de escritorio nativo en Rust con Iced. Interfaz dual-pane, operaciones de red asíncronas con Tokio + suppaftp, y todo el ciclo Elm (boot / update / view) sin un runtime web a la vista.',
		},
		stack: ['Rust', 'Iced', 'Tokio'],
		year: '2024',
		repo: 'github.com/DavidJChavez/miel-ftp',
		href: 'https://github.com/DavidJChavez/miel-ftp',
		accentLabel: 'OSS · Rust',
		preview: 'ftp',
	},
	{
		n: '02',
		title: 'Toolbox',
		tagline: {
			en: 'Fifteen sharp utilities. No backend, no telemetry.',
			es: 'Quince utilidades útiles. Sin backend, sin telemetría.',
		},
		body: {
			en: 'Suite of 15+ dev tools (JWT, JSON, hashes, regex, diff, QR…) that run 100% in the browser. Each tool exposes run(input) → output with typed inputs — the next phase is chaining them as nodes in a visual dataflow editor.',
			es: 'Suite de 15+ herramientas de dev (JWT, JSON, hashes, regex, diff, QR…) que corren 100% en el navegador. Cada tool expone run(input) → output con entradas tipadas — la siguiente fase es encadenarlas como nodos en un editor de dataflow visual.',
		},
		stack: ['Svelte 5', 'TypeScript', 'Tailwind'],
		year: '2025 — ongoing',
		repo: 'github.com/DavidJChavez/toolbox',
		href: 'https://github.com/DavidJChavez/toolbox',
		accentLabel: 'OSS · Web',
		preview: 'toolbox',
	},
];

export const EXPERIENCE: ExperienceItem[] = [
	{
		year: 'Jul 2025 — Now',
		role: 'Senior Software Engineer',
		company: 'Hitss · América Móvil',
		note: {
			en: 'Leading the frontend for Cambaceo, a field sales PWA for Telcel with 10,000+ active users — Angular with geolocation, OneSignal push, surveys, and scheduling. In parallel, internal CAC screens, bare-metal deployments with nginx, and CI/CD pipeline proposals to shorten the team release cycle.',
			es: 'Lidero el frontend de Cambaceo, una PWA de ventas en campo para Telcel con 10,000+ usuarios activos — Angular con geolocalización, push de OneSignal, encuestas y agendamiento. En paralelo, pantallas internas del CAC, despliegues bare-metal con nginx, y propuestas de pipelines CI/CD para acortar el ciclo de liberación del equipo.',
		},
	},
	{
		year: 'Mar 2021 — Dec 2025',
		role: 'Senior Fullstack Developer',
		company: 'CENEVAL · vía Corporativo EMETH',
		note: {
			en: 'Designed and built 10+ subsystems for the educational platform: exam management, question banks, staff, institutions, and payments (BBVA Multipagos). REST APIs in Java with Spring Boot and Quarkus, frontends in Angular 14–16 with TypeScript and RxJS, and a shared component library across all subsystems. Led code reviews and trained the team on Angular and Java.',
			es: 'Diseñé y desarrollé 10+ subsistemas de la plataforma educativa: gestión de exámenes, reactivos, personal, instituciones y pagos (BBVA Multipagos). APIs REST en Java con Spring Boot y Quarkus, frontends en Angular 14–16 con TypeScript y RxJS, y una librería de componentes compartida entre todos los subsistemas. Lideré code reviews y capacité al equipo en Angular y Java.',
		},
	},
	{
		year: 'Nov 2019 — Mar 2021',
		role: 'Frontend Developer Intern',
		company: 'CTIN · Grupo Carso',
		note: {
			en: 'Reusable UI components for the internal streaming platform. JavaScript, CSS, and the reasonable amount of mistakes you make when starting out.',
			es: 'Componentes UI reutilizables para la plataforma interna de streaming. JavaScript, CSS, y la cantidad razonable de errores que se cometen empezando.',
		},
	},
];

export const STACK: StackGroup[] = [
	{
		key: 'stackLanguages',
		items: ['JavaScript', 'TypeScript', 'Go', 'Rust', 'Kotlin', 'Java'],
	},
	{
		key: 'stackFrontend',
		items: ['Angular 2+', 'SvelteKit', 'Tailwind', 'Tauri'],
	},
	{
		key: 'stackBackend',
		items: ['Bun', 'Node', 'Postgres', 'Spring Boot', 'Redis'],
	},
	{
		key: 'stackInfra',
		items: ['AWS', 'GCP', 'Terraform', 'Docker', 'GitHub Actions'],
	},
];

export const NAV_LINKS: { href: string; key: TranslationKey }[] = [
	{ href: '#work', key: 'navWork' },
	{ href: '#experience', key: 'navExperience' },
	{ href: '#writing', key: 'navWriting' },
	{ href: '#stack', key: 'navStack' },
	{ href: '#now', key: 'navNow' },
	{ href: '#contact', key: 'navContact' },
];
