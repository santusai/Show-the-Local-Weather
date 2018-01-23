$(document).ready(function(){
  var log;
  var lat;
 
 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
  log=position.coords.longitude;
  lat= position.coords.latitude;       

var api='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+log+'&appid=c5dc5fa087bac99d63a57dc1222a82bd';

$.getJSON(api,function(tempreport){
  var kelTemp;
  var fahrTemp;
  var celTemp;
  var temptoggle=true;
 var weatherdisplay =    tempreport.weather[0].description;
  var num =tempreport.weather[0].id;
  kelTemp= tempreport.main.temp;
  var windspeed= tempreport.wind.speed;
  var city = tempreport.name;
  fahrTemp = (((kelTemp-273)*9/5)+32).toFixed(1);
  celTemp = (kelTemp-273).toFixed(1);
  console.log(city);
  $("#city").html(city);
//  $("#cityid").html(num);
  $("#weatherdisplay").html(weatherdisplay);
  $("#fahrTemp").html(fahrTemp+" &#8457");
  $("#fahrTemp").click(function(){
  if(temptoggle===false){
     $("#fahrTemp").html(fahrTemp+" &#8457");
       temptoggle=true;
       }
  else{
     $("#fahrTemp").html(celTemp +" &#8451");
       temptoggle=false;
    }
  }); 
  windspeed=(2.237*(windspeed)).toFixed(1);
  $("#windspeed").html(windspeed+" mph");
  if(num>=200 & num<300){
    $('#wimage').html('<img src="http://openweathermap.org/img/w/11d.png">');
  }
   else if((num>300&num<500) ||(num>520&num<532)){
     $('#wimage').html('<img src="http://openweathermap.org/img/w/9d.png">');
   }
  else if(num>500&num<510){
     $('#wimage').html('<img src="http://openweathermap.org/img/w/10d.png">');
   }
  else if((num>=600&num<623)|| num==511){
     $('#wimage').html('<img src="http://openweathermap.org/img/w/13d.png">');
   }
   else if(num==800){
     $('#wimage').html('<img src="http://openweathermap.org/img/w/01d.png">');
   }
   else if(num>=800&num<804){
     $('#wimage').html('<img src="http://openweathermap.org/img/w/02d.png">');
   }
   else{
     $('#wimage').html('<img src="http://openweathermap.org/img/w/50d.png">');
   }
  
  
});
        
});
 }       
});
 
