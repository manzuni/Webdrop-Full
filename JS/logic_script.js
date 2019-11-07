//Written by me - DO NOT delete
var clientFrameWindow = document.getElementById('clientframe').contentWindow.document;
//var placeholders = clientFrameWindow.getElementsByClassName('__placeholder');
var droppables = document.getElementById("sidebar_menu");
var diviframe = document.getElementById('iframe_live_wh');




function toggle_iframe_wh() {
  var diviframe = document.getElementById('iframe_live_wh');
  //Document's width and height
  var wd = document.getElementById('clientframe').clientWidth; //the entire iFrame on CodePen
  var wh = document.getElementById('clientframe').clientHeight;

  // put the result into a h1 tag
  diviframe.innerHTML = wd + " x " + wh;
  diviframe.classList.toggle('displayNoneSuper');
}



//Toggles Preview On/Of via ` 
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 192) { //192 is `

    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');


    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');
    clientFrameWindow.body.classList.toggle('preview_class101');
    document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
    document.getElementById('resize_bar2').classList.toggle("displayNoneSuper");
    frame.classList.remove('s320', "s480", "s768", "s1366", "s1920");

    //Toggling from Preview to Edit with no visual bugs, yay!
    col2.classList.toggle("unshrinkCol2");
    `
    `

    toggle_iframe_wh();


  }
});

clientFrameWindow.addEventListener("keydown", function (event) {
  if (event.keyCode == 192) {
    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');

    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');
    clientFrameWindow.body.classList.toggle('preview_class101');
    document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
    document.getElementById('resize_bar2').classList.toggle("displayNoneSuper");
    frame.classList.remove('s320', "s480", "s768", "s1366", "s1920");

    col2.classList.toggle("unshrinkCol2");

    toggle_iframe_wh();
  }
});


//Every Checkbox toggle on/off on click
// get DOM elements


//If not doing on iFrame load, the addEventListeners will crash sometimes - Multiple AddEventListeners
function onLoadiframe() {

  //Listeners

  //clientFrameWindow.body.addEventListener('mouseover', mouseEnter);

  clientFrameWindow.body.addEventListener('mouseout', mouseLeave, false);
  clientFrameWindow.body.addEventListener('dragover', dragOver, false);
  clientFrameWindow.body.addEventListener('dragleave', dragLeave, false);
  clientFrameWindow.body.addEventListener('drop', onDrop, false);
  droppables.addEventListener("dragstart", onDragStart, false);

  /*Image Upload ( only changes src for now)*/

  //For "img src change on double click on newly dropped elements in iFrame" we need :
  //1. dblclick event listener on the whole iFrame(or if you want, on a specific part/div)
  //2. the function which checks whether the double clicked element has the id given to img elements

  //Dblclick on img tag to change image
  clientFrameWindow.body.addEventListener('dblclick', dblClick, false);
  function dblClick() {
    // (event.srcElement.id == '__upload') for specific ID
    if (event.srcElement.nodeName == 'IMG') {
      //Change src event.srcElement is the same with event.target
      event.srcElement.src = "https://picsum.photos/200/300";
      //console.log(event.srcElement);

      //Remove placeholder of img
      event.srcElement.classList.remove("__placeholder");

      //need to remvoe placeholder of topmost parent ( topmost div container __placeholder)
      event.srcElement.parentNode.parentNode.parentNode.classList.remove("__placeholder");

      //Removes class="" if empty, so on code download you don't have it :)
      if (event.srcElement.className == "")
        event.srcElement.removeAttribute('class');
    };
  }


  // Outline on click + show nodeName badge
  clientFrameWindow.addEventListener("click", oneClickForAll, false);
  function oneClickForAll(event) {
    
    let list = clientFrameWindow.querySelectorAll('*'); // Grab all the li elements

    for (let i = 0; i < list.length; i++) {
      if (event.target === list[i]) { // if my click target is the same as list item it goes through


        document.getElementById('target_el').innerHTML = (event.target.nodeName);
        document.getElementById('target_id').innerHTML = (event.target.id);


        
        //Only show these divs if the classes exist!
        if(event.target.classList[0]){
          document.getElementById('target_cls0').innerHTML =  event.target.classList[0] ;
        } else {
          document.getElementById('target_cls0').innerHTML = "";
        }

        if(event.target.classList[1]){
          document.getElementById('target_cls1').innerHTML = (event.target.classList[1]);
        } else {
          document.getElementById('target_cls1').innerHTML = "";
        }

        if(event.target.classList[2]){
          document.getElementById('target_cls2').innerHTML = (event.target.classList[2]);
        } else {
          document.getElementById('target_cls2').innerHTML = "";
        }

        //Remove or add back the classes for target.el

        var classNames = event.target.classList;
        var clonedClassNames = [...classNames]; //It`s a must to copy the array

        //Scrie in document > coloana 3
        var y = document.getElementById('saved-value')
        y.innerHTML = " Selected ."+ clonedClassNames[0]; // aici imi scrie in HTML prima clasa prezenta

        //deci ar trebui sa verific in iframe.styleSheet[0] dupa clasa asta si sa-i updatez width, weight etc 

        //console.log("Cloned all classes: " + clonedClassNames);
        //console.log("1st: " + clonedClassNames[0]);


        
        //There is a problem with badge it doesn't pick the clicked active__u - we need to remove it from classList


        //Click on to toggle FIRST present class, without defining it ;)

          //Toata smecheria era ca sa fie salvat totul inainte de a da click pe buton ca sa nu se updateze
          //Plus am invatat si cum copiezi un array - Inainte sa dau click pe buton, am dat click pe element,
          //si copiaza prima variabila; Cand dau click si pe buton, deja stie care e si ii face toggle


          //Dau click pe prima clasa, face urmatoarea
        document.getElementById('target_cls0').onclick = function (e) {
         
          
          //Toggle apply class on the element
          event.target.classList.toggle(clonedClassNames[0]);

          /*Log all classes from client.css
        Array.prototype.forEach.call(clientFrameWindow.styleSheets[0].cssRules,
          function(a){
            var x = a.selectorText;
            console.log(x);

          }); */


          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute('class');

          //Prevent default
          e.preventDefault();
        };

        document.getElementById('target_cls1').onclick = function (e) {
         

          event.target.classList.toggle(clonedClassNames[1]);
          
          document.getElementById('tgl-class-1').toggleAttribute("checked");


          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute('class');

          //Prevent default
          e.preventDefault();
        };

        document.getElementById('target_cls2').onclick = function (e) {
         
         

          event.target.classList.toggle(clonedClassNames[2]);
          
          document.getElementById('tgl-class-2').toggleAttribute("checked");


          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute('class');

          //Prevent default
          e.preventDefault();
        };
        

        //********* Change width on clicked element via inputs *************

         var input1 = document.getElementById("__width1"); 
         input1.value = event.target.clientWidth; //valoarea initiala afisata pe ecran

          input1.addEventListener("keyup", updateElemWidth, false);
          
          // WORKS !  #CURRENTLY-WORKING-ON : Functia care va face posibila editarea stylesheet[0] si a claselor/ id selectat, direct din input 
          function updateElemWidth(){

           // Array.prototype.forEach.call(clientFrameWindow.styleSheets[0].cssRules,function(a){
           //  console.log(a.selectorText)
          // });

            console.log('#'+ event.target.id)
            
            var ssObj;
            

            if (clientFrameWindow.styleSheets[0].cssRules) {
              ssObj = clientFrameWindow.styleSheets[0].cssRules;
            }
            if (clientFrameWindow.styleSheets[0].rules) {
              ssObj = clientFrameWindow.styleSheets[0].rules;
            }

            //Here i need a selecotr- If i choose on screen to edit css for id, run through ID below. Else run through CSS  ( IF they exist)
            // I am going only through ID here
            for (var i = 0; i < ssObj.length; i++) {
              
              //daca Id selectat contine proprietatea width, modifica, daca nu, creaza. 

              if (ssObj[i].selectorText === '#'+ event.target.id) { // daca cautand prin toate stilurile gasesti prima clasa [id sau class], atunci umbla la width!
                if(ssObj[i].getAttribute("style")){ //if the style attribute exists, modify it, else create it 
                ssObj[i].style.setProperty('width', input1.value , null);
                } else {
                ssObj[i].style.createAttribute('width', input1.value , null);
                // i need to fix here ! 11/6/2019
              }}
            }

         



            //var y = event.target;

            //y.style.setProperty('width', input1.value);
          
          }

        // ******* End of it ************



        // Get width and height of clicked element

        var badge = clientFrameWindow.getElementById('tar_nodeName');
        var w = event.target.clientWidth;
        var h = event.target.clientHeight;
        var w$h = "&nbsp; &nbsp;" + event.target.clientWidth + "x" + event.target.clientHeight;

        //Resize window live update width + height of clicked element
        window.addEventListener("resize", getSize, false);

        function getSize() {
          //On resize run again and update
          var w = event.target.clientWidth;
          var h = event.target.clientHeight;
          var w$h = "&nbsp; &nbsp;" + event.target.clientWidth + "x" + event.target.clientHeight;

          if (event.target.id != "" && event.target.classList != "") {
            badge.innerHTML = (event.target.nodeName + "#" + event.target.id + "." + event.target.classList + w$h); // + var ce tine rezultatul //writes tarNodename into my div 
          } else if (event.target.id != "" && event.target.classList == "") {
            badge.innerHTML = (event.target.nodeName + "#" + event.target.id + w$h);
          } else if (event.target.id == "" && event.target.classList != "") {
            badge.innerHTML = (event.target.nodeName + "." + event.target.classList + w$h);
          } else {
            badge.innerHTML = (event.target.nodeName + clickedElement_wh.innerHTML + w$h);
          }

          //On resize update Column3
          document.getElementById('renderedWidth').innerHTML = w + "px"; //writes width
          document.getElementById('renderedHeight').innerHTML = h + "px"; //writes width

        }
        //End of resize live update clicked element


         // Shows the badge
        //Need to write some checks here, if it has id, if it has classes - DISPLAY BADGE ON CLICK 
        if (event.target.id != "" && event.target.classList != "") {
          badge.innerHTML = (event.target.nodeName + "#" + event.target.id + "." + event.target.classList + w$h); // + var ce tine rezultatul //writes tarNodename into my div 
        } else if (event.target.id != "" && event.target.classList == "") {
          badge.innerHTML = (event.target.nodeName + "#" + event.target.id + w$h);
        } else if (event.target.id == "" && event.target.classList != "") {
          badge.innerHTML = (event.target.nodeName + "." + event.target.classList + w$h);
        } else {
          badge.innerHTML = (event.target.nodeName + w$h);
        }

        // DISPLAY W & H  COLUMN3 ON CLICK
        document.getElementById('renderedWidth').innerHTML = w + "px"; //writes width
        document.getElementById('renderedHeight').innerHTML = h + "px"; //writes width

        //Adds it as first child
        event.target.parentNode.insertBefore(badge, event.target);

        // before clicked element
        //event.target.parentNode.insertBefore(badge, event.target.nextSibling) // after clicked element

        /*Move it to cursor
          var x = event.clientX;
          var y = event.clientY;
          badge.style.left = `${x}px`;
          badge.style.top = `${y}px`; */

        if (event.target.classList !== 'active__u') { //if target doesn't have active on it
          event.target.classList.add('active__u'); //add it
          badge.classList.add("show");
        } else {
          //event.target.classList.remove("active"); //to be able to remove it on a second click
          event.target.className != 'active__u'; //to not be able to
          //Also if target doesn't have active__u the badge should be hidden ( not woking yet)
          
        }
      } else {
        list[i].classList.remove("active__u");
        
      }
    }
  };

  //
  window.addEventListener("resize", getSize, false);
  function getSize() {
    //Document's width and height
    var wd = document.getElementById('clientframe').clientWidth; //the entire iFrame on CodePen
    var wh = document.getElementById('clientframe').clientHeight;

    // put the result into a h1 tag
    document.getElementById('iframe_live_wh').innerHTML = wd + " x " + wh;


  }







  /*Change client.css upon loading iFrame - not what i want yet
   var style = clientFrameWindow.getElementById('stylesheet1') //+= adds new rule, nice
   style.innerHTML += ` 
   #target {
   color: blueviolet;
   }
   `;*/


  //document.head.appendChild(style);

  /*WORKS
    clientFrameWindow.body.addEventListener('click', classToggle, false);

    function classToggle () {
      event.srcElement.classList.toggle("__selector1");

      if (event.srcElement.className == "")
      event.srcElement.removeAttribute('class');
    }

  */

  /*
    //Working with StyleSheets
    var s = clientFrameWindow.styleSheets[1];

    function changeStylesheetRule(stylesheet, selector, property, value) {
      selector = selector.toLowerCase();
      property = property.toLowerCase();
      value = value.toLowerCase();

      for (var i = 0; i < s.cssRules.length; i++) {
        var rule = s.cssRules[i];
        if (rule.selectorText === selector) {
          rule.style[property] = value;
          return;
        }
      }

      stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
    }

    //changeStylesheetRule(s, "body", "color", "green");
    changeStylesheetRule(s, "p", "border", "1px solid green");
  */

  /* TEMPORARY SHUT DOWN
  function mouseEnter(e) {
    
    //Add outline on hover
    e.target.classList.add('outline');

    //Tooltip show (redo)
    if (e.target.classList.item(0) == 'outline') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    } else if (e.target.classList.item(1) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + '">';
    } else if (e.target.classList.item(2) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + +e.target.classList.item(1) + '">';
    } else if (e.target.classList.item(3) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + e.target.classList.item(1) + e.target.classList.item(2)
      '">';
    } else {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    }

    document.getElementById('tooltip1').style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
    
  }*/

  /*New Adittion - NOT WORKING
    
      var myPlaceholder = function() {
        var attribute = this.getAttribute("data-myattribute");
        alert(attribute);
    };

    for (var i = 0; i < placeholders.length; i++) {
      placeholders[i].addEventListener('click', myPlaceholder, false);
    }
  */

  function mouseLeave(e) {
    //Remove outline on hover
    e.target.classList.remove('outline');
    //Tooltip hide
    document.getElementById('tooltip1').style.display = "";
    //console.clear();
  }

  function dragOver(e) {
    //These two are really needed to remove the cut circle on iframe :)
    event.preventDefault();
    event.stopPropagation();

    //Add outline on hover
    e.target.classList.add('outline');

    //Tooltip show
    if (e.target.classList.item(0) == 'outline') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    } else if (e.target.classList.item(1) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + '">';
    } else if (e.target.classList.item(2) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + +e.target.classList.item(1) + '">';
    } else if (e.target.classList.item(3) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + e.target.classList.item(1) + e.target.classList.item(2)
      '">';
    } else {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    }

    document.getElementById('tooltip1').style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function dragLeave(e) {
    //Much needed on hover before drop to remove all those lines
    e.target.classList.remove('outline');

    document.getElementById('tooltip1').style.display = "none";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function onDragStart(e) {

    console.log("Drag Started!");
    e.dataTransfer.setData("text/html", e.target.getAttribute('data-insert-html'));


    /*Remove menu on dragStart - doesn't work yet
    var menu = document.getElementById('dd-menu');
    menu.classList.add('displayNoneSuper');
    */


    /*Drag image
    var img = new Image(); 
    img.src = './img/alerts.jpg'
      */
    //get data attribute on click :)
    //console.log(e.target.getAttribute('data-insert-html'));

  }

  function onDrop(e) {
    e.preventDefault();

    console.log('Drop event');

    // Remove placeholder

    var x = e.dataTransfer.getData("text/html", e.target.getAttribute('data-insert-html'));
    var frag = document.createRange().createContextualFragment(x);

    //Here before appending, need to calculate if mouseover is closer to top or bottom, so it prepend( put before) or after,
    //Now it only puts it after :)
    e.target.appendChild(frag);

    //Much needed to remove the outline on drop finished <3
    e.target.classList.remove('outline');
    e.target.parentNode.parentNode.classList.remove('__placeholder'); //Works for now if only 2 parents (not ideal)

    //Much needed- Removes the div with ID <fr-cell> and all of it`s sub-content from the ELEMENT i click on only :)
    var item = clientFrameWindow.getElementById('fr-cell'); //Gets only the topmost fr-cell ID, in order of DOM (not ideal)
    e.target.removeChild(item);





    //console.log( x  + 'The data carried over'); console.log(frag);


    //var placeholder = clientFrameWindow.getElementById('fr-cell');
    //placeholder.remove();
    //if (tgt.classList.contains ) {


    //if (e.target.parentNode.classList.contains('__placeholder')){
    // e.target.parentNode.classList.remove('__placeholder') }


    //tgt.parentNode.removeChild(tgt);
    // or tgt.remove();
  }



  //carets stuff - Dropdown
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("activel");
      this.classList.toggle("caret-down");
    });
  }
  //end of 

  //document.getElementById("muestra_abol").addEventListener("click", function() {  //Add the innerHTML in here, you can make it happen on button click });

  // end of it 




};

/*  Add a new CSS Stylesheets
function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

addCss('{my-url}');

*/



// Component Search - W3School Adapted https://www.w3schools.com/howto/howto_js_filter_lists.asp
function instantSearch() {
  //Passed
  var input, filter, ul, span, p, i, txtValue;

  //Passed
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  span = ul.getElementsByTagName("span");


  //Passed
  for (i = 0; i < span.length; i++) {
    p = span[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //span[i].style.display = "";
      span[i].parentNode.style.display = "";
      span[i].parentNode.parentNode.firstElementChild.style.display = "";
      span[i].parentNode.parentNode.style.display = "";


    } else {
      //span[i].style.display = "none";
      span[i].parentNode.style.display = "none";
      span[i].parentNode.parentNode.firstElementChild.style.display = "none";
      span[i].parentNode.parentNode.style.display = "none";
    }
  }
};

//Control Panel
function toggleEditIframe() {

  if (document.getElementById('clientframe').contentWindow.document.body.contentEditable == "true") {

    document.getElementById('clientframe').contentWindow.document.body.contentEditable = false;

    //Snackbar notification
    document.getElementById("snackbar").innerHTML = "IFrame Edit : OFF";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);

  } else {
    document.getElementById('clientframe').contentWindow.document.body.contentEditable = true;

    //Snackbar notification
    document.getElementById("snackbar").innerHTML = "IFrame Edit : ON";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);

  }

}

function toggleOutlineAll() {
  //Toggle iFrame outline dashed elements
  var x = clientFrameWindow.body.querySelectorAll('*');
  var i;

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("outline-dashed");
  }

  //Known bug _ adding new elements with outline on will not remove it when turning off.

  //Snackbar notifications toggle
  if (clientFrameWindow.body.classList.contains("outline-dashed")) {
    //Snackbar notification ON
    document.getElementById("snackbar").innerHTML = "Outline: ON";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  } else {
    //Snackbar notification OFF
    document.getElementById("snackbar").innerHTML = "Outline: OFF";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  }

}

function showClickedElIdClass(e) {
  // If click target's id is not empty 
  if (e.target.id != "") {
    //alert('<' + e.target.tagName.toLowerCase() + ' id="' + e.target.id + '">');
    e.target.style.outline = "2px dashed red";
  } else {
    //alert('<' + e.target.tagName.toLowerCase() + '>');
    //e.target.style.outline = "none";
  }
}


//Create download file with iFrame HTML Code (gibMiData())
var storyPath = window.location.href;
console.API; // Clear console before logging new data
if (typeof console._commandLineAPI !== 'undefined') {
  console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
  console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== 'undefined') {
  console.API = console;
}

// Extracts high level details of current story
function gibMiData() {

  console.API.clear();
  storyObj = {};
  storyObj = document.getElementById("clientframe").contentWindow.document.documentElement.outerHTML;
  console.save(storyObj);

}
console.save = function (data, filename) {
  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  if (!filename) filename = 'index.html'

  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4)
  }

  var blob = new Blob([data], {
      type: 'text/json'
    }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')

  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
}

/*Full iFrame code to console- works

  function copyHtml() {
    var myHTML = document.getElementById("clientframe").contentWindow.document.documentElement.outerHTML;
    console.log(myHTML);
  }
*/


/* MY SAVING BOAT */

/*Change client.css upon loading iFrame - not what i want yet
var s = clientFrameWindow.styleSheets[1];

function changeStylesheetRule(stylesheet, selector, property, value) {
  selector = selector.toLowerCase();
  property = property.toLowerCase();
  value = value.toLowerCase();

  for (var i = 0; i < s.cssRules.length; i++) {
    var rule = s.cssRules[i];
    if (rule.selectorText === selector) {
      rule.style[property] = value;
      return;
    }
  }

  stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}

//changeStylesheetRule(s, "body", "color", "green");
changeStylesheetRule(s, "p", "border", "1px solid green");
*/



/* Good thing to obtain all css applied to an element
function css(a) {
  var sheets = document.styleSheets,
    o = [];
  a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
  for (var i in sheets) {
    var rules = sheets[i].rules || sheets[i].cssRules;
    for (var r in rules) {
      if (a.matches(rules[r].selectorText)) {
        o.push(rules[r].cssText);
      }
    }
  }
  return o;
}

function myFunc(variable) {
  var s = document.getElementById(variable);
  s.value = "new value";
}
myFunc("id1");

//var x = " ' " + input + "'"
console.log(css(document.getElementById(event.target.id)));
*/






            /*
            This code checks the style sheet rules and if it finds white then sets it to red.

            var ssObj;
            if (document.styleSheets[0].cssRules) {
              ssObj = document.styleSheets[0].cssRules;
            }
            if (document.styleSheets[0].rules) {
              ssObj = document.styleSheets[0].rules;
            }

            for (var i = 0; i < ssObj.length; i++) {
              if (ssObj[i].style.color == 'white') { // ce am eu nevoie ssObj[i].name == event.target.className[0] atunci modifico
                ssObj[i].style.setProperty('color', 'red', null);
              }
            }


            */