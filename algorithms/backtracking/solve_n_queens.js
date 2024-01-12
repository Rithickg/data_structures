// N Queens 

function solveNQueens(n){
    const result = []
    const board = Array.from({length:n},()=>Array(n).fill('.'));

    function isSafe(row,col){
        for(let i=0; i<row; i++){
            if(board[i][col]=== 'Q') return false
        }

        for(let i=row, j=col; i>=0 && j>=0; i--,j--){
            if(board[i][j] === 'Q') return false
        }

        for(let i=row, j=col; i>=0 && j<n; i--,j++){
            if(board[i][j] === 'Q') return false
        }

        return true;
    }

    function backtrack(row){
        if(row === n){
            const copy = board.map(arr => arr.join(''))
            result.push(copy) 
            return;
        }

        for(let col = 0; col<n; col++){
            if(isSafe(row,col)){
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.'
            }
        }
    }

    backtrack(0);
    return result;
}

console.log(solveNQueens(4))