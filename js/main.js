// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


$(document).ready(function() {
    $('.reply-hidden').hide();

    $('.reply-more').click(function(event) {
        event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
        $('.reply-hidden').slideToggle();
        $('.reply-more').hide();
    });
});


// Модальное окно

$(".btn-callback, .btn-popup").fancybox({
    "padding" : 0
});


// Радиокнопки


$('.radio-male').click(function() {
    var box = $(this).closest('.showcase');
    box.removeClass('showcase-female') ;
    console.log('showcase-female delete');
});

$('.radio-female').click(function() {
    var box = $(this).closest('.showcase');
    box.addClass('showcase-female') ;
    console.log('showcase-female add');
});


