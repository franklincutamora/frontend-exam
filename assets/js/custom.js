(function() {
    const body = document.getElementById('body');
    const category = document.getElementById('category');

    category.addEventListener('change', onChange);

    document.addEventListener('click', function(event) {      
        if (event.target == document.querySelector('.modal.show')) {
            dismissModal();
        }

        if (event.target.nodeName == document.querySelector('button[data-dismiss] > span').nodeName) {
            dismissModal();
        }

        if (event.target.dataset.toggle == 'modal') {
            showModal((event.target.dataset.target).substring(1));
        }

        return;
    }, false);

    function onChange() {
        if (this.value != '') {
            let selCat = this.value;
            let modalCat = selCat + "Cat";
            showModal(modalCat);
        }
    }

    function showModal(element) {
        let modal = document.getElementById(element);

        body.classList.add('modal-open');
        body.style.paddingRight = '17px';
        modal.classList.add('show');
        modal.style.display = 'block';
        modal.style.paddingRight = '17px';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';   
    }

    function dismissModal() {
        const modals = document.querySelector('.modal.show');

        body.removeAttribute('class');
        body.removeAttribute('style');
        modals.classList.remove('show');
        modals.removeAttribute('style');
        modals.style.display = 'none';       
    }

})();