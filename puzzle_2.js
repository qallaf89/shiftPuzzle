function check_1 (checkarray)
{
	for (var i=0; i<3; i++)
	{
		for (var j=0; j<3; j++)
		{
			if (checkarray[i][j] != goal[i][j])
				return;
		}
	}

	popup('<p>Congratulations !!!</br></br></br>Player 1 has won the game !</p>');
}

function shiftUp_1(colNum)
{
	var temp;

	// swapping 
	temp = arr1[2][colNum];
	arr1[2][colNum] = arr1[1][colNum];
	arr1[1][colNum] = temp;

	// swapping 
	temp = arr1[0][colNum];
	arr1[0][colNum] = arr1[2][colNum];
	arr1[2][colNum] = temp;

	// displaying the arr1ay on the screen
	document.getElementById("arr1[0]["+colNum+"]").innerHTML = arr1[0][colNum];
	document.getElementById("arr1[1]["+colNum+"]").innerHTML = arr1[1][colNum];
	document.getElementById("arr1[2]["+colNum+"]").innerHTML = arr1[2][colNum];

	// increasing the attempted moves
	attemptedMoves_1++;
	document.getElementById("attemptedMoves_1").innerHTML = attemptedMoves_1;

	// checking for goal state
	check_1(arr1);
}

function shiftDown_1(colNum)
{
	var temp;

	// swapping 
	temp = arr1[0][colNum];
	arr1[0][colNum] = arr1[1][colNum];
	arr1[1][colNum] = temp;

	// swapping 
	temp = arr1[0][colNum];
	arr1[0][colNum] = arr1[2][colNum];
	arr1[2][colNum] = temp;

	// displaying the arr1ay on the screen
	document.getElementById("arr1[0]["+colNum+"]").innerHTML = arr1[0][colNum];
	document.getElementById("arr1[1]["+colNum+"]").innerHTML = arr1[1][colNum];
	document.getElementById("arr1[2]["+colNum+"]").innerHTML = arr1[2][colNum];

	// increasing the attempted moves
	attemptedMoves_1++;
	document.getElementById("attemptedMoves_1").innerHTML = attemptedMoves_1;

	//checking for goal state
	check_1(arr1);
}

function shiftRight_1(rowNum)
{
	var temp;

	// swapping 
	temp = arr1[rowNum][0];
	arr1[rowNum][0] = arr1[rowNum][1];
	arr1[rowNum][1] = temp;

	// swapping 
	temp = arr1[rowNum][0];
	arr1[rowNum][0] = arr1[rowNum][2];
	arr1[rowNum][2] = temp;

	// displaying the arr1ay on the screen
	document.getElementById("arr1["+rowNum+"][0]").innerHTML = arr1[rowNum][0];
	document.getElementById("arr1["+rowNum+"][1]").innerHTML = arr1[rowNum][1];
	document.getElementById("arr1["+rowNum+"][2]").innerHTML = arr1[rowNum][2];

	// increasing the attempted moves
	attemptedMoves_1++;
	document.getElementById("attemptedMoves_1").innerHTML = attemptedMoves_1;

	//checking for goal state
	check_1(arr1);
}

function shiftLeft_1(rowNum)
{
	var temp;

	// swapping 
	temp = arr1[rowNum][2];
	arr1[rowNum][2] = arr1[rowNum][1];
	arr1[rowNum][1] = temp;

	// swapping 
	temp = arr1[rowNum][0];
	arr1[rowNum][0] = arr1[rowNum][2];
	arr1[rowNum][2] = temp;

	// displaying the arr1ay on the screen
	document.getElementById("arr1["+rowNum+"][0]").innerHTML = arr1[rowNum][0];
	document.getElementById("arr1["+rowNum+"][1]").innerHTML = arr1[rowNum][1];
	document.getElementById("arr1["+rowNum+"][2]").innerHTML = arr1[rowNum][2];

	// increasing the attempted moves
	attemptedMoves_1++;
	document.getElementById("attemptedMoves_1").innerHTML = attemptedMoves_1;

	//checking for goal state
	check_1(arr1);
}

function check_2 (checkarray)
{
	for (var i=0; i<3; i++)
	{
		for (var j=0; j<3; j++)
		{
			if (checkarray[i][j] != goal[i][j])
				return;
		}
	}

	popup('<p>Congratulations !!!</br></br></br>Player 2 has won the game !</p>');
}

function shiftUp_2(colNum)
{
	var temp;

	// swapping 
	temp = arr2[2][colNum];
	arr2[2][colNum] = arr2[1][colNum];
	arr2[1][colNum] = temp;

	// swapping 
	temp = arr2[0][colNum];
	arr2[0][colNum] = arr2[2][colNum];
	arr2[2][colNum] = temp;

	// displaying the arr2ay on the screen
	document.getElementById("arr2[0]["+colNum+"]").innerHTML = arr2[0][colNum];
	document.getElementById("arr2[1]["+colNum+"]").innerHTML = arr2[1][colNum];
	document.getElementById("arr2[2]["+colNum+"]").innerHTML = arr2[2][colNum];

	// increasing the attempted moves
	attemptedMoves_2++;
	document.getElementById("attemptedMoves_2").innerHTML = attemptedMoves_2;

	// checking for goal state
	check_2(arr2);
}

function shiftDown_2(colNum)
{
	var temp;

	// swapping 
	temp = arr2[0][colNum];
	arr2[0][colNum] = arr2[1][colNum];
	arr2[1][colNum] = temp;

	// swapping 
	temp = arr2[0][colNum];
	arr2[0][colNum] = arr2[2][colNum];
	arr2[2][colNum] = temp;

	// displaying the arr2ay on the screen
	document.getElementById("arr2[0]["+colNum+"]").innerHTML = arr2[0][colNum];
	document.getElementById("arr2[1]["+colNum+"]").innerHTML = arr2[1][colNum];
	document.getElementById("arr2[2]["+colNum+"]").innerHTML = arr2[2][colNum];

	// increasing the attempted moves
	attemptedMoves_2++;
	document.getElementById("attemptedMoves_2").innerHTML = attemptedMoves_2;

	//checking for goal state
	check_2(arr2);
}

function shiftRight_2(rowNum)
{
	var temp;

	// swapping 
	temp = arr2[rowNum][0];
	arr2[rowNum][0] = arr2[rowNum][1];
	arr2[rowNum][1] = temp;

	// swapping 
	temp = arr2[rowNum][0];
	arr2[rowNum][0] = arr2[rowNum][2];
	arr2[rowNum][2] = temp;

	// displaying the arr2ay on the screen
	document.getElementById("arr2["+rowNum+"][0]").innerHTML = arr2[rowNum][0];
	document.getElementById("arr2["+rowNum+"][1]").innerHTML = arr2[rowNum][1];
	document.getElementById("arr2["+rowNum+"][2]").innerHTML = arr2[rowNum][2];

	// increasing the attempted moves
	attemptedMoves_2++;
	document.getElementById("attemptedMoves_2").innerHTML = attemptedMoves_2;

	//checking for goal state
	check_2(arr2);
}

function shiftLeft_2(rowNum)
{
	var temp;

	// swapping 
	temp = arr2[rowNum][2];
	arr2[rowNum][2] = arr2[rowNum][1];
	arr2[rowNum][1] = temp;

	// swapping 
	temp = arr2[rowNum][0];
	arr2[rowNum][0] = arr2[rowNum][2];
	arr2[rowNum][2] = temp;

	// displaying the arr2ay on the screen
	document.getElementById("arr2["+rowNum+"][0]").innerHTML = arr2[rowNum][0];
	document.getElementById("arr2["+rowNum+"][1]").innerHTML = arr2[rowNum][1];
	document.getElementById("arr2["+rowNum+"][2]").innerHTML = arr2[rowNum][2];

	// increasing the attempted moves
	attemptedMoves_2++;
	document.getElementById("attemptedMoves_2").innerHTML = attemptedMoves_2;

	//checking for goal state
	check_2(arr2);
}
