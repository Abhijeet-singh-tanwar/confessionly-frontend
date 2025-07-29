function sendMessage() {
  const message = document.getElementById("message").value.trim();
  if (!message) {
    alert("Please write a confession first!");
    return;
  }

  fetch("https://confessionly-backend.onrender.com/api/confess", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
    .then(res => res.json())
    .then(data => {
      const link = `https://confessionly-backend.onrender.com/confession/${data.id}`;
      document.getElementById("linkContainer").innerHTML =
        `🎉 Your Confession Link: <a href="${link}" target="_blank">${link}</a>`;
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong! Try again later.");
    });
}
