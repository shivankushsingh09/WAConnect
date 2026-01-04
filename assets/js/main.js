function getWhatsappUrl(whatsappUser) {
  return "https://wa.me/+91" + whatsappUser;
}

function handleGenerateClick() {
  const whatsappUrl = getWhatsappUrl(inputElement.value);
  appElement.innerText = whatsappUrl;
}

const inputElement = document.getElementById("whatsappInput");
const buttonElement = document.getElementById("GenerateBtn");
const appElement = document.getElementById("app");

buttonElement.addEventListener("click", handleGenerateClick);
