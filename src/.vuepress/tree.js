const apps = require("./apps");
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
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
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
	debian: {
		selectText: "Turkum",
		label: "Debian",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/debian/malumot/",
			},
			{
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "Ubuntu",
						link: "/debian/distribut/Ubuntu/",
					},
					{
						text: "Astra Linux",
						link: "/debian/distribut/AstraLinux/",
					},
					{
						text: "MX Linux",
						link: "/debian/distribut/MXLinux/",
					},
					{
						text: "Raspbian",
						link: "/debian/distribut/Raspbian/",
					},
					{
						text: "CentOS",
						link: "/debian/distribut/AntiX/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/debian/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/debian/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/debian/distribut/Ubuntu/": [
				{
					title: "Ubuntu",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/Ubuntu/ornatish",
						"/debian/distribut/Ubuntu/maslahatlar",
						"/debian/distribut/Ubuntu/interfeys",
						"/debian/distribut/Ubuntu/solishtirish",
						"/debian/distribut/Ubuntu/yuklash",
					],
				},
			],
			"/debian/distribut/AntiX/": [
				{
					title: "CentOS",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/CentOS/ornatish",
						"/debian/distribut/CentOS/maslahatlar",
						"/debian/distribut/CentOS/interfeys",
						"/debian/distribut/CentOS/solishtirish",
						"/debian/distribut/CentOS/yuklash",
					],
				},
			],
			"/debian/distribut/AstraLinux/": [
				{
					title: "AstraLinux",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/AstraLinux/ornatish",
						"/debian/distribut/AstraLinux/maslahatlar",
						"/debian/distribut/AstraLinux/interfeys",
						"/debian/distribut/AstraLinux/solishtirish",
						"/debian/distribut/AstraLinux/yuklash",
					],
				},
			],
			"/debian/distribut/MXLinux/": [
				{
					title: "MXLinux",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/MXLinux/ornatish",
						"/debian/distribut/MXLinux/maslahatlar",
						"/debian/distribut/MXLinux/interfeys",
						"/debian/distribut/MXLinux/solishtirish",
						"/debian/distribut/MXLinux/yuklash",
					],
				},
			],
			"/debian/distribut/Raspbian/": [
				{
					title: "Raspbian",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/Raspbian/ornatish",
						"/debian/distribut/Raspbian/maslahatlar",
						"/debian/distribut/Raspbian/interfeys",
						"/debian/distribut/Raspbian/solishtirish",
						"/debian/distribut/Raspbian/yuklash",
					],
				},
			],
		},
	},
	redhat: {
		selectText: "Turkum",
		label: "Red Hat",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/redhat/malumot/",
			},
			{
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "Ubuntu",
						link: "/redhat/distribut/CentOS/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/redhat/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/redhat/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/redhat/distribut/CentOS/": [
				{
					title: "CentOS",
					collapsable: false,
					children: [
						"",
						"/redhat/distribut/CentOS/ornatish",
						"/redhat/distribut/CentOS/maslahatlar",
						"/redhat/distribut/CentOS/interfeys",
						"/redhat/distribut/CentOS/solishtirish",
						"/redhat/distribut/CentOS/yuklash",
					],
				},
			],
		},
	},
};
