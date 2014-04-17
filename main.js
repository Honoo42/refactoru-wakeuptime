$(document).on('ready', function() {
  
});
// Outer Shell (dark gray)
var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>');
var leftLabels = $('<div class="left-labels"><p>AM</p> <p>Auto</p></div>');
var clockScreen =$('<div class="clock-screen"></div>');
var clockIndicator =$('<div class="clock-indicator"></div>');
var clockText = $('<div id="clock-text"></div>');
var bottomAMLabel = $('<div class="bottom-am-label"><p>AM 53 60 70 90</p></div>');
var bottomPMLabel =$('<div class="bottom-pm-label"><p>PM 88 92 96 102</p></div>');
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom PM Label & Frequencies (white)
$('.container').append(outerShell);
$(outerShell).append(innerShell);
$(innerShell).append(clockScreen);
$(clockScreen).append(leftLabels);

var clockTimer = setInterval(function() {myClock()}, 1000);
  function myClock() {
    var localTime = new Date().toLocaleTimeString();
    document.getElementById("clock-text").innerHTML=localTime;
  };
// console.log(clockTimer);
 // $(leftLabels).append(clockScreen);
 $(clockScreen).append(clockText);
 $(innerShell).append(bottomAMLabel);
 $(innerShell).append(bottomPMLabel);
