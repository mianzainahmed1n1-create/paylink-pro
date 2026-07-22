const business = {
  owner: "Mian Zain",
  whatsapp: "923001234567"
};

const payments = [
  {
    name: "🏦 Standard Chartered",
    type: "IBAN",
    number: "PK12SCBL000000000000000000"
  },
  {
    name: "🏦 HBL",
    type: "IBAN",
    number: "PK45HABB111111111111111111"
  },
  {
    name: "🏦 Meezan Bank",
    type: "IBAN",
    number: "PK99MEEZ333333333333333333"
  },
  {
    name: "🏦 Bank Alfalah",
    type: "IBAN",
    number: "PK78ALFH222222222222222222"
  },
  {
    name: "📱 JazzCash",
    type: "Mobile",
    number: "03001234567"
  },
  {
    name: "📱 EasyPaisa",
    type: "Mobile",
    number: "03111234567"
  },
  {
    name: "💳 NayaPay",
    type: "Mobile",
    number: "03221234567"
  },
  {
    name: "💳 SadaPay",
    type: "Mobile",
    number: "03331234567"
  }
];

// Website QR
new QRCode(document.getElementById("websiteQR"), {
  text: window.location.href,
  width: 220,
  height: 220
});

const cards = document.getElementById("cards");

payments.forEach((payment, index) => {

  const card = document.createElement("div");

  card.className =
    "glass rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition duration-300";

  card.innerHTML = `
    <h3 class="text-2xl font-bold mb-4">
      ${payment.name}
    </h3>

    <p class="text-slate-400 text-sm">
      Account Title
    </p>

    <p class="mb-4 font-semibold">
      ${business.owner}
    </p>

    <p class="text-slate-400 text-sm">
      ${payment.type}
    </p>

    <p class="font-semibold break-all mb-6">
      ${payment.number}
    </p>

    <div class="grid grid-cols-2 gap-3">

      <button
        onclick="copyNumber('${payment.number}')"
        class="bg-blue-600 hover:bg-blue-700 rounded-xl py-3">

        📋 Copy

      </button>

      <button
        onclick="openModal(${index})"
        class="bg-emerald-600 hover:bg-emerald-700 rounded-xl py-3">

        💳 Pay Now

      </button>

    </div>
  `;

  cards.appendChild(card);

});

function copyNumber(number) {

  navigator.clipboard.writeText(number);

  alert("Number copied successfully.");

}

function openModal(index) {

  const payment = payments[index];

  document.getElementById("modalTitle").innerText =
    payment.name;

  document.getElementById("modalOwner").innerText =
    business.owner;

  document.getElementById("modalNumber").innerText =
    payment.number;

  document
    .getElementById("paymentModal")
    .classList.remove("hidden");

  document
    .getElementById("paymentModal")
    .classList.add("flex");

}

document
.getElementById("closeBtn")
.onclick = () => {

document
.getElementById("paymentModal")
.classList.add("hidden");

document
.getElementById("paymentModal")
.classList.remove("flex");

};

document
.getElementById("copyBtn")
.onclick = () => {

const text =
document.getElementById("modalNumber").innerText;

navigator.clipboard.writeText(text);

alert("Number copied.");

};

document
.getElementById("paidBtn")
.onclick = () => {

const message =
encodeURIComponent(
"Assalam-o-Alaikum, I have completed the payment."
);

window.open(
`https://wa.me/${business.whatsapp}?text=${message}`,
"_blank"
);

};
