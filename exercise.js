var exercise = {};

exercise.countRecords = function(data){
    return (data.length)
};

exercise.countDistrictCrimes = function(data,district){
   count=0
    function countdis(idk){
       if (idk[19]===district){
           count=count+1
       }
   }
   chicago.data.forEach(countdis)
    return(count) 
};

exercise.countPrimaryType = function(data,primaryType){
    count=0
    function counttype(idk){
       if (idk[13]===primaryType){
           count=count+1
       }
   }
   chicago.data.forEach(counttype)
    return(count)
};

exercise.countLocation = function(data,location){
    count=0
    function countloc(idk){
       if (idk[15]===location){
           count=count+1
       }
   }
   chicago.data.forEach(countloc)
    return (count);
};


exercise.buildLatLngPoint = function(crime){
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
};




