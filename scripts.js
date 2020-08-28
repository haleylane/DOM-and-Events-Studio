// Write your JavaScript code here.
// Remember to pay attention to page loading!
//let init = function() {
window.addEventListener("load", function() {
    let takeOffButton = this.document.getElementById("takeoff");
    let flightStatus= this.document.getElementById("flightStatus");
    let shuttleScreen = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let landButton = this.document.getElementById("landing");
    let abortButton = this.document.getElementById("missionAbort");
    let leftButton = this.document.getElementById("left");
    let rightButton = this.document.getElementById("right");
    let upButton = this.document.getElementById("up");
    let downButton = this.document.getElementById("down");
    let img = document.getElementById('rocket');
    img.style.position = 'absolute';
    img.style.left = '0px';
    img.style.bottom = '0px';
    takeOffButton.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result){
            flightStatus.innerHTML= "Shuttle in flight";
            shuttleScreen.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = shuttleHeight.innerHTML + 10000;
        };
    });
    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleScreen.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        });
    abortButton.addEventListener("click", function(){
        let result2 = window.confirm("Confirm that you want to abort the mission.");
        if (result2) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleScreen.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        };
    });
    leftButton.addEventListener("click", function(){
        moveLeft = parseInt(img.style.left) - 10 + 'px';
        img.style.left = moveLeft;
    });
    rightButton.addEventListener("click", function() {
        moveRight = parseInt(img.style.left) + 10 + 'px';
        img.style.left = moveRight;

    });
    upButton.addEventListener("click", function() {
        moveUp = parseInt(img.style.bottom) + 10 + 'px';
        img.style.bottom = moveUp;
        //shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });
    downButton.addEventListener("click", function(){
        moveDown = parseInt(img.style.bottom) - 10 'px';
        img.style.bottom = moveDown;
        //shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;

    });








})
//window.onload = init;