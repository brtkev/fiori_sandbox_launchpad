let intervalID

//looks if the tiles' ul is rendered
const handler = () => {
    let ul = document.getElementsByClassName("sapUshellTilesContainer-sortable sapUshellInner")[0];
    if(ul && ul.childNodes){

        //if render do something... 
        ul.childNodes[0].remove();

        //stop the interval
        clearInterval(intervalID)
    }
}

//Start the inteval, run the handler until stopped
intervalID = setInterval(handler, 1000);
