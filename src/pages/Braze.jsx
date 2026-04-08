import { useState } from 'react';

function Braze({ masthead }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://fb6491b6-cada-4140-bbc2-70232ca4b9d5.eu02.ldpgs.eu/u5u5g?email=${encodeURIComponent(email)}&masthead=${encodeURIComponent(masthead)}`;
    window.location.href = url;
  };

  return (
    <form id="email-form" onSubmit={handleSubmit}>
      <h1>BRAZE TEST PAGE AHOY!🚢</h1>
      <label for="email-el">EMAIL</label>
      <input
        id="email-el"
        name="email-el"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Braze;
