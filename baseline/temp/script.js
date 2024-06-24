document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.style.display = (index === pageIndex) ? 'block' : 'none';
        });
        document.querySelector('.back').style.display = (currentPage === 0) ? 'none' : 'inline-block';
        document.querySelector('.next').style.display = (currentPage === pages.length - 1) ? 'none' : 'inline-block';
        document.querySelector('#submit').style.display = (currentPage === pages.length - 1) ? 'inline-block' : 'none';
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    document.querySelectorAll('.back').forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    showPage(currentPage);
});
