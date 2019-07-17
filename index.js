var navbar = document.getElementById("navtop");
if (navbar != null) {
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

document.addEventListener('click', function(e) {
  if (e.target.id == 'submit') {
    e.target.style.fontFamily="Montserrat, sans-serif";
    e.target.style.color="#E4AC00";
    e.target.replaceWith("Message sent!");

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
  }
})