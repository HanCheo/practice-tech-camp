class Board {
  constructor({ $board, $score, $newGame, $resetGame, $undo, $message }) {
    $newGame.addEventListener('click', () => this.newStart());
    $undo.addEventListener('click', () => this.undo());
    $resetGame.addEventListener('click', () => {
      this.reset();
      $message.innerText = this.turn.toUpperCase() + '의 밥상뒤집기 !';
    });
    this.message = $message;
    this.board = $board;
    this.scoreboard = $score;
    this.score = { x: 0, o: 0 };
    this.turn = 'o';
    this.cells = [];

    //승리조건 배열
    this.winningCombination = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    this.xoPos = Array(9);
    //Undo를 위한 클릭 순서 배열
    this.lastPos = [];

    //각 cell 구현
    for (let i = 0; i < 9; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');

      cell.addEventListener('click', () => {
        if (['o', 'x'].includes(cell.classList.item(1))) return;
        cell.classList.add(this.turn);
        this.xoPos[i] = this.turn;
        this.lastPos.push(i);
        this.turnChange();
        this.checkWinning();
      });

      this.cells.push(cell);
      $board.appendChild(cell);
    }

    $board.classList.add(this.turn);
    this.reset();
  }

  //매 클릭시 승리조건에 부합한지 체크
  checkWinning() {
    let nextTurn = this.nextTurn();
    let idxArr = this.xoPos.map((a, idx) => (a === nextTurn ? idx : null)).filter((a) => a >= 0);

    if (idxArr.length > 2) {
      let correct = 0;
      for (let combi of this.winningCombination) {
        for (let idx of combi) {
          if (!idxArr.includes(idx)) break;
          correct++;
        }
        if (correct === 3) {
          let who = nextTurn;
          this.score[who]++;
          alert(who.toUpperCase() + '의 승리 !!');
          this.reset();
          break;
        }
        correct = 0;
      }
    }
    if (this.xoPos.filter((a) => !!a).length === 9) {
      alert('비겼습니다 !');
      this.reset();
    }
    this.message.innerText = '';
    this.renderScore();
  }

  //새로운 게임 시작 (스코어 초기화F)
  newStart() {
    this.score = { x: 0, o: 0 };
    this.message.innerText = '';
    this.reset();
  }

  //한 수 무르기 버튼
  undo() {
    let undoCell = this.lastPos.pop();
    if (!(undoCell >= 0)) return;
    this.xoPos[undoCell] = null;
    this.cells[undoCell].classList.remove('o', 'x');
    this.message.innerText = `${this.turn.toUpperCase()}가 자비를 베품당했습니다 !`;
    this.turnChange();
  }

  //현재 게임 다시 시작
  reset() {
    this.xoPos = Array(9);
    this.lastPos = [];
    this.cells.forEach((a) => {
      a.classList.remove('o', 'x');
    });
    this.renderScore();
  }

  //다음 턴이 누군지 확인
  nextTurn() {
    return this.turn === 'o' ? 'x' : 'o';
  }

  //턴 변환
  turnChange() {
    this.board.classList.replace(this.turn, this.nextTurn());
    this.turn = this.nextTurn();
  }

  //점수 렌더링
  renderScore() {
    this.scoreboard.innerHTML = `
      <div>${this.score.o + ' : ' + this.score.x}</div>
      <div>${this.turn}</div>
    `;
  }
}

new Board({
  $board: document.getElementById('board'),
  $score: document.getElementById('score'),
  $newGame: document.getElementById('newGame'),
  $resetGame: document.getElementById('resetGame'),
  $undo: document.getElementById('undo'),
  $message: document.getElementById('message'),
});
