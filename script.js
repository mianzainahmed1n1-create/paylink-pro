/* ===================================
   PayLink Pro v2
=================================== */

const business = {
    owner: "Mian Zain",
    whatsapp: "923001234567"
};

const payments = [
{
name:"🏦 Standard Chartered",
type:"IBAN",
number:"PK12SCBL000000000000000000"
},
{
name:"🏦 HBL",
type:"IBAN",
number:"PK45HABB111111111111111111"
},
{
name:"🏦 Meezan Bank",
type:"IBAN",
number:"PK99MEEZ333333333333333333"
},
{
name:"🏦 Bank Alfalah",
type:"IBAN",
number:"PK78ALFH222222222222222222"
},
{
name:"📱 JazzCash",
type:"Mobile",
number:"03001234567"
},
{
name:"📱 EasyPaisa",
type:"Mobile",
number:"03111234567"
},
{
name:"💳 NayaPay",
type:"Mobile",
number:"03221234567"
},
{
name:"💳 SadaPay",
type:"Mobile",
number:"03331234567"
}
];

/* ---------- Hero QR ---------- */

new QRCode(document.getElementById("websiteQR"),{
text:window.location.href,
width:190,
height:190
});

/* ---------- Cards ---------- */

const cards=document.getElementById("cards");

payments.forEach((payment,index)=>{

const card=document.createElement("div");

card.className="bank-card";

card.innerHTML=`

<div class="bank-top">

<div class="bank-icon">
💳
</div>

<div>

<h3>${payment.name}</h3>

<p>

<b>Account Holder</b><br>

${business.owner}

</p>

<p style="margin-top:10px">

<b>${payment.type}</b><br>

<span id="num${index}">

${payment.number}

</span>

</p>

</div>

</div>

<div class="bank-bottom">

<button onclick="copyNumber('num${index}')">

📋 Copy

</button>

<div class="qr" id="qr${index}"></div>

</div>

`;

cards.appendChild(card);

new QRCode(document.getElementById(`qr${index}`),{

text:payment.number,

width:110,

height:110

});

});

/* ---------- Copy ---------- */

function copyNumber(id){

const value=document.getElementById(id).innerText;

navigator.clipboard.writeText(value);

alert("Copied Successfully ✅");

}
