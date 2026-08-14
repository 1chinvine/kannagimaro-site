export type EventType = "EVENT" | "LIVE";

export type Event = {
	/* 本番日 */
	date: string;

	/* 本番の種類 */
	type: EventType;

	/* イベント情報 */
	title: string;
	venue: string;

	open?: string;
	start?: string;

	/* 公式情報 */
	url?: string;

	/* =========================
	   チケット発売情報
	========================= */

	/*
		ここを入れた場合、
		本番とは別に「チケ発」として
		SCHEDULEへ自動表示される
	*/
	ticketDate?: string;
	ticketTime?: string;

	/*
		チケット販売ページが
		公式情報URLと別の場合に使用
	*/
	ticketUrl?: string;
};

export const events: Event[] = [
	{
		date: "2026-08-18",
		type: "EVENT",

		title: "ヤスマロティン8月公開収録",
		venue: "赤坂BIZタワーロビー",

		open: "19:15",
		start: "19:30",

		url: "https://x.com/as_yasumarotin",
	},

	{
		date: "2026-08-25",
		type: "LIVE",

		title: "西井万理那BIRTHDAY LIVE 2026",
		venue: "SHIBUYA DIVE",

		open: "18:15",
		start: "19:00",

		url: "https://livepocket.jp/e/nishiimarinabirthday",

		ticketDate: "2026-07-31",
		ticketTime: "22:30",
		ticketUrl: "https://livepocket.jp/e/nishiimarinabirthday",

		/*
		チケ発情報が分かったら例えばこう

		ticketDate: "2026-08-15",
		ticketTime: "20:00",
		ticketUrl: "https://livepocket.jp/e/nishiimarinabirthday",
		*/
	},

	{
		date: "2026-08-29",
		type: "EVENT",

		title: "あやかのん アイドルについてのあれこれ愛媛編",
		venue: "南海放送5階 グレイスホール",

		open: "13:30",
		start: "14:00",

		url: "https://x.com/ayakawada/status/2084489556196495670",
	},
];