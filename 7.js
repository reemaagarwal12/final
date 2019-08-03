<script>
     function goBack(){
    window.history.back()
  }
  var d = new Date();
document.getElementById("demo").innerHTML = d;

function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", " ");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo1").innerHTML = txt;
}

function myFunction1() {
  var x, text;
  x = document.getElementById("numb").value;
  if (isNaN(x) || x < 13 || x > 70) {
    text = "Better luck next time";
  } else {
    text = "GOOD LUCK ! ";
  }
  document.getElementById("demo2").innerHTML = text;
}
</script>