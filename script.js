function myfunction(){
    document.getElementById("secondpage").style.display="block";
    document.getElementById("hideicon").style.display="none";
}
function closepopup(){
    document.getElementById("secondpage").style.display="none";
    document.getElementById("hideicon").style.display="block";
    document.getElementById("hide").style.display="block";

    
}
function done(){
  
    document.getElementById("hide").style.display="block";
    document.getElementById("secondpage").style.display="none";
    document.getElementById("hideicon").style.display="block";

    var x = document.getElementById("name").value;
    var y = document.getElementById("time").value;
    var checkbox = document.getElementById("slidebtn");

    if (checkbox.checked==true){
      document.getElementById("h1box").innerHTML = x;
      document.getElementById("h1time").innerHTML = y;
    }
    else{
      document.getElementById("h4box").innerHTML = x;
      document.getElementById("h4time").innerHTML = y;
    }


/*
    var x = document.getElementById("name").value;
    document.getElementById("h1box").innerHTML = x;

    var y = document.getElementById("time").value;
    document.getElementById("h1time").innerHTML = y;
/*
    var x1 = document.getElementById("name").value;
    document.getElementById("h2box").innerHTML = x1;

    var y1 = document.getElementById("time").value;
    document.getElementById("h2time").innerHTML = y1;

    var x2 = document.getElementById("name").value;
    document.getElementById("h3box").innerHTML = x2;

    var y2 = document.getElementById("time").value;
    document.getElementById("h3time").innerHTML = y2;*/
}

function blurpara(){

  //  document.getElementById("lorembox1").style.opacity = "0.3";
  var checkbox = document.getElementById("checkbtn");

  var text= document.getElementById("lorembox1")
  //var heading =document.getElementById("h1box");
  if (checkbox.checked==true){
  lorembox1.style.opacity = "0.3";
 h1box.style.textDecoration= "line-through";
 h1time.style.textDecoration="line-through";

  }
  else{
    lorembox1.style.opacity = "1"; 
     h1box.style.textDecoration= "none";
     h1time.style.textDecoration="none";

  }
  
}
function blurpara1(){
  var checkbox = document.getElementById("checkbtn2");
  var text= document.getElementById("lorembox2")
  if (checkbox.checked==true){
  lorembox2.style.opacity = "0.3";
 h2box.style.textDecoration= "line-through";
 h2time.style.textDecoration="line-through";
  }
  else{
    lorembox2.style.opacity = "1"; 
     h2box.style.textDecoration= "none";
     h2time.style.textDecoration="none";
  }
}
function blurpara2(){
  var checkbox = document.getElementById("checkbtn3");
  var text= document.getElementById("lorembox3")
  if (checkbox.checked==true){
  lorembox3.style.opacity = "0.3";
 h3box.style.textDecoration= "line-through";
 h3time.style.textDecoration="line-through"
  }
  else{
    lorembox3.style.opacity = "1"; 
     h3box.style.textDecoration= "none";
     h3time.style.textDecoration="none";
  }
}

/*
 function done(){
    var x = document.getElementById("name").value;
    document.getElementById("h1box").innerHTML = x;
}*/

function hidebtn(){
    //document.getElementById("para1").style.display="none";
    var checkbox = document.getElementById("checkbtn");
    var text= document.getElementById("para1");
    if (checkbox.checked==true){
    para1.style.display="none";
    }
    else{
      para1.style.display="block";
    }
    var checkbox = document.getElementById("checkbtn2");
    var text= document.getElementById("para2");
    if (checkbox.checked==true){
    para2.style.display="none";
    }
    else{
      para2.style.display="block";
    }

    var checkbox = document.getElementById("checkbtn3");
    var text= document.getElementById("para3");
    if (checkbox.checked==true){
    para3.style.display="none";
    }
    else{
      para3.style.display="block";
    }
 
}