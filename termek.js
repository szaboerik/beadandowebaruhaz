const webTomb = [];

$(function () {


$(document).ready(function (){
    $.getJSON("termekek.json" , function(data){
        var WebData = '';
        $.each(data , function(key,value){
                WebData += '<div><h3>'+value.nev+'</h3>\n';
                WebData += "<img src='" + value.kep + "' alt='" + value.kep.slice(7,value.kep.length-4) + "' >"
                WebData += '<p>'+value.leiras+'</p>\n';
                WebData += '<p>'+value.ar+'</p></div>';

            });
            
        $('article').append(WebData);

        });
        
    $.ajax(
        {url: "termekek.json", success: function (result) {
                console.log(result);
                webTomb = result;
             
                }});
                
    
    });



});
