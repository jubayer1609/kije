// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable keyboard shortcuts for Developer Tools
window.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
