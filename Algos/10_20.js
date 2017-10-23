function findChange(num){
    var coins = {Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0};

    coins.Quarters = Math.floor(num/25);
    num = num % 25;
    coins.Dimes = Math.floor(num/10);
    num = num % 10;
    coins.Nickels = Math.floor(num/5);
    num = num % 5;
    coins.Pennies = num;

    return coins;
}

console.log(findChange("191"))

//function bracesValid(str)
