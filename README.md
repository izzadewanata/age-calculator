HTML
-----------
Create div for main container, with class.
	Insert h1 for heading.
	Create another div to host the form, with class.
		insert label, with the for attribute associate with the Input's Id
		insert Input, with type:date, id and name
		insert p with id, to host the result of the age
		insert button with class, to submit the calculation

CSS
-----------
	body -> margin, padding, font-family, backg color

	main-container -> backg color, box-shadow (x,x,x,rgba), padding, max-width, margin, border-radius

	h1 -> font-size, text-align, margin top & bottom

	form container -> display:flex, each content gets new row, items in the center

	label -> font-weight, margin bottom

	input -> padding, border, border-radius, width, max-width

	.submit -> backg color, color, no border, padding, border-radius, margin top, cursor pointer

	.submit:hover -> backg color to be darker than the actual backg. Add transition in .submit: backg color for .3s ease

	#result -> margin top, font size, font weight


JavaScript
-----------
	get element: button, user's input, result.

	create event listener and insert it to the button -> "click" and the function.

	create a function to calculate the age. You can test this with console.log.
		create value to host user's input value. 
		write condition -> if user's input is empty, then display an alert. Otherwise, create a new variable and assign it a function (getAge) that takes the user's input as a parameter.

	Write a function getAge, with parameter user's input.
		write variable #1 for current date:new Date()
		write variable #2 for user's date:new Date(user's input)
		
		write variable LET, to host the age calculation -> getFullYear() of var #1 minus getFullYear() of var #2
		write variable to host the month calculation -> getMonth() of var #1 minus getMonth() of var #2

		write conditions -> if month variable less than 0 OR month variable equal to 0 AND the current date (var #1) is less than the user's date, then reduce age variable by 1.

		write a return age variable, for the current function

	Remove sentences in #result element.
	
	insert a code in the first function (calculate age) -> update the text (innerText) of the result element using backtick (``). Also include a ternary condition; if the age is more than 1, then update the "year' to "years".
		