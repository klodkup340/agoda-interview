module.exports = class GCD {
    // Constructor
    constructor(listOfNumber) {
        this._listOfNumber = listOfNumber;
    }

    // Getter
    get getProperty() {
        return this._listOfNumber;
    }

    // Setter
    set setProperty(arr) {
        this._listOfNumber = arr;
    }

    // Recursively find GCD
    findGCD(a, b) {
        if (a%b == 0) {
            return b;  
        }
        return this.findGCD(b, a%b);
    }

    // Use recursice function to find GCD from the list of numbers
    gdcr() {
        const data = this._listOfNumber;
        let g = this.findGCD(data[0], data[1]);
        let i = 0
        for(i = 2 ; i < data.length; i++) {
            g = this.findGCD(g, data[i]);
        }
        return g;
    }    
};

