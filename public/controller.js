$(() => {
    buildBoard();
    attachListeners();
});

const buildBoard = () => {
    let $board = $('#boardArea');
    let content = '<table class="boardTable">';
    let array = [];
    for(let i = 1; i <= 36; i++){
        array.push(i);
    }
    array = fisherYatesSuffle(array);
    for( let i = 0; i < 36; i++){
        if(i % 6 === 0){
            if(i > 0){
                content += '</tr>';
            }
            content += '<tr>';
        }
        content += '<td class="boardCell">'+
                        '<div class="cellLabel"><span class="cellLabelText">'+array[i]+'</span></div>';
        if( array[i] % 6 === 0 ){
            content += '<span class="note">♫</span>';
        }
        
        content += '</td>';
    }
    content += '</table>';

    $board.append($(content));
}

const attachListeners = () => {

}

const fisherYatesSuffle = array => {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}