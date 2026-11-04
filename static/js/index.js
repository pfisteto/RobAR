// Dark mode toggle (initial theme is set inline in <head>)
function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
}

// Follow system changes until the visitor picks a theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
    let stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (!stored) {
        document.documentElement.setAttribute('data-theme', event.matches ? 'dark' : 'light');
    }
});
