(function () {
  const chatBtn = document.createElement("div");
  chatBtn.innerHTML = "Chat Support";
  chatBtn.style.position = "fixed";
  chatBtn.style.bottom = "20px";
  chatBtn.style.right = "20px";
  chatBtn.style.background = "#0a4aa6";
  chatBtn.style.color = "#fff";
  chatBtn.style.padding = "12px 18px";
  chatBtn.style.borderRadius = "30px";
  chatBtn.style.cursor = "pointer";
  chatBtn.style.zIndex = "9999";
  chatBtn.style.fontSize = "14px";
  chatBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  document.body.appendChild(chatBtn);

  const chatBox = document.createElement("div");
  chatBox.style.position = "fixed";
  chatBox.style.bottom = "80px";
  chatBox.style.right = "20px";
  chatBox.style.width = "300px";
  chatBox.style.height = "380px";
  chatBox.style.background = "#fff";
  chatBox.style.border = "1px solid #e5e7eb";
  chatBox.style.borderRadius = "10px";
  chatBox.style.display = "none";
  chatBox.style.zIndex = "9999";
  chatBox.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

  chatBox.innerHTML = `
    <div style="background:#0a4aa6;color:#fff;padding:10px;border-radius:10px 10px 0 0;">
      Quicken Support Chat
    </div>
    <div id="chat-messages" style="padding:10px;height:280px;overflow-y:auto;font-size:13px;">
      <div><strong>Agent:</strong> Hi! How can I help you today?</div>
    </div>
    <div style="padding:10px;border-top:1px solid #e5e7eb;">
      <input id="chat-input" type="text" placeholder="Type your message..."
        style="width:100%;padding:8px;border:1px solid #ccc;border-radius:5px;">
    </div>
  `;

  document.body.appendChild(chatBox);

  chatBtn.addEventListener("click", function () {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("keypress", function (e) {
    if (e.target && e.target.id === "chat-input" && e.key === "Enter") {
      const msg = e.target.value.trim();
      if (!msg) return;

      const messages = document.getElementById("chat-messages");
      messages.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
      e.target.value = "";

      setTimeout(function () {
        messages.innerHTML += `<div><strong>Agent:</strong> Thanks! Our team will reply soon.</div>`;
        messages.scrollTop = messages.scrollHeight;
      }, 800);
    }
  });
})();
