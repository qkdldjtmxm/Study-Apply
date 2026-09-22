// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');

// .main-nav 요소를 가져와 nav 변수에 저장
const nav = document.querySelector('.main-nav');

// btn 요소에 클릭 이벤트 리스너를 추가
btn.addEventListener('click', () => {
    // nav 요소의 클래스 목록에 'open-menu' 클래스를 토글
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML이 'Menu'이면 'close'로 변경, 그렇지 않으면 'menu'로 변경
    if (btn.innerHTML === 'Menu') {
        btn.innerHTML = 'close';
    } else {
        btn.innerHTML = 'Menu';
    }
});
