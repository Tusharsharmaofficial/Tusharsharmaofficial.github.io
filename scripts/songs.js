document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Close sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Close sidebar on window resize if it's open
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });
});

let players = [];

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('.yt');

  iframes.forEach((frame, index) => {
    players[index] = new YT.Player(frame, {
      events: {
        onStateChange: (event) => handleStateChange(event, index)
      }
    });
  });
}

function handleStateChange(event, index) {
  if (event.data === YT.PlayerState.PLAYING) {
    players.forEach((player, i) => {
      if (i !== index) {
        player.pauseVideo();
      }
    });
  }
}
