//feetToMile

function feetToMile(feet){
    if(feet >= 0){
        var mile = feet/5280;
    }
    else{
        console.log("Feet can not be negative");
    }
    
    return mile;
}
var mileResult = feetToMile(5280);
console.log(mileResult);

//Wood Calculator

function woodCalculator(chair, table, bed){
    var chairWood = 1 * chair;
    var tableWood = 3 * table;
    var bedWood   = 5 * bed;
    var totalWood = chairWood + tableWood + bedWood;

    if(chairWood >=0 && tableWood >=0 && bedWood >=0){
        console.log(totalWood);
        }
    else{
        
        console.log("The Element can not be negative");
    }
    
    return totalWood;
}
var woodResult = woodCalculator(5,7,1);


    

// Brick Calculator

function brickCalculator(floor){
    var feet = 1000;
if (floor >=0 && floor <=10 ){
    var bricks = 15 * feet * floor;
}
else if(floor >10 && floor <=20){
    var floor = floor - 10;
    var bricks = (12 * feet * floor )+ 150000;
}
else if(floor >20){
    var floor = floor - 20;
    var bricks = (10 * feet * floor) + 270000;
}
else {
    var bricks = "The floor can not be negative";
    
}
return bricks;
}
var resultBricks = brickCalculator(40);
console.log(resultBricks);

// Tiny Friends

function tinyFriend(names){
    var miniName = names[0];
    for( var i = 0; i<names.length; i++){
        var currentName = names[i];
        if(currentName < miniName){
            miniName = currentName;
        }
    }
    return miniName;

}
var miniFriend = tinyFriend(["Minhaz", "Rifat", "Shojib", "Asad", "Sakin", "Imran", "Tashrik", "Partho", "Khairul", "azzy" ]);
console.log(miniFriend);