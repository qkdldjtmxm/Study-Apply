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

/* 다크 모드 버튼
=============================== */
// .btn-theme 요소를 가져와 themeBtn 변수에 저장
const themeBtn = document.querySelector('.btn-theme');

// themeBtn 요소에 클릭 이벤트 리스너를 추가
themeBtn.addEventListener('click', () => {
    // body 요소의 클래스 목록에 'dark' 클래스를 토글
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        // 다크 모드가 활성화되면 버튼의 텍스트를 '☀️'로 변경
        themeBtn.innerHTML = '☀️';
    } else {
        // 다크 모드가 비활성화되면 버튼의 텍스트를 '🌙'로 변경
        themeBtn.innerHTML = '🌙';
    }
});

/* 참여 동기 글자 수 세기
=============================== */
// .apply-textarea 요소를 가져와 textarea 변수에 저장
const textarea = document.querySelector('.apply-textarea');
// .char-count 요소를 가져와 charCount 변수에 저장
const charCount = document.querySelector('.char-count');

// textarea 요소에 input 이벤트 리스너를 추가
textarea.addEventListener('input', () => {
    // textarea의 현재 글자 수를 가져와 length 변수에 저장
    const length = textarea.value.length;
    // charCount 요소의 텍스트를 현재 글자 수와 최대 글자 수(200)를 표시하도록 업데이트
    charCount.textContent = `${length} / 200자`;
    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});

/* 디지털 시계 (날짜 + 시각)
=========================== */
const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    const date = now.getDate();
    const day = days[now.getDay()]; //요일은 0(일)부터 6(토)까지
    clockDate.textContent = `${year}년 ${month}월 ${date}일 ${day}`;

    // ----- 시각---------
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = `${h}:${m}:${s}`;
}

updateClock(); // 페이지 로드 시 즉시 시계 업데이트

setInterval(updateClock, 1000); // 1초마다 시계 업데이트