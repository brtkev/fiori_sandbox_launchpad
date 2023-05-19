console.log("index.js");
let intervalID;
let apps = ["catalog-service", "currencies"]

//handler after rendering
const handler = () => {

    let tiles = document.getElementsByClassName("sapUshellTile");
    let removeList = [];
    //if tiles rendered
    if(tiles.length > 0){
        //filter unauthorized apps to remove the tiles
        for(let i = 0; i < tiles.length; i++ ){
            //get app href
            let href = tiles[i].firstChild.firstChild.firstChild.href;
            if(href === undefined) return; //tile didn't load properly, restart

            let authorized = false; //flag
            //search if app name is in app href
            for( let j = 0; j < apps.length; j++){
                if(href.includes(apps[j])){
                    authorized = true
                }
            }
            //if app is not authorized, add tile to the remove list
            if( !authorized ){
                removeList.push(tiles[i]);
            }
        }
        //remove unauthorized tiles
        for(let i = 0; i < removeList.length; i++){
            removeList[i].remove();
        }
        //get groups
        let groups = document.getElementsByClassName("sapUshellDashboardGroupsContainerItem");
        //remove empty groups
        for(let i = 0; i < groups.length; i++){
            //get ul and check if it has children, children = tiles
            let hasChildNodes = groups[i].firstChild.firstChild.childNodes[1].hasChildNodes();
            //remove groups without tiles
            if(!hasChildNodes){
                groups[i].remove();
            }

        }
        //removes the hider
        document.getElementById('hider').style.display = "none";
        //stops the interval
        clearInterval(intervalID);
    }

}

//Start the inteval, run the handler until stopped
function onRender(){
    intervalID = setInterval(handler, 500);
}

//sap init
sap.ui.getCore().attachInit(()=> {

    //create render async
    sap.ushell.Container.createRenderer(true).then(render => {
        //override after render
        render.onAfterRendering = (e) => {
            //call render after rendering the launchpad
            onRender()
        };
        //render the launchpad at #content
        render.placeAt("content");

    });
    
})