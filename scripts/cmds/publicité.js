module.exports = {
	config: {
			name: "boss",
			version: "1.0",
			author: "rudeus Ackerman",
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
	if (event.body && event.body.toLowerCase() == "publicité") return message.reply("voici l'uid de mon sempai ◈ ━━━━━━━━ ● ━━━━━━━━ ◈https://www.facebook.com/profile.php?id=61566739640941◈ ━━━━━━━━ ● ━━━━━━━━ ◈et son nom c'est◆━━━━━━━▣✦▣━━━━━━━━◆jonhs rudeus Smith◆━━━━━━━▣✦▣━━━━━━━━◆");
}
};
