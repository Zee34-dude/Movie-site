
const imgs = document.getElementById('carosuel')
const slides = document.querySelectorAll('.slide-1');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

renderPage()
function renderPage() {
  let idx=0
  function changeSlide(){
    if(idx > slides.length-1){
      idx=0
    }
    else if(idx <0){
      idx=slides.length-1
    }
    slides.forEach((slide)=>{
      slide.classList.remove('active')
      slides[idx].classList.add('active')
    })
  }

  rightBtn.addEventListener('click',()=>{
    idx++
    changeSlide()
  });
  leftBtn.addEventListener('click',()=>{
    idx--
    changeSlide()


  })

  const menu5Btn = document.getElementById('menu5-btn');
  const menu5Content = document.getElementById('menu5-content');

  menu5Btn.addEventListener('click', () => {
    menu5Content.classList.toggle('active')
  });

  document.addEventListener('click', (event) => {
    if (!menu5Btn.contains(event.target) && !menu5Content.contains(event.target)) {
      menu5Content.classList.remove('active')
    }
  })
}
