$("button").click(function()
{
	event.preventDefault();
	if ($(this).text() == "Update") //field has been edited, change the value
	{
		$(this).text("Edit");
		var myInput = $(this).closest("div").find("input");
		var myLabel = $(this).closest("div").find("b");
		myLabel.show();
		var holdVal = myInput.val();
		myInput.replaceWith(function()
		{
			return $("<span />").text(holdVal);
		})
	}
	else //user wants to change values
	{
		$(this).text("Update");
		var mySpan = $(this).closest("div").find("span");
		var myLabel = $(this).closest("div").find("b");
		myLabel.hide();
		var holdVal = mySpan.text();
		mySpan.replaceWith(function()
		{
			return $("<input />").val(holdVal);
		})
	}
})