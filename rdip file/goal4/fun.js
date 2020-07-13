var eng = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

var hin = [["??? ?? ????? ????? ????","??? ?? ????? ???? ?????","????? ???? ??? ?? ?????","???? ????? ??? ?? ?????"],
["??? ???? ?? ????? ??","????? ???? ?? ??? ??","???? ????? ?? ??? ??","???? ??? ?? ????? ??"],
["????? ??? ????? ?? ??? ?? ??? ??","????? ??? ????? ?? ?? ??? ?? ???","??? ????? ????? ?? ??? ?? ??? ??","??? ????? ????? ?? ?? ??? ?? ???","????? ????? ??? ?? ??? ?? ??? ??","????? ????? ??? ?? ?? ??? ?? ???","??? ????? ????? ?? ??? ?? ??? ??","??? ????? ????? ?? ?? ??? ?? ???","????? ????? ??? ?? ??? ?? ??? ??","????? ????? ??? ?? ?? ??? ?? ???","????? ??? ????? ?? ??? ?? ??? ??","????? ??? ????? ?? ?? ??? ?? ???"],
["??? ???? ????","???? ??? ????","??? ???? ????","???? ???? ???","???? ??? ????","???? ???? ???"],
["????????? ?? ????? ?????? ?? ???","????? ????????? ?? ?????? ?? ???","????????? ?? ????? ?? ??? ??????","????? ????????? ?? ?? ??? ??????","?????? ?? ??? ????????? ?? ?????","?????? ?? ??? ????? ????????? ??","?? ??? ?????? ????????? ?? ?????","?? ??? ?????? ????? ????????? ??"],
["?? ??? ????? ???? ??","?? ??? ????? ?? ????","???? ?? ?? ??? ?????","?? ???? ?? ??? ?????"],
["?? ??? ?? ????? ???? ??","?? ??? ?? ????? ?? ????","??? ?? ?? ????? ???? ??","??? ?? ?? ????? ?? ????","???? ?? ?? ??? ?? ?????","???? ?? ??? ?? ?? ?????","?? ???? ?? ??? ?? ?????","?? ???? ??? ?? ?? ?????"]];



function shuffle(jumbled){
	var jumble = jumbled.split(" ");
	var i = jumble.length, temp, randomi;
	while(0!==i){
		randomi = Math.floor(Math.random()*i);
		i -= 1;
		temp = jumble[i];
		jumble[i] = jumble[randomi];
		jumble[randomi] = temp;
	}
	return jumble;
}




let selection = document.getElementById("choose");
function run(){
if (selection.value === "english"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
            
var r = Math.floor(Math.random()* eng.length);
		var jumbled = eng[r][0];
		var j = shuffle(jumbled);
		
		var b ="";
		var bs = "";
		for(i=0;i<=j.length-1;i++){
			val = j[i];
			b = "<button id='btn"+i+"' value='"+val+" onclick='myFunction("+i+")'>"+val+"  </button> ";
			bs +=b;
           
		}
		s3.innerHTML = bs;
    
                
}
else if (selection.value === "hindi"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
              var r = Math.floor(Math.random()* hin.length);
		var jumbled = hin[r][0];
		var j = shuffle(jumbled);
		
		var b ="";
		var bs = "";
		for(i=0;i<=j.length-1;i++){
			val = j[i];
			b = "<button id='btn"+i+"' value='"+val+"'>"+val+"</button> &nbsp;&nbsp;";
			bs +=b;
		}
		s3.innerHTML = bs;
	}

else {
                document.getElementById("s2").innerHTML = ""
                document.getElementById("s1").innerHTML = ""
                
                alert("Choose any language")
            }
}