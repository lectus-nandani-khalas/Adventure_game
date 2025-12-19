const he = require("prompt-sync")();
const name=he("What is your name?  ")
console.log("Hello",name,"Welcome to our game!");

const shouldWePlay=he("Do you want to play a game? ");



if(shouldWePlay.toLowerCase() === "yes"|| shouldWePlay.toLowerCase() === "y"){
    // Game logic
    const leftOrRight=he("You enter a maze, Do you want to go left or right?");
    if(leftOrRight === "left"){
        console.log("You go left and see a bridge...");
        const cross = he("Do you want to cross the bridge? ").toLowerCase();
        if(cross === "yes" || cross === "y" || cross === "ok" || cross === "yeah"){
            console.log("You cross but the bridge was weak and broke and you fell... You lost");
        }
        else if(cross==="no"||cross==="n"||cross==="nope"){
            console.log("Good choice... You win!");
        }
        else{
            console.log("Invalid Input...");
        }
    }else if(leftOrRight==="right"){
        console.log("You go right and fall off a cliff...");
    }
    else{
        console.log("Invalid Input...")
    }
}
else if(shouldWePlay.toLowerCase() === "no"||shouldWePlay.toLowerCase() === "n"||shouldWePlay.toLowerCase() === "nope"){
    console.log("Ok :(");

}
else{
    console.log("Invalid Input....");
}
