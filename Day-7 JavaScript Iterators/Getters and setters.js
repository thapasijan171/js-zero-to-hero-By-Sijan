const myCat = {
    _name: 'Dottie',
    get name() {
      return this._name;  
    },
    set name(newName) {
      this._name = newName;  
    }
  };
  
  // Reference invokes the getter
  console.log(myCat.name);
  
  // Assignment invokes the setter
  myCat.name = 'Yankee';
  