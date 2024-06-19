import React, { useState } from 'react';
import '../css/details.css'
import { Link, useNavigate } from 'react-router-dom';

function Details({ setDetails }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({ from, to, message });
    navigate('/card');
  };

  return (
    <div className='details'>
      <div className='main'>
        <h2>
          Share Poson Cards with your loved ones
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputField'>
          <input
            type="text"
            placeholder='From'
            value={from}
            required
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder='To'
            value={to}
            required
            onChange={(e) => setTo(e.target.value)}
          />
          <textarea
            cols={10}
            rows={4}
            placeholder='Message'
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Details;