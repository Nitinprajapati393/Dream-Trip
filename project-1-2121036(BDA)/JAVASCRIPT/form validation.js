function form_validation()
{
	if(document.form.name.value=="")
	{
		alert("Enter Your Name");
		return false;
	}
	if(document.form.age.value=="")
	{
		alert("Enter Your Age");
		return false;
	}
	if(document.form.cnumber.value=="")
	{
		alert("Enter Your Contact Number ");
		return false;
	}
	if(document.form.email.value=="")
	{
		alert("Enter Your Email");
		return false;
	}
	if(document.form.date.value=="")
	{
		alert("Enter Date Of Registration");
		return false;
	}
	alert("Your Response Has Been Submited");
}
