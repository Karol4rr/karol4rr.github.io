const tablicaHasel = ['haslo numer jeden', 'haslo numer dwa', 'haslo numer trzy', 'haslo numer cztery'];


var haslo = tablicaHasel[Math.floor(Math.random()*tablicaHasel.length)];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var litery ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
  if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
  document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

function start()
{
  var tresc_diva = "";

  for (i=0; i<=25; i++)
  {
    var element = "lit" + i;
    if (i%6==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+ litery.charAt(i) +'</div>';

  }

  document.getElementById("alfabet").innerHTML = tresc_diva;
  wypisz_haslo();
}


String.prototype.ustawZnak = function(miejsce, znak)
{
  if (miejsce > this.length - 1) return this.toString();
  else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
  var trafiona = false;


  for(i=0; i<dlugosc; i++)
  {
    if (haslo.charAt(i)==litery.charAt(nr))
    {
      haslo1 = haslo1.ustawZnak(i, litery.charAt(nr));
      trafiona = true;
    }
  }
  if(trafiona ==true)
  {
    yes.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00c000";
    document.getElementById(element).style.border = "3px solid #00c000";
    document.getElementById(element).style.cursor = "default";

    wypisz_haslo();
  }
  else
  {
    no.play();
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#c00000";
    document.getElementById(element).style.border = "3px solid #c00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick",";")

    ile_skuch++;
    var obraz = "img/s" + ile_skuch + ".jpg";
    document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt="" />'
  }

  if (haslo == haslo1)
  document.getElementById("alfabet").innerHTML = "You Win! You gave the correct password: " + haslo + '<br><br><span class="reset" onclick="location.reload()">Play Again</span>'

  if (ile_skuch >=9)
  document.getElementById("alfabet").innerHTML = "You Lost! The correct password: " + haslo + '<br><br><span class="reset" onclick="location.reload()">Play Again</span>'

}
