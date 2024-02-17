import React, { useState } from 'react';

const SIPCalculator = () => {
    const [principal, setPrincipal] = useState(0);
    const [monthlyInvestment, setMonthlyInvestment] = useState(0);
    const [annualInterestRate, setAnnualInterestRate] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [totalAmount, setTotalAmount] = useState(null);

    const calculateSIP = () => {
        // Convert annual interest rate to monthly interest rate
        const monthlyInterestRate = (annualInterestRate / 100) / 12;

        // Calculate the number of months
        const numberOfMonths = timePeriod * 12;

        // Calculate future value using the SIP formula
        const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate);

        // Add the principal amount to the future value
        const totalAmountInvested = principal + (monthlyInvestment * numberOfMonths);
        const totalAmountIncludingPrincipal = futureValue + principal;

        setTotalAmount({ futureValue, totalAmountInvested, totalAmountIncludingPrincipal });
    };

    return (
        <div>
            <h1>SIP Calculator</h1>
            <div>
                <label>Principal Amount:</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
            </div>
            <div>
                <label>Monthly Investment:</label>
                <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} />
            </div>
            <div>
                <label>Annual Interest Rate (%):</label>
                <input type="number" value={annualInterestRate} onChange={(e) => setAnnualInterestRate(Number(e.target.value))} />
            </div>
            <div>
                <label>Time Period (years):</label>
                <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} />
            </div>
            <button onClick={calculateSIP}>Calculate SIP</button>
            {totalAmount && (
                <div>
                    <h2>Results</h2>
                    <p>Future Value: {totalAmount.futureValue.toFixed(2)}</p>
                    <p>Total Amount Invested: {totalAmount.totalAmountInvested.toFixed(2)}</p>
                    <p>Total Amount Including Principal: {totalAmount.totalAmountIncludingPrincipal.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default SIPCalculator;
