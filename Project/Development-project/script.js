function validateForm() {
      let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();
      let userError = document.getElementById("userError");
      let passError = document.getElementById("passError");
      
      userError.textContent = "";
      passError.textContent = "";

      if (username === "") {
        userError.textContent = "⚠ Username is required";
        return;
      }

      if (password === "") {
        passError.textContent = "⚠ Password is required";
        return;
      }

      if (password.length < 6) {
        passError.textContent = "⚠ Password must be at least 6 characters";
        return;
      }

      alert("✅ Login Successful!");
    }