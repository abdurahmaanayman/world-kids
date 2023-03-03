function darkmod() {
    if (document.documentElement.scrollTop > window.innerHeight ) {
      document.getElementById("Id-my-up-nav").style.backgroundColor = "black";
      document.getElementById("Id-my-up-nav").classList.add("animate__fadeInDown");
    } else {
        document.getElementById("Id-my-up-nav").style.backgroundColor = "#2525312d";
      document.getElementById("Id-my-up-nav").classList.remove("animate__fadeInDown");


    }
  };
  function myFunction() {
    var x = document.getElementById("id-hidegroub");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.classList.add("animate__backInDown");
    } else {
      x.style.visibility = "hidden";
    }
  }
 
  window.addEventListener('scroll', darkmod);
