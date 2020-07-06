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

document.getElementsByClassName('container')[0].style.width = '800px';


let array_a = document.querySelectorAll('nav a');
array_a[0].textContent = siteContent["nav"]["nav-item-1"];
array_a[1].textContent = siteContent["nav"]["nav-item-2"];
array_a[2].textContent = siteContent["nav"]["nav-item-3"];
array_a[3].textContent = siteContent["nav"]["nav-item-4"];
array_a[4].textContent = siteContent["nav"]["nav-item-5"];
array_a[5].textContent = siteContent["nav"]["nav-item-6"];

document.getElementsByClassName('cta-text')[0].style.width = '241px';
document.querySelector('h1').textContent = siteContent["cta"]["h1"];
// let mainTxt = document.querySelector('h1');
// mainTxt.textContent = siteContent["cta"]["h1"];
document.querySelector('button').textContent = siteContent['cta']['button'];
let main_img = document.querySelector('#cta-img');
main_img.src ="img/header-img.png";

let main_h4 = document.querySelectorAll('.text-content h4');
main_h4[0].textContent = siteContent['main-content']['features-h4'];
main_h4[1].textContent = siteContent['main-content']['about-h4'];

let main_txt = document.querySelectorAll('.text-content p');
main_txt[0].textContent = siteContent['main-content']['features-content'];
main_txt[1].textContent = siteContent['main-content']['about-content'];

document.querySelector('#middle-img').src = "img/mid-page-accent.jpg";

let bott_h4 = document.querySelectorAll('.bottom-content h4');
bott_h4[0].textContent = siteContent['main-content']['services-h4'];
bott_h4[1].textContent = siteContent['main-content']['product-h4'];
bott_h4[2].textContent = siteContent['main-content']['vision-h4']

let bott_txt = document.querySelectorAll('.bottom-content p');
bott_txt[0].textContent = siteContent['main-content']['services-content'];
bott_txt[1].textContent = siteContent['main-content']['product-content'];
bott_txt[2].textContent = siteContent['main-content']['vision-content'];

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
let allcontact = document.querySelectorAll('.contact p'); 
allcontact[0].textContent = siteContent['contact']['address']; 
allcontact[1].textContent = siteContent['contact']['phone']; 
allcontact[2].textContent = siteContent['contact']['email']; 

document.querySelector('footer p').textContent = siteContent['footer']['copyright']

// Task 3
for(i=0; i<array_a.length; i++){
  array_a[i].style.color ='green';
}

const new_aBegin = {
  href: '#',
  textContent: 'Home'
}
const newlink = document.createElement('a')

newlink.href = new_aBegin.href
newlink.textContent = new_aBegin.textContent

document.querySelector('nav').prepend(newlink)


const new_aEnd = {
  href: '#',
  textContent: 'Goodbye'
}
const newlink2 = document.createElement('a')

newlink2.href = new_aEnd.href
newlink2.textContent = new_aEnd.textContent

document.querySelector('nav').appendChild(newlink2)


