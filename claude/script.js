document.getElementById("notifyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.email.value;
  alert(
    `Welcome to the future of local search, ${email}! We'll let you know when we launch.`
  );
  e.target.reset();
});
