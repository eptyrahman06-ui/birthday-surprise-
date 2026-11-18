// Open Celebration Screen
function openCelebration() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    startFloatingElements();
}

// Music Toggle
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    if (!isPlaying) {
        music.play();
        btn.innerText = "🎵 মিউজিক বন্ধ করো";
        isPlaying = true;
    } else {
        music.pause();
        btn.innerText = "🎵 মিউজিক চালু করো";
        isPlaying = false;
    }
}

// Blow Candle Animation
function blowCandle() {
    const flame = document.getElementById('flame');
    const msg = document.getElementById('cakeMessage');
    flame.style.display = 'none';
    msg.innerText = "🎉 মোমবাতি নিভে গেছে! শুভ জন্মদিন! 🎂✨";
}

// Floating Hearts & Sparkles Generator
function startFloatingElements() {
    const bg = document.getElementById('floatingBg');
    const symbols = ['❤️', '💖', '✨', '🧸', '🎀', '⭐'];

    setInterval(() => {
        const item = document.createElement('div');
        item.classList.add('heart-float');
        item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        item.style.left = Math.random() * 100 + 'vw';
        item.style.fontSize = (Math.random() * 20 + 15) + 'px';
        item.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        bg.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 4000);
    }, 300);
}
