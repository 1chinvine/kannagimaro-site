export type Event = {
	date: string;
	title: string;
	venue: string;
	open?: string;
	start?: string;
	url?: string;
};

export const events = [
	{
		date: "2026-08-18",
		title: "ヤスマロティン8月公開収録",
		venue: "赤坂BIZタワーロビー",
		time: "OPEN 19:15 / START 19:30",
		url: "https://x.com/as_yasumarotin",
	},
	{
		date: "2026-08-25",
		title: "西井万理那BIRTHDAY LIVE 2026",
		venue: "SHIBUYA DIVE",
		time: "OPEN 18:15 / START 19:00",
		url: "https://livepocket.jp/e/nishiimarinabirthday",
	},
	{
		date: "2026-08-29",
		title: "あやかのん アイドルについてのあれこれ愛媛編",
		venue: "南海放送5階 グレイスホール",
		time: "OPEN 13:30 / START 14:00",
		url: "https://x.com/ayakawada/status/2084489556196495670",
	},
];