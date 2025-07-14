
// Dil seçici için JavaScript kodu
function changeLanguage() {
  var select = document.getElementById("languageSelect");
  var selectedLanguage = select.value;

  // Dil seçicinin dropdown menüsünü gizle
  select.nextElementSibling.style.display = "none";

  // Seçilen dilin değerine göre işlem yap
  if (selectedLanguage === "en") {
    // İngilizceye yönlendir
    window.location.href = "dileklentileri/english-page.html";
  } else if (selectedLanguage === "tr") {
    // Türkçeye yönlendir
    window.location.href = "index.html"; // Varsayılan dil Türkçe ise, ana sayfaya yönlendir
  }
}

// Dil seçicisinin dropdown menüsünü görüntüle/gizle
document.getElementById("languageSelect").addEventListener("click", function() {
  var dropdown = this.nextElementSibling;
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

// Dil seçicisinin dışında tıklama yapıldığında dropdown menüyü gizle
document.addEventListener("click", function(e) {
  var languageSelector = document.querySelector(".language-selector");
  if (!languageSelector.contains(e.target)) {
    var dropdown = document.querySelector(".language-dropdown");
    dropdown.style.display = "none";
  }
});

function changeLanguage(lang) {
  if (lang === "en") {
      window.location.href = "dileklentileri/english-page.html";
  } else if (lang === "tr") {
      window.location.href = "index.html"; // Varsayılan dil Türkçe ise, ana sayfaya yönlendir
  }
}



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // Mevcut aktif slaytı kaldır
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].className += " active";
    setTimeout(showSlides, 5500); // 5 saniyede bir değişiklik
}


// ramazan menüler bitis

$(function() {
  $("#datepicker").datepicker();
});



// müşteri değerlendirmesi alanı

const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Kaydırma hızı
  slider.scrollLeft = scrollLeft - walk;
});
