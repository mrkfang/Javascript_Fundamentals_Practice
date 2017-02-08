var _ = {
   map: function(arr, callback) {
     for(var i=0; i<arr.length; i++){
       arr[i] = callback(arr[i])
     }
     return arr
   },

   reduce: function(arr, callback, memo) {
     var result = memo;
     for(var i=0; i<arr.length; i++){
       result = callback(result, arr[i])
     }
     return result
   },

   find: function(arr, callback) {
     for(var i=0; i<arr.length; i++){
       if ( callback(arr[i]) ){
         return arr[i]
       }
     }
     return undefined
   },

   filter: function(arr, callback) {
     var result = []
     for(var i=0; i<arr.length; i++){
       if (callback(arr[i])){
         result.push(arr[i])
       }
     }
     return result
   },

   reject: function(arr, callback){
     var result = []
     for(var i=0; i<arr.length; i++){
       if (callback(arr[i]) != true){
         result.push(arr[i])
       }
     }
     return result
   }
 }
// you just created a library with 5 methods!
