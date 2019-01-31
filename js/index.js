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

// chain
document.querySelectorAll('nav a')
.forEach((link, i) =>  link.textContent = siteContent.nav[`nav-item-${i+1}`] )

let h1 = document.querySelector("h1")
h1.textContent = siteContent.cta.h1;

let button = document.querySelector('button')
button.textContent = siteContent.cta.button;

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent.cta["img-src"])

// dry
function mainContent(tag, jsonPropName) {
  let sectionNames = ['features', 'about', 'services', 'product', 'vision']
  document.querySelectorAll(`.text-content ${tag}`)
  .forEach((element, i) => element.textContent = siteContent['main-content'][`${sectionNames[i]}-${jsonPropName}`])
}

mainContent("h4", 'h4')
mainContent("p", 'content')

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent['main-content']["middle-img-src"]

document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"]

let contactPs = document.querySelectorAll('.contact p');

for (let i = 0; i < contactPs.length; i++) {
  let contactSections = ['address', 'phone', 'email']
  contactPs[i].textContent = siteContent.contact[`${contactSections[i]}`] 
}

let node2 = document.createElement("a");               
node2.href = '#'
let textnode2 = document.createTextNode("prepend");       
node2.appendChild(textnode2);                    
document.querySelector("nav").prepend(node2);   
let node = document.createElement("a");               
node.href = '#'
let textnode = document.createTextNode("append");       
node.appendChild(textnode);                            
document.querySelector("nav").appendChild(node);   

document.querySelectorAll('nav a')
.forEach(link=> link.style.color = "green" )

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright
