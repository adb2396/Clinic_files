function contact_num_valid(evt) {
  var theEvent = evt || window.event;
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9+()]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
$("#Contact_Us").submit(function(e) {
$(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function(){$(this).val($.trim($(this).val()));})
function valid_contact()
{	
	var name=document.querySelector('#Contact_Us #name');
	var email=document.querySelector('#Contact_Us #email');
	var contact_no=document.querySelector('#Contact_Us #contact_no');
	if(name.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Name.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	if(email.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter Email ID.';
		email.style.borderColor="red";
		email.focus();
		return false;
	}else{email.style.borderColor=""}
	var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var c_address = email.value;
	if(c_reg.test(c_address) == false) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
		email.style.borderColor="red";
		email.value = '';
		email.focus();
		return false;
	}
	else{email.style.borderColor=""}
	if(contact_no.value=='')
	{
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Please Enter valid Contact No.';
		contact_no.style.borderColor="red";
		contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	var c_mobile = contact_no.value;
	var c_pattern = /^\d{10}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Mobile No.: ' + contact_no.value;
		contact_no.style.borderColor="red";
		contact_no.value = '';
        contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	document.querySelector('#Contact_Us #error_data').innerHTML = '';
	return true;
}
	if(valid_contact()==true){document.querySelector('#Contact_Us #form_process').style.visibility="visible";$(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = $("#Contact_Us").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   data: $("#Contact_Us").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				   $("#Contact_Us").empty();
				   $("#Contact_Us").html(data); // show response from the php script.
			   },
			   error: function(data)
			   {
				   $("#Contact_Us").empty();
				   $("#Contact_Us").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});