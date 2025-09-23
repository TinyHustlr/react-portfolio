import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm();
  
  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };
  
  const onSubmit = async (data) => {
    console.log(data);
    
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    }).then((res) => res.json());
  }

return (
  <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name</label><br></br>
        <input type="text" name="name" required/><br></br>
        <label for="email">Email</label><br></br>
        <input type="email" name="email" required/><br></br>
        <label for="message">Message</label><br></br>
        <textarea name="message" required></textarea><br></br>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>
      <HCaptcha
         sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
         reCaptchaCompat={false}
         onVerify={onHCaptchaChange} 
      />
  </form>
)}

  return (
    <div>
      <form id="contactForm" onSubmit={onSubmit}>

      </form>
      <span>{result}</span>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}

 formData.append("access_key", "61d38a4b-321e-41fc-b358-c5c93ed14fc7");