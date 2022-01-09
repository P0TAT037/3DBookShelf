const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
var divs = new Array();
divs[0] = "errName";
divs[1] = "errEmail";
divs[2] = "errPassword";
function validate1()
{
    var inputs = new Array();
    inputs[0] = document.getElementById('name').value;
    inputs[1] = document.getElementById('email1').value;
    inputs[2] = document.getElementById('password1').value;
    var errors = new Array();
    errors[0] = "<span style='color:red'>Please enter your name!</span>";
    errors[1] = "<span style='color:red'>Please enter your email!</span>";
    errors[2] = "<span style='color:red'>Please enter your password!</span>";
    for (i in inputs)
    {
    	var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
        else if (i==1)
        {
          var atpos=inputs[i].indexOf("@");
          var dotpos=inputs[i].lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length){
        	document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
		  }
          else{
        	document.getElementById(div).innerHTML = "OK!";
        	}
		}
        else{
        	document.getElementById(div).innerHTML = "OK!";
        }
    }
}
function validate()
	{
      var inputs = new Array();
      inputs[0] = document.getElementById('email').value;
      inputs[1] = document.getElementById('password').value;
      var errors = new Array();
      errors[0] = "<span style='color:red'>Please enter your email!</span>";
      errors[1] = "<span style='color:red'>Please enter your password!</span>";
      for (i in inputs)
      {
        var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
        else if (i==0)
        {
          var atpos=inputs[i].indexOf("@");
          var dotpos=inputs[i].lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
        	document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
          else
        	document.getElementById(div).innerHTML = "OK!";
        }
        else
        	document.getElementById(div).innerHTML = "OK!";
       }
     }
        