

const keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 113, 119, 
                  101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13, 97, 115, 100, 
                  102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 
                  109, 44, 46, 47];
function showWrapper() {

    let div = document.createElement('div');
    div.className = "wrapper";
    div.innerHTML = `<p class="title">RSS Виртуальная клавиатура</p>
    <textarea class="textarea"></textarea>
    <div class="body-keyboard keyboard" id="keyboard"></div>
    <p class="description">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>`;
    document.body.append(div);
  }
  showWrapper();

  

  function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 13 || i == 26 || i == 38) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="key" data ="'+keyboard[i] + '">'+String.fromCharCode(keyboard[i])+'</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
  }
  init();


  document.onkeypress = function(event) {
   console.log (event.code);
   console.log (event.keyCode);
   document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.classList.remove('active')
   });
   document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active');
  }


  document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.onclick = function(event) {
        document.querySelectorAll('#keyboard .key').forEach(function (element) {
            element.classList.remove('active')
           });
           let code = this.getAttribute('data');
           this.classList.add('active');
           console.log(code);
    }
});

const b = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h",
"j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ".", ","];

const b_shift = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H",
"J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", ".", ","];

const b_ru = [];

const b_shift_ru = [];


let text = document.querySelector(".textarea");

const func = (param, func, k) => {
	if(k == null) {
		document.querySelector(param).onclick = func;
	}
	else if(k == "all") {
		document.querySelectorAll(param).forEach(func);
	}
}

func(".key", (element) => {
	element.onclick = () => {
		text.value += element.textContent;	
	}
}, "all");
