function Created() {
  this.parameters = function() {
    console.log(this.name + ', ' + this.type + ', ' + this.hp + ', ' + this.attack + ', ' + this.text)
  };
}

Created.creature  = function(data) {
  var monster     = new Created;
  monster.name    = data.name;
  monster.type    = data.type;
  monster.text    = data.text;
  monster.hp      = data.hp;
  monster.attack  = data.attack;
  return monster; 
}

var troll = Created.creature({
  name:       'Orglak',
  type:       'barbarian',
  text:       ' бьёт врага топором',
  hp:         100, 
  attack:     8   
});

var undead = Created.creature({ 
  name:       'Ar-Kelef',
  type:       'mage',
  text:       ' выпускает сгусток льда',
  hp:         65, 
  attack:     15   
});  

var human = Created.creature({ 
  name:       'Guldan',
  type:       'warlock',
  text:       ' насылает проклятие',   
  hp:         43,      
  attack:     21  
}); 

var human_2 = Created.creature({  
  name:       'Sinistria',
  type:       'priest',
  text:       ' накладывает слово Тьмы',
  hp:         85,      
  attack:     10      
});    

function random(min, max) { 
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);  
    return rand;
}   

function starterDamage(className) {     
  className = className.type;
  return (className == 'barbarian') ? 4 : (className == 'priest') ? 2 : 0;
} 

function criticals(counter, attack) { 
  var count = counter(1, 10);
  return (count < 2) ? attack / 0.5 : (count > 8) ? attack * 5 : attack;
}      
       
function duel(firstCreature, secondCreature) { 
         
 var firstCreatureHealth         = firstCreature.hp,     
     secondCreatureHealth        = secondCreature.hp,  
     firstCreatureAttack         = firstCreature.attack,
     secondCreatureAttack        = secondCreature.attack,
     firstStarterDamage          = starterDamage(firstCreature),
     secondStarterDamage         = starterDamage(secondCreature);  
 
  while(true) { 
    
 var currentAttackOfFirst        = random(firstStarterDamage, firstCreatureAttack),
     currentAttackOfSecond       = random(secondStarterDamage, secondCreatureAttack),
     currentWithCriticalsFirst   = criticals(random, currentAttackOfFirst),
     currentWithCriticalsSecond  = criticals(random, currentAttackOfSecond);
    
    firstCreatureHealth -= currentWithCriticalsSecond;      
    if(secondCreatureHealth <= 0) {             
      console.log(secondCreature.name + ' получает смертельную рану и погибает!'); 
      break;   
    } else if (currentWithCriticalsSecond == 0) {
      console.log(secondCreature.name + secondCreature.text + ', но промахивается.');
    } else {
     console.log(secondCreature.name + secondCreature.text + ' и наносит ' + currentWithCriticalsSecond + ' урона!');      
    }
      
    secondCreatureHealth -= currentWithCriticalsFirst; 
    if(firstCreatureHealth <= 0) {    
      console.log(firstCreature.name + ' получает смертельную рану и погибает!');
      break;  
    } else if (currentWithCriticalsFirst == 0) {
      console.log(firstCreature.name + firstCreature.text + ', но промахивается.');
    } else {
     console.log(firstCreature.name + firstCreature.text + ' и наносит ' + currentWithCriticalsFirst + ' урона!'); 
    }   
  }    
}   
 
duel(undead, troll)          
        