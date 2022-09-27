<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/EbCccPCfSP"><img src="https://cdn.discordapp.com/attachments/1023089496025206804/1024219080762339348/YuudachiParty.png" width="546" alt="KannaWill" /></a>
  </p>
  <br />
</div>

# Installation
`npm install yuudachi` (or if there are errors, then install another `npm install node-fetch@2`)

# Changelogs

### v0.0.54
- A list of library functions has been added to the "Using Library functions" category

### v0.0.53
- Changing the library. Its registration and the responder to your requests for communication with yuudachi.
- Changing the name of the library. From ghoulnsfw to yuudachi.
- Bug & Error Fixed

# Example(s)
### NodeJS:
```js
const yuudachi = require('yuudachi');

 // Get SFW Neko & Lewd Neko Images ! //
yuudachi.neko().then((imageURL) => {
  console.log(imageURL);
})
yuudachi.lewdNeko().then((imageURL) => {
  console.log(imageURL);
})

 // Get a NSFW Images ! //
yuudachi.nsfw.hentai().then((imageURL) => {
  console.log(imageURL);
})
```
**or:**
```js
const yuudachi = require('yuudachi');

 // Get SFW Neko & Lewd Neko Images ! //
async function yourFunctionName() {
  console.log(await yuudachi.neko());
  console.log(await yuudachi.lewdNeko());
}
FunctionName();

 // Get a NSFW Images ! //
async function yourFunctionName() {
  console.log(await yuudachi.nsfw.hentai());
}
FunctionName();
```

### Discord.js Bot:
```js
const { Client, EmbedBuilder } = require('discord.js');
const yuudachi = require('yuudachi');

const client = new Client();

const config = {
  prefix: "YOUR_BOT_PREFIX", // For example: n!
  token: 'YOUR_BOT_TOKEN' // For example: OTk5ODMzMTk2NjA4ODkzMDA5.Gk5-LW.k9BCZIg9UyGqQFHnxFiraNjyO3BJi7eE6iFQQs
}

client.on('messageCreate', async (message) => {

  var command = message.content.toLowerCase().slice(config.prefix.length).split(' ')[0];
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (command == 'neko') {

    const NekoEmbed = new EmbedBuilder();
      setImage(await yuudachi.neko());

    return message.channel.send({ content: "Neko Image:", embeds: [NekoEmbed] });
  }

})

client.login(config.token);

```

# Using Library functions
All Functions: sfw: `neko, lewdneko, wallpapers, mobileWallpapers`, nsfw: `ass, bdsm, cum, doujin, femdom, hentai, maid, maids, orgy, panties, nsfwwallpapers, nsfwmobilewallpapers, netorare, gif, blowjob, feet, pussy, uglybastard, uniform, foxgirl, cumslut, glasses, thighs, tentacles, masturbation, school, yuri, zettai-ryouiki, succubus`

# Support
[Discord Server](https://discord.gg/EbCccPCfSP)
