function displayPopup() {
    const cardFooter = document.querySelector('.content-footer');
    const popup = document.getElementById('share-footer');

    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
        cardFooter.classList.remove('card-footer-invisible');
        cardFooter.classList.remove('card-footer-flex-desktop');
    } else {
        popup.style.display = 'flex';
        cardFooter.classList.add('card-footer-invisible');
        cardFooter.classList.add('card-footer-flex-desktop');
    }
}
