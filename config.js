// female Icon https://cdn-icons-png.flaticon.com/512/2922/2922561.png
const companyInfo = {
  name: "Blink Infotech",
  title: "Blink Infotech - FutureTech Innovations",
  logo: "assets/logo.png",
  favicon: "assets/favicon.ico",
  email: "blinkinfotech007@gmail.com",
  address: `Gujarat, India\nShop-4, Nilkanth Heights,\nNear Om Residency,\nSarthana Jakatnaka, Nana Varachha,\nSurat, Gujarat - 395006`,
  contactFormAction: "https://formsubmit.co/blinkinfotech007@gmail.com",
  socials: {
    instagram: "https://instagram.com/blink.infotech",
    linkedin: "https://linkedin.com/company/blinkinfotech",
    facebook: "https://www.facebook.com/profile.php?id=61578623747029",
    twitter: "https://x.com/blinkinfo007"
  },
  apis: {
    blog: "https://api.npoint.io/5fea83f23a9e73f5863b",
    reviews: "https://api.npoint.io/999920066ff2d4219a68",
    team: "https://api.npoint.io/147a9f707c6307fad1a1"
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.title = companyInfo.title;
  document.querySelectorAll(".company-name").forEach(el => el.textContent = companyInfo.name);
  document.querySelectorAll(".company-name-accent").forEach(el => el.textContent = companyInfo.name);
  document.querySelectorAll(".company-email").forEach(el => el.innerHTML = `<strong>Email:</strong> ${companyInfo.email}`);
  document.querySelectorAll(".company-address").forEach(el => el.innerText = companyInfo.address);

  document.querySelectorAll("a.instagram").forEach(el => el.href = companyInfo.socials.instagram);
  document.querySelectorAll("a.linkedin").forEach(el => el.href = companyInfo.socials.linkedin);
  document.querySelectorAll("a.facebook").forEach(el => el.href = companyInfo.socials.facebook);
  document.querySelectorAll("a.twitter").forEach(el => el.href = companyInfo.socials.twitter);

  document.querySelectorAll(".contact-form").forEach(form => form.action = companyInfo.contactFormAction);

  const logoContainers = document.querySelectorAll(".company-logo");
  logoContainers.forEach(container => {
    const img = document.createElement("img");
    img.src = companyInfo.logo;
    img.alt = `${companyInfo.name} Logo`;
    img.className = "logo-img";
    container.prepend(img);
  });

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = companyInfo.favicon;
  favicon.type = "image/png";
  document.head.appendChild(favicon);
});
