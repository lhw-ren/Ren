const config = {
    name: "owner",
    author: "Ren",
    role: 0,
    aliases: ["own", "master"],
    category: "info",
    shortDescription: "See owner information",
    longDescription: "Displays the name of the owner and a link."
};

module.exports = {
    config,

    onStart: async function ({ api, event }) {
        const msg = "✨We are Math Major from Rizal Technological University✨👨🏻‍🏫\n────────୨ৎ────────\nDaryl A. Abarracoso\nGiebe Brentrich D. Armohila\nNathaniel V. Robles\nAngelo L. Mallano\n────────୨ৎ────────";

        api.sendMessage(msg, event.threadID, event.messageID);
    }
};

// Ensure the script won't work if the author's name is changed
if (module.exports.config.author !== 'Ren') {
    throw new Error('Unauthorized script modification detected.');
}
