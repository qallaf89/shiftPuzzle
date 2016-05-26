function add2BackStack (operator)
{
	switch (operator)
	{
		case "shiftUp_1":
			backStack.push("shiftDown_1");
			break;
		case "shiftUp_2":
			backStack.push("shiftDown_2");
			break;
		case "shiftUp_3":
			backStack.push("shiftDown_3");
			break;
		case "shiftDown_1":
			backStack.push("shiftUp_1");
			break;
		case "shiftDown_2":
			backStack.push("shiftUp_2");
			break;
		case "shiftDown_3":
			backStack.push("shiftUp_3");
			break;
		case "shiftRight_1":
			backStack.push("shiftLeft_1");
			break;
		case "shiftRight_2":
			backStack.push("shiftLeft_2");
			break;
		case "shiftRight_3":
			backStack.push("shiftLeft_3");
			break;
		case "shiftLeft_1":
			backStack.push("shiftRight_1");
			break;
		case "shiftLeft_2":
			backStack.push("shiftRight_2");
			break;
		case "shiftLeft_3":
			backStack.push("shiftRight_3");
			break;
	}
}


function back()
{
	var operator = backStack.pop();

	switch (operator)
	{
		case "shiftUp_1":
			shiftUp(0, 1);
			break;
		case "shiftUp_2":
			shiftUp(1, 1);
			break;
		case "shiftUp_3":
			shiftUp(2, 1);
			break;
		case "shiftDown_1":
			shiftDown(0, 1);
			break;
		case "shiftDown_2":
			shiftDown(1, 1);
			break;
		case "shiftDown_3":
			shiftDown(2, 1);
			break;
		case "shiftRight_1":
			shiftRight(0, 1);
			break;
		case "shiftRight_2":
			shiftRight(1, 1);
			break;
		case "shiftRight_3":
			shiftRight(2, 1);
			break;
		case "shiftLeft_1":
			shiftLeft(0, 1);
			break;
		case "shiftLeft_2":
			shiftLeft(1, 1);
			break;
		case "shiftLeft_3":
			shiftLeft(2, 1);
			break;
	}
}


function check (checkArray)
{
	for (var i=0; i<3; i++)
	{
		for (var j=0; j<3; j++)
		{
			if (checkArray[i][j] != goal[i][j])
				return;
		}
	}

	// popup('<p>Congratulations !!!</br></br></br>You have won the game :D</p>');
	jQuery.noConflict(); 
	// $('#myModal').modal('show'); 
	 $("#winningModal").modal('show');
}

function shiftUp(colNum, backFlag)
{
	var temp;

	// swapping 
	temp = arr[2][colNum];
	arr[2][colNum] = arr[1][colNum];
	arr[1][colNum] = temp;

	// swapping 
	temp = arr[0][colNum];
	arr[0][colNum] = arr[2][colNum];
	arr[2][colNum] = temp;

	// displaying the array on the screen
	document.getElementById("arr[0]["+colNum+"]").innerHTML = arr[0][colNum];
	document.getElementById("arr[1]["+colNum+"]").innerHTML = arr[1][colNum];
	document.getElementById("arr[2]["+colNum+"]").innerHTML = arr[2][colNum];

	

	// adding operation on stack if it's not coming from back()
	if (backFlag == 0)
	{
		add2BackStack("shiftUp_"+(colNum+1));
		attemptedMoves++;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}
	else
	{
		attemptedMoves--;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}

	// checking for goal state
	check(arr);
}

function shiftDown(colNum, backFlag)
{
	var temp;

	// swapping 
	temp = arr[0][colNum];
	arr[0][colNum] = arr[1][colNum];
	arr[1][colNum] = temp;

	// swapping 
	temp = arr[0][colNum];
	arr[0][colNum] = arr[2][colNum];
	arr[2][colNum] = temp;

	// displaying the array on the screen
	document.getElementById("arr[0]["+colNum+"]").innerHTML = arr[0][colNum];
	document.getElementById("arr[1]["+colNum+"]").innerHTML = arr[1][colNum];
	document.getElementById("arr[2]["+colNum+"]").innerHTML = arr[2][colNum];

	

	// adding operation on stack if it's not coming from back()
	if (backFlag == 0)
	{
		add2BackStack("shiftDown_"+(colNum+1));
		attemptedMoves++;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}
	else
	{
		attemptedMoves--;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}

	//checking for goal state
	check(arr);
}

function shiftRight(rowNum, backFlag)
{
	var temp;

	// swapping 
	temp = arr[rowNum][0];
	arr[rowNum][0] = arr[rowNum][1];
	arr[rowNum][1] = temp;

	// swapping 
	temp = arr[rowNum][0];
	arr[rowNum][0] = arr[rowNum][2];
	arr[rowNum][2] = temp;

	// displaying the array on the screen
	document.getElementById("arr["+rowNum+"][0]").innerHTML = arr[rowNum][0];
	document.getElementById("arr["+rowNum+"][1]").innerHTML = arr[rowNum][1];
	document.getElementById("arr["+rowNum+"][2]").innerHTML = arr[rowNum][2];

	

	// adding operation on stack if it's not coming from back()
	if (backFlag == 0)
	{
		add2BackStack("shiftRight_"+(rowNum+1));
		attemptedMoves++;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}
	else
	{
		attemptedMoves--;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;	
	}

	//checking for goal state
	check(arr);
}

function shiftLeft(rowNum, backFlag)
{
	var temp;

	// swapping 
	temp = arr[rowNum][2];
	arr[rowNum][2] = arr[rowNum][1];
	arr[rowNum][1] = temp;

	// swapping 
	temp = arr[rowNum][0];
	arr[rowNum][0] = arr[rowNum][2];
	arr[rowNum][2] = temp;

	// displaying the array on the screen
	document.getElementById("arr["+rowNum+"][0]").innerHTML = arr[rowNum][0];
	document.getElementById("arr["+rowNum+"][1]").innerHTML = arr[rowNum][1];
	document.getElementById("arr["+rowNum+"][2]").innerHTML = arr[rowNum][2];

	

	// adding operation on stack if it's not coming from back()
	if (backFlag == 0)
	{
		add2BackStack("shiftLeft_"+(rowNum+1));
		attemptedMoves++;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;
	}
	else
	{
		attemptedMoves--;
		document.getElementById("attemptedMoves").innerHTML = "Number of attempted moves = " + attemptedMoves;	
	}

	//checking for goal state
	check(arr);
}
