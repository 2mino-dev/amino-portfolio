import './style.css'

// muisc thingy look meeh but it work
const audio = document.getElementById('bgm')
const btn = document.getElementById('play')

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    btn.textContent = 'music off'
  } else {
    audio.pause()
    btn.textContent = 'music on'
  }
})

//discord status via lanyard it really cool tool
// why i am talking to my self idk ?
const colors = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

lanyard({
  userId: "977216031699386419",
  socket: true,
  onPresenceUpdate: (data) => {
    const dot2 = document.getElementById("carddot2")
    const text = document.getElementById("status-text");
    const avatar = document.getElementById("card-avatar");
    const status = document.getElementById("card-status");
    const banner = document.getElementById("banner");
    const name = document.getElementById("card-name");
    const user = data.discord_user;

const user2 = {
  banner: "d7f0c9c61152a9f20b5ca46965f401de"
};

banner.style.backgroundImage = `url(https://cdn.discordapp.com/banners/${user.id}/${user2.banner}.webp?size=1024)`;

if (data.active_on_discord_desktop && data.active_on_discord_mobile) {
  status.textContent = `hmm right now i am on both laptop and phone`
} else if (data.active_on_discord_mobile) {
  status.textContent = `on phone i think`
} else if (data.active_on_discord_desktop) {
  status.textContent = `Right Now I am on laptop`
} else {
  status.textContent = `idk not online right now`
}


if (user.avatar) {
  const format = user.avatar.startsWith("a_") ? "gif" : "webp";
  avatar.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${format}?size=256`;
} 
    dot2.className = `absolute bottom-1 right-1 size-5 rounded-full border-4 border-[#111214] ${colors[data.discord_status]}`
    text.textContent = data.discord_status;
    name.textContent = `${data.discord_user.display_name}`
  },
});