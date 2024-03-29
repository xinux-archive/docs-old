const socials = require("./social");

module.exports = {
	main: {
		selectText: "Turkum",
		label: "Asosiy",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/malumot/",
			},
			{
				text: "Jamoa",
				link: "/jamoa/",
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
		],
		sidebar: {
			"/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
		},
	},
	arch: {
		selectText: "Turkum",
		label: "Arch",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/arch/malumot/",
			},
			{
				text: "O'rnatish",
				link: "/arch/ornatish/",
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
		],
		sidebar: {
			"/arch/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/arch/ornatish/": [
				{
					title: "O'rnatish",
					collapsable: false,
					children: [
						"",
						"yuklab-olish",
						"qurilmaga-yozish",
						"obrazni-ochish",
						"ISOornatish",
					],
				},
			],
			"/arch/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
		},
	},
};
