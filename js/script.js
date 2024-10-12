const circle = document.querySelector('.circle');

// 初期位置を画面の中央に設定
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// マウスが画面外に出た方向を記録する変数
let exitDirection = '';

// マウスが動いた時に座標を更新
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  moveCircle();
});

// マウスが画面から出た時の処理
document.addEventListener('mouseleave', (e) => {
  // 画面外に出た方向を記録
  if (e.clientY <= 0) {
    exitDirection = 'top'; // 上端から出た
  } else if (e.clientY >= window.innerHeight) {
    exitDirection = 'bottom'; // 下端から出た
  } else if (e.clientX <= 0) {
    exitDirection = 'left'; // 左端から出た
  } else if (e.clientX >= window.innerWidth) {
    exitDirection = 'right'; // 右端から出た
  }
});

// マウスが画面に戻ってきた時の処理
document.addEventListener('mouseenter', (e) => {
  let enteredDirection = '';

  // どの方向から入ってきたかを確認
  if (e.clientY <= 0) {
    enteredDirection = 'top'; // 上端から入った
  } else if (e.clientY >= window.innerHeight) {
    enteredDirection = 'bottom'; // 下端から入った
  } else if (e.clientX <= 0) {
    enteredDirection = 'left'; // 左端から入った
  } else if (e.clientX >= window.innerWidth) {
    enteredDirection = 'right'; // 右端から入った
  }

  // 入った方向が出た方向と異なる場合のみ、マウス位置を即座に更新
  if (enteredDirection !== exitDirection) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    moveCircle();
  }
});

// 黒い丸の位置を更新する関数
function moveCircle() {
  // マウスの座標に黒い丸を動かす
  circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}
