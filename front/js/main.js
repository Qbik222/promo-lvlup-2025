(function(){
    const apiURL = 'https://fav-prom.com/api_lvlup_2025';

    const PROMO_START_DATE = new Date("2025-04-14T12:00:00");
    const currentDate = new Date()

    const weekDates = [];
    let weekNums = 0;
    const prizeFunds = [`300 000`, `300 000`, `400 000`];

    const formatDate = (date) => {
        return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`;
    };

    for (let i = 0; i < 3; i++) {
        let start = new Date(PROMO_START_DATE.getTime() + i * 7 * 24 * 60 * 60 * 1000);
        let end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
        end.setHours(23, 59, 59, 999);

        weekDates[i] = {
            start: start,
            end: end,
            period: `${formatDate(start)} - ${formatDate(end)}`,
            prizeFund: prizeFunds[i],
        };

        if (currentDate >= end) {
            weekNums++;
        }
    }

    for (let i = 0; i < weekDates.length; i++) {
        if (currentDate >= weekDates[i].start && currentDate <= weekDates[i].end) {
            weekNums = i + 1;
        }
    }

    if (weekNums === 0) {
        if (currentDate < weekDates[0].start) {
            console.log("Акція ще не почалась");
        } else {
            console.log("Акція вже закінчилась");
        }
    }

    console.log("Поточний тиждень:", weekNums);
    console.log("Деталі тижнів:", weekDates);


    const
        unauthMsgs = document.querySelectorAll('.unauth-msgs'),
        participateBtns = document.querySelectorAll('.took-part'),
        playBtns = document.querySelectorAll('.play-btn'),
        mainPage = document.querySelector(".fav-page"),
        tabsContainer = document.querySelector(".results__tabs"),
        weekAmount = document.querySelector(".results__prize-amount");

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = sessionStorage.getItem("locale") ?? 'uk';
    // let locale =  'uk';

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let i18nData = {};
    let userId;
    const debug = false;

    userId = Number(sessionStorage.getItem("userId")) ?? 100300268 ;
    // userId = 100300268 ;

    const checkUserAuth = () => {
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            request("/users").then(data => {
                const user = data.find(user => user.userid === userId);

                if (user) {
                    for (const playBtn of playBtns) {
                        playBtn.classList.remove('hide');
                    }
                    for (const participateBtn of participateBtns) {
                        participateBtn.classList.add('hide');
                    }
                } else {
                    for (const participateBtn of participateBtns) {
                        participateBtn.classList.remove('hide');
                    }
                    for (const playBtn of playBtns) {
                        playBtn.classList.add('hide');
                    }
                }
            });


        } else {
            for (const participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
        }
    }
    const InitPage = () => {
        checkUserAuth()
        translate();
        renderTabs(tabsContainer)
    }

    function participate() {
        if (!userId) {
            return;
        }

        const params = { userid: userId };
        console.log(params)

        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
        .then(res => {

            for (const joinBtn of participateBtns){
                joinBtn.classList.add('hide');
            }
            InitPage();
        });
    }

    function loadTranslations() {
        return fetch(`${apiURL}/new-translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                const mutationObserver = new MutationObserver(function(mutations) {
                    translate();
                });
                mutationObserver.observe(document.getElementById('lvlUp'), {
                    childList: true,
                    subtree: true,
                });

            });
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(!debug){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = translateKey(key);
                    elem.removeAttribute('data-translate');
                })
            }else{
                console.log("translation works!")
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

    function request (link) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json());
    }


    function renderTabs (container){
        container.innerHTML = ""


        let defaultTab = false

        for (let i = 0; i < weekDates.length; i++){

            const tab = document.createElement("div");
            tab.classList.add("results__tabs-item")
            tab.textContent = `${weekDates[i].period}`

            if(i === weekNums - 1){
                defaultTab = true
                tab.classList.add("_active")
                weekAmount.textContent = `${weekDates[i].prizeFund} ₴`
            }

            tab.setAttribute("data-week", i + 1)
            container.appendChild(tab)
        }

        const tabs = document.querySelectorAll('.results__tabs-item')



        console.log(defaultTab)
        if(!defaultTab){
            tabs[0].classList.add("_active")
            weekAmount.textContent = `${weekDates[0].prizeFund} ₴`
        }

    }

    function init() {
        InitPage();
        if (window.store) {
            const state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
        } else {
            const c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (window.g_user_id) {
                        userId = window.g_user_id;
                        checkUserAuth();
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }
        for (const joinBtn of participateBtns) {
            joinBtn.addEventListener('click', function() {
                participate()
            });
        }
        checkUserAuth();
    }

    document.addEventListener('click', (e) => {
        const tab = e.target.closest('.results__tabs-item');
        if (!tab) return;
        const allTabs = document.querySelectorAll('.results__tabs-item');
        allTabs.forEach(item => {
            item.classList.remove('_active');
        });
        tab.classList.add('_active');
        const tabWeek = tab.getAttribute('data-week')

        weekAmount.textContent = `${weekDates[tabWeek - 1].prizeFund} ₴`



        console.log(tabWeek)
    });

    loadTranslations()
        .then(init);

    const welcomeLogo = document.querySelector(".welcome__logo"),
          welcomeText = document.querySelector(".welcome__text"),
          welcomePrize = document.querySelector(".welcome__prize");

    setTimeout(() =>{
        welcomeLogo.classList.remove("topAnimHide")
        welcomeLogo.classList.add("topAnimShow")
    }, 250)
    setTimeout(() =>{
        welcomeText.classList.remove("topAnimHide")
        welcomeText.classList.add("topAnimShow")
    }, 500)
    setTimeout(() =>{
        welcomePrize.classList.remove("topAnimHide")
        welcomePrize.classList.add("topAnimShow")
    }, 750)


    //test

    if(!userId){
        document.querySelector("#results-table-other").classList.add("hide")
    }

    document.querySelector(".auth-btn").addEventListener("click", () => {
        userId = Number(sessionStorage.getItem("userId")) || 0;

        if (userId === 100300268) {
            userId = 321123321;
        } else if (userId === 321123321) {
            userId = 0;
        } else {
            userId = 100300268;
        }

        sessionStorage.setItem("userId", userId);
        window.location.reload();
    });
    document.querySelector(".dark-btn").addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })

    document.querySelector(".lng-btn").addEventListener("click", () => {
        locale = locale === 'uk' ? 'en' : 'uk';
        sessionStorage.setItem("locale", locale);
        window.location.reload()
    });

}())