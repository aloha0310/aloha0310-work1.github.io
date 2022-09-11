window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //modal
    $('[data-modal=consultation]').on('click', function () {
        $('#exampleModal').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('#exampleModal, #thanks').fadeOut('slow');
    });


    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "js/mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.modal-dialog').fadeOut();
            $('#thanks, #exampleModal').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    
});



