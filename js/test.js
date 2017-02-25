$(document).ready(function() {
  $(".test_content").append($("<div id = \"questblock\"></div>"));
  $("#questblock").append($("<button id=\"run\">Пройти тест</button>"));
  score = 0;
  $("#run").bind("click",begin);


  var queue = new Array ;
  var curQ = 0;
  var score = 0 ;
  var questions = [//Массив объектов содержит вопросы сколько угодно
  {//объект вопрос
      q: "Кому адресован этот панч? - Есть два типа мужика: ты и джонибой. Есть два типа мужика",//q: "Вопрос"
      a: ["Эрнесто Заткнитесь","Гнойный","Джонибой", "Гарри Топор"],//a: [1,3,"q"] // массив ответов
      trueAnswer: 0//Индекс в массиве a, правильного ответа
  }
  // {
  //     q: "Кто написал этот панч: Лицо в доме напротив в белой рамке стеклопакета, как полароид.",
  //     a: ["Ресторатор","Jubilee","Oxxxymiron", "ST"],
  //     trueAnswer: 2
  // },
  // {
  //     q: "Из какого трека этот панчлайн: Бла бла бла бла бла бла",
  //     a: ["Тентакли","Спонтанное самовозгарание","Неваляшка","Лондно против всех"],
  //     trueAnswer: 1
  // },//И так далее можно добавлять сколько угодно
  // {
  //     q: "Какой альбом вышел в 2016 году?",
  //     a: ["Горгород","Персональный компьютер","Пожарный кран","Прикуриватель карманный"],
  //     trueAnswer: 0
  // },
  // {
  //     q: "Что такое ПК?",
  //     a: ["Прибор калибровки","Персональный компьютер","Пожарный кран","Прикуриватель карманный"],
  //     trueAnswer: 1
  // }
  ];

  function begin(){
      score = 0;
      curQ = 0;
      queue = new Array;
      var tmp  = new Array;
      $(".test_text").toggleClass("disabled");
      for(var i = 0; i < questions.length;i++)
          tmp.push(i)
      while(tmp.length > 0){
          var r = randNum(0, tmp.length);
        queue.push(tmp[r]);
        tmp.splice(r,1);
      }
       showQ();
  }
  function showQ(){
      var str = "<span id=\"quest\">"+questions[queue[curQ]].q+"</span><div class = \"answers\" >";
      $(questions[queue[curQ]].a).each(function(i,e){
          str+= "<div class=\"answer\"><input name = \"ans\" "+(i==0?" ":"")+"  value = "+i+" type=\"radio\" id = \"radio_id_"+i+"\"> </input> <label for = \"radio_id_"+i+"\">"+e+"</label></div>";
      });
      str+="</div><button id=\"next\">Следующий</button>";
      $("#questblock").html("");
      $("#questblock").append($(str));
      curQ++;

      $("#next").bind("click",function(){
          if($(".answer :checked").val() == questions[queue[curQ-1]].trueAnswer)
                 score++;
          if(curQ >= questions.length){
                $("#questblock").html("");
              $("#questblock").append($("<span class=\"result\">Ваш результат</br> <span class=\"result_count\">"+score+"/"+questions.length+"</span> верных ответов</span><br> <div class=\"share\"><h3>Поделиться</h3><div class=\"social_btn\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><i class=\"fa fa-vk\" aria-hidden=\"true\"></i><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></div></div> <button id=\"run\">Пройти еще раз</button> "));
              $("#run").bind("click",begin);
          }
              else
                  showQ();
      });
  }
  function randNum(min,max){
        return parseInt(Math.random()*(max - min) + min);
  }

})
