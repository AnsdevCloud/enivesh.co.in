import React from 'react'

const CoverageConvert = ({ value }) => {
    if (value >= 1000 && value <= 99999) {
        let newvalue = (value / 1000) + " K";
        return <span>{newvalue}</span>;
    } else if (value >= 100000 && value <= 9999999) {
        let newvalue = (value / 100000) + " L";
        return <span>{newvalue}</span>;
    } else if (value >= 10000000) {
        let newvalue = (value / 10000000) + " Cr";
        return <span>{newvalue}</span>;
    } else {
        return <span>{value}</span>;
    }
};


export default CoverageConvert