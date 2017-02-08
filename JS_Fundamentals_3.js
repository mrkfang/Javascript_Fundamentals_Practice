function personConstructor(name){
  return {
    "name" : name,
    distance_traveled: 0,
    say_name : alert(name),
    say_something : function(p1){
      console.log( name + " " + p1)
    },
    walk : function(){
      alert( name + " is walking");
      distance_traveled += 3;
    },
    run : function(){
      alert( name + " is running");
      distance_traveled += 10;
    },
    crawl : function(){
      alert( name + " is crawling");
      distance_traveled += 1;
    }
  }
}

function ninjaConstructor(name){
  var ninja = {
    "name" : name,
    cohort : "Web Fundamentals",
    belt_level : "yellow belt",
    levelUp : function(){
      ninja.belt = "black belt"
    }
  }
  return ninja
}
