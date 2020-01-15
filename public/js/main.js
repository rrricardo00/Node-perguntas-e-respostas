

function ativarNavBar() {
    const lis = document.querySelectorAll('.nav-item');


    function ativar(event) {
        
        lis.forEach((item) => {
            item.classList.remove('active');
        });

        const target = event.currentTarget;
        target.classList.add('active');


    }

    lis.forEach((item) => {

        item.addEventListener('click', ativar);
    });
}

ativarNavBar();