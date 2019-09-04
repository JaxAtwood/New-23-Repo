const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// declaration variable (assignment operator) Dom Selector dot getElement method 
//(pass in what element we are looking for from the HTML file);
//variable dot set the attribute of... array name.... what is in the brackets


//Nav Bar
let nav = document.querySelectorAll("a");
nav.forEach(function (value, i) {
  value.textContent =siteContent.nav[`nav-item-${i +1}`];
})
//^^^^^^ Would like to walk through this one more... I don't fully understand how or why it works, honestly

const newNavStyle = document.querySelectorAll("a");
newNavStyle.forEach (element => {
  element.style.color = 'green';
  element.style.backgroundColor = "hotpink";
  element.style.border = "medium solid #C71585";
})

a = document.querySelector("nav");
let pH = document.createElement("a");
pH.textContent = 'I am Bored';
pH.style.color = 'green';
pH.style.backgroundColor = "hotpink"
pH.style.border = "medium solid #C71585";
a.appendChild(pH);
pH.setAttribute('href', "#");

a = document.querySelector("nav");
let pH2 = document.createElement("a");
pH2.textContent = 'Home';
pH2.style.color = 'green';
pH2.style.backgroundColor = "hotpink";
pH2.style.border = "medium solid #C71585";
a.prepend(pH2);
pH2.setAttribute('href', "#");

//Round Image
let roundImg = document.getElementById ("cta-img");
roundImg.setAttribute ("src", siteContent["cta"]["img-src"])


//Dom Is Awesome TagLine
let sloganThing = document.querySelector("h1");
sloganThing.textContent = siteContent.cta.h1


//Get started Button
let button = document.querySelector ("button");
button.textContent = siteContent.cta.button
button.style.color = "pink";
button.style.backgroundColor = "hotpink";


//Features and para
let bottom1 = document.querySelectorAll(".bottom-content .text-content h4") [0];
bottom1.textContent = siteContent ["main-content"] ["services-h4"]

let bottom2 = document.querySelectorAll(".bottom-content .text-content p") [0];
bottom2.textContent = siteContent ["main-content"] ["services-content"]

let bottom3 = document.querySelectorAll(".bottom-content .text-content h4") [1];
bottom3.textContent = siteContent ["main-content"] ["product-h4"]

let bottom4 = document.querySelectorAll(".bottom-content .text-content p") [1];
bottom4.textContent = siteContent ["main-content"] ["product-content"]

let bottom5 = document.querySelectorAll(".bottom-content .text-content h4") [2];
bottom5.textContent = siteContent ["main-content"] ["vision-h4"]

let bottom6 = document.querySelectorAll(".bottom-content .text-content p") [2];
bottom6.textContent = siteContent ["main-content"] ["vision-content"]

//About and para
let topperA = document.querySelectorAll(".top-content .text-content h4") [0];
topperA.textContent = siteContent ["main-content"] ["features-h4"]

let topF = document.querySelectorAll(".top-content .text-content p") [0];
topF.textContent = siteContent ["main-content"] ["features-content"]

let topperB = document.querySelectorAll(".top-content .text-content h4") [1];
topperB.textContent = siteContent ["main-content"] ["about-h4"]

let topA = document.querySelectorAll(".top-content .text-content p") [1];
topA.textContent = siteContent ["main-content"] ["about-content"]

//splash image
let middleImg = document.getElementById ("middle-img");
middleImg.setAttribute ("src", siteContent["main-content"]["middle-img-src"])


//servs, prods, and vision and paras

let contactInfo = document.querySelectorAll(".contact h4") [0];
contactInfo.textContent = siteContent ["contact"] ["contact-h4"]

let snailMail = document.querySelectorAll(".contact p") [0];
snailMail.textContent = siteContent ["contact"] ["address"]

let callMe = document.querySelectorAll(".contact p") [1];
callMe.textContent = siteContent ["contact"] ["phone"]

let emailMe = document.querySelectorAll(".contact p") [2];
emailMe.textContent = siteContent ["contact"] ["email"]

//contact/footer field
let foot = document.querySelector("footer");
foot.textContent = siteContent.footer.copyright