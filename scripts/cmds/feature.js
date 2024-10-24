const fs = require('fs');

const config = {
    name: "feature",
    author: "Ren",
    role: 0,
    category: "info",
    shortDescription: "See bot's list of commands",
    longDescription: "Provides a list of available commands in the bot",
    usage: "{prefix}feature"
};

module.exports = {
    config,
    
    onStart: async function ({ api, event }) {
        const commandsList = `I'm RTUMM AI, your educational AI buddy created by Math Major.\n👨🏻‍🏫────୨ৎ────🧑🏻‍🏫\nLIST OF BOT'S COMMANDS\nᡣ𐭩────୨ৎ────ᡣ𐭩\nfeature [command name]\nmath [calculate]\ncalculate [provide an expression to calculate]\nai [query]\ngemini [query]\ndefine [word]\ndictionary [lookup at dictionary]\nquiz [subject]\nguessnumber [number game]\ngoogle [query]\nimgsearch [search image]\nowner [bot owner]\n────୨ৎ────\ntype #help to see other fun features of the bot.\n────୨ৎ────Designed by: Math Major────୨ৎ────`;

        api.sendMessage(commandsList, event.threadID, event.messageID);
    }
};

// Ensure the script won't work if the author's name is changed
if (module.exports.config.author !== 'Ren') {
    throw new Error('Unauthorized script modification detected.');
}
