const GCD = require('../models/model');

// Get GCD from list by POST Method
exports.getGCDFromList = (req, res, next) => {
    const numbers = req.body.numbers;
    if (numbers == null) {
        res.status(500).send({
            message: 'Error, the request body is null'
        });
    }
    else if (!Array.isArray(numbers)) {
        res.status(500).send({
            message: 'Error, the request body is not an Array'
        });
    } else if (numbers.some(isNaN)) {
        res.status(500).send({
            message: 'Error, the request body is not an Array of number'
        });
    } else {
        const gcd = new GCD(numbers);
        const result = gcd.gdcr();
        res.status(200).send({
            GCD: result
        });
    };   
};
