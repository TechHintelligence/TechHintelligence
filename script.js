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
    icon: "☕",
    url: "beanandbrew.in",
    accent: "#c8934f",
    kicker: "FRESH COFFEE • GOOD MOOD",
    title: "Bean & Brew",
    description:
      "A warm local café for coffee, conversations and fresh bites.",
    navLinks: ["Menu", "About", "Contact"],
    cta: "Order Now",
    heroCta: "View Menu",
    features: [
      { icon: "☕", text: "Freshly Brewed" },
      { icon: "🥐", text: "Fresh Bakes" },
      { icon: "📍", text: "Cozy Space" }
    ]
  },

  clinic: {
    type: "CLINIC",
    icon: "🏥",
    url: "carepointclinic.in",
    accent: "#4fb5c8",
    kicker: "CARE • TRUST • WELLNESS",
    title: "CarePoint Clinic",
    description:
      "A professional healthcare website with services, timings and contact options.",
    navLinks: ["Services", "Doctors", "Contact"],
    cta: "Book Appointment",
    heroCta: "Book Now",
    features: [
      { icon: "🩺", text: "Expert Doctors" },
      { icon: "🕐", text: "Flexible Timings" },
      { icon: "💳", text: "Easy Booking" }
    ]
  },

  salon: {
    type: "SALON",
    icon: "💇",
    url: "aurasalon.in",
    accent: "#c84fa0",
    kicker: "STYLE • BEAUTY • CONFIDENCE",
    title: "Aura Salon",
    description:
      "Showcase your services, portfolio, offers and appointment details online.",
    navLinks: ["Services", "Gallery", "Contact"],
    cta: "Book Now",
    heroCta: "Book Appointment",
    features: [
      { icon: "💇", text: "Expert Stylists" },
      { icon: "✨", text: "Premium Products" },
      { icon: "📅", text: "Easy Booking" }
    ]
  },

  gym: {
    type: "GYM",
    icon: "💪",
    url: "irondistrict.in",
    accent: "#e0543f",
    kicker: "TRAIN • MOVE • GROW",
    title: "Iron District",
    description:
      "A bold fitness website for memberships, classes, trainers and enquiries.",
    navLinks: ["Programs", "Trainers", "Contact"],
    cta: "Join Now",
    heroCta: "View Plans",
    features: [
      { icon: "🏋️", text: "Expert Trainers" },
      { icon: "📅", text: "Flexible Classes" },
      { icon: "💪", text: "Modern Equipment" }
    ]
  },

  restaurant: {
    type: "RESTAURANT",
    icon: "🍽️",
    url: "thetable.in",
    accent: "#7a5fe0",
    kicker: "GOOD FOOD • GREAT MOMENTS",
    title: "The Table",
    description:
      "A polished restaurant presence with menu, location, gallery and reservations.",
    navLinks: ["Menu", "Gallery", "Reservations"],
    cta: "Reserve Table",
    heroCta: "View Menu",
    features: [
      { icon: "🍽️", text: "Fresh Ingredients" },
      { icon: "🎉", text: "Great Ambience" },
      { icon: "📅", text: "Easy Reservations" }
    ]
  },

  custom: {
    type: "YOUR BUSINESS",
    icon: "✨",
    url: "yourbusiness.in",
    accent: "#8995ff",
    kicker: "YOUR BUSINESS • YOUR STYLE",
    title: "Your Brand",
    description: "A custom website designed around your business, customers and brand.",
    navLinks: ["Home", "About", "Contact"],
    cta: "Contact Us",
    heroCta: "Get Started",
    features: [
      { icon: "⚡", text: "Professional Design" },
      { icon: "📱", text: "Mobile Friendly" },
      { icon: "💬", text: "Easy Contact" }
    ]
  }

};


/* ========================================================
   HERO SCENE ILLUSTRATIONS
   Simple, on-brand duotone figures — no stock photos, so
   every tab shares one consistent illustration style.
   ======================================================== */

const FIGURE =
  '<path d="M62 340 C62 214 96 150 130 148 C164 150 198 214 198 340 Z" fill="#0b0d12"/>' +
  '<rect x="112" y="118" width="36" height="26" rx="10" fill="#0b0d12"/>' +
  '<circle cx="130" cy="90" r="36" fill="#0b0d12"/>';

const sceneSVGs = {

  custom:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="160" cy="118" r="48" fill="#0b0d12" opacity="0.9"/>' +
    '<rect x="82" y="178" width="156" height="120" rx="26" fill="#0b0d12" opacity="0.9"/>' +
    '<path d="M104 230h112M120 260h80" stroke="#f4efe5" stroke-width="8" stroke-linecap="round" opacity="0.85"/>' +
    '<circle cx="160" cy="118" r="14" fill="#f4efe5" opacity="0.85"/>' +
    '</svg>',

  /* Cafe — barista pulling a shot, steam rising off the cup */
  cafe:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="206" y="150" width="80" height="86" rx="14" fill="#f4efe5" opacity="0.92"/>' +
    '<rect x="216" y="140" width="60" height="16" rx="6" fill="#f4efe5" opacity="0.92"/>' +
    FIGURE +
    '<circle cx="184" cy="172" r="22" fill="#0b0d12"/>' +
    '<ellipse cx="214" cy="196" rx="30" ry="15" transform="rotate(-30 214 196)" fill="#0b0d12"/>' +
    '<circle cx="238" cy="212" r="12" fill="#0b0d12"/>' +
    '<path d="M224 214 h30 v16 q0 14 -15 14 q-15 0 -15 -14 z" fill="#f4efe5"/>' +
    '<rect x="222" y="206" width="34" height="10" rx="4" fill="#f4efe5"/>' +
    '<path d="M232 190 q4 -10 0 -18" stroke="#f4efe5" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>' +
    '<path d="M246 190 q4 -10 0 -18" stroke="#f4efe5" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>' +
    '</svg>',

  /* Clinic — doctor with a stethoscope and chart */
  clinic:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    FIGURE +
    '<path d="M112 140 Q104 200 122 224 Q136 240 122 256" stroke="#f4efe5" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.9"/>' +
    '<circle cx="122" cy="262" r="11" fill="#f4efe5" opacity="0.9"/>' +
    '<circle cx="188" cy="176" r="22" fill="#0b0d12"/>' +
    '<ellipse cx="222" cy="196" rx="28" ry="15" transform="rotate(-20 222 196)" fill="#0b0d12"/>' +
    '<circle cx="248" cy="204" r="12" fill="#0b0d12"/>' +
    '<rect x="230" y="204" width="46" height="58" rx="6" fill="#f4efe5" opacity="0.95"/>' +
    '<rect x="238" y="216" width="30" height="4" fill="#0b0d12" opacity="0.5"/>' +
    '<rect x="238" y="228" width="30" height="4" fill="#0b0d12" opacity="0.5"/>' +
    '<rect x="238" y="240" width="18" height="4" fill="#0b0d12" opacity="0.5"/>' +
    '</svg>',

  /* Salon — stylist working on a seated client */
  salon:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="46" y="220" width="120" height="16" rx="8" fill="#f4efe5" opacity="0.3"/>' +
    '<path d="M62 340 C62 240 90 190 106 188 C122 190 150 240 150 340 Z" fill="#0b0d12"/>' +
    '<rect x="92" y="164" width="28" height="20" rx="8" fill="#0b0d12"/>' +
    '<circle cx="106" cy="140" r="28" fill="#0b0d12"/>' +
    '<path d="M186 340 C186 220 218 150 250 148 C252 148 254 148 256 148 L256 340 Z" fill="#0b0d12" opacity="0.96"/>' +
    '<rect x="228" y="118" width="30" height="22" rx="9" fill="#0b0d12" opacity="0.96"/>' +
    '<circle cx="243" cy="92" r="30" fill="#0b0d12" opacity="0.96"/>' +
    '<ellipse cx="205" cy="150" rx="24" ry="13" transform="rotate(30 205 150)" fill="#0b0d12" opacity="0.96"/>' +
    '<path d="M150 116 l24 18 m-24 0 l24 -18" stroke="#f4efe5" stroke-width="5" stroke-linecap="round"/>' +
    '<circle cx="150" cy="116" r="4" fill="#f4efe5"/>' +
    '<circle cx="174" cy="134" r="4" fill="#f4efe5"/>' +
    '</svg>',

  /* Gym — full figure pressing a barbell overhead */
  gym:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="160" cy="76" r="30" fill="#0b0d12"/>' +
    '<path d="M122 108 L122 232 Q160 254 198 232 L198 108 Q160 96 122 108 Z" fill="#0b0d12"/>' +
    '<rect x="104" y="232" width="30" height="98" rx="14" fill="#0b0d12"/>' +
    '<rect x="186" y="232" width="30" height="98" rx="14" fill="#0b0d12"/>' +
    '<rect x="96" y="322" width="46" height="14" rx="7" fill="#0b0d12"/>' +
    '<rect x="178" y="322" width="46" height="14" rx="7" fill="#0b0d12"/>' +
    '<rect x="86" y="66" width="26" height="64" rx="12" transform="rotate(18 99 98)" fill="#0b0d12"/>' +
    '<rect x="208" y="66" width="26" height="64" rx="12" transform="rotate(-18 221 98)" fill="#0b0d12"/>' +
    '<rect x="66" y="46" width="188" height="14" rx="7" fill="#f4efe5"/>' +
    '<circle cx="66" cy="53" r="24" fill="#f4efe5"/>' +
    '<circle cx="254" cy="53" r="24" fill="#f4efe5"/>' +
    '<circle cx="66" cy="53" r="10" fill="#0b0d12" opacity="0.5"/>' +
    '<circle cx="254" cy="53" r="10" fill="#0b0d12" opacity="0.5"/>' +
    '</svg>',

  /* Restaurant — chef presenting a plated dish on a tray */
  restaurant:
    '<svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">' +
    FIGURE +
    '<ellipse cx="130" cy="54" rx="32" ry="20" fill="#f4efe5"/>' +
    '<rect x="106" y="58" width="48" height="16" rx="6" fill="#f4efe5"/>' +
    '<circle cx="188" cy="178" r="22" fill="#0b0d12"/>' +
    '<ellipse cx="222" cy="202" rx="30" ry="15" transform="rotate(-18 222 202)" fill="#0b0d12"/>' +
    '<circle cx="250" cy="212" r="12" fill="#0b0d12"/>' +
    '<ellipse cx="252" cy="224" rx="46" ry="13" fill="#f4efe5"/>' +
    '<circle cx="252" cy="216" r="22" fill="#f4efe5" opacity="0.95"/>' +
    '<circle cx="252" cy="216" r="12" fill="#0b0d12" opacity="0.4"/>' +
    '</svg>'

};


/* ========================================================
   DEMO SWITCHER
   ======================================================== */

const demoTabs = document.querySelectorAll(".demo-tab");

const demoSite = document.getElementById("demoSite");


function renderDemoSite(type, data) {

  if (!demoSite || !data) {
    return;
  }

  document.getElementById("previewUrl").textContent =
    data.url;

  document.getElementById("siteLogo").textContent =
    data.title;

  document.getElementById("siteLogo2").textContent =
    data.title;

  document.getElementById("siteNav1").textContent =
    data.navLinks[0];

  document.getElementById("siteNav2").textContent =
    data.navLinks[1];

  document.getElementById("siteNav3").textContent =
    data.navLinks[2];

  document.getElementById("siteCta").textContent =
    data.cta;

  document.getElementById("siteHeroCta").textContent =
    data.heroCta;

  document.getElementById("siteScene").innerHTML =
    sceneSVGs[type];

  document.getElementById("previewKicker").textContent =
    data.kicker;

  document.getElementById("previewTitle").textContent =
    data.title;

  document.getElementById("previewDescription").textContent =
    data.description;

  document.getElementById("feature1Icon").textContent =
    data.features[0].icon;

  document.getElementById("feature1Text").textContent =
    data.features[0].text;

  document.getElementById("feature2Icon").textContent =
    data.features[1].icon;

  document.getElementById("feature2Text").textContent =
    data.features[1].text;

  document.getElementById("feature3Icon").textContent =
    data.features[2].icon;

  document.getElementById("feature3Text").textContent =
    data.features[2].text;

  demoSite.style.setProperty("--accent", data.accent);

}


demoTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    demoTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    renderDemoSite(tab.dataset.type, previewData[tab.dataset.type]);

  });

});


/* Render the initial state on load (matches the default "cafe" tab) */

renderDemoSite("cafe", previewData.cafe);


/* ========================================================
   PHONE CLEANER
   ======================================================== */

function cleanPhone(phone) {

  return phone
    .replace(/[^\d+]/g, "")
    .trim();

}


/* ========================================================
   FALLBACK FOR OPTIONAL FIELDS
   ======================================================== */

function orNotProvided(value) {

  return value && value.trim() !== ""
    ? value.trim()
    : "Not provided";

}


/* ========================================================
   CONTACT + TRY YOURS BUILDER
   ======================================================== */

const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");
const builderForm = document.getElementById("builderForm");
const builderSite = document.getElementById("builderSite");
const builderModal = document.getElementById("builderModal");
const heroImageInput = document.getElementById("heroImage");
const backgroundImageInput = document.getElementById("backgroundImage");

const previewVideos = ["bg1.mp4"];
let fallbackBgIndex = 0;
let fallbackBgTimer = null;

function builderValue(name, fallback = "") {
  if (!builderForm) return fallback;
  const field = builderForm.elements[name];
  return field && field.value && field.value.trim() ? field.value.trim() : fallback;
}

function updateBuilderPreview() {
  if (!builderSite) return;

  const brand = builderValue("business", "Your Brand");
  const tagline = builderValue("tagline", "YOUR BUSINESS • YOUR STYLE");
  const description = builderValue("description", "A professional website designed around your business, your customers and your brand.");
  const heroCta = builderValue("heroCta", "Get Started");
  const type = builderValue("businessType", "Your Business");
  const services = builderValue("services", "Professional Design");
  const location = builderValue("location", "Easy Contact");
  const textColor = builderValue("textColor", "#ffffff");
  const bgColor = builderValue("bgColor", "#10141c");
  const safeUrl = brand.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "yourbusiness";

  document.getElementById("builderPreviewUrl").textContent = `${safeUrl}.in`;
  document.getElementById("builderLogo").textContent = brand;
  document.getElementById("builderLogo2").textContent = brand;
  document.getElementById("builderTagline").textContent = tagline;
  document.getElementById("builderTitle").textContent = brand;
  document.getElementById("builderDescription").textContent = description;
  document.getElementById("builderHeroCta").textContent = heroCta;
  document.getElementById("builderNavCta").textContent = "Contact";
  document.getElementById("builderFeature1").textContent = services.split(",")[0]?.trim() || "Professional Design";
  document.getElementById("builderFeature2").textContent = `${type} • Mobile Friendly`;
  document.getElementById("builderFeature3").textContent = location;

  builderSite.style.setProperty("--builder-text", textColor);
  builderSite.style.setProperty("--builder-bg", bgColor);
}

function applyFallbackBackground() {
  const site = document.getElementById("builderSite");
  if (!site) return;
  let video = site.querySelector(".builder-background-video");
  if (!video) {
    video = document.createElement("video");
    video.className = "builder-background-video";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("aria-hidden", "true");
    site.prepend(video);
  }
  video.src = previewVideos[fallbackBgIndex % previewVideos.length];
  video.load();
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
  fallbackBgIndex = (fallbackBgIndex + 1) % previewVideos.length;
}

function startFallbackBackgrounds() {
  if (fallbackBgTimer) clearInterval(fallbackBgTimer);
  applyFallbackBackground();
  fallbackBgTimer = setInterval(() => {
    if (!croppedImageData && !(backgroundImageInput?.files?.length)) applyFallbackBackground();
  }, 11000);
}

function openBuilder() {
  if (!builderModal) return;
  builderModal.classList.add("is-open");
  builderModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  updateBuilderPreview();
startFallbackBackgrounds();
  setTimeout(() => builderForm?.elements.business?.focus(), 80);
}

function closeBuilder() {
  if (!builderModal) return;
  builderModal.classList.remove("is-open");
  builderModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".try-yours-tab").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openBuilder();
  });
});

document.querySelectorAll("[data-close-builder]").forEach((el) => {
  el.addEventListener("click", closeBuilder);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeBuilder();
});

if (builderForm) {
  builderForm.querySelectorAll("input:not([type='file']), textarea, select").forEach((field) => {
    field.addEventListener("input", updateBuilderPreview);
    field.addEventListener("change", updateBuilderPreview);
  });
}

/* ========================================================
   IMAGE CROP TOOL
   ======================================================== */

const cropTool = document.getElementById("cropTool");
const cropCanvas = document.getElementById("cropCanvas");
const cropZoom = document.getElementById("cropZoom");
const cropZoomIn = document.getElementById("cropZoomIn");
const cropZoomOut = document.getElementById("cropZoomOut");
const cropApply = document.getElementById("cropApply");

let cropImage = null;
let cropScale = 1;
let cropX = 0;
let cropY = 0;
let cropDragging = false;
let cropStartX = 0;
let cropStartY = 0;
let cropStartImageX = 0;
let cropStartImageY = 0;
let croppedImageData = "";

function drawCrop() {
  if (!cropCanvas || !cropImage) return;
  const ctx = cropCanvas.getContext("2d");
  const cw = cropCanvas.width;
  const ch = cropCanvas.height;
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = "#10131a";
  ctx.fillRect(0, 0, cw, ch);

  const baseScale = Math.max(cw / cropImage.width, ch / cropImage.height);
  const scale = baseScale * cropScale;
  const w = cropImage.width * scale;
  const h = cropImage.height * scale;
  const x = (cw - w) / 2 + cropX;
  const y = (ch - h) / 2 + cropY;
  ctx.drawImage(cropImage, x, y, w, h);

  ctx.strokeStyle = "rgba(255,255,255,.85)";
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, cw - 4, ch - 4);
}

if (heroImageInput) {
  heroImageInput.addEventListener("change", () => {
    const file = heroImageInput.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        cropImage = img;
        cropScale = 1;
        cropX = 0;
        cropY = 0;
        if (cropZoom) cropZoom.value = "1";
        cropTool.hidden = false;
        drawCrop();
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function setCropZoom(value) {
  cropScale = Math.max(1, Math.min(3, Number(value) || 1));
  if (cropZoom) cropZoom.value = cropScale;
  drawCrop();
}

cropZoom?.addEventListener("input", () => setCropZoom(cropZoom.value));
cropZoomIn?.addEventListener("click", () => setCropZoom(cropScale + 0.1));
cropZoomOut?.addEventListener("click", () => setCropZoom(cropScale - 0.1));

cropCanvas?.addEventListener("pointerdown", (event) => {
  if (!cropImage) return;
  cropDragging = true;
  cropCanvas.setPointerCapture(event.pointerId);
  cropStartX = event.clientX;
  cropStartY = event.clientY;
  cropStartImageX = cropX;
  cropStartImageY = cropY;
});

cropCanvas?.addEventListener("pointermove", (event) => {
  if (!cropDragging) return;
  cropX = cropStartImageX + event.clientX - cropStartX;
  cropY = cropStartImageY + event.clientY - cropStartY;
  drawCrop();
});

cropCanvas?.addEventListener("pointerup", () => { cropDragging = false; });
cropCanvas?.addEventListener("pointercancel", () => { cropDragging = false; });

cropApply?.addEventListener("click", () => {
  if (!cropImage || !cropCanvas) return;
  croppedImageData = cropCanvas.toDataURL("image/jpeg", 0.9);
  const heroVisual = document.getElementById("builderHeroVisual");
  const placeholder = document.getElementById("builderImagePlaceholder");
  heroVisual.style.backgroundImage = `url("${croppedImageData}")`;
  heroVisual.classList.add("has-builder-image");
  heroVisual.classList.remove("fallback-builder-image");
  if (placeholder) placeholder.style.display = "none";
  cropTool.hidden = true;
});


if (backgroundImageInput) {
  backgroundImageInput.addEventListener("change", () => {
    const file = backgroundImageInput.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      builderSite.style.backgroundImage = `linear-gradient(180deg, rgba(8,10,15,.52), rgba(8,10,15,.72)), url("${reader.result}")`;
      builderSite.classList.add("has-builder-background");
    };
    reader.readAsDataURL(file);
  });
}


/* ========================================================
   CONTACT / WHATSAPP
   ======================================================== */

function valueOrNot(value) {
  return value && value.trim() ? value.trim() : "Not provided";
}

function hasBuilderDetails() {
  if (!builderForm) return false;
  const fields = ["business", "businessType", "tagline", "heroCta", "location", "services", "description", "requirements", "domain"];
  const hasTextDetails = fields.some((name) => {
    const value = builderForm.elements[name]?.value || "";
    return value.trim() !== "";
  });
  const theme = builderForm.elements.theme?.value || "";
  const textColor = builderForm.elements.textColor?.value || "#ffffff";
  const bgColor = builderForm.elements.bgColor?.value || "#10141c";
  const hasStyleDetails = theme !== "Modern & Minimal" || textColor.toLowerCase() !== "#ffffff" || bgColor.toLowerCase() !== "#10141c";
  return hasTextDetails || hasStyleDetails || Boolean(croppedImageData) || Boolean(backgroundImageInput?.files?.length);
}

function builderDetailsForWhatsApp() {
  const imageName = heroImageInput?.files?.[0]?.name || "Not provided";
  return `

━━━━━━━━━━━━━━━━━━
🌐 WEBSITE DETAILS FROM TRY YOURS
━━━━━━━━━━━━━━━━━━
🏢 Business: ${valueOrNot(builderValue("business"))}
📌 Type: ${valueOrNot(builderValue("businessType"))}
✨ Tagline: ${valueOrNot(builderValue("tagline"))}
🔘 Hero Button: ${valueOrNot(builderValue("heroCta"))}
📍 Location: ${valueOrNot(builderValue("location"))}
🧩 Services: ${valueOrNot(builderValue("services"))}
🎨 Style: ${valueOrNot(builderValue("theme"))}
🌐 Domain: ${valueOrNot(builderValue("domain"))}
📝 Description: ${valueOrNot(builderValue("description"))}
📋 Requirements: ${valueOrNot(builderValue("requirements"))}
🖼️ Image: ${imageName}
📐 Image: Cropped for website preview
🖼️ Background Image: ${backgroundImageInput?.files?.[0]?.name || "Not provided"}`;
}

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (leadForm.elements.name?.value || "").trim();
  const websiteType = (leadForm.elements.websiteType?.value || "").trim();

  let message = `🚀 NEW WEBSITE ENQUIRY — TECH INTEL

👤 Name: ${valueOrNot(name)}
💻 Plan: ${valueOrNot(websiteType)}`;

  if (hasBuilderDetails()) {
    message += builderDetailsForWhatsApp();
  }

  message += `

━━━━━━━━━━━━━━━━━━
Tech Intel Website Enquiry
━━━━━━━━━━━━━━━━━━`;

  if (formMessage) formMessage.textContent = "Opening WhatsApp…";
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

document.getElementById("builderDone")?.addEventListener("click", () => {
  closeBuilder();
  document.getElementById("website-builder")?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => leadForm?.elements.name?.focus(), 500);
});

document.querySelectorAll(".builder-contact-btn, #builderNavCta, #builderHeroCta").forEach((button) => {
  button.addEventListener("click", () => {
    closeBuilder();
    document.getElementById("website-builder")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const showcaseTrack = document.getElementById("showcaseTrack");
let showcaseTimer = null;
if (showcaseTrack) {
  showcaseTimer = setInterval(() => {
    const firstCard = showcaseTrack.querySelector(".showcase-card");
    if (!firstCard) return;
    const step = firstCard.getBoundingClientRect().width + 10;
    const maxScroll = showcaseTrack.scrollWidth - showcaseTrack.clientWidth;
    const next = showcaseTrack.scrollLeft + step;
    showcaseTrack.scrollTo({ left: next >= maxScroll - 4 ? 0 : next, behavior: "smooth" });
  }, 11000);
}


updateBuilderPreview();

const builderVideo = document.getElementById(
  "builderBackgroundVideo"
);

const builderVideos = [
  "bg1.mp4",
  // "bg2.mp4",
  // "bg3.mp4",
];

let currentBuilderVideo = 0;

function playBuilderVideo(index) {
  if (!builderVideo) return;

  builderVideo.src = builderVideos[index];
  builderVideo.muted = true;
  builderVideo.load();

  builderVideo.play().catch(() => {
    console.log("Video autoplay blocked by browser");
  });
}

if (builderVideo) {
  playBuilderVideo(currentBuilderVideo);

  setInterval(() => {
    currentBuilderVideo =
      (currentBuilderVideo + 1) % builderVideos.length;

    playBuilderVideo(currentBuilderVideo);
  }, 11000);
}