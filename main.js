var accordionHeaders = document.querySelectorAll('#accordion .accordion-header');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

function expandAccordionDescription() {


  // I commented this out so I could each panel could open and close individually

  /*
  for (var i = 0, len = accordionHeaders.length; i < len; ++i) {
    // close any open panels
    accordionHeaders[i].childNodes[3].innerHTML = '+';
    accordionDescriptions[i].classList.remove('accordion-open');
  }
  */


  // if the current panel was open, and was clicked again, just let it close without opening anything else
  if (!this.nextElementSibling.classList.contains('accordion-open')) {

  // if the current panel is closed, open it and set a '-'
  this.nextElementSibling.classList.add('accordion-open');
  this.childNodes[3].innerHTML = '-';
  } else {
  this.nextElementSibling.classList.remove('accordion-open');
  this.childNodes[3].innerHTML = '+';
  }
}

// apply the event listener to all of the headers
for (var i = 0, len = accordionHeaders.length; i < len; ++i) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}


