wget https://johnvansickle.com/ffmpeg/builds/ffmpeg-git-amd64-static.tar.xz
wget https://johnvansickle.com/ffmpeg/builds/ffmpeg-git-amd64-static.tar.xz.md5
md5sum -c ffmpeg-git-amd64-static.tar.xz.md5
tar xvf ffmpeg-git-amd64-static.tar.xz
./ffmpeg-git-20200822-amd64-static/ffmpeg

echo Installed FFmpeg. Putting it in PATH so it's easily executable

export PATH=/home/runner/discord-music-bot-template:$PATH
