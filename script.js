// Variable to store the current correct captcha
let currentCaptcha = "";

// Function to generate random 6-character string
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed similar looking chars (I, 1, O, 0)
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = result;
    
    // Update the HTML element
    document.getElementById('generated-captcha').innerText = result;
    
    // Clear input field and hide error
    document.getElementById('captcha-input').value = "";
    document.getElementById('error-msg').classList.add('hidden');
}

// Run this automatically when the page loads
window.onload = function() {
    generateCaptcha();
}

function verifyCaptcha() {
    // Get user input and remove spaces/convert to uppercase
    const input = document.getElementById('captcha-input').value.toUpperCase().trim();
    
    if(input === currentCaptcha) {
        // --- SUCCESS SEQUENCE ---
        
        // 1. Hide Captcha Page
        document.getElementById('captcha-page').classList.add('hidden');
        
        // 2. Show Loading Screen
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.remove('hidden');
        
        // 3. Wait 1.5 seconds for "Verifying..."
        setTimeout(() => {
            const loaderText = document.getElementById('loader-text');
            loaderText.innerText = "Verified";
            loaderText.style.color = "#4CAF50"; // Green color
            loaderText.style.fontWeight = "bold";
            
            // 4. Wait 0.5 seconds more, then show Home
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.getElementById('home-page').classList.remove('hidden');
            }, 500);
            
        }, 1500);
        
    } else {
        // --- FAILURE SEQUENCE ---
        document.getElementById('error-msg').classList.remove('hidden');
        
        // Shake animation effect (optional)
        const box = document.querySelector('.captcha-box');
        box.style.animation = "shake 0.3s";
        setTimeout(() => box.style.animation = "", 300);
        
        // Generate a NEW captcha because they failed
        generateCaptcha();
    }
}

// Add CSS for shake animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);

// --- Breathtaking Text Animation Logic ---
    const phrases = [
        "Young 11 Club",
        "Official Digital Hub",
        "A tribute to #farhaan",
        "Also try Football!",
        "Players • Stats • History",
        "May contain nuts!",
        "Limited Edition",
        "AMAI™",
        "Est. 2025"
    ];

    let pIndex = 0;
    const textElement = document.getElementById('dynamic-hero-text');

    function animateText() {
        // 1. Fade Out (Remove class)
        textElement.classList.remove('show');

        // 2. Wait for fade out, then swap text and Fade In
        setTimeout(() => {
            textElement.innerText = phrases[pIndex];
            textElement.classList.add('show');
            
            // Move to next phrase for next loop
            pIndex = (pIndex + 1) % phrases.length;
        }, 600); // Matches the CSS transition time (0.6s)
    }

    // Start the loop
    animateText(); // Run immediately
    setInterval(animateText, 2500); // Change every 2 seconds
