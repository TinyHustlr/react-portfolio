export default function CTAButtons() {
    return (
        <>
      {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-contact btn-cta" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth'})}>GET IN TOUCH</button>
          <a href="https://www.youtube.com/@minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-youtube btn-cta">YOUTUBE</button>
          </a>
          <a href="https://www.linkedin.com/in/davidworeilly/" target="_blank" rel="noreferrer noopener">
          <button className="btn-linkedin btn-cta">LINKEDIN</button>
          </a>
          <a href="https://www.twitch.tv/minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-twitch btn-cta">TWITCH</button>
          </a>
          <button className="btn-cta" onClick={() => {
  const testBraze = () => {
  console.log('🧪 === BRAZE TEST START ===');
  
  // Check if initialized
  console.log('1️⃣ Braze exists?', !!window.braze);
  
  // Get current user before reset
  const oldUser = braze.getUser()?.getUserId();
  console.log('2️⃣ Old user ID:', oldUser);
  
  // Wipe and start fresh
  braze.wipeData();
  console.log('3️⃣ Data wiped');
  
  // New user ID
  const newUserId = 'mvp-test' + Date.now();
  braze.changeUser(newUserId);
  console.log('4️⃣ New user ID:', newUserId);
  
  // Open session
  braze.openSession();
  console.log('5️⃣ Session opened');
  
  // Set a custom attribute
  braze.getUser().setCustomUserAttribute('test_attribute', 'test_value_' + Date.now());
  console.log('6️⃣ Attribute set');
  
  // Log an event
  braze.logCustomEvent('add_to_cart', { 
    timestamp: new Date().toISOString(),
    test_number: Math.random() 
  });
  console.log('7️⃣ Event logged');
  
  // Force flush
  braze.requestImmediateDataFlush((success) => {
    console.log('8️⃣ Flush result:', success ? '✅ SUCCESS' : '❌ FAILED');
  });
  
  console.log('9️⃣ Check Network tab for POST to Braze');
  console.log('🔟 User to search in dashboard:', newUserId);
  console.log('🧪 === BRAZE TEST END ===');
};

// Run the test
testBraze();

          }} >BRAZE</button>
        </div>
        </>
    )
};