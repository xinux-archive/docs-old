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
			{
				text: "Wiki",
				link: "https://wiki.xinux.uz",
				target: "_self",
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
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "Manjaro",
						link: "/arch/distribut/Manjaro/",
					},
					{
						text: "Black Arch",
						link: "/arch/distribut/Black Arch/",
					},
					{
						text: "Xeonix",
						link: "/arch/distribut/Xeonix/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Wiki",
				link: "https://wiki.xinux.uz",
				target: "_self",
			},
		],
		sidebar: {
			"/arch/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: ["", "ornatish"],
				},
			],
			"/arch/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/arch/distribut/Manjaro/": [
				{
					title: "Manjaro",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Manjaro/ornatish",
						"/arch/distribut/Manjaro/maslahatlar",
						"/arch/distribut/Manjaro/interfeys",
						"/arch/distribut/Manjaro/solishtirish",
						"/arch/distribut/Manjaro/yuklash",
					],
				},
			],
			"/arch/distribut/Black Arch/": [
				{
					title: "Black Arch",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Black Arch/ornatish",
						"/arch/distribut/Black Arch/maslahatlar",
						"/arch/distribut/Black Arch/interfeys",
						"/arch/distribut/Black Arch/solishtirish",
						"/arch/distribut/Black Arch/yuklash",
					],
				},
			],
			"/arch/distribut/Xeonix/": [
				{
					title: "Xeonix",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Xeonix/ornatish",
						"/arch/distribut/Xeonix/maslahatlar",
						"/arch/distribut/Xeonix/interfeys",
						"/arch/distribut/Xeonix/solishtirish",
						"/arch/distribut/Xeonix/yuklash",
					],
				},
			],
		},
	},
};
