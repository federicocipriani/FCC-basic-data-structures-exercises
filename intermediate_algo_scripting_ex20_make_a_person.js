// Set methods in order to interact with the object only through them

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let details = firstAndLast.split(" ");
    this.getFirstName = function() {
        return details[0];
    };
    this.getLastName = function() {
        return details[1];
    };
    this.getFullName = function() {
        return details.join(" ");
    };
    this.setFirstName = function(first) {
        details[0] = first;
    };
    this.setLastName = function(last) {
        details[1] = last;
    };
    this.setFullName = function(firstAndLast) {
        details = firstAndLast.split(" ");
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
