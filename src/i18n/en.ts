export const en = {
	// Meta
	metaTitle: 'David Rodriguez — Senior Fullstack Developer',
	metaDescription:
		"Senior fullstack dev. I write software that won't wake you up at 3am — mostly TypeScript, sometimes Go.",

	// Nav
	navHome: 'David Rodriguez — home',
	navWork: 'Work',
	navExperience: 'Experience',
	navWriting: 'Writing',
	navStack: 'Stack',
	navNow: 'Now',
	navContact: 'Contact',
	navLabel: 'Main',

	// Hero
	heroEyebrow: 'Portfolio · MMXXVI',
	heroLede:
		"Senior fullstack dev. I write software that behaves itself — mostly in TypeScript, sometimes Go, always like someone else is going to read it on a Friday at 5pm. (Probably them. Possibly future me.)",
	heroStatus: 'Open to senior / staff roles · remote (GMT-5 ± 3)',
	heroLoc: '~/ Mexico City',
	heroCtaWork: 'See selected work →',
	heroCtaContact: 'Get in touch',

	// Now
	nowEyebrow: 'Now',
	nowUpdated: 'Updated 25 May',
	nowP1:
		"Heads-down on systems & software architecture, cloud, and the whole AI agents thing. The future already showed up, and devs who refuse to adapt get replaced. I'd rather not be one of those. Hopefully.",
	nowP2:
		"I learn by building stuff — personal projects so the ideas actually click — and on the side I'm working through <em>System Design Interview — An Insider's Guide</em> (Alex Xu) and <em>Designing Data-Intensive Applications</em> (Martin Kleppmann).",

	// Work
	workEyebrow: 'Selected work',
	workTitle: 'Two projects I keep <em>coming back to</em>.',
	workSub:
		"What I build when nobody's writing the spec. Both open source.",

	// Experience
	experienceEyebrow: 'Experience',
	experienceTitle: 'Almost a decade, <em>give or take</em>.',

	// Writing
	writingEyebrow: 'Writing',
	writingTitle: 'Notes, <em>sometimes finished</em>.',
	writingComingSoon:
		"Coming soon. I'm drafting a few posts on architecture, agents, and all the parts of building software nobody wants to write about. (Apparently including these posts.)",

	// Stack
	stackEyebrow: 'Stack',
	stackTitle: 'Tools I reach for <em>without thinking</em>.',
	stackLanguages: 'Languages',
	stackFrontend: 'Frontend',
	stackBackend: 'Backend',
	stackInfra: 'Infra',

	// Contact
	contactTitle: "Let's <em>build</em> something.",
	contactBody:
		"Open to senior / staff fullstack roles starting Q3 2026, plus the occasional advisory gig. If you've got something interesting (or something quietly on fire), send a note.",
	contactFooterBuilt: 'Built quietly, in Astro.',

	// Theme
	themeToggle: 'Toggle theme',
	themeLight: 'light',
	themeDark: 'dark',

	// Lang
	langSwitch: 'Switch language',
} as const;

export type TranslationKey = keyof typeof en;
