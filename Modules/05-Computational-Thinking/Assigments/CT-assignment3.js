function generation(x, y) {
    const familyTree = {
    "-3": {
        "m": "great grandfather",
        "f": "great grandmother"
    },
    "-2": {
        "m": "grandfather",
        "f": "grandmother"
    },
    "-1": {
      "m": "father",
      "f": "mother"
    },
    "0": {
        "m": "me!",
        "f": "me!"
    },
    "1": {
        "m": "son",
        "f": "daughter"
    },
    "2": {
        "m": "grand son",
        "f": "grand daughter"
    },
    "3": {
        "m": "great grandson",
        "f": "great granddaughter"
    }
    };
    
    return familyTree[x][y]
    
}

console.log(generation(3,'f'))
  
  