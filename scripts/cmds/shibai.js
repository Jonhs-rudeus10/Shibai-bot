module.exports = {
	config: {
			name: "cc",
			version: "1.0",
			author: "rudeus",
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
	if (event.body && event.body.toLowerCase() == "cc") return message.reply("𝐬𝐚𝐥𝐮𝐭 𝐬𝐢𝐦𝐩𝐥𝐞 𝐦𝐨𝐫𝐭𝐞𝐥                      𝐭𝐮 𝐯𝐞𝐮𝐱 𝐛𝐢𝐞𝐧 𝐥𝐢𝐤𝐞𝐫 𝐦𝐨𝐧 𝐩𝐫𝐨𝐟𝐢𝐥 ?");
}
};
