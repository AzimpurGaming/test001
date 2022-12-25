module.exports = {
    app: {
        px: '!',
        token: 'MTA1NTU3NTk2NTAxMjU5MDY2Mg.GyoL7G.iyqees9e846xpfGp0rI8PmjlFQKGgDWKSd-fvE',
        playing: 'by test'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
