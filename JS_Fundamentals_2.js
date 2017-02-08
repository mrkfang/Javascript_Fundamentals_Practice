function sumXY(x,y){
  var sum = 0;
  if (x < y){
    for (var i=x; i<y; i++){
      sum += i;
    }
  } else {
    for (var i=y; i<x; i++){
      sum += i;
    }
  }
}

var person = {
  name : "Jim",
  distance_traveled : 0,

  say_name : alert(person.name),
  say_something : function(p1){ person.name + " " + p1 },
  walk : function(){
    alert(person.name + " is walking");
    person.distance_traveled += 3;
  },
  run : function(){
    alert(person.name + " is running");
    person.distance_traveled += 10;
  },
  crawl : function(){
    alert(person.name + " is crawling");
    person.distance_traveled += 1;
  }
}
