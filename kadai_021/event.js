// 定数にHTMLの要素を代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときのイベントリスナーを設定
btn.addEventListener('click', () => {
  // 2秒後に実行される処理をセット
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000); // 2000ミリ秒 = 2秒
});