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

  const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

  function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        out += '<div class="key">'+String.fromCharCode(keyboard[i])+'</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
  }
  init();
  /*document.onkeypress = function(event) {
   // console.log (event);
   keyboard.push(event.charCode);
   console.log(keyboard);
  }*/