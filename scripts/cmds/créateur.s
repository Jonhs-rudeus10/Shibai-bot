module.exports = {
	config: {
			name: "rudeus",
			version: "1.0",
			author: Shibai Otsutsuki,
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "rudeus") return message.reply("J'ai été créé par ce bro ◆ ▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬ ◆https://www.facebook.com/profile.php?id=61566739640941◆ ▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬ ◆");
}
};
