

let flag = true
let startTimer;
let endTimer
function openLetter() {
  // clearTimeout(endTimeTimer);
  if (flag) {
    var tl = new TimelineMax({
      repeat: 0,
      delay: 0
    });
    // tl.to(".letter", 0, {transformOrigin: "50% 0%",  x: 0, y: 0, delay: 0, height: 125, scaleY: 1,ease: Circ.easeOut });


    tl.to(".topfold", 2, { transformOrigin: "50% 0%", x: 0, y: 0, fill: '#d5d3bb', scaleY: -1, delay: 0, ease: Circ.easeIn });
    // tl.to(".topfold", 2, { transformOrigin: "50% 0%", x: 0, y: 0, fill: '#d5d3bb', scaleY: -1, delay: 0, ease: Circ.easeIn });

    tl.to(".upper", 0, { x: 0, transformOrigin: "50% 100%", rotationX: -180, delay: 0, height: 125, ease: Circ.easeIn });


    tl.to(".letter", 3, { x: 0, y: -200, rotationX: 0, scaleY: 1, delay: 0, ease: Linear.ease });


    startTimer = $(".my-text").each(function (index) {
      var _this = this
      var sss = flag
      setTimeout(function () {
        if (sss)
          $(_this).animate({ "opacity": 1 }, 1000).siblings();
      }, 1500 * index + 6000);
    })

    flag = false;

  } else if (!flag) {
    clearTimeout(startTimer);
    var tl2 = new TimelineMax({
      repeat: 0,
      delay: 0
    });


    tl2.to(".letter", 2, { x: 0, y: 0, rotationX: 0, scaleY: 1, delay: 0, ease: Expo.easeOut });

    tl2.to(".topfold", 1.9, { transformOrigin: "50% 0%", scaleY: 0.95, delay: 0, ease: Circ.easeIn });
    tl2.to(".letter", 0, { x: 0, y: 0, rotationX: 0, scaleY: 0.5, delay: 0, ease: Expo.easeOut });
    tl2.to(".upper", 0, { x: 0, transformOrigin: "50% 100%", rotationX: 0, delay: 0, height: 125, ease: Circ.easeIn });
    tl2.to(".topfold", 0, { transformOrigin: "50% 0%", scaleY: 1, delay: 0, ease: Circ.easeIn });




    flag = true;


    endTimer = setTimeout(function () {
      $(".my-text").each(function (index) {
        var _this = this
        $(_this).animate({ "opacity": 0 }, 0).siblings();
      })
    }, 4000)

  }


}


$("#email").submit(function (event) {
  event.preventDefault();
  var tl2 = new TimelineMax({
    repeat: 0,
    delay: 0
  });

  tl2.to(".upper", 1, { x: 0, transformOrigin: "50% 100%", rotationX: 0, delay: 0, height: 125, ease: Circ.easeIn });
  tl2.to(".letter", 1, { x: 0, y: 0, rotationX: 0, scaleY: 0.5, delay: 0, ease: Expo.easeOut });
  tl2.to(".topfold", 0.6, { transformOrigin: "50% 0%", scaleY: 1, delay: 0, ease: Circ.easeIn });
  tl2.to(".wrapper", 0.7, { transformOrigin: "50% 0%", x: 5000, y: 0, delay: 0, ease: Circ.easeIn });


});