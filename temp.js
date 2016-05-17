function shiftUp(colNum)
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
}

function shiftDown(colNum)
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
}

function shiftRight(rowNum)
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
}

function shiftLeft(rowNum)
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
}
