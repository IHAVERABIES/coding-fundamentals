function calculateAge(birthday){
    const ageInMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageInMs);
    return Math.round(ageDate.getUTCFullYear() - 1970);
}
  
console.log(calculateAge('2011/03/21'))

