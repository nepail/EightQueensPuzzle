

//8-queen-puzzle
var solveQueens = function(n){

    const board = new Array(n).fill('.').map(()=>new Array(n).fill('.'));
    const result = [];

    function isValid(row, col){
        for(let i = 0; i < row; i++){
            for(let j = 0; j < n; j++){
                //判斷對角線
                if(board[i][j] == 'Q' && (j == col || i + j === row + col || i - j === row - col)){
                    return false;
                }
            }
        }
        return true;
    };

    //回溯法
    function backTrack(row){
        if(row === n){
            result.push(board.map(row => row.join('')));
            return;
        }
        for(let col = 0; col < n; col ++){
            if(isValid(row, col)){
                board[row][col] = 'Q';
                backTrack(row + 1);
                board[row][col] = '.';
            }
        }
    };

    backTrack(0);
    return result;
};

console.log(solveQueens(8));