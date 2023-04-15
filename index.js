// animation runner 
window.onload = function() {
    let elems = document.getElementsByClassName("animation-elems");
    let position_to_animation = Math.round(window.screen.availHeight * 60 / 100);
    
    // before scrolling some elements are visiable in window screen 
    for (let i = 0; i < elems.length; i++) { 
        if (elems[i].getBoundingClientRect().top <= position_to_animation) {
            let animation_name = elems[i].getAttribute("data-animation_name");
            elems[i].classList.add(animation_name)
        }
    }
    // onscrolling window some new 
    document.body.onscroll = function() {  
        for (let i = 0; i < elems.length; i++) { 
            if (elems[i].getBoundingClientRect().top <= position_to_animation) {
                let animation_name = elems[i].getAttribute("data-animation_name");
                elems[i].classList.add(animation_name)
            }

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                let animation_name = elems[i].getAttribute("data-animation_name");
                elems[i].classList.add(animation_name)
            }

        }
        
    }
    
}


// animation class adder
function addAnimationClass(elems,animationName) {
    // it's a singe element
    if (typeof(elems.length) == "undefined") {
      elems.classList.add("animation-elems")
      elems.setAttribute("data-animation_name", animationName)
    } else {
      // it's a HTMLCollaction
      for (let i = 0; i < elems.length; i++) {
          elems[i].classList.add("animation-elems")
          elems[i].setAttribute("data-animation_name", animationName)
      }
  }
}

// text animation function
let textExpand = function(e) {
    addAnimationClass(e,"tracking-in-expand")
}
let textContract = function(e) {
    addAnimationClass(e,"tracking-in-contract")
}
let textContractBack = function(e) {
    addAnimationClass(e,"tracking-in-contract-bck-top")
}
let textFocusIn = function(e) {
    addAnimationClass(e,"text-focus-in")
}
let textFocusInExpand = function(e) {
    addAnimationClass(e,"focus-in-expand")
}
let textFocusInContract = function(e) {
    addAnimationClass(e,"focus-in-contract")
}
let textFlicker = function(e) {
    addAnimationClass(e,"text-flicker")
}

// elements animation function
let rotate = function(e) {
    addAnimationClass(e,"rotate")
}
let vibrate = function(e) {
    addAnimationClass(e,"vibrate")
}
let flicker = function(e) {
    addAnimationClass(e,"flicker")
}
let shake = function(e) {
    addAnimationClass(e,"shake")
}
let jello = function(e) {
    addAnimationClass(e,"jello")
}
let wobble = function(e) {
    addAnimationClass(e,"wobble")
}
let bounce = function(e) {
    addAnimationClass(e,"bounce")
}
let beat = function(e) {
    addAnimationClass(e,"heartbeat")
}
let blink = function(e) {
    addAnimationClass(e,"blink")
}
let slitHorizontal = function(e) {
    addAnimationClass(e,"slit-in-horizontal")
}
let slitVertical = function(e) {
    addAnimationClass(e,"slit-in-vertical")
}
let slitDiagonal = function(e) {
    addAnimationClass(e,"slit-in-diagonal")
}