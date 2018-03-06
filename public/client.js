/* global $ */

$ (function () {
    $.get('/cities', appendToOptions);
    
    function appendToOptions(cities) {
        var options = [];
        for (var i in cities) {
            //options.push($('<option>', {text: cities[i]}));
            var content = '<a href="/cities/' + cities + '">' + cities + '</a>';
            options.push($('<option>', {html:content}));
        }
    $('#cities-list').append(options);
    };
    
$('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var cityData = form.serialize();
 
 // cityName  
    $.ajax ({
        type: 'POST', url:'/cities', data:cityData}).done(function (cityName) {
            appendToOptions([cityName]);
        });
        form.trigger('reset');
    });
});
    
//});