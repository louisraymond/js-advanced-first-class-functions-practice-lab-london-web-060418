// Code your solution in this file!




const logDriverNames=function (array){
  array.forEach(function (x){
    console.log( x.name)
  }) 
}

const logDriversByHometown= function(array,location){
  array.forEach(function (driver) {
    if (driver.hometown===location) {
      console.log(driver.name)
    }
  })
}


const driversByRevenue= function(array){
  return array.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}


