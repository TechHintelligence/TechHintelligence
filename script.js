
/*
  =========================================================
  TECH INTEL
  WhatsApp Lead Form
  =========================================================

  Your WhatsApp number:
  9935932705

  International format without +:
  919935932705
*/

const WHATSAPP_NUMBER = "919935932705";


/* ========================================================
   DEMO WEBSITE DATA
   ======================================================== */

const previewData = {

  cafe: {
    type: "CAFÉ",
    kicker: "FRESH COFFEE • GOOD MOOD",
    title: "Bean & Brew",
    description:
      "A warm local café for coffee, conversations and fresh bites."
  },

  clinic: {
    type: "CLINIC",
    kicker: "CARE • TRUST • WELLNESS",
    title: "CarePoint Clinic",
    description:
      "A professional healthcare website with services, timings and contact options."
  },

  salon: {
    type: "SALON",
    kicker: "STYLE • BEAUTY • CONFIDENCE",
    title: "Aura Salon",
    description:
      "Showcase your services, portfolio, offers and appointment details online."
  },

  gym: {
    type: "GYM",
    kicker: "TRAIN • MOVE • GROW",
    title: "Iron District",
    description:
      "A bold fitness website for memberships, classes, trainers and enquiries."
  },

  restaurant: {
    type: "RESTAURANT",
    kicker: "GOOD FOOD • GREAT MOMENTS",
    title: "The Table",
    description:
      "A polished restaurant presence with menu, location, gallery and reservations."
  }

};


/* ========================================================
   DEMO SWITCHER
   ======================================================== */

const demoTabs = document.querySelectorAll(".demo-tab");

demoTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    demoTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const type = tab.dataset.type;

    const data = previewData[type];

    if (!data) {
      return;
    }

    document.getElementById("previewType").textContent =
      data.type;

    document.getElementById("previewKicker").textContent =
      data.kicker;

    document.getElementById("previewTitle").textContent =
      data.title;

    document.getElementById("previewDescription").textContent =
      data.description;

  });

});


/* ========================================================
   PHONE CLEANER
   ======================================================== */

function cleanPhone(phone) {

  return phone
    .replace(/[^\d+]/g, "")
    .trim();

}


/* ========================================================
   FORM
   ======================================================== */

const leadForm =
  document.getElementById("leadForm");

const formMessage =
  document.getElementById("formMessage");


leadForm.addEventListener("submit", function (event) {

  event.preventDefault();


  const formData =
    new FormData(leadForm);


  /* ------------------------------------------------------
     GET FORM VALUES
     ------------------------------------------------------ */

  const name =
    formData.get("name").trim();

  const phone =
    cleanPhone(formData.get("phone"));

  const business =
    formData.get("business").trim();

  const businessType =
    formData.get("businessType");

  const location =
    formData.get("location").trim();

  const websiteType =
    formData.get("websiteType");

  const domain =
    formData.get("domain");

  const requirements =
    formData.get("requirements").trim();

  const contactTime =
    formData.get("contactTime");


  /* ------------------------------------------------------
     BASIC VALIDATION
     ------------------------------------------------------ */

  if (
    !name ||
    !phone ||
    !business ||
    !businessType ||
    !location ||
    !websiteType ||
    !requirements
  ) {

    formMessage.textContent =
      "Please complete all required fields.";

    return;

  }


  /* ------------------------------------------------------
     PHONE VALIDATION
     ------------------------------------------------------ */

  const digitsOnly =
    phone.replace(/\D/g, "");

  if (digitsOnly.length < 10) {

    formMessage.textContent =
      "Please enter a valid WhatsApp number.";

    return;

  }


  /* ------------------------------------------------------
     CREATE WHATSAPP MESSAGE
     ------------------------------------------------------ */

  const message = `🚀 NEW WEBSITE ENQUIRY — TECH INTEL

👤 Name:
${name}

📱 Customer WhatsApp:
${phone}

🏢 Business Name:
${business}

📌 Business Type:
${businessType}

📍 Location:
${location}

💻 Website Requirement:
${websiteType}

🌐 Existing Domain:
${domain}

🕐 Preferred Contact Time:
${contactTime}

📝 Business / Requirements:
${requirements}

━━━━━━━━━━━━━━━━━━
Tech Intel Website Enquiry
━━━━━━━━━━━━━━━━━━`;


  /* ------------------------------------------------------
     CREATE WHATSAPP URL
     ------------------------------------------------------ */

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  /* ------------------------------------------------------
     SHOW STATUS
     ------------------------------------------------------ */

  formMessage.textContent =
    "Opening WhatsApp…";


  /* ------------------------------------------------------
     OPEN WHATSAPP
     ------------------------------------------------------ */

  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

});
