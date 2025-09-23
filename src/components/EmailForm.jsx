import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function EmailForm() {
  const [result, setResult] = useState("");
    const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

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
        <input type="text" name="name" placeholder="First name" required/><br></br>
        <label for="email">Email</label><br></br>
        <input type="email" name="email" placeholder="Email address" required/><br></br>
        <label for="message">Message</label><br></br>
        <textarea name="message" placeholder="Message" required></textarea><br></br>
      <HCaptcha
         sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
         reCaptchaCompat={false}
         onVerify={onHCaptchaChange} 
      />
      <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}