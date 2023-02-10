function getDays(date1, date2){
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime()
    
    const diffInMs = Math.abs(date1Ms - date2Ms);
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    
    return diffInDays;
}

console.log(getDays('2011/03/21', '2012/02/21'));

