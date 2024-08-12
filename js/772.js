"use strict";
//下の部分の背景
document
  .querySelector(".room772-ban")
  .animate(
    [{ backgroundPosition: "0 0 " }, { backgroundPosition: "-100% 0" }],
    {
      duration: 14000,
      iterations: Infinity,
    }
  );

document.addEventListener("DOMContentLoaded", function () {
  //htmlの要素を取り出す
  const wall772 = document.querySelector(".room772-wall");
  const wallmap = document.querySelector(".room772-wall iframe");
  const wallText = document.querySelector(".room772-wall-text");
  const wallTextImg = document.querySelector(".room772-walling");
  const pcScreen = document.querySelector(".room772-pc-screen");
  const pcText = document.querySelector(".room772-pc-screen-text");
  const pcInput = document.querySelector(".room772-pc-screen-input");
  const charText = document.querySelector(".room-char-text");
  //htmlの要素を取り出す
  //text要素の初期化
  pcText.innerHTML = "";
  charText.innerHTML = "";

  //コンテンツの配列を作る
  const chatIntro = [
    "こんにちは！！本日の企画体験の担当齊藤音吹です！よろしくお願いします！いぶきって呼んでください！",
    "この壁は、プロジェクターの投影と壁ホワイトボードとして使われています！強いでしょう！\nでは本題に入りましょう！",
    "何で企画力が大事だと思いますか？それについて軽く説明させて頂きます！",
    "ビジネスには不可欠な「企画」ですが、企画の一般的な意味としては、「ある事を行うために計画を立てること」です",
    "「企画とは、斬新で新しい事柄を創出するもの」だと誤解されやすいですが、何もないゼロの状態から新しいものを生み出すのは「アイデア」です！",
    "何でwebデザイン勉強するのに企画も大事...よくこんな質問を持っている方が多いですが..",
    "今の時代にはAI技術がブームしている。chatgptはご存知でしょうか、コーディングの時に何かがわからない時にすごく使いやすいです",
    "今の段階はまだばかのような解決できないことが多いですが、未来には人間を超える可能性がないとは言えません",
    "画像作成、音声合成、動画作りなどは、今の時代でAIに頼んだら、短時間で凄いコンテンツが作られます",
    "でも、商売、経営をするときにヒット商品が出ない、売れないのは何が原因でしょうか",
    "こういった状況なら、AIに聞いても、アイデアが出てこない、企画も立てられません",
    "人間ならではできることは、未来社会人として最強の武器です！",
    "もちろん技術は大事、プロなりの考え方も仕事に必要です！",
    "じゃそろそろ今日の企画を立て見ましょうか？オンラインでちょっとシンプルだけど、実際に学校に来たら方が面白いかもね",
    "では、、始めましょう！",
  ];
  const chatMbIntro = [
    "本日のクライアントさんは、７号館の隣のまいばすけっと、北新宿一丁目店です！",
    "依頼の要件は、宣伝サイトを作って、学校の学生にもっと来てほしい！",
    "学校には学食が提供されてないので、お昼休みの時間にコンビニに行く人が多いです！",
    "まいばすけっとは小型のスパーですが、コンビニに似てるような感じです！",
    "ちなみに画面に映っている地図を押したら、google mapから場所の確認ができます",
    "企画に関しては、いろんな本質問題を掘り出し、それに対して解決案を考えましょう",
  ];
  const chatMb = [
    "これからいろいろ考えて見て！複数の質問があるので答えを入力してください！",
    "学校に近いですが、セブンとファミマに比べると、利用者数は少ないです、それはなぜでしょうか？",
    "もし、あなたが7号館の学生なら、利用しますか？",
    "まいばすけっとさんは、セブンとファミマのようなコンビニに比べると、強みはなんだと思いますか",
    "まいばすけっとさんは、セブンとファミマのようなコンビニに比べると、競争力が足りないところはなんだと思いますか",
    "今の企画を考えると、ターゲットは誰だと思いますか？",
    "そして、店側は何をしたらいいでしょうか？",
  ];
  const chatMbScreen = [
    "これからいろいろ考えて見て！複数の質問があるので答えを入力してください！",
    "学校に近いのに利用者数は少ない原因？",
    "自分が利用しますか",
    "まいばすけっとの強み",
    "競争力が足りないところ",
    "ターゲット設定",
    "クライアントへの提案",
  ];
  const chatFeedback = [
    "それでは、今回の考えたことを全部画面に映した！",
    "企画はたいていわかりましたか？大丈夫です！みんな入学後でもそれを理解するために凄く時間かかりましたよ",
    "今回の体験はちょっとシンプルですが、",
    "実際に来校のオープンキャンパスにはもっと面白いコンテンツが用意されています！ぜひ体験してみてください！",
    "では今日の企画体験は以上になりました！お先に失礼します！元気でね！",
  ];

  let mockInput = [];

  //コンテンツの配列を作る
  //771と同じ台詞関数を作る、最後にintroを実行する
  let dialogueibuki = [chatIntro, chatMbIntro, chatMb, chatFeedback];
  let currentDialogue = 0;
  let ibukiNow;
  let proResult = ``;
  charDisplay(0);

  function intro() {
    wall772.style.display = "block";
    wallText.style.display = "block";
    wallText.addEventListener("click", function () {
      wallmap.classList.toggle("googlemap");
    });
    charDisplay(1);
  }
  function screenInput(y) {
    mockInput[y] = document.getElementById("pro-screen-input").value;
    document.getElementById("pro-screen-input").value = "";
    y++;
  }
  function charDisplay(x) {
    let count = 0;
    currentDialogue = 0;

    ibukiNow = dialogueibuki[x];
    console.log(ibukiNow);
    charText.innerText = ""; // 前の台詞をクリア
    //解説文の機能///7.21 23:30バックアップした
    function displayText() {
      console.log(ibukiNow[currentDialogue]);
      if (count < ibukiNow[currentDialogue].length) {
        charText.innerText += ibukiNow[currentDialogue].charAt(count);
        count++;
      } else {
        clearInterval(interval);
        nextButton.style.display = "block";
        skipButton.style.display = "block";
      }
      if (currentDialogue == ibukiNow.length - 1) {
        skipButton.style.display = "none";
      }
    }
    let interval = setInterval(displayText, 30);

    function startDialogue() {
      charText.innerText = ""; // 前の台詞をクリア
      count = 0; // インデックスをリセット
      nextButton.style.display = "none"; // ボタンを非表示
      skipButton.style.display = "none"; // ボタンを非表示
      interval = setInterval(displayText, 30); //
    }

    function nextClicked() {
      currentDialogue++;
      if (x == 0) {
        pcText.innerHTML = "企画とは「課題解決のためのアイデア」";
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          // charDisplay(x + 1);
          intro();
        }
      } else if (x == 1) {
        pcText.innerHTML = "解決案を考えましょう";

        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          charDisplay(x + 1);
        }
      } else if (x == 2) {
        pcInput.style.display = "flex";
        nextButton.addEventListener("click", screenInput(currentDialogue));
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
          pcText.innerHTML = chatMbScreen[currentDialogue];
          nextButton.removeEventListener("click", screenInput);
        } else {
          pcInput.style.display = "none";
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          nextButton.removeEventListener("click", screenInput);
          charDisplay(x + 1);
        }
      } else if (x == 3) {
        proResult = `クライアント:まいばすけっと<br>
        利用者数が少ない原因:${mockInput[2]}<br>
        自分なら行きますか? ${mockInput[3]}<br>
        強みは：${mockInput[4]}<br>
        競争力が足りないところは:${mockInput[5]}<br>
        ターゲット：${mockInput[6]}<br>
        提案：${mockInput[7]}`;
        pcText.innerHTML = proResult;
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          document.querySelector(".room-char").style.display = "none";
          return;
        }
      } else {
        return;
      }
    }
    function skipclicked() {
      currentDialogue = dialogueibuki[x].length - 1;
      console.log(dialogueibuki[x]);
      skipButton.removeEventListener("click", skipclicked);

      startDialogue();
    }

    skipButton.addEventListener("click", skipclicked);
    nextButton.addEventListener("click", nextClicked);
  }
});
