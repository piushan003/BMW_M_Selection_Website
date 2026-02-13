// Dark Mode Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if dark mode is enabled in localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // 2. Inject Toggle Button if it doesn't exist
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && !document.getElementById('themeToggle')) {
        const toggleLi = document.createElement('li');
        toggleLi.innerHTML = `
            <button id="themeToggle" class="theme-toggle" aria-label="Toggle Dark Mode">
                <span class="toggle-icon">🌙</span>
            </button>
        `;
        // Insert before the LAST item (usually the CTA button) or append if that fails
        if (navLinks.lastElementChild) {
           navLinks.insertBefore(toggleLi, navLinks.lastElementChild);
        } else {
           navLinks.appendChild(toggleLi);
        }
    }

    // 3. Handle Click Events
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Update icon based on current state
        updateToggleIcon(themeToggle);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleIcon(themeToggle);
        });
    }
});

function updateToggleIcon(btn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const icon = btn.querySelector('.toggle-icon');
    if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
    }
}
