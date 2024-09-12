
  const sendOtpButton = document.querySelector(".btnsend"); // Select the "Send OTP" button
  console.log(sendOtpButton);
  
  const otpInput = document.getElementById("otp-inp");
  const verifyButton = document.getElementById("otp-btn");

  sendOtpButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;

    // Simple email validation (replace with a more robust validation)
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    
    // Replace "your-subject" and "your-body" with actual content
    const mailtoLink = `mailto:${email}?subject=Your OTP Verification&body=Your OTP is here: `;
    window.open(mailtoLink);

    // Simulate receiving OTP (replace with actual OTP generation logic)
    const fakeOtp = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    otpInput.value = fakeOtp;

    // Enable verification button only after sending OTP
    verifyButton.disabled = false;
  });

  verifyButton.addEventListener("click", () => {
    const enteredOtp = otpInput.value;
    const fakeOtp = otpInput.defaultValue; // Use the simulated OTP

    if (enteredOtp === fakeOtp) {
      alert("OTP verification successful!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  });

