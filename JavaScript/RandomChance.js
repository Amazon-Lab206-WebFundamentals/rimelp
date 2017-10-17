function randomChance(quarters){
    while(quarters > 0){
         var spin = Math.floor(Math.random()*100);
         var winspin = Math.floor(Math.random()*100);
         console.log("You rolled " + spin);
         if(spin === winspin){
             var winning = Math.trunc(Math.random() *50 + 50);
             quarters = (winning + quarters);
             console.log("You won! You now have " + (winning+quarters) + " quarters");
         }
         else{ 
             quarters--;
             console.log("Sorry, you did not win. You have " + quarters + " quarters left.")
         }
    }
    return 0;
    console.log("Sorry, you do not have any quarters left")
}

randomChance(50)