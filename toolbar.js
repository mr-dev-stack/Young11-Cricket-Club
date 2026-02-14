document.addEventListener("DOMContentLoaded", function() {
    
    const style = document.createElement('style');
    style.innerHTML = `
        .universal-toolbar {
            position: fixed;
            bottom: 0; left: 0; width: 100%; height: 70px;
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(10px);
            display: flex; justify-content: space-around; align-items: center;
            border-top: 1px solid rgba(255,255,255,0.1);
            z-index: 9999;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
        }
        .tool-btn {
            background: none; border: none; cursor: pointer;
            padding: 5px; transition: transform 0.2s;
            display: flex; flex-direction: column; align-items: center;
        }
        .tool-btn:active { transform: scale(0.9); }
        .tool-icon {
            width: 28px; height: 28px; object-fit: contain;
            filter: drop-shadow(0 0 2px rgba(255,255,255,0.3));
        }
        body { padding-bottom: 80px !important; }
    `;
    document.head.appendChild(style);

    const toolbar = document.createElement('nav');
    toolbar.className = 'universal-toolbar';

    // We check which page we are on to "highlight" the active button (optional visual flair)
    const current = window.location.pathname;

    toolbar.innerHTML = `
        <button class="tool-btn" onclick="window.location.href='info.html'">
            <img src="https://raw.githubusercontent.com/mr-dev-stack/Young11-Cricket-Club/8d0a596c850d9f789c4681eccabd3b20a958bbee/assest/info.png" class="tool-icon" alt="Info">
        </button>

        <button class="tool-btn" onclick="window.location.href='social.html'">
            <img src="https://raw.githubusercontent.com/mr-dev-stack/Young11-Cricket-Club/8d0a596c850d9f789c4681eccabd3b20a958bbee/assest/social.png" class="tool-icon" alt="Social">
        </button>

        <button class="tool-btn" onclick="window.location.href='about.html'">
            <img src="https://raw.githubusercontent.com/mr-dev-stack/Young11-Cricket-Club/8d0a596c850d9f789c4681eccabd3b20a958bbee/assest/about.png" class="tool-icon" alt="Dev">
        </button>

        <button class="tool-btn" onclick="window.location.href='version.html'">
            <img src="https://raw.githubusercontent.com/mr-dev-stack/Young11-Cricket-Club/8d0a596c850d9f789c4681eccabd3b20a958bbee/assest/version.png" class="tool-icon" alt="Version">
        </button>
    `;

    document.body.appendChild(toolbar);
});
