const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  result.textContent = "Sending...";
  result.className = "mt-2 text-center text-sm text-[#94A3B8]";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      result.textContent = "✅ Message sent successfully!";
      result.className = "mt-2 text-center text-sm text-green-400";
      form.reset();
    } else {
      result.textContent = data.message || "❌ Something went wrong.";
      result.className = "mt-2 text-center text-sm text-red-400";
    }
  } catch (error) {
    result.textContent = "❌ Failed to send message.";
    result.className = "mt-2 text-center text-sm text-red-400";
  }
});