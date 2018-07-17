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
  text:       ' выпускает смертоносное заклинание',
  hp:         65, 
  attack:     12   
});  

var human = Created.creature({ 
  name:       'Vollha',
  type:       'warlock',
  text:       ' насылает проклятие',
  hp:         43, 
  attack:     21 
}); 

var human_2 = Created.creature({ 
  name:       'Henit',
  type:       'priest',
  text:       ' воззывает к Забытой Тени',
  hp:         85, 
  attack:     10 
});    

function randomAttack(min, max) { 
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand); 
    return rand;
}
  
function duel(firstCreature, secondCreature) {
     
var firstCreatureHealth     = firstCreature.hp; 
var secondCreatureHealth    = secondCreature.hp;
var firstCreatureAttack     = firstCreature.attack; 
var secondCreatureAttack    = secondCreature.attack;
 
  for(var i = 0; ; i++ ) { 

    var currentAttackOfFirst  = randomAttack(0, firstCreatureAttack); 
    var currentAttackOfSecond = randomAttack(0, secondCreatureAttack);

    firstCreatureHealth -= currentAttackOfSecond;    
    if(currentAttackOfSecond == 0) {
      console.log(secondCreature.name + secondCreature.text + ', но промахивается.');
    } else {
     console.log(secondCreature.name + secondCreature.text + ' и наносит ' + currentAttackOfSecond + ' урона!');  
    }
      
    secondCreatureHealth -= currentAttackOfFirst;
    if(currentAttackOfFirst == 0) {
      console.log(firstCreature.name + firstCreature.text + ', но промахивается.');
    } else {
     console.log(firstCreature.name + firstCreature.text + ' и наносит ' + currentAttackOfFirst + ' урона!'); 
    }

    if(firstCreatureHealth <= 0) {    
      console.log(firstCreature.name + ' побежден!');
      break; 
    } else if(secondCreatureHealth <= 0) {             
      console.log(secondCreature.name + ' побежден!');
      break;   
    }  
  }    
}  

duel(human, human_2)         
      