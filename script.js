function _(id) {
    return document.getElementById(id);
  }
  
  const riddles = [
    ["Who is known as 'Captain Cool,' a master of finishing matches, and the former captain of the Indian cricket team?", "MS Dhoni"],
    ["Who is often compared to Virat Kohli for his batting style, is the current captain of the Pakistan cricket team, and is known for his consistent run-scoring in all formats?", "Babar Azam"],
    ["Who is the 'Run Machine' of Indian cricket, known for his aggressive batting, and the current captain of the Indian cricket team?", "Virat Kohli"],
    ["Who is a former New Zealand captain, holds the record for the fastest Test century, and is famous for his explosive batting style?", "Brendon McCullum"],
    ["Who is known as 'Mr. 360' for his ability to play shots all around the ground, is a former South African captain, and is one of the most versatile batsmen in cricket history?", "AB de Villiers"]
  ];
  
  
  const container = document.querySelector("#container");
  let buttons;
  let closeEle = "";
  let ansOpen = 0;
  
  function addQuestions() {
    let str = "";
    riddles.forEach(function (ele, idx) {
      str += `<div class="cont" id="cont${idx}">
          <div class="question"><p class="question">${ele[0]}</p><button id="butn${idx}" class="butn fa fa-angle-down"></button></div>
          <div class="answer"><p>${ele[1]}</p></div>
      </div>`;
    });
    container.innerHTML = str;
    buttons = document.querySelectorAll(".cont");
    buttons.forEach((button) => {
      button.addEventListener("click", (ev) => {
        if (ansOpen == 0) {
          show(ev.target.closest('.cont'));
          closeEle = ev.target.closest('.cont');
          ansOpen += 1;
        } else if (ansOpen >= 1 && ev.target.closest('.cont') == closeEle) {
          close(ev.target.closest('.cont'));
          ansOpen = 0;
        } else {
          close(closeEle);
          show(ev.target.closest('.cont'));
          closeEle = ev.target.closest('.cont');
        }
      });
    });
  }
  
  addQuestions();
  
  function show(id) {
    let div = id.children[1];
    div.style.height =  `60px`;
    id.children[0].children[1].style.transform = "rotateX(180deg)";
  }
  
  function close(id) {
    id.children[1].style.height = "0";
    id.children[0].children[1].style.transform = "rotateX(0)";
  }
  