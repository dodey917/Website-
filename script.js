// JavaScript for interactive emoji functionality
function changeEmotion(emotion, emoji) {
    const emojiElement = document.getElementById('emoji');
    const emotionText = document.getElementById('emotion-text');
    
    // Add bounce animation
    emojiElement.classList.add('bounce');
    
    // Change emoji and text after a short delay
    setTimeout(() => {
        emojiElement.textContent = emoji;
        emotionText.textContent = emotion.charAt(0).toUpperCase() + emotion.slice(1);
        
        // Change background color based on emotion
        changeBackgroundColor(emotion);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            emojiElement.classList.remove('bounce');
        }, 600);
    }, 150);
}

function changeBackgroundColor(emotion) {
    const colors = {
        happy: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
        sad: 'linear-gradient(135deg, #868f96 0%, #596164 100%)',
        angry: 'linear-gradient(135deg, #ff6b6b 0%, #c0392b 100%)',
        love: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        laugh: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    };
    
    document.body.style.background = colors[emotion] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

// Add click effects to emoji
document.getElementById('emoji').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 300);
});

// Add random emoji effect on page load
window.addEventListener('load', function() {
    console.log('Emotional Emoji Website Loaded!');
    
    // Random welcome message
    const welcomeMessages = [
        "Welcome! How are you feeling today?",
        "Ready to express your emotions?",
        "Click the emoji to see it bounce!",
        "Your emotions matter! 💖"
    ];
    
    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    console.log(randomMessage);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            changeEmotion('happy', '😊');
            break;
        case '2':
            changeEmotion('sad', '😢');
            break;
        case '3':
            changeEmotion('angry', '😠');
            break;
        case '4':
            changeEmotion('love', '😍');
            break;
        case '5':
            changeEmotion('laugh', '😂');
            break;
    }
});
