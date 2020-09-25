

let flag = true
function openLetter() {
  if (flag) {
    var tl = new TimelineMax({
      repeat: 0,
      delay: 0
    });


    tl.to(".topfold", 0.5, { transformOrigin: "50% 0%", x: 0, y: 0, fill: '#d5d3bb', scaleY: -1, delay: 0, ease: Circ.easeIn });
    tl.to(".letter", 0.5, { x: 0, y: -140, delay: 0, height: 125, ease: Circ.easeOut });
    tl.to(".upper", 1.2, { x: 0, transformOrigin: "50% 100%", rotationX: -180, delay: 0.3, height: 125, ease: Circ.easeOut });
    tl.to(".letter", 0.5, { x: 0, y: -200, rotationX: 0,scaleY: 1, delay: 0, ease: Circ.easeInOut });
    flag = false;

  } else if(!flag) {
    var tl2 = new TimelineMax({
      repeat: 0,
      delay: 0
    });

    tl2.to(".upper", 1, { x: 0, transformOrigin: "50% 100%", rotationX: 0, delay: 0, height: 125, ease: Circ.easeIn });
    tl2.to(".letter", 1, { x: 0, y: 0, rotationX: 0, scaleY: 0.5, delay: 0, ease: Expo.easeOut });
    tl2.to(".topfold", 0.6, { transformOrigin: "50% 0%", scaleY: 1, delay: 0, ease: Circ.easeIn })
    flag = true;
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