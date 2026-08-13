export type WorkType = "MUSIC" | "LYRICS";

export type Work = {
	type: WorkType;
	title: string;
	artist?: string;
	releaseDate: string;
	image?: string;
	url?: string;
};

export const works: Work[] = [
	// =========================
	// LYRICS
	// =========================

	{
		type: "LYRICS",
		title: "ラキラキ!!",
		artist: "プライマリタイズ",
		releaseDate: "2026-08-10",
		image: "/images/works/lyrics-rakiraki.jpg",
		url: "https://linkco.re/ytuBEttf?lang=ja&select=listen",
	},

	{
		type: "LYRICS",
		title: "夢を見る、何度でも",
		artist: "ツキナミ",
		releaseDate: "2026-08-01",
		image: "/images/works/lyrics-yumewomiru.jpg",
		url: "https://linkco.re/sgbApv0v",
	},

	// =========================
	// MUSIC
	// =========================

	{
		type: "MUSIC",
		title: "ワープ!!",
		releaseDate: "2026-07-16",
		image: "/images/works/warp.jpg",
		url: "#https://linkco.re/77YNB5tg",
	},

	{
		type: "MUSIC",
		title: "かぐやぴめ",
		releaseDate: "2026-03-18",
		image: "/images/works/kaguyapime.jpg",
		url: "https://maro-kannagi.lnk.to/kaguyapime",
	},

	{
		type: "MUSIC",
		title: "ワンちゃんで終わんな、ネコちゃんになれ",
		releaseDate: "2026-01-14",
		image: "/images/works/wan-neko.jpg",
		url: "https://maro-kannagi.lnk.to/wan-neko",
	},

	{
		type: "MUSIC",
		title: "お呪い covered by カンナギマロ",
		releaseDate: "2025-09-03",
		image: "/images/works/omajinai.jpg",
		url: "https://imgramox.lnk.to/Omajinai",
	},

	{
		type: "MUSIC",
		title: "Sunflower covered by カンナギマロ",
		releaseDate: "2024-08-28",
		image: "/images/works/sunflower.jpg",
		url: "https://imgramox.lnk.to/sunflower",
	},

	{
		type: "MUSIC",
		title: "オノマトペテン師 covered by カンナギマロ",
		releaseDate: "2024-08-21",
		image: "/images/works/onomatopetenshi.jpg",
		url: "https://imgramox.lnk.to/onomatopetenshi",
	},

	{
		type: "MUSIC",
		title: "大黒天 covered by カンナギマロ",
		releaseDate: "2024-08-14",
		image: "/images/works/daikokuten.jpg",
		url: "https://imgramox.lnk.to/daikokuten",
	},
];