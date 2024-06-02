document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchOverlay = document.getElementById('search-overlay');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    if (searchIcon && searchOverlay && searchButton && searchInput) {
        searchIcon.addEventListener('click', function() {
            searchOverlay.style.display = 'flex';
        });

        searchOverlay.addEventListener('click', function(event) {
            if (event.target === searchOverlay) {
                searchOverlay.style.display = 'none';
            }
        });

        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                searchButton.click();
            }
        });
    }
});
