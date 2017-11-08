$(function() {
    $('#show-words').hide();
    $('#show-radicals').hide();
    $('#show-percentage').hide();
    $('#show-genradical').hide();


    var showWords = $('#show-words');
    var showRadicals = $('#show-radicals');
    var showPercentage = $('#show-percentage');
    var showGenRadicals = $('#show-genradical');

    
    $.getJSON('http://localhost:3000/db', function (data) {
    
        var words = data.words;
        var radicals = data.radicals;
        var suffixes = data.sufixos;

        $('#get_words').click(function () {
            if(words.length){
                var content = '<li>'+ words.join('</li><li>') +'</li>';
                var list = $('<ul />').html(content);

                showWords.append(list);
            }
            showWords.toggle();
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
        

        $('#get_percentage').click(function () {

            var hits = 0;
            var listNewRadicals = [];
 
            for (var w = 0; w < words.length ; w++) {

                var haveAlreadyCount = 0;
                var wordSize =  words[w].length;

                for (var s = 0; s < suffixes.length; s++) {
                    var sufixSize = suffixes[s].length;
                    
                    if(words[w].endsWith(suffixes[s]) ==  true){
                        while(haveAlreadyCount < 1){
                            var cutWord = (wordSize - sufixSize) - 1;
                                                        
                            listNewRadicals[w] = words[w].slice(0, cutWord);

                            console.log(listNewRadicals[w]);

                            haveAlreadyCount = 1;
                        }

                    }

                }                 
            }

            var fnlPercent = Math.floor(( hits * 100 )/ 1000);
            showPercentage.html("<h1>"+ fnlPercent + "% acertos</h1>");

            $('#show-percentage').toggle();
        });


    
      });
});