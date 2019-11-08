const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-list');
const NavWrap = document.querySelector('.header-nav');

const EventButton = document.querySelector('.event__controls-btn--start');
const EventForm = document.querySelector('.popup-event');
const EventFormClose = document.querySelector('.popup-event__close');

document.querySelector('.header-nav__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
  NavWrap.classList.toggle('active');
};

document.querySelector('.event__controls-btn--start').onclick = function(){
	EventForm.classList.add('active');
};

document.querySelector('.popup-event__close').onclick = function(){
	EventForm.classList.remove('active');
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById('time-list');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    var daysNum = document.getElementById('daysNum');
    var hoursNum = document.getElementById('hoursNum');
    var minutesNum = document.getElementById('minutesNum');
    var secondsNum = document.getElementById('secondsNum');

    function getLast(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5?number%10:5)]];
    }

    daysSpan.innerHTML = t.days;
    document.getElementById('daysNum').innerHTML = getLast(t.days, ['день:', 'дня:', 'дней:']);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    document.getElementById('hoursNum').innerHTML = getLast(t.hours, ['час:', 'часа:', 'часов:']);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    document.getElementById('minutesNum').innerHTML = getLast(t.minutes, ['минута:', 'минуты:', 'минут:']);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    document.getElementById('secondsNum').innerHTML = getLast(t.seconds, ['секунда:', 'секунды:', 'секунд:']);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "November 14 2019 00:00:00 GMT+0200";
initializeClock('time-list', deadline);
