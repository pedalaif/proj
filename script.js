const copyText = (textElement, alertElementId) => {
  const text = textElement.textContent || textElement.value;
  const alertElement = document.getElementById(alertElementId);
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alertElement.style.display = "block";
      setTimeout(() => {
        alertElement.style.display = "none";
      }, 2000);
    })
    .catch((err) => {});
};
