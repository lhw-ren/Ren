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
        const commandsList = `I'm RTUMM AI, your educational AI buddy created by Math Major.\n👨🏻‍🏫————————————🧑🏻‍🏫\nLIST OF BOT'S COMMANDS\n+————————————+\n#feature [command name]\n#math [calculate]\n#calculate [provide an expression to calculate]\n#ai [query]\n#gemini [query]\n#define [word]\n#dictionary [lookup at dictionary]\n#quiz [subject]\n#guessnumber [number game]\n#google [query]\n#imgsearch [search image]\n#owner [bot owner]\n+———————————+\ntype #help to see other fun features of the bot.\nDesigned by: Math Major`;

        api.sendMessage(commandsList, event.threadID, event.messageID);
    }
};

// Ensure the script won't work if the author's name is changed
if (module.exports.config.author !== 'Ren') {
    throw new Error('Unauthorized script modification detected.');
}
