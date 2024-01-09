// Header에 페이지 아래로 스크롤시 다크 스타일링 적용, Home 컨텐츠 투명하게 처리
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});


// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Arrow up 버튼을 숨겼다가 스크롤 내리면 나타나게 하기
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.style.visibility = "visible";
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.visibility = "hidden";
    arrowUp.style.opacity = 0;
  }
});