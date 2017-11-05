var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]

// myForEach
// mySort
// myMap
Array.prototype.myForEach = function (cb) {
  for(var i=0; i<=this.length -1; i++) {
    cb(this[i], i, this)
  }
}

array.forEach(function (el) { console.log('forEach', el) })
console.log("------------")
array.myForEach(function (el) { console.log ('myForEach', el) })
console.log("------------")



Array.prototype.myMap = function (cb) {
  for(var i=0; i <= this.length -1; i++) {
    this[i] = cb(this[i], i, this)
  }

  return this
}

var modules = array.map(Math.abs)
console.log('map', modules)

var modules2 = array.myMap(Math.abs)
console.log('myMap', modules2)
console.log("------------")

Array.prototype.mySort = function mySort(cb) {
  if (cb) {
    var a = this[i - 1],
      b = this[i]
    for(var i=0; i <= this.length -1; i++) {
      var res = cb(a, b)

      if (res > 0) {
        this[i - 1] = b
        this[i] = a
        i = 0
      } else if (res < 0) {
        this[i - 1] = a
        this[i] = b
      }
    }
    return this
  }

  var len = array.length,
    temp
  for (var i = 0; i <len - 1; i++) {
    for (var j = len - 1; j >= i; j--) {
      if (array[j] <array[j - 1]) {
        temp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = temp
      }
    }
  }
  return array
}

console.log('sort', array.sort())
console.log('mysort', array.mySort())

console.log("------------")
function compare(a, b){
  return b - a
}
console.log('sort', array.sort(compare))
console.log('mySort', array.mySort(compare))