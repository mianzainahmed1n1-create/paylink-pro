const payments = [
{
name: "Standard Chartered",
title: "Mian Zain",
number: "PK12SCBL000000000000000000",
type: "IBAN"
},
{
name: "HBL",
title: "Mian Zain",
number: "PK45HABB111111111111111111",
type: "IBAN"
},
{
name: "Bank Alfalah",
title: "Mian Zain",
number: "PK78ALFH222222222222222222",
type: "IBAN"
},
{
name: "Meezan Bank",
title: "Mian Zain",
number: "PK99MEEZ333333333333333333",
type: "IBAN"
},
{
name: "JazzCash",
title: "Mian Zain",
number: "03001234567",
type: "Mobile"
},
{
name: "EasyPaisa",
title: "Mian Zain",
number: "03111234567",
type: "Mobile"
},
{
name: "NayaPay",
title: "Mian Zain",
number: "03221234567",
type: "Mobile"
},
{
name: "SadaPay",
title: "Mian Zain",
number: "03331234567",
type: "Mobile"
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

card.className = "bank-card";

card.innerHTML = `
<div class="bank-top">

<div class="bank-icon">
🏦
</div>

<div>

<h3>${payment.name}</h3>

<p><strong>Account Title:</strong> ${payment.title}</p>

<p><strong>${payment.type}:</strong>
<span id="num${index}">${payment.number}</span>
</p>

</div>

</div>

<div class="bank-bottom">

<button onclick="copyNumber('num${index}')">
Copy
</button>

<div id="qr${index}"></div>

</div>
`;

cards.appendChild(card);

new QRCode(document.getElementById(`qr${index}`),{
text: payment.number,
width:120,
height:120
});

});

function copyNumber(id){

const text=document.getElementById(id).innerText;

navigator.clipboard.writeText(text);

alert("Copied Successfully");
}
