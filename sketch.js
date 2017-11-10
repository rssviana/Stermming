$(function() {
    $('#show-words').hide();
    $('#show-radicals').hide();
    $('#show-percentage').hide();
    $('#show-genradical').hide();


    var showWords = $('#show-words');
    var showRadicals = $('#show-radicals');
    var showPercentage = $('#show-percentage');
    var showGenRadicals = $('#show-genradical');

    
    $.getJSON('http://localhost:3000/db', function (data) {// PEGA TODOS OS DADOS DO SERVIDOR LOCAL DISPONIBILIZA
    
        var words = data.words;
        var radicals = data.radicals;
        var suffixes = data.sufixos;

        $('#get_words').click(function () {// MOSTRA A LISTA DE 1000 PALAVRAS
            if(words.length){
                var content = '<li>'+ words.join('</li><li>') +'</li>';
                var list = $('<ul />').html(content);

                showWords.append(list);
            }
            showWords.toggle();
        });

        $('#get_radicals').click(function () {// MOSTRA A LISTA DE  RADICALS TRATATOS SEM REPETIÇÃO
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
            var haveAlreadyCount = 0;
 
            for (var w = 0; w < words.length ; w++) {
                haveAlreadyCount = 0;
                var wordSize =  words[w].length;// ARMAZENA O TAMANHO DA PALAVRA

                for (var s = 0; s < suffixes.length; s++) {
                    var sufixSize = suffixes[s].length;// ARMAZENA O TAMANHO DO SUFIXO
                    
                    if(words[w].endsWith(suffixes[s]) ==  true){
                        while(haveAlreadyCount < 1){
                            var cutWord = (wordSize - sufixSize) - 1;// PONTO DE CORTE PARA A RETIRADA DO SUFIXO
                                                        
                            listNewRadicals[w] = words[w].slice(0, cutWord);// RETIRO O SUFIXO DA PALAVRA A PARTIR DO PONTO DE CORTE

                            haveAlreadyCount = 1;
                        }

                    }

                }                 
            }

            for (var m = 0; m < listNewRadicals.length; m++) {
                haveAlreadyCount = 0;
                for(var n = 0; n < radicals.length; n++) {
                    if (listNewRadicals[m] == radicals[n]) {
                        //console.log("===>"+ listNewRadicals[m] +"  equals  "+ radicals[n] +"<==="); IF YOU WANNA SEE  TE COMPARISON
                        hits = hits + 1;
                    }
                }
            }
            var fnlPercent = Math.floor(( hits * 100 )/ 100);// CRIA A PORCENTAGEM A PARTIR DA COMPARAÇÃO DO MATCH ENTRE LISTA OFERECIDA COM A GERADA
            showPercentage.html("<h1>"+ fnlPercent + "% acertos</h1>");

            $('#show-percentage').toggle();
        });
    
    });
});

//the rockafeller skank - fatboy Slim, 
//we used to be friends -dandy warhols, 
//l.s.f - kasabian, 
//jerk it out - caesars
//young folks - peter bjorn
// mercy - duffy
//the big big bang - rock mafia
//club foot- kasabian