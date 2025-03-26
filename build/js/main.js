"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var API = 'https://fav-prom.com';
  var ENDPOINT = 'api_formula1_25';
  var RACES = [{
    number: 1,
    startDate: new Date('2025-03-12T09:00:00'),
    endDate: new Date('2025-03-16T02:30:00')
  }, {
    number: 2,
    startDate: new Date('2025-03-17T09:00:00'),
    endDate: new Date('2025-03-23T05:30:00')
  }, {
    number: 3,
    startDate: new Date('2025-03-24T09:00:00'),
    endDate: new Date('2025-04-06T04:30:00')
  }, {
    number: 4,
    startDate: new Date('2025-04-07T09:00:00'),
    endDate: new Date('2025-04-13T14:30:00')
  }, {
    number: 5,
    startDate: new Date('2025-04-14T09:00:00'),
    endDate: new Date('2025-04-20T16:30:00')
  }, {
    number: 6,
    startDate: new Date('2025-04-21T09:00:00'),
    endDate: new Date('2025-05-04T19:30:00')
  }, {
    number: 7,
    startDate: new Date('2025-05-05T09:00:00'),
    endDate: new Date('2025-05-18T12:30:00')
  }, {
    number: 8,
    startDate: new Date('2025-05-19T09:00:00'),
    endDate: new Date('2025-05-25T12:30:00')
  }, {
    number: 9,
    startDate: new Date('2025-05-26T09:00:00'),
    endDate: new Date('2025-06-01T12:30:00')
  }, {
    number: 10,
    startDate: new Date('2025-06-02T09:00:00'),
    endDate: new Date('2025-06-15T17:30:00')
  }, {
    number: 11,
    startDate: new Date('2025-06-16T09:00:00'),
    endDate: new Date('2025-06-29T12:30:00')
  }, {
    number: 12,
    startDate: new Date('2025-06-30T09:00:00'),
    endDate: new Date('2025-07-06T13:30:00')
  }, {
    number: 13,
    startDate: new Date('2025-07-07T09:00:00'),
    endDate: new Date('2025-07-27T12:30:00')
  }, {
    number: 14,
    startDate: new Date('2025-07-28T09:00:00'),
    endDate: new Date('2025-08-03T12:30:00')
  }, {
    number: 15,
    startDate: new Date('2025-08-04T09:00:00'),
    endDate: new Date('2025-08-31T12:30:00')
  }, {
    number: 16,
    startDate: new Date('2025-09-01T09:00:00'),
    endDate: new Date('2025-09-07T12:30:00')
  }, {
    number: 17,
    startDate: new Date('2025-09-08T09:00:00'),
    endDate: new Date('2025-09-21T10:30:00')
  }, {
    number: 18,
    startDate: new Date('2025-09-22T09:00:00'),
    endDate: new Date('2025-10-05T11:30:00')
  }, {
    number: 19,
    startDate: new Date('2025-10-06T09:00:00'),
    endDate: new Date('2025-10-19T18:30:00')
  }, {
    number: 20,
    startDate: new Date('2025-10-20T09:00:00'),
    endDate: new Date('2025-10-26T18:30:00')
  }, {
    number: 21,
    startDate: new Date('2025-10-27T09:00:00'),
    endDate: new Date('2025-11-09T15:30:00')
  }, {
    number: 22,
    startDate: new Date('2025-11-10T09:00:00'),
    endDate: new Date('2025-11-22T02:30:00')
  }, {
    number: 23,
    startDate: new Date('2025-11-23T09:00:00'),
    endDate: new Date('2025-11-30T14:30:00')
  }, {
    number: 24,
    startDate: new Date('2025-12-01T09:00:00'),
    endDate: new Date('2025-12-07T11:30:00')
  }];
  var currentDate = new Date();
  var racesById = [];
  RACES.forEach(function (r) {
    return racesById[r.number] = r;
  });
  var userId = null;
  var actionBtn = document.querySelector('.btn');
  function formatDateString(dateString) {
    var date = new Date(dateString);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return "".concat(day, ".").concat(month, ".").concat(year, " / ").concat(hours, ":").concat(minutes);
  }
  function request(link) {
    var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    fetch("".concat(API, "/").concat(ENDPOINT, "/").concat(link), _objectSpread({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions)).then(function (res) {
      return res.json();
    });
  }
  function maskUserId(userIdToMask) {
    return '**' + userIdToMask.toString().slice(2);
  }
  function getCurrentRace() {
    var raceInfo = RACES.find(function (r) {
      return currentDate >= r.startDate && currentDate < r.endDate;
    });
    return raceInfo && raceInfo.number;
  }

  // function checkUserAuth() {
  //     if (userId) {

  //     } else {
  //         chooseSelector.classList.add('hide');
  //         scrollBtn.classList.add('hide');
  //     }
  // }

  // function getUsers(forceRefresh) {
  //     const raceNumber = currentIndex + 1;
  //     const raceStatus = getRaceStatus(raceNumber);
  //     if (!raceStatus || raceStatus == 'closed') {
  //         return Promise.resolve([]);
  //     }
  //     const cached = usersByRace[raceNumber];
  //     if (!forceRefresh && !!cached) {
  //         return Promise.resolve(cached);
  //     }
  //     return request(`/users/${raceNumber}`)
  //         .then(res => {
  //             usersByRace[raceNumber] = res;
  //             return res;
  //         });
  // }

  // const InitPage = (forceRefresh) => {
  //     getUsers(forceRefresh).then((users) => {
  //         renderUsers(users);
  //         translate();
  //     });
  // };

  function init() {
    // if (window.store) {
    //     const state = window.store.getState();
    //     userId = (state.auth.isAuthorized && state.auth.id) || '';
    // } else {
    //     // InitPage();
    //     const c = 0;
    //     const interval = setInterval(function () {
    //         if (c < 50) {
    //             if (window.g_user_id) {
    //                 userId = window.g_user_id;
    //                 // InitPage();
    //                 checkUserAuth();
    //                 clearInterval(interval);
    //             }
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 200);
    // }
    // checkUserAuth();
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
      var slides = document.querySelectorAll('.race__item');
      var slideMoveLeft = document.querySelector('.race__nav-left');
      var slideMoveRight = document.querySelector('.race__nav-right');
      var slideCounter = document.querySelector('.race__nav-counter');
      var betTables = document.querySelectorAll('.bet__item');
      var resultsFirst = document.querySelector('.results__first');
      var resultsSecond = document.querySelector('.results__second');
      var resultsThird = document.querySelector('.results__third');
      var currentRace = 3;
      slides.forEach(function (slide, i) {
        if (i < currentRace) {
          slide.classList.add('_done');
        }
        if (i > currentRace) {
          slide.classList.add('_lock');
        }
      });
      var currentSlide = currentRace;
      function updateSlider(index) {
        slides.forEach(function (slide) {
          return slide.classList.remove('_active');
        });
        slides[index].classList.add('_active');
        slideCounter.textContent = "".concat(index + 1, "/").concat(slides.length);
        betTables.forEach(function (table) {
          if (currentSlide > currentRace) {
            table.classList.add('_lock');
          }
          if (currentSlide < currentRace) {
            table.classList.add('_done');
          }
          if (currentSlide === currentRace) {
            table.classList.remove('_lock', '_done');
          }
        });
      }
      function moveSlide(direction) {
        var currentBolid = slides[currentSlide].querySelector('.race__bolid');
        currentBolid.classList.add('_move');
        var nextSlide = direction === 'next' ? currentSlide + 1 : currentSlide - 1;
        if (nextSlide < 0) nextSlide = slides.length - 1;
        if (nextSlide >= slides.length) nextSlide = 0;
        var nextBolid = slides[nextSlide].querySelector('.race__bolid');
        nextBolid.classList.add('_arrive');
        slides[currentSlide].classList.add('_opacity');
        setTimeout(function () {
          currentBolid.classList.remove('_move');
          nextBolid.classList.remove('_arrive');
          currentSlide = nextSlide;
          updateSlider(currentSlide);
          slides.forEach(function (slide) {
            slide.classList.remove('_opacity');
          });
        }, 1500);
      }
      slideMoveLeft.addEventListener('click', function () {
        moveSlide('prev');
        document.querySelector('.race__nav').style.pointerEvents = 'none';
        setTimeout(function () {
          document.querySelector('.race__nav').style.pointerEvents = 'initial';
        }, 2000);
      });
      slideMoveRight.addEventListener('click', function () {
        moveSlide('next');
        document.querySelector('.race__nav').style.pointerEvents = 'none';
        setTimeout(function () {
          document.querySelector('.race__nav').style.pointerEvents = 'initial';
        }, 2000);
      });
      updateSlider(currentSlide);
      function startCountdown(endTime) {
        var daysEls = document.querySelectorAll('.timer__days-item');
        var hoursEls = document.querySelectorAll('.timer__hours-item');
        var minutesEls = document.querySelectorAll('.timer__minutes-item');
        function updateTimer() {
          var now = new Date().getTime();
          var timeLeft = endTime - now;
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            updateDigits(daysEls, '00');
            updateDigits(hoursEls, '00');
            updateDigits(minutesEls, '00');
            return;
          }
          var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          var hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
          var minutes = Math.floor(timeLeft / (1000 * 60) % 60);
          updateDigits(daysEls, String(days).padStart(2, '0'));
          updateDigits(hoursEls, String(hours).padStart(2, '0'));
          updateDigits(minutesEls, String(minutes).padStart(2, '0'));
        }
        function updateDigits(elements, value) {
          elements[0].textContent = value[0];
          elements[1].textContent = value[1];
        }
        updateTimer();
        var timerInterval = setInterval(updateTimer, 60000);
      }
      var now = new Date();
      var endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59).getTime();
      startCountdown(endOfMonth);

      // function startSmoke(carSelector, smokeClass, maxCount, interval, delay, fadeTime, removeDelay, extraClass = '', activeClass = false) {
      //     const cars = document.querySelectorAll(carSelector);
      //
      //     cars.forEach(car => {
      //         if (!car) return;
      //
      //         function createSmoke() {
      //             if (activeClass) {
      //                 if (!car.parentElement || !car.parentElement.parentElement || !car.parentElement.parentElement.classList.contains("_active")) return;
      //             }
      //
      //             const extraClassName = extraClass ? `.${extraClass}` : '';
      //             if (car.querySelectorAll(`.${smokeClass}${extraClassName}`).length < maxCount) {
      //                 const smoke = document.createElement('div');
      //                 smoke.classList.add(smokeClass);
      //                 if (extraClass) smoke.classList.add(extraClass);
      //                 car.appendChild(smoke);
      //
      //                 requestAnimationFrame(() => {
      //                     setTimeout(() => smoke.classList.add("_opacity"), fadeTime);
      //                 });
      //
      //                 setTimeout(() => smoke.remove(), fadeTime + removeDelay);
      //             }
      //         }
      //
      //         createSmoke();
      //
      //         setTimeout(() => {
      //             setInterval(createSmoke, interval);
      //         }, delay);
      //     });
      // }

      function startSmoke(carSelector, smokeClass, maxCount, interval, delay, fadeTime, removeDelay) {
        var extraClass = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
        var activeClass = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
        var cars = document.querySelectorAll(carSelector);
        cars.forEach(function (car) {
          if (!car) return;
          function createSmoke() {
            if (activeClass) {
              var _car$parentElement;
              var parent = (_car$parentElement = car.parentElement) === null || _car$parentElement === void 0 ? void 0 : _car$parentElement.parentElement;
              if (!parent || !parent.classList.contains('_active')) return;
            }
            var extraClassName = extraClass ? ".".concat(extraClass) : '';
            if (car.querySelectorAll(".".concat(smokeClass).concat(extraClassName)).length < maxCount) {
              var smoke = document.createElement('div');
              smoke.classList.add(smokeClass);
              if (extraClass) smoke.classList.add(extraClass);
              car.appendChild(smoke);
              setTimeout(function () {
                return smoke.remove();
              }, fadeTime + removeDelay);
            }
          }
          setTimeout(function () {
            createSmoke();
            setInterval(createSmoke, interval);
          }, delay);
        });
      }
      startSmoke('.race__bolid-car', 'race__bolid-smoke-front', 4, 900, 500, 200, 1600, '', true);
      startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 8, 900, 500, 200, 1600, '', true);
      startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 4, 900, 500, 200, 1600, '_large', true);
      startSmoke('.welcome__pers-smoke-front', 'front-before', 4, 900, 500, 200, 1600, '', false);
      startSmoke('.welcome__pers-smoke-back', 'front-before', 4, 900, 500, 200, 1600, '', false);
      function setPopups(triggerButton, popupClass) {
        var popupsContainer = document.querySelector('.popups');
        var popup = document.querySelector(".popups__item.".concat(popupClass));
        if (!triggerButton || !popup || !popupsContainer) return;
        triggerButton.addEventListener('click', function () {
          popupsContainer.classList.remove('_opacity');
          popupsContainer.classList.add(popupClass);
          document.body.style.overflow = 'hidden';
        });
        var closeButton = popup.querySelector('.popups__item-close');
        popupsContainer.addEventListener('click', function (e) {
          if (e.target === popupsContainer || e.target === closeButton) {
            closePopup();
          }
        });
        function closePopup() {
          popupsContainer.classList.add('_opacity');
          popupsContainer.classList.remove(popupClass);
          document.body.style.overflow = '';
        }
      }
      setPopups(document.querySelector('.bet__btn-item'), '_betPopup');
      setPopups(document.querySelector('.confirm__upd-btn'), '_confirmPopup');
      setPopups(document.querySelector('.results__popup-btn'), '_resultsPopup');
      function animateOnScroll(element, animationClass, delay) {
        var options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.2
        };
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setTimeout(function () {
                entry.target.classList.add(animationClass);
              }, delay);
            } else {
              entry.target.classList.remove(animationClass);
            }
          });
        }, options);
        observer.observe(element);
      }
      animateOnScroll(resultsFirst.querySelector('.results__top-decor'), '_show', 0);
      animateOnScroll(resultsSecond.querySelector('.results__top-decor'), '_show', 400);
      animateOnScroll(resultsThird.querySelector('.results__top-decor'), '_show', 800);
      animateOnScroll(resultsFirst.querySelector('.results__top-wrap'), '_show', 0);
      animateOnScroll(resultsSecond.querySelector('.results__top-wrap'), '_show', 400);
      animateOnScroll(resultsThird.querySelector('.results__top-wrap'), '_show', 800);
      document.querySelectorAll('.bet__item').forEach(function (item) {
        var wrap = item.querySelector('.bet__wrap');
        var navItems = item.querySelectorAll('.bet__scroll-nav-item');
        var scrollCount = item.querySelector('.bet__scroll-count');
        var firstColumn = item.querySelector('.bet__column');
        var updateScrollStatus = function updateScrollStatus() {
          var scrollLeft = wrap.scrollLeft;
          var isFirstVisible = scrollLeft < firstColumn.clientWidth / 2;
          navItems[0].classList.toggle('_active', isFirstVisible);
          navItems[1].classList.toggle('_active', !isFirstVisible);
          scrollCount.textContent = isFirstVisible ? '1/2' : '2/2';
        };
        wrap.addEventListener('scroll', updateScrollStatus);
        updateScrollStatus();
      });
    });
    document.querySelector('.dark-btn').addEventListener('click', function () {
      document.body.classList.toggle('dark');
    });
  });
  var mainPage = document.querySelector('.fav__page');

  // #region Translation
  var ukLang = document.querySelector('#ukLang');
  var enLang = document.querySelector('#enLang');
  var i18nData = {};
  var locale = 'uk';
  if (ukLang) locale = 'uk';
  if (enLang) locale = 'en';
  function loadTranslations() {
    return fetch("".concat(API, "/").concat(ENDPOINT, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById('verification'), {
        childList: true,
        subtree: true
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      elems.forEach(function (elem) {
        var key = elem.getAttribute('data-translate');
        elem.innerHTML = translateKey(key);
        elem.removeAttribute('data-translate');
      });
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function translateKey(key) {
    if (!key) {
      return;
    }
    return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }

  // #endregion

  // loadTranslations().then(init);
  init();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQVBJIiwiRU5EUE9JTlQiLCJSQUNFUyIsIm51bWJlciIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiY3VycmVudERhdGUiLCJyYWNlc0J5SWQiLCJmb3JFYWNoIiwiciIsInVzZXJJZCIsImFjdGlvbkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm1hdERhdGVTdHJpbmciLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImRheSIsImdldERhdGUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJtYXNrVXNlcklkIiwidXNlcklkVG9NYXNrIiwic2xpY2UiLCJnZXRDdXJyZW50UmFjZSIsInJhY2VJbmZvIiwiZmluZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlTW92ZUxlZnQiLCJzbGlkZU1vdmVSaWdodCIsInNsaWRlQ291bnRlciIsImJldFRhYmxlcyIsInJlc3VsdHNGaXJzdCIsInJlc3VsdHNTZWNvbmQiLCJyZXN1bHRzVGhpcmQiLCJjdXJyZW50UmFjZSIsInNsaWRlIiwiaSIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRTbGlkZSIsInVwZGF0ZVNsaWRlciIsImluZGV4IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJ0YWJsZSIsIm1vdmVTbGlkZSIsImRpcmVjdGlvbiIsImN1cnJlbnRCb2xpZCIsIm5leHRTbGlkZSIsIm5leHRCb2xpZCIsInNldFRpbWVvdXQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJzdGFydENvdW50ZG93biIsImVuZFRpbWUiLCJkYXlzRWxzIiwiaG91cnNFbHMiLCJtaW51dGVzRWxzIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJjbGVhckludGVydmFsIiwidGltZXJJbnRlcnZhbCIsInVwZGF0ZURpZ2l0cyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJTdHJpbmciLCJlbGVtZW50cyIsInZhbHVlIiwic2V0SW50ZXJ2YWwiLCJlbmRPZk1vbnRoIiwic3RhcnRTbW9rZSIsImNhclNlbGVjdG9yIiwic21va2VDbGFzcyIsIm1heENvdW50IiwiaW50ZXJ2YWwiLCJkZWxheSIsImZhZGVUaW1lIiwicmVtb3ZlRGVsYXkiLCJleHRyYUNsYXNzIiwiYWN0aXZlQ2xhc3MiLCJjYXJzIiwiY2FyIiwiY3JlYXRlU21va2UiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJleHRyYUNsYXNzTmFtZSIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0UG9wdXBzIiwidHJpZ2dlckJ1dHRvbiIsInBvcHVwQ2xhc3MiLCJwb3B1cHNDb250YWluZXIiLCJwb3B1cCIsImJvZHkiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiZSIsInRhcmdldCIsImNsb3NlUG9wdXAiLCJhbmltYXRlT25TY3JvbGwiLCJlbGVtZW50IiwiYW5pbWF0aW9uQ2xhc3MiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwiaXRlbSIsIndyYXAiLCJuYXZJdGVtcyIsInNjcm9sbENvdW50IiwiZmlyc3RDb2x1bW4iLCJ1cGRhdGVTY3JvbGxTdGF0dXMiLCJzY3JvbGxMZWZ0IiwiaXNGaXJzdFZpc2libGUiLCJjbGllbnRXaWR0aCIsInRvZ2dsZSIsIm1haW5QYWdlIiwidWtMYW5nIiwiZW5MYW5nIiwiaTE4bkRhdGEiLCJsb2NhbGUiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJ0cmFuc2xhdGVLZXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLENBQUMsWUFBWTtFQUNULElBQU1BLEdBQUcsR0FBRyxzQkFBc0I7RUFDbEMsSUFBTUMsUUFBUSxHQUFHLGlCQUFpQjtFQUNsQyxJQUFNQyxLQUFLLEdBQUcsQ0FDVjtJQUNJQyxNQUFNLEVBQUUsQ0FBQztJQUNUQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLENBQUM7SUFDVEMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsQ0FBQztJQUNUQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLENBQUM7SUFDVEMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsQ0FBQztJQUNUQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLENBQUM7SUFDVEMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsRUFBRTtJQUNWQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLEVBQUU7SUFDVkMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsRUFBRTtJQUNWQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLEVBQUU7SUFDVkMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsRUFBRTtJQUNWQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFFLEVBQUU7SUFDVkMsU0FBUyxFQUFFLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQ0MsT0FBTyxFQUFFLElBQUlELElBQUksQ0FBQyxxQkFBcUI7RUFDM0MsQ0FBQyxFQUNEO0lBQ0lGLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUNDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLENBQUMscUJBQXFCO0VBQzNDLENBQUMsRUFDRDtJQUNJRixNQUFNLEVBQUUsRUFBRTtJQUNWQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzFDQyxPQUFPLEVBQUUsSUFBSUQsSUFBSSxDQUFDLHFCQUFxQjtFQUMzQyxDQUFDLEVBQ0Q7SUFDSUYsTUFBTSxFQUFF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QUcsR0FBR0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDL0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHQyxZQUFZLENBQUNILEdBQUcsQ0FBQztRQUNsQ0QsSUFBSSxDQUFDSyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7TUFDMUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJZixNQUFNLEtBQUssSUFBSSxFQUFFO01BQ2pCSixRQUFRLENBQUMzRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDaEM7SUFFQThHLHFCQUFxQixFQUFFO0VBQzNCO0VBRUEsU0FBU0YsWUFBWSxDQUFDSCxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDQSxHQUFHLEVBQUU7TUFDTjtJQUNKO0lBQ0EsT0FDSVosUUFBUSxDQUFDWSxHQUFHLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsR0FBRztFQUV6RTtFQUVBLFNBQVNLLHFCQUFxQixDQUFDMUMsT0FBTyxFQUFFMkMsWUFBWSxFQUFFO0lBQ2xELElBQUksQ0FBQzNDLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU00QyxJQUFJO01BQ1g1QyxPQUFPLENBQUNyRSxTQUFTLENBQUNLLE1BQU0sQ0FBQzJHLFlBQVksR0FBR0MsSUFBSSxDQUFDO0lBQ2pEO0lBQ0E1QyxPQUFPLENBQUNyRSxTQUFTLENBQUNDLEdBQUcsQ0FBQytHLFlBQVksR0FBR2pCLE1BQU0sQ0FBQztFQUNoRDs7RUFFQTs7RUFFQTtFQUNBN0csSUFBSSxFQUFFO0FBQ1YsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IEFQSSA9ICdodHRwczovL2Zhdi1wcm9tLmNvbSc7XG4gICAgY29uc3QgRU5EUE9JTlQgPSAnYXBpX2Zvcm11bGExXzI1JztcbiAgICBjb25zdCBSQUNFUyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0xMlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTZUMDI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0xN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMjNUMDU6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAzLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0yNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMDZUMDQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0wN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMTNUMTQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA1LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0xNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMjBUMTY6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA2LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0yMVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMDRUMTk6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA3LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0wNVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMThUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA4LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0xOVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMjVUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA5LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0yNlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMDFUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMDJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE3OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0yOVQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDEyLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0zMFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMDZUMTM6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMDdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTI3VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTQsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTI4VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOC0wM1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE1LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOC0wNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMzFUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMDFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTA3VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTcsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTA4VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0yMVQxMDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE4LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0yMlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMDVUMTE6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxOSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMDZUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTE5VDE4OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjAsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTIwVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yNlQxODozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIxLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMDlUMTU6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMTBUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTIyVDAyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjMsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTIzVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0zMFQxNDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDI0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMi0wMVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTItMDdUMTE6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCByYWNlc0J5SWQgPSBbXTtcbiAgICBSQUNFUy5mb3JFYWNoKChyKSA9PiAocmFjZXNCeUlkW3IubnVtYmVyXSA9IHIpKTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBjb25zdCBhY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfSAvICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QobGluaywgZXh0cmFPcHRpb25zID0ge30pIHtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS8ke0VORFBPSU5UfS8ke2xpbmt9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uZXh0cmFPcHRpb25zLFxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkVG9NYXNrKSB7XG4gICAgICAgIHJldHVybiAnKionICsgdXNlcklkVG9NYXNrLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJhY2UoKSB7XG4gICAgICAgIGNvbnN0IHJhY2VJbmZvID0gUkFDRVMuZmluZChcbiAgICAgICAgICAgIChyKSA9PiBjdXJyZW50RGF0ZSA+PSByLnN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IHIuZW5kRGF0ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmFjZUluZm8gJiYgcmFjZUluZm8ubnVtYmVyO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgLy8gICAgIGlmICh1c2VySWQpIHtcblxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2hvb3NlU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIGdldFVzZXJzKGZvcmNlUmVmcmVzaCkge1xuICAgIC8vICAgICBjb25zdCByYWNlTnVtYmVyID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAvLyAgICAgY29uc3QgcmFjZVN0YXR1cyA9IGdldFJhY2VTdGF0dXMocmFjZU51bWJlcik7XG4gICAgLy8gICAgIGlmICghcmFjZVN0YXR1cyB8fCByYWNlU3RhdHVzID09ICdjbG9zZWQnKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zdCBjYWNoZWQgPSB1c2Vyc0J5UmFjZVtyYWNlTnVtYmVyXTtcbiAgICAvLyAgICAgaWYgKCFmb3JjZVJlZnJlc2ggJiYgISFjYWNoZWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gcmVxdWVzdChgL3VzZXJzLyR7cmFjZU51bWJlcn1gKVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgICAgICAgICAgICB1c2Vyc0J5UmFjZVtyYWNlTnVtYmVyXSA9IHJlcztcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgSW5pdFBhZ2UgPSAoZm9yY2VSZWZyZXNoKSA9PiB7XG4gICAgLy8gICAgIGdldFVzZXJzKGZvcmNlUmVmcmVzaCkudGhlbigodXNlcnMpID0+IHtcbiAgICAvLyAgICAgICAgIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAvLyAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAvLyAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgLy8gICAgIHVzZXJJZCA9IChzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkKSB8fCAnJztcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8vIEluaXRQYWdlKCk7XG4gICAgICAgIC8vICAgICBjb25zdCBjID0gMDtcbiAgICAgICAgLy8gICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBJbml0UGFnZSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9LCAyMDApO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNoZWNrVXNlckF1dGgoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhY2VfX2l0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlTW92ZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2LWxlZnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlTW92ZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1jb3VudGVyJyk7XG4gICAgICAgICAgICBjb25zdCBiZXRUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fZmlyc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHNTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fc2Vjb25kJyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzVGhpcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdGhpcmQnKTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSYWNlID0gMztcblxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBjdXJyZW50UmFjZSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA+IGN1cnJlbnRSYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50U2xpZGUgPSBjdXJyZW50UmFjZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNsaWRlQ291bnRlci50ZXh0Q29udGVudCA9IGAke2luZGV4ICsgMX0vJHtzbGlkZXMubGVuZ3RofWA7XG4gICAgICAgICAgICAgICAgYmV0VGFibGVzLmZvckVhY2goKHRhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPiBjdXJyZW50UmFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgY3VycmVudFJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gY3VycmVudFJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJywgJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb2xpZCA9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19ib2xpZCcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCb2xpZC5jbGFzc0xpc3QuYWRkKCdfbW92ZScpO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPVxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICduZXh0JyA/IGN1cnJlbnRTbGlkZSArIDEgOiBjdXJyZW50U2xpZGUgLSAxO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgPCAwKSBuZXh0U2xpZGUgPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlID49IHNsaWRlcy5sZW5ndGgpIG5leHRTbGlkZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Qm9saWQgPVxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNbbmV4dFNsaWRlXS5xdWVyeVNlbGVjdG9yKCcucmFjZV9fYm9saWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Qm9saWQuY2xhc3NMaXN0LmFkZCgnX2Fycml2ZScpO1xuXG4gICAgICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9saWQuY2xhc3NMaXN0LnJlbW92ZSgnX21vdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEJvbGlkLmNsYXNzTGlzdC5yZW1vdmUoJ19hcnJpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gbmV4dFNsaWRlO1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbGlkZU1vdmVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgncHJldicpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgICAgICAgICAgICAgICAgJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5pdGlhbCc7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNsaWRlTW92ZVJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgnbmV4dCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgICAgICAgICAgICAgICAgJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5pdGlhbCc7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKGVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVyX19kYXlzLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3Vyc0VscyA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcl9faG91cnMtaXRlbScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICAnLnRpbWVyX19taW51dGVzLWl0ZW0nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGRheXNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCAnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCAnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwKSkgJSA2MCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGRheXNFbHMsIFN0cmluZyhkYXlzKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNbMV0udGV4dENvbnRlbnQgPSB2YWx1ZVsxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgNjAwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgZW5kT2ZNb250aCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG5vdy5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDIzLFxuICAgICAgICAgICAgICAgIDU5XG4gICAgICAgICAgICApLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24oZW5kT2ZNb250aCk7XG5cbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHN0YXJ0U21va2UoY2FyU2VsZWN0b3IsIHNtb2tlQ2xhc3MsIG1heENvdW50LCBpbnRlcnZhbCwgZGVsYXksIGZhZGVUaW1lLCByZW1vdmVEZWxheSwgZXh0cmFDbGFzcyA9ICcnLCBhY3RpdmVDbGFzcyA9IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgY2FycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FyU2VsZWN0b3IpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBjYXJzLmZvckVhY2goY2FyID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCFjYXIpIHJldHVybjtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNtb2tlKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKCFjYXIucGFyZW50RWxlbWVudCB8fCAhY2FyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCB8fCAhY2FyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJfYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgZXh0cmFDbGFzc05hbWUgPSBleHRyYUNsYXNzID8gYC4ke2V4dHJhQ2xhc3N9YCA6ICcnO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNhci5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzbW9rZUNsYXNzfSR7ZXh0cmFDbGFzc05hbWV9YCkubGVuZ3RoIDwgbWF4Q291bnQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNtb2tlLmNsYXNzTGlzdC5hZGQoc21va2VDbGFzcyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGV4dHJhQ2xhc3MpIHNtb2tlLmNsYXNzTGlzdC5hZGQoZXh0cmFDbGFzcyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2FyLmFwcGVuZENoaWxkKHNtb2tlKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzbW9rZS5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiksIGZhZGVUaW1lKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzbW9rZS5yZW1vdmUoKSwgZmFkZVRpbWUgKyByZW1vdmVEZWxheSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIGNyZWF0ZVNtb2tlKCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNldEludGVydmFsKGNyZWF0ZVNtb2tlLCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRTbW9rZShcbiAgICAgICAgICAgICAgICBjYXJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBzbW9rZUNsYXNzLFxuICAgICAgICAgICAgICAgIG1heENvdW50LFxuICAgICAgICAgICAgICAgIGludGVydmFsLFxuICAgICAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgICAgIGZhZGVUaW1lLFxuICAgICAgICAgICAgICAgIHJlbW92ZURlbGF5LFxuICAgICAgICAgICAgICAgIGV4dHJhQ2xhc3MgPSAnJyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9IGZhbHNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICBjYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNtb2tlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gY2FyLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGFyZW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFDbGFzc05hbWUgPSBleHRyYUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgLiR7ZXh0cmFDbGFzc31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXIucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke3Ntb2tlQ2xhc3N9JHtleHRyYUNsYXNzTmFtZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGggPCBtYXhDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbW9rZS5jbGFzc0xpc3QuYWRkKHNtb2tlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYUNsYXNzKSBzbW9rZS5jbGFzc0xpc3QuYWRkKGV4dHJhQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhci5hcHBlbmRDaGlsZChzbW9rZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gc21va2UucmVtb3ZlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGVUaW1lICsgcmVtb3ZlRGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbW9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoY3JlYXRlU21va2UsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgICAgICcucmFjZV9fYm9saWQtY2FyJyxcbiAgICAgICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtZnJvbnQnLFxuICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAgICAgJ3JhY2VfX2JvbGlkLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAgICAgJ3JhY2VfX2JvbGlkLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgICAnX2xhcmdlJyxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICAgICAnLndlbGNvbWVfX3BlcnMtc21va2UtZnJvbnQnLFxuICAgICAgICAgICAgICAgICdmcm9udC1iZWZvcmUnLFxuICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAgICAgJy53ZWxjb21lX19wZXJzLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgICAgICdmcm9udC1iZWZvcmUnLFxuICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0UG9wdXBzKHRyaWdnZXJCdXR0b24sIHBvcHVwQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLnBvcHVwc19faXRlbS4ke3BvcHVwQ2xhc3N9YFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRyaWdnZXJCdXR0b24gfHwgIXBvcHVwIHx8ICFwb3B1cHNDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRyaWdnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwc19faXRlbS1jbG9zZScpO1xuXG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQgPT09IHBvcHVwc0NvbnRhaW5lciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQgPT09IGNsb3NlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmV0X19idG4taXRlbScpLCAnX2JldFBvcHVwJyk7XG4gICAgICAgICAgICBzZXRQb3B1cHMoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1fX3VwZC1idG4nKSxcbiAgICAgICAgICAgICAgICAnX2NvbmZpcm1Qb3B1cCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRQb3B1cHMoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICdfcmVzdWx0c1BvcHVwJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZU9uU2Nyb2xsKGVsZW1lbnQsIGFuaW1hdGlvbkNsYXNzLCBkZWxheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgcmVzdWx0c0ZpcnN0LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgcmVzdWx0c1NlY29uZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICA0MDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgcmVzdWx0c1RoaXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgICAgIDgwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgICAgICByZXN1bHRzRmlyc3QucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgICAgIHJlc3VsdHNTZWNvbmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICA0MDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgcmVzdWx0c1RoaXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3Atd3JhcCcpLFxuICAgICAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAgICAgODAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXAgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX3dyYXAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmJldF9fc2Nyb2xsLW5hdi1pdGVtJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX3Njcm9sbC1jb3VudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q29sdW1uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYmV0X19jb2x1bW4nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVNjcm9sbFN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdyYXAuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGaXJzdFZpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA8IGZpcnN0Q29sdW1uLmNsaWVudFdpZHRoIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICBuYXZJdGVtc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaXNGaXJzdFZpc2libGUpO1xuICAgICAgICAgICAgICAgICAgICBuYXZJdGVtc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgIWlzRmlyc3RWaXNpYmxlKTtcblxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxDb3VudC50ZXh0Q29udGVudCA9IGlzRmlyc3RWaXNpYmxlID8gJzEvMicgOiAnMi8yJztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVTY3JvbGxTdGF0dXMpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcm9sbFN0YXR1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2X19wYWdlJyk7XG5cbiAgICAvLyAjcmVnaW9uIFRyYW5zbGF0aW9uXG4gICAgY29uc3QgdWtMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGFuZycpO1xuICAgIGNvbnN0IGVuTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxhbmcnKTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBsZXQgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAodWtMYW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxhbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS8ke0VORFBPSU5UfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKFxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZpY2F0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKTtcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdHJhbnNsYXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCk7XG4gICAgaW5pdCgpO1xufSkoKTtcbiJdfQ==
