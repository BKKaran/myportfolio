
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAB6naijEL-5rXXn2Jdq0Adxffqk0vZmNQ",
  authDomain: "myportfolio-c39b6.firebaseapp.com",
  databaseURL: "https://myportfolio-c39b6.firebaseio.com",
  projectId: "myportfolio-c39b6",
  storageBucket: "myportfolio-c39b6.appspot.com",
  messagingSenderId: "91631716407"
};
firebase.initializeApp(config);

var nav= document.getElementById('section-a');
var navBar= document.getElementById('nav');

window.onscroll=function(){
    if(window.pageYOffset>(window.innerHeight+50)){
        nav.style.position='fixed';
        nav.style.backgroundColor='#021d26';
        nav.style.zIndex=2;
        nav.style.top=0;
    }else{
        nav.style.position='relative';
        nav.style.backgroundColor='#020e14';
        navBar.style.borderColor='#bf0c2b';
        

    }
}


//mobile-navigtion
var navIcon=document.getElementById('open-nav');
var mobNav=document.getElementById('mobNav');
var cross=document.getElementById('cross');
document.querySelector('.moblink1').addEventListener('click', closeMobNav);
document.querySelector('.moblink2').addEventListener('click', closeMobNav);
document.querySelector('.moblink3').addEventListener('click', closeMobNav);
document.querySelector('.moblink4').addEventListener('click', closeMobNav);
document.querySelector('.moblink5').addEventListener('click', closeMobNav);
navIcon.addEventListener('click', openMobNav);
cross.addEventListener('click', closeMobNav);
function openMobNav(){
  mobNav.style.display="block";

  
}
function closeMobNav(){
  mobNav.style.display="none";
}
window.addEventListener('resize', closeMobNav);









//bargraph
(function(document) {
  var bars = [].slice.call(document.querySelectorAll('.bar-inner'));
  bars.map(function(bar, index) {
    setTimeout(function() {
    	bar.style.width = bar.dataset.percent;
    }, index * 1);
    
  });
})(document)




//contact form
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

function insta(){
  window.location.href="https://www.instagram.com/b.k_karan/";
}
function fb(){
  window.location.href="https://www.facebook.com/bkkaran23";
}
function pin(){
  window.location.href="https://in.pinterest.com/bkaran333/";
}
function git(){
  window.location.href="https://github.com/BKKaran";
}
function lin(){
  window.location.href="https://www.linkedin.com/in/b-k-karan-ab140711a/";
}




windowHeight = window.innerHeight;
addEventHandlers();
function addEventHandlers() {
  window.addEventListener('scroll', checkPosition);
}
let myContactbox=document.getElementById('justfun');

function checkPosition(){
  let position=myContactbox.getBoundingClientRect().top;
  if(position-windowHeight<=0){
    addMyClass(); 
}
 
  
}

function addMyClass(){
  myContactbox.classList.add('animated');
  myContactbox.classList.add('flipInY');
}




