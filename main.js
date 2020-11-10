// JavaScript Document
const w = window.innerWidth;
const p = document.querySelector("p");

const getPercentX = x => Math.round((x / w) * 360);
const styleEl = document.documentElement.style;
const setStyle = styleEl.setProperty.bind(styleEl);

const updateGradient = percentX => {
  const gradStart = percentX;
  const gradEnd = (percentX + 120) % 360;

  setStyle("--grad-start", gradStart);
  setStyle("--grad-end", gradEnd);
};

document.addEventListener("mousemove", e => {
  updateGradient(getPercentX(e.clientX));
});

document.addEventListener("touchmove", e => {
  updateGradient(getPercentX(e.touches[0].screenX));
});

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}

//Make the DIV element draggagle:
var draggableElements = document.getElementsByClassName("ewf-images");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "")) {
        document.getElementById(elmnt.id + "").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var autoPlayVideo =
	document.getElementById(id);
		autoPlayVideo.oncanplauthrough =
function() {
			autoPlayVideo.muted = true;
			autoPlayVideo.play();
			autoPlayVideo.pause();
			autoPlayVideo.play();
		}