module.exports = {
	config: {
			name: "On fait quoi face à Shibai Otsutsuki",
			version: "1.0",
			author: "Shibai Otsutsuki",
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
	if (event.body && event.body.toLowerCase() == "🔫") return message.reply("🧎🏽‍♂️");
}
};
