function missingLetter(str){
    for (let i = 0; i < str.length; i++){
        const charCode = str.charCodeAt(i);
        
        if (charCode !== str.charCodeAt(0) + i){
            return String.fromCharCode(charCode - 1);
        }
    }
    return undefined;
}
  
  console.log(missingLetter("abce"));