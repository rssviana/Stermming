$(function() {
    $('#show-words').hide();
    $('#show-radicals').hide();
    $('#show-percentage').hide();


    var showWords = $('#show-words');
    var showRadicals = $('#show-radicals');
    var showPercentage = $('#show-percentage');

    
    $.getJSON('http://localhost:3000/db', function (data) {
    
        var words = data.words;
        var radicals = data.radicals;

        $('#get-data').click(function () {
            if(words.length){
                var content = '<li>'+ words.join('</li><li>') +'</li>';
                var list = $('<ul />').html(content);

                showWords.append(list);
            }
            $('#show-words').toggle();
            $('#show-radicals').hide();
        });

        $('#get_radicals').click(function () {
            if(radicals.length){
                var content = '<li>'+ radicals.join('</li><li>') +'</li>';
                var list = $('<ul />').html(content);

                showRadicals.append(list);
            }
            $('#show-radicals').toggle();
            $('#show-words').hide();
        });
        
        $('#get_percentage').click(function (hits) {
            var hits = 0;
            $('#show-words').hide();
            $('#show-radicals').hide();


            for (var w = 0; w < words.length; w++){
                //console.log(words[w]);  // with you wanna see inside the loop of all words
                for(var r = 0; r < radicals.length; r++){
                    //console.log(radicals[r]);  // with you wanna see the lopp inside de radicals
                    if ( words[w].indexOf(radicals[r]) != -1 ) {
                        hits = hits + 1;
                        console.log("  "+ words[w] + " tem : "+ radicals[r] + "  Qtd :"+ hits);//see all comparations
                    }
                }
            }
            showPercentage.html("<h1>"+ hits + "</h1>");

            $('#show-percentage').toggle();
        });
    
      });
});