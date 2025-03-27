(function(){
    const apiURL = 'https://fav-prom.com/api_formula1_25';

    const
        unauthMsgs = document.querySelectorAll('.unauth-msgs'),
        participateBtns = document.querySelectorAll('.took-part'),
        playBtns = document.querySelectorAll('.play-btn'),
        mainPage = document.querySelector(".fav-page");

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = sessionStorage.getItem("locale") ?? 'uk';
    // let locale =  'uk';

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let i18nData = {};
    let userId;
    let debug = true;

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
        translate();
    }


    function loadTranslations() {
        return fetch(`${apiURL}/new-translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                console.log(i18nData)
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
        }).then(res => res.json())
    }


    function init() {
        InitPage();
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
        } else {
            let c = 0;
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

    for(const tab of document.querySelectorAll(".results__tabs-item")){
        tab.addEventListener("click", (e) =>{
            document.querySelectorAll(".results__tabs-item").forEach((item) =>{
                item.classList.remove("_active")
                if(item === e.target.closest(".results__tabs-item")){
                    item.classList.add("_active")
                }
            } )
        })
    }

    document.querySelector(".auth-btn").addEventListener("click", () => {
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
    document.querySelector(".dark-btn").addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })

    document.querySelector(".lng-btn").addEventListener("click", () => {
        locale = locale === 'uk' ? 'en' : 'uk';
        sessionStorage.setItem("locale", locale);
        window.location.reload()
    });

}())