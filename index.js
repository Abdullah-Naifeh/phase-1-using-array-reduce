const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


    

let totalBatteries = batteryBatches.reduce(function (totalBatteries,num) {
          totalBatteries = totalBatteries + num;
          return totalBatteries
    },0)




console.log(totalBatteries)