import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        {paymentMethod === 'creditCard' && (
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default Payment;