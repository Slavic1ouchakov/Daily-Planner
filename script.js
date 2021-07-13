//current Day Header
function currentDate() {
var cDate = new Date();
document.getElementById("currentDay").innerHTML = cDate.toString();
}

let timeNow = moment().format('dddd, MMMM Do YYYY');
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const hour1 = $('#hour1').text();
const hour2 = $('#hour2').text();
const hour3 = $('#hour3').text();
const hour4 = $('#hour4').text();
const hour5 = $('#hour5').text();
const hour6 = $('#hour6').text();
const hour7 = $('#hour7').text();
const hour8 = $('#hour8').text();
const hour9 = $('#hour9').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);

function localStorageFunction() {

// Store user input in local Storage

$('#save1').click(function() {
  if($('#agendaItem1').val()) {
    localStorage.removeItem('agendaItem1');
  }

  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#agendaItem1').val());
});

$('#save2').click(function() {
  if($('#agendaItem2').val()) {
    localStorage.removeItem('agendaItem2');
  }

  const hour2String = JSON.stringify(hour2);
  
  localStorage.setItem(hour2, $('#agendaItem2').val());
});

$('#save3').click(function() {
  if($('#agendaItem3').val()) {
    localStorage.removeItem('agendaItem3');
  }

  const hour3String = JSON.stringify(hour3);
  
  localStorage.setItem(hour3, $('#agendaItem3').val());
});

$('#save4').click(function() {
  if($('#agendaItem4').val()) {
    localStorage.removeItem('agendaItem4');
  }

  const hour4String = JSON.stringify(hour4);
  
  localStorage.setItem(hour4, $('#agendaItem4').val());
});

$('#save5').click(function() {
  if($('#agendaItem5').val()) {
    localStorage.removeItem('agendaItem5');
  }

  const hour5String = JSON.stringify(hour5);
  
  localStorage.setItem(hour5, $('#agendaItem5').val());
});

$('#save6').click(function() {
  if($('#agendaItem6').val()) {
    localStorage.removeItem('agendaItem6');
  }

  const hour6String = JSON.stringify(hour6);
  
  localStorage.setItem(hour6, $('#agendaItem6').val());
});

$('#save7').click(function() {
  if($('#agendaItem7').val()) {
    localStorage.removeItem('agendaItem7');
  }

  const hour7String = JSON.stringify(hour7);
  
  localStorage.setItem(hour7, $('#agendaItem7').val());
});

$('#save8').click(function() {
  if($('#agendaItem8').val()) {
    localStorage.removeItem('agendaItem8');
  }

  const hour8String = JSON.stringify(hour8);
  
  localStorage.setItem(hour8, $('#agendaItem8').val());
});

$('#save9').click(function() {
  if($('#agendaItem9').val()) {
    localStorage.removeItem('agendaItem9');
  }

  const hour9String = JSON.stringify(hour9);
  
  localStorage.setItem(hour9, $('#agendaItem9').val());
});
}

// Display the time using moment.js

$('#currentDay').append(timeNow);

// Color coat the time slot depending if in the past, the present or the future 

colorCoating();

function colorCoating() {

  TIMER = setInterval(colorCoating, 1000);
 
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'red');
  }
}

//get current date on page load
currentDate();
