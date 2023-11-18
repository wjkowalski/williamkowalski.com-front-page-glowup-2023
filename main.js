

// Create function that changes styles to make ostrich visible
// Wrap that in setInterval()


function showHideOstrich (){
    
    setTimeout(function showOstrich() {
        const ostrich = document.getElementById("ostrich");
        ostrich.style.transform = "translateY(-400px)";
        ostrich.style.transition = "1s ease-in-out";
    }, 3000);
    
    setTimeout(function hideOstrich() {
        const ostrich = document.getElementById("ostrich");
        ostrich.style.transform = "translateY(400px)";
        ostrich.style.transition = "3s ease-in-out";
    }, 10000);

}

showHideOstrich();

function showSideOstrich() {
    const sideOstrich = document.getElementById("ostrich");
    // get location of bottom of viewport
    bottomEdge = window.innerHeight;
    console.log(bottomEdge);
    // make this the transform origin point

}

// Runs on button click on front page (2023 update)
function showAgain (){
    
    setTimeout(function showOstrich() {
        const ostrich = document.getElementById("ostrich");
        ostrich.style.transform = "translateY(-400px)";
        ostrich.style.transition = ".5s ease-in-out";
    }, 0);
    
    setTimeout(function hideOstrich() {
        const ostrich = document.getElementById("ostrich");
        ostrich.style.transform = "translateY(400px)";
        ostrich.style.transition = "8s ease-in-out";
    }, 3000);

}

// Get height of #header which is set automatically
// Assign that to be the distance that the side button holder is from the top
// function symmetry(){
//     const theHeader = document.getElementById("header");
//     let headerHeight = theHeader.offsetHeight;
//     console.log(headerHeight);
//     const frontSidebar = document.getElementById('buttonHolder');
//     frontSidebar.style.top = (headerHeight*1.5) + 'px';
// }

// symmetry();

//Change styles of buttons on mouseover
function changeButton(theButton) {
    theButton.classList.add('buttonMouseover');
    
}

function restoreButton(theButton) {
    theButton.classList.remove('buttonMouseover');
}