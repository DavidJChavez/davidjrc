export type ProjectPreviewKind = 'ftp' | 'toolbox';

export interface Project {
	n: string;
	title: string;
	tagline: string;
	body: string;
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
	note: string;
}

export interface WritingItem {
	date: string;
	title: string;
	excerpt: string;
	read: string;
}

export interface StackGroup {
	label: string;
	items: string[];
}

export const PROJECTS: Project[] = [
	{
		n: '01',
		title: 'MielFTP',
		tagline: "A native FTP client that doesn't look like 1998.",
		body: 'Cliente FTP de escritorio nativo en Rust con Iced. Interfaz dual-pane, operaciones de red asíncronas con Tokio + suppaftp, y todo el ciclo Elm (boot / update / view) sin un runtime web a la vista.',
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
		tagline: 'Fifteen sharp utilities. No backend, no telemetry.',
		body: 'Suite de 15+ herramientas de dev (JWT, JSON, hashes, regex, diff, QR…) que corren 100% en el navegador. Cada tool expone run(input) → output con entradas tipadas — la siguiente fase es encadenarlas como nodos en un editor de dataflow visual.',
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
		note: 'Lidero el frontend de Cambaceo, una PWA de ventas en campo para Telcel con 10,000+ usuarios activos — Angular con geolocalización, push de OneSignal, encuestas y agendamiento. En paralelo, pantallas internas del CAC, despliegues bare-metal con nginx, y propuestas de pipelines CI/CD para acortar el ciclo de liberación del equipo.',
	},
	{
		year: 'Mar 2021 — Dec 2025',
		role: 'Senior Fullstack Developer',
		company: 'CENEVAL · vía Corporativo EMETH',
		note: 'Diseñé y desarrollé 10+ subsistemas de la plataforma educativa: gestión de exámenes, reactivos, personal, instituciones y pagos (BBVA Multipagos). APIs REST en Java con Spring Boot y Quarkus, frontends en Angular 14–16 con TypeScript y RxJS, y una librería de componentes compartida entre todos los subsistemas. Lideré code reviews y capacité al equipo en Angular y Java.',
	},
	{
		year: 'Nov 2019 — Mar 2021',
		role: 'Frontend Developer Intern',
		company: 'CTIN · Grupo Carso',
		note: 'Componentes UI reutilizables para la plataforma interna de streaming. JavaScript, CSS, y la cantidad razonable de errores que se cometen empezando.',
	},
];

export const WRITING: WritingItem[] = [
	{
		date: 'Mar 2026',
		title: 'The case for boring infrastructure',
		excerpt:
			"Postgres, a queue, and a server. You can ship for years with that. A short defense of the unfashionable stack.",
		read: '6 min',
	},
	{
		date: 'Jan 2026',
		title: "Why I stopped writing 'utils.ts'",
		excerpt:
			"Every codebase eventually grows a utils file shaped like a graveyard. Here's what I do instead.",
		read: '4 min',
	},
	{
		date: 'Nov 2025',
		title: "On reading other people's code",
		excerpt:
			'A workflow for getting productive in an unfamiliar codebase without skimming, panicking, or asking too soon.',
		read: '8 min',
	},
];

export const STACK: StackGroup[] = [
	{ label: 'Languages', items: ['TypeScript', 'Go', 'Python', 'Rust', 'SQL'] },
	{ label: 'Frontend', items: ['React', 'Next.js', 'TanStack', 'Tailwind', 'CSS'] },
	{ label: 'Backend', items: ['Node', 'Postgres', 'Redis', 'Kafka', 'tRPC'] },
	{ label: 'Infra', items: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'] },
	{ label: 'Tooling', items: ['Neovim', 'tmux', 'Linear', 'Figma', 'Cursor'] },
];

export const NAV_LINKS = [
	{ href: '#work', label: 'Work' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#writing', label: 'Writing' },
	{ href: '#now', label: 'Now' },
	{ href: '#contact', label: 'Contact' },
] as const;
