function yesButton(){
  let gifImage = document.getElementById("gif");
  gifImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";

  let gifText = document.getElementById("gif-text");
  gifText.innerHTML = "Yeeeey. I love you, Janina!!! <3"

  let noBtn = document.getElementById("no-button");
  let yesBtn = document.getElementById("yes-button");

  noBtn.style.visibility = "hidden";
  yesBtn.style.visibility = "hidden";
}

let currentCount = 0;
function noButton(){
  let noBtn = document.getElementById("no-button");
  let noTxt = document.getElementById("no-text");
  
  if(currentCount < noArrayStrings.length){
    noTxt.innerText = noArrayStrings[currentCount];
    currentCount++;
  }

  var currwidth = noBtn.clientWidth;
  var currheight = noBtn.clientHeight;
  noBtn.style.width = (currwidth + 30) + "px";
  noBtn.style.height = (currheight + 20) + "px";
}

const noArrayStrings = ["No?", "Are you sure?", "What if I asked really nicely?", "Pretty please", 
  "With a chocolate rice cake on top", "What about an iced mocha", "PLEASE", "But T_T", "I am going to die",
  "Yep im dead", "boo i'm a ghost", ":((((", "PRETTY PLEASE", "No :("
];