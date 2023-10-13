var fecha=new Date();
var diames=fecha.getDate();
var diasemana=fecha.getDay();
var mes=fecha.getMonth() +1 ;
var ano=fecha.getFullYear();

var textosemana = new Array (7);
textosemana[0]="Dom";
textosemana[1]="Lun";
textosemana[2]="Mar";
textosemana[3]="Mie";
textosemana[4]="Jue";
textosemana[5]="Vie";
textosemana[6]="Sab";

var textomes = new Array (12);
textomes[1]="Ene";
textomes[2]="Feb";
textomes[3]="Mar";
textomes[4]="Abr";
textomes[5]="May";
textomes[6]="Jun";
textomes[7]="Jul";
textomes[8]="Ago";
textomes[9]="Sep";
textomes[10]="Oct";
textomes[11]="Nov";
textomes[12]="Dic";

document.write("" + textosemana[diasemana] + " " + diames + " de " + textomes[mes] + " de " + ano + "<br>");