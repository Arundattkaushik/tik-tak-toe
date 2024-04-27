
let currentPlayer = "X";
const arr = Array(9).fill(null);

function checkWinner(){
    if
    (
        //Row 1
        arr[0] !=null && arr[0] == arr[1] && arr[1] == arr[2] ||
        //Row 2
        arr[3] !=null && arr[3] == arr[4] && arr[4] == arr[5] ||
        //Row 3
        arr[6] !=null && arr[6] == arr[7] && arr[7] == arr[8] ||
        //Col 1
        arr[0] !=null && arr[0] == arr[3] && arr[3] == arr[6] ||
        //Col 2
        arr[1] !=null && arr[1] == arr[4] && arr[1] == arr[7] ||
        //Col 3
        arr[2] !=null && arr[2] == arr[5] && arr[5] == arr[8] ||
        //Diagonal 1
        arr[0] !=null && arr[0] == arr[4] && arr[4] == arr[8] ||
        //Diagonal 2
        arr[2] !=null && arr[2] == arr[4] && arr[4] == arr[6] 
    )
    {
        // document.write(currentPlayer+ " is winner!");
        document.getElementById("game-result").innerHTML ="      '"+currentPlayer+ "' is Winner!";
    }
}

function handleClick(el){
    const id = el.id;
    if(arr[id] != null){
      return;
    }
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer=== "X" ? "O" : "X";
}