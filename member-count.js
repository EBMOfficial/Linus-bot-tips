module.exports = async (client) =>{
    const guild = client.guilds.cache.get('597676585058828300');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('807992114927239229');
        channel.setName(`Blokes: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count...');
    }, 500);
}
