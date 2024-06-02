document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const resultsContainer = document.getElementById('results-container');

    if (query) {
        const pages = [
            { title: 'Главная', url: 'index.html', content: 'Добро пожаловать на сайт DoctorCare. Мы предоставляем лучшие медицинские услуги.' },
            { title: 'Записаться на приём', url: 'appointment.html', content: 'Записаться на приём к врачу можно через наш онлайн сервис.' },
            { title: 'Услуги', url: 'services.html', content: 'Мы предоставляем широкий спектр медицинских услуг.' },
            { title: 'Врачи', url: 'docs.html', content: 'Наши врачи - это высококвалифицированные специалисты с многолетним опытом.' },
            { title: 'Отзывы', url: 'reviews.html', content: 'Читайте отзывы наших клиентов.' },
            { title: 'Помощь', url: 'help.html', content: 'Часто задаваемые вопросы и помощь.' }
        ];

        const results = pages.filter(page => 
            page.title.toLowerCase().includes(query.toLowerCase()) ||
            page.content.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3><a href="${result.url}">${result.title}</a></h3>
                    <p>${result.content}</p>
                `;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>По вашему запросу ничего не найдено.</p>';
        }
    } else {
        resultsContainer.innerHTML = '<p>Пожалуйста, введите запрос для поиска.</p>';
    }
});
