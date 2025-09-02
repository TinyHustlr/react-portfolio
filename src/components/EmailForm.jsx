import { useState } from 'react';

export default function EmailForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61d38a4b-321e-41fc-b358-c5c93ed14fc7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form id="contactForm" onSubmit={onSubmit}>
        <label for="name">Name</label><br></br>
        <input type="text" name="name" required/><br></br>
        <label for="email">Email</label><br></br>
        <input type="email" name="email" required/><br></br>
        <label for="message">Message</label><br></br>
        <textarea name="message" required></textarea><br></br>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>
    </div>
  );
}