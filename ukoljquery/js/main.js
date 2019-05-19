$(function(){
    $('#nadpis h2').click(function(){
        if ($(this).nextUntil('h2').is(':hidden')) {
            $(this).css({'background-color':'#222'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h2').toggle(1000);
    });
    
    var i = 0;
    window.setInterval(function(){
        $('#galerie img').attr('src','img/'+planety[i].photo);
        $('#galerie figcaption').text(planety[i].popisek);
        i<planety.length-1 ? i++ : i=0; 
    }, 3000);
    
   
$("#quiz-form").on("submit", function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        if (answer === "1988" || answer === "pejsek") {
            $("#result").text("Správně!");
        } else {
            $("#result").text("Zkus to znovu!");
        }
    });
    $('.objekt').attr({'style':'fill:rgba(255,255,0,0.2);stroke:white;stroke-width:0.5'});

    $('.objekt').on('click',function(){
        $('.objekt').attr({'style':'fill:rgba(255,255,0,0.2);stroke:white;stroke-width:0.5'});
        $(this).attr({'style':'fill:rgba(255,255,0,0);stroke:green'});
    });
    $('.objekt').on('click',function(){
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
        $('#text figcaption').text($(this).data('nazev'));
    })
});



