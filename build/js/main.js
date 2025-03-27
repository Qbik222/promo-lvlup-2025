"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  var _sessionStorage$getIt, _Number;
  var apiURL = 'https://fav-prom.com/api_formula1_25';
  var unauthMsgs = document.querySelectorAll('.unauth-msgs'),
    participateBtns = document.querySelectorAll('.took-part'),
    playBtns = document.querySelectorAll('.play-btn'),
    mainPage = document.querySelector(".fav-page");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : 'uk';
  // let locale =  'uk';

  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var userId;
  var debug = true;
  userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : 100300268;
  // userId = 100300268 ;

  var checkUserAuth = function checkUserAuth() {
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      request("/users").then(function (data) {
        var user = data.find(function (user) {
          return user.userid === userId;
        });
        if (user) {
          var _iterator2 = _createForOfIteratorHelper(playBtns),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var playBtn = _step2.value;
              playBtn.classList.remove('hide');
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var _iterator3 = _createForOfIteratorHelper(participateBtns),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var participateBtn = _step3.value;
              participateBtn.classList.add('hide');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _iterator4 = _createForOfIteratorHelper(participateBtns),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _participateBtn = _step4.value;
              _participateBtn.classList.remove('hide');
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          var _iterator5 = _createForOfIteratorHelper(playBtns),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _playBtn = _step5.value;
              _playBtn.classList.add('hide');
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      });
    } else {
      var _iterator6 = _createForOfIteratorHelper(participateBtns),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var participateBtn = _step6.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper(unauthMsgs),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _unauthMes = _step7.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  };
  var InitPage = function InitPage() {
    translate();
  };
  function loadTranslations() {
    return fetch("".concat(apiURL, "/new-translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      console.log(i18nData);
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById('lvlUp'), {
        childList: true,
        subtree: true
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (!debug) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = translateKey(key);
          elem.removeAttribute('data-translate');
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    defaultValue = defaultValue || key;
    return i18nData[key] || defaultValue;
  }
  function request(link) {
    return fetch(apiURL + link, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    });
  }
  function init() {
    InitPage();
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
    } else {
      var c = 0;
      var i = setInterval(function () {
        if (c < 50) {
          if (!!window.g_user_id) {
            userId = window.g_user_id;
            checkUserAuth();
            clearInterval(i);
          }
        } else {
          clearInterval(i);
        }
      }, 200);
    }
    checkUserAuth();
  }
  loadTranslations().then(init);
  var welcomeLogo = document.querySelector(".welcome__logo"),
    welcomeText = document.querySelector(".welcome__text"),
    welcomePrize = document.querySelector(".welcome__prize");
  setTimeout(function () {
    welcomeLogo.classList.remove("topAnimHide");
    welcomeLogo.classList.add("topAnimShow");
  }, 250);
  setTimeout(function () {
    welcomeText.classList.remove("topAnimHide");
    welcomeText.classList.add("topAnimShow");
  }, 500);
  setTimeout(function () {
    welcomePrize.classList.remove("topAnimHide");
    welcomePrize.classList.add("topAnimShow");
  }, 750);

  // function animateOnScroll(element, animationClass, hideClass) {
  //     const options = {
  //         root: null,
  //         rootMargin: '0px',
  //         threshold: 0.2
  //     };
  //
  //     const observer = new IntersectionObserver((entries) => {
  //         entries.forEach(entry => {
  //             if (entry.isIntersecting) {
  //                 entry.target.classList.add(animationClass);
  //                 entry.target.classList.remove(hideClass);
  //             } else {
  //                 entry.target.classList.remove(animationClass);
  //                 entry.target.classList.add(hideClass);
  //             }
  //         });
  //     }, options);
  //
  //     observer.observe(element);
  // }

  // animateOnScroll(welcomeLogo, "topAnimShow", "topAnimHide")
  // animateOnScroll(welcomeText, "topAnimShow", "topAnimHide")
  // animateOnScroll(welcomePrize, "topAnimShow", "topAnimHide")

  //test
  var _iterator8 = _createForOfIteratorHelper(document.querySelectorAll(".results__tabs-item")),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var tab = _step8.value;
      tab.addEventListener("click", function (e) {
        document.querySelectorAll(".results__tabs-item").forEach(function (item) {
          item.classList.remove("_active");
          if (item === e.target.closest(".results__tabs-item")) {
            item.classList.add("_active");
          }
        });
      });
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  document.querySelector(".auth-btn").addEventListener("click", function () {
    userId = Number(sessionStorage.getItem("userId")) || 0;
    if (userId === 100300268) {
      userId = 100200100;
    } else if (userId === 100200100) {
      userId = 0;
    } else {
      userId = 100300268;
    }
    sessionStorage.setItem("userId", userId);
    window.location.reload();
  });
  document.querySelector(".dark-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
  document.querySelector(".lng-btn").addEventListener("click", function () {
    locale = locale === 'uk' ? 'en' : 'uk';
    sessionStorage.setItem("locale", locale);
    window.location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInBsYXlCdG5zIiwibWFpblBhZ2UiLCJxdWVyeVNlbGVjdG9yIiwidWtMZW5nIiwiZW5MZW5nIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaTE4bkRhdGEiLCJ1c2VySWQiLCJkZWJ1ZyIsIk51bWJlciIsImNoZWNrVXNlckF1dGgiLCJ1bmF1dGhNZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZXF1ZXN0IiwidGhlbiIsImRhdGEiLCJ1c2VyIiwiZmluZCIsInVzZXJpZCIsInBsYXlCdG4iLCJyZW1vdmUiLCJwYXJ0aWNpcGF0ZUJ0biIsIkluaXRQYWdlIiwidHJhbnNsYXRlIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwidHJhbnNsYXRlS2V5IiwicmVtb3ZlQXR0cmlidXRlIiwiZGVmYXVsdFZhbHVlIiwibGluayIsImhlYWRlcnMiLCJpbml0Iiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJ3ZWxjb21lTG9nbyIsIndlbGNvbWVUZXh0Iiwid2VsY29tZVByaXplIiwic2V0VGltZW91dCIsInRhYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXRlbSIsInRhcmdl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QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXRELElBQUlFLE1BQU0sS0FBSyxTQUFTLEVBQUU7TUFDdEJBLE1BQU0sR0FBRyxTQUFTO0lBQ3RCLENBQUMsTUFBTSxJQUFJQSxNQUFNLEtBQUssU0FBUyxFQUFFO01BQzdCQSxNQUFNLEdBQUcsQ0FBQztJQUNkLENBQUMsTUFBTTtNQUNIQSxNQUFNLEdBQUcsU0FBUztJQUN0QjtJQUVBSCxjQUFjLENBQUNxRSxPQUFPLENBQUMsUUFBUSxFQUFFbEUsTUFBTSxDQUFDO0lBQ3hDNEMsTUFBTSxDQUFDdUIsUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0VBQ0ZoRixRQUFRLENBQUNLLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ29FLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQy9EekUsUUFBUSxDQUFDaUYsSUFBSSxDQUFDaEUsU0FBUyxDQUFDaUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUMxQyxDQUFDLENBQUM7RUFFRmxGLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDb0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDL0RqRSxNQUFNLEdBQUdBLE1BQU0sS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7SUFDdENDLGNBQWMsQ0FBQ3FFLE9BQU8sQ0FBQyxRQUFRLEVBQUV0RSxNQUFNLENBQUM7SUFDeENnRCxNQUFNLENBQUN1QixRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZm9ybXVsYTFfMjUnO1xuXG4gICAgY29uc3RcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNncycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vay1wYXJ0JyksXG4gICAgICAgIHBsYXlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKTtcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyAndWsnO1xuICAgIC8vIGxldCBsb2NhbGUgPSAgJ3VrJztcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGxldCB1c2VySWQ7XG4gICAgbGV0IGRlYnVnID0gdHJ1ZTtcblxuICAgIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyAxMDAzMDAyNjggO1xuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2OCA7XG5cbiAgICBjb25zdCBjaGVja1VzZXJBdXRoID0gKCkgPT4ge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3QoXCIvdXNlcnNcIikudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gZGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBsYXlCdG4gb2YgcGxheUJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGxheUJ0biBvZiBwbGF5QnRucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IEluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaTE4bkRhdGEpXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHZsVXAnKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoIWRlYnVnKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSB0cmFuc2xhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdCAobGluaykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGNvbnN0IHdlbGNvbWVMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lX19sb2dvXCIpLFxuICAgICAgICAgIHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lX190ZXh0XCIpLFxuICAgICAgICAgIHdlbGNvbWVQcml6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fcHJpemVcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICB3ZWxjb21lTG9nby5jbGFzc0xpc3QucmVtb3ZlKFwidG9wQW5pbUhpZGVcIilcbiAgICAgICAgd2VsY29tZUxvZ28uY2xhc3NMaXN0LmFkZChcInRvcEFuaW1TaG93XCIpXG4gICAgfSwgMjUwKVxuICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3BBbmltSGlkZVwiKVxuICAgICAgICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9wQW5pbVNob3dcIilcbiAgICB9LCA1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgd2VsY29tZVByaXplLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3BBbmltSGlkZVwiKVxuICAgICAgICB3ZWxjb21lUHJpemUuY2xhc3NMaXN0LmFkZChcInRvcEFuaW1TaG93XCIpXG4gICAgfSwgNzUwKVxuXG5cbiAgICAvLyBmdW5jdGlvbiBhbmltYXRlT25TY3JvbGwoZWxlbWVudCwgYW5pbWF0aW9uQ2xhc3MsIGhpZGVDbGFzcykge1xuICAgIC8vICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgIC8vICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAvLyAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgIC8vICAgICAgICAgdGhyZXNob2xkOiAwLjJcbiAgICAvLyAgICAgfTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIC8vICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uQ2xhc3MpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShoaWRlQ2xhc3MpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoaGlkZUNsYXNzKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSwgb3B0aW9ucyk7XG4gICAgLy9cbiAgICAvLyAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAvLyB9XG5cbiAgICAvLyBhbmltYXRlT25TY3JvbGwod2VsY29tZUxvZ28sIFwidG9wQW5pbVNob3dcIiwgXCJ0b3BBbmltSGlkZVwiKVxuICAgIC8vIGFuaW1hdGVPblNjcm9sbCh3ZWxjb21lVGV4dCwgXCJ0b3BBbmltU2hvd1wiLCBcInRvcEFuaW1IaWRlXCIpXG4gICAgLy8gYW5pbWF0ZU9uU2Nyb2xsKHdlbGNvbWVQcml6ZSwgXCJ0b3BBbmltU2hvd1wiLCBcInRvcEFuaW1IaWRlXCIpXG5cblxuXG4gICAgLy90ZXN0XG5cbiAgICBmb3IoY29uc3QgdGFiIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0c19fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlc3VsdHNfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgaWYoaXRlbSA9PT0gZS50YXJnZXQuY2xvc2VzdChcIi5yZXN1bHRzX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgfHwgMDtcblxuICAgICAgICBpZiAodXNlcklkID09PSAxMDAzMDAyNjgpIHtcbiAgICAgICAgICAgIHVzZXJJZCA9IDEwMDIwMDEwMDtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySWQgPT09IDEwMDIwMDEwMCkge1xuICAgICAgICAgICAgdXNlcklkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVzZXJJZCA9IDEwMDMwMDI2ODtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlcklkKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgPT09ICd1aycgPyAnZW4nIDogJ3VrJztcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBsb2NhbGUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxufSgpKSJdfQ==
