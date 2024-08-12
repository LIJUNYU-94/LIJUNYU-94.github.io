"use strict";
////最初に各要素を取り出して定義する
//流れ的に変わっていく部分
const whiteboardText = document.querySelector(".room771-whiteboard-text"); //ホワイトボードの解説
const charText = document.querySelector(".room-char-text"); //下の解説文

//////footerのアイコンを押したら画面に移る
//headerの切り替え
const header = document.querySelector(".room771-screen-header-name");
const headerIcon = document.querySelector(".room771-screen-header-icon");

//headerの切り替え配列
const headerArray = [
  {
    name: "写真素材",
    icon: "../../img/logo-folder.png",
  },
  {
    name: "visual studio code",
    icon: "../../img/logos_visual-studio-codevs.png",
  },
  {
    name: "Google chrome",
    icon: "../../img/logo-chrome.png",
  },
];

const footer = [...document.querySelectorAll(".room771-screen-footer-icon")]; //footerのiconを配列として取り出す
const mockFolder = document.querySelector(".mock-folder");
const mockVs = document.querySelector(".mock-vs");
const mockBrowser = document.querySelector(".mock-browser");
//三つの画面を取り出す

const mock = [mockFolder, mockVs, mockBrowser];
const passTitle = [...document.querySelectorAll(".room771-screen-pass-title")];
const passText = [...document.querySelectorAll(".room771-screen-pass-now")];
console.log(passText);
///footerのiconの切り替え
function footerSwitch(x) {
  for (let i = 0; i < 3; i++) {
    if (i === x) {
      footer[i].classList.add("open");
      header.innerHTML = headerArray[i].name;
      headerIcon.src = headerArray[i].icon;
      mock[i].style.display = "flex";
      passTitle[i].innerText = header.innerText;
    } else {
      mock[i].style.display = "none";
      console.log((mock[i].style.display = "none"));
      footer[i].classList.remove("open");
    }
  }
  if (x === 2) {
    runCode();
    navSwitch(6);
  }
  if (x === 1) {
    navSwitch(2);
  }
  if (x === 0) {
    navSwitch(0);
  }
}
footer.forEach((x, y) => {
  x.addEventListener("click", () => {
    footerSwitch(y);
  });
});
//////navを押したらそれぞれの部分に移る

const nav = [...document.querySelectorAll(".room771-screen-nav-text")]; //7つのnavを一緒に取り出す
//mock-image-switch 0 1   mock-vs-input 2 3 4 mock-chrome 5 6

const navFolder = [...document.querySelectorAll(".mock-image-switch")];
const navVS = [...document.querySelectorAll(".mock-vs-input")];
const navChrome = [...document.querySelectorAll(".mock-chrome")];
let navAll = navFolder.concat(navVS, navChrome);
console.log(navFolder);
console.log(navVS);
console.log(navChrome);
console.log(navAll);
function navSwitch(x) {
  for (let i = 0; i < nav.length; i++) {
    if (i === x) {
      nav[i].classList.add("open");
      navAll[i].classList.add("open");
      if (x < 2) {
        passText[0].innerText = nav[i].innerText;
      } else if (x < 5) {
        passText[1].innerText = nav[i].innerText;
      } else {
        passText[2].innerText = nav[i].innerText;
      }
    } else {
      nav[i].classList.remove("open");
      navAll[i].classList.remove("open");
    }
  }
}
nav.forEach((x, y) => {
  x.addEventListener("click", () => {
    navSwitch(y);
  });
});
////imgを用意する
const mockKeyMb = ["b01.png", "b02.png", "b03.png"];
const mockImageMb = [
  "b1.png",
  "b2.png",
  "b3.png",
  "b4.png",
  "b5.png",
  "b6.png",
  "b7.png",
  "b8.png",
  "b9.png",
];
const mockKeyHobby = ["a01.png", "a02.png", "a03.png"];
const mockImageHobby = [
  "a1.png",
  "a2.png",
  "a3.png",
  "a4.png",
  "a5.png",
  "a6.png",
  "a7.png",
  "a8.png",
  "a9.png",
];
function runCode() {
  const htmlCode = document.getElementById("mock-html").value;
  const cssCode = document.getElementById("mock-css").value;
  const jsCode = document.getElementById("mock-js").value;
  const iframe = document.getElementById("output");
  // function highlightComments(code) {
  //   const regex = /<!--([\s\S]*?)-->|\/\*([\s\S]*?)\*\/|\/\/(.*)$/gm;
  //   return code.replace(regex, (match, p1, p2, p3) => {
  //     if (p1 !== undefined) {
  //       return `<!-- <span class="comment">${p1}</span> -->`;
  //     } else if (p2 !== undefined) {
  //       return `/* <span class="comment">${p2}</span> */`;
  //     } else if (p3 !== undefined) {
  //       return `// <span class="comment">${p3}</span>`;
  //     }
  //   });
  // }
  // highlightComments(htmlCode);
  // highlightComments(cssCode);
  // highlightComments(jsCode);
  iframe.srcdoc = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}<\/script>
  `;
}
function insertCode() {
  document.getElementById("mock-html").value = `<!DOCTYPE html>

<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>タイトル</title>
  </head>
  <!-- いろんな初期化設定、css,jsなどのファイルの使用、言語の設定、タイトルの設定などは全部headの部分に -->
  <!-- bodyに書かれるものは、サイトの見た目に反映されるもの -->
  <body>
    <div id="container">
      <!-- divタグでコンテンツの箱を作る。
      containerのidを付けてcss,jsなどid名で読み取って、見た目と動きなどを編集する -->

      <header>
        <h1></h1>
      </header>

      <!-- サイトのヘッダー、h1はサイトの一番大きな見出し、このh1のタグの中にタイトルを入れてください -->
      <main>
        <!-- サイトのコンテンツ部分,main -->
        <figure><img src="" /></figure>
        <!-- ここでキービジュアルとして大きめの画像入れて見ましょう！
      隣のフォルダで写真を選んでください！
      srcの後ろに直接にurlを貼り付けてオンライン素材も使えます -->
        <article>
          <!-- 本文の部分 -->
          <!-- 今回三つのコラムを作るから、sectionを三つにしました -->

          <section>
            <h2></h2>
            <!-- コラムのタイトル、自分選んだタイトルを応じてここ入れましょう -->

            <p></p>
            <!-- コラムの内容、紹介文と説明をここに入れましょう！ -->
            <img src=".png" />
            <!-- 紹介文の画像、フォルダに自分が好きな画像を選んでください！もちろん、urlの貼り付けも可能です。 -->
          </section>

          <section>
            <h2></h2>
            <!-- コラムのタイトル、自分選んだタイトルを応じてここ入れましょう -->

            <p></p>
            <!-- コラムの内容、紹介文と説明をここに入れましょう！ -->
            <img src=".png" />
            <!-- 紹介文の画像、フォルダに自分が好きな画像を選んでください！もちろん、urlの貼り付けも可能です。 -->
          </section>

          <section>
            <h2></h2>
            <!-- コラムのタイトル、自分選んだタイトルを応じてここ入れましょう -->

            <p></p>
            <!-- コラムの内容、紹介文と説明をここに入れましょう！ -->
            <img src=".png" />
            <!-- 紹介文の画像、フォルダに自分が好きな画像を選んでください！もちろん、urlの貼り付けも可能です。 -->
          </section>
        </article>
      </main>
      <!-- それぞれの閉じタグ、htmlの中に、タグ+閉じタグで機能を実現する -->
      <footer>
        <!-- サイトのフッター部分 -->
        <p>
          <!-- サイトのフッター部分の文字 -->
          <small>&copy;Japan Electronics College. All Rights Reserved.</small>
          <!-- copyright、普段は小さく表示する,smallタグは小さく表示するタグです -->
        </p>
      </footer>
    </div>
  </body>
</html>
`;

  document.getElementById("mock-js").value = `
const h1 = document.querySelector("h1");
const footer = document.querySelector("footer");

h1.addEventListener("click", colorChange);

function colorChange() {
  footer.style.;
}
`;
}
function insertCssa() {
  document.getElementById("mock-css").value = `/* 文字化け回避 */
@charset "utf-8";
/* 全体的のbody背景の色設定 */
body {
  background-color: bisque;
}
/* bodyの中にコンテンツ入れる部分を設定する */
#container {
  max-width: 500px;
  /* コンテンツ入れる部分の最大幅は500px */
  margin: 0 auto;
  /* 上下の余白は0、左右は余白自動調整 */
}
/* ヘッダー部分の調整*/
header {
  width: 100%;
  /*  ヘッダーの幅を100％にする*/
  height: 48px;
  /*  ヘーダーの高さを48pxにする*/
}
/*  ヘーダーの中にある見出し１*/
/* h1はよくサイトのタイトルとして使われている */
h1 {
  width: 50%;
  margin: 20px auto 0;
  /* 上の余白は20px、左右は余白自動調整、下は0px(一つだけ書いたら四方向、二つなら上下/左右、四つなら上、右、下、左) */
  position: relative;
  /* 位置を相対位置に設定する */
  text-align: center;
  /* 中の文字を真ん中にする */
}
/* タイトルの下の大きい写真の箱 */
figure {
  width: 80%;
  margin: 20px auto;
  border: 1px solid #333;
  /* ボーダー線を見えるようにする、厚さは1px、色は黒 */
}
/* 箱の中の写真は箱の100%幅で自動サイズ調整 */
figure img {
  width: 100%;
}
/*ページの一番下のフッター*/
footer {
  width: 100%;
  height: 30px;
}
/* フッターの中の文字を調整する */
footer p {
  width: 100%;
}

/* コンテンツ部分のフレイム */
article {
  width: 90%;
  border: 1px solid #333;
  margin: 0 auto;
  display: grid; /* コンテンツを格子状で表す */
  grid-template-columns: 1fr 1fr 1fr; /* 三つの列を生成する、それぞれの幅は1/3ずつ */
}
/* 三つのコンテンツのsectionの設定 */
section {
  border: 1px solid #33333331;
  height: auto; /* 高さは入れたものの高さによる自動調整 */
}

/* h2：二番目の見出し */
section h2 {
  text-align: center;
}
section p {
  min-height: 80px; /* 文字のフレイムの高さの最低値 */
  border-bottom: 1px solid #333;
} /* sectionにある画像の設定 */
section img {
  width: 100%;
  height: fit-content;
}
`;
}
function insertCssb() {
  document.getElementById("mock-css").value = `/* 文字化け回避 */
@charset "utf-8";
/* 全体的のbody背景の色設定 */
body {
  background-color: bisque;
}
/* bodyの中にコンテンツ入れる部分を設定する */
#container {
  max-width: 500px;
  /* コンテンツ入れる部分の最大幅は500px */
  margin: 0 auto;
  /* 上下の余白は0、左右は余白自動調整 */
}
/* ヘッダー部分の調整*/
header {
  width: 100%;
  /*  ヘッダーの幅を100％にする*/
  height: 48px;
  /*  ヘーダーの高さを48pxにする*/
}
/*  ヘーダーの中にある見出し１*/
/* h1はよくサイトのタイトルとして使われている */
h1 {
  width: 50%;
  margin: 20px auto 0;
  /* 上の余白は20px、左右は余白自動調整、下は0px(一つだけ書いたら四方向、二つなら上下/左右、四つなら上、右、下、左) */
  position: relative;
  /* 位置を相対位置に設定する */
  text-align: center;
  /* 中の文字を真ん中にする */
}
/* タイトルの下の大きい写真の箱 */
figure {
  width: 80%;
  margin: 20px auto;
  border: 1px solid #333;
  /* ボーダー線を見えるようにする、厚さは1px、色は黒 */
}
/* 箱の中の写真は箱の100%幅で自動サイズ調整 */
figure img {
  width: 100%;
}
/*ページの一番下のフッター*/
footer {
  width: 100%;
  height: 30px;
}
/* フッターの中の文字を調整する */
footer p {
  width: 100%;
}

article {
  width: 90%;
  border: 1px solid #333;
  margin: 0 auto;
  display: grid; /* コンテンツを格子状で表す */
  grid-template-rows: 1fr 1fr 1fr; /* 三つの行を生成する、それぞれの幅は1/3ずつ */
}
/* 三つのコンテンツのsectionの設定 */
section {
  border: 1px solid #33333331;
  display: grid;
  grid-template-columns: 130px auto 100px; /* 三つの列を生成する、幅を指定、左は130px、右は100px、真ん中は自動調整 */
}
section p {
  min-height: 80px;
  border-bottom: 1px solid #333;
}

section h2 {
  margin: 12px 0 0 12px;
  /* 上と左の余白は12px、右と下は0px(一つだけ書いたら四方向、二つなら上下/左右、四つなら上、右、下、左) */
}
section img {
  width: 100%;
  height: fit-content;
  margin-top: 15px;
  /* 一つの方向だけ指定して余白を調整する */
}
`;
}
////コードの実装関数
const diaBro = "ブラウザ";
const diaFol = "フォルダ";

////ページに入ってからの初期化
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mockclass").style.height = "100vh";
  let nowPhase;
  whiteboardText.innerText = "ようこそ実技体験！";
  const nextButton = document.querySelector("#nextButton");
  const skipButton = document.querySelector("#skipButton");
  const dialogues = [
    "こんにちは！！本日の実技体験の担当齊藤音吹です！よろしくお願いします！いぶきって呼んでください！",
    "それぞれの役割はまだ覚えてますか？",
    "本日は、まずweb制作の基html,css,JavaScriptを簡単に理解できるように解説したいと思います",
    "デザインに関するは、写真素材を用意しておりますが、",
    "自分が作った画像とか、オンラインの写真とか、urlを貼り付ければ使用可能です！",
    "流れについては、二つのタイトルを選べます！まずは、企画体験に関わる　まいばすけっとおすすめ商品",
    "企画はまだ体験していなかったら隣に先に行った方がいいかもしれないね！",
    "そして、＜私の趣味＞も選べます！",
    "体験が始まる前に！一番大事なものかもしれませんが、サイトのレイアウトについて簡単に説明します！",
    "サイトのレイアウトとは、デザインや配置の仕方のことです",
    "ユーザーにわかりやすく情報を伝えるため、見た目がよいレイアウトが大事です！",
    "本日用意された体験用サイトは少しシンプルですが",
    "全部の流れが終わったら、自由にコードを見ることが可能です！もちろん、自由にサイトを編集するも可能です！",
    "最初に解説を聞きながら指示を応じてコードを入れて頂いて",
    "一つ目のシンプルなサイトを作ってみましょう！",
    "それでは！やりたいタイトル、そしてレイアウトを選んでください！",
  ];

  const dialoguesIntro = [
    "これは、最強のコードツール！visual studio code！です！",
    "ここは模擬ツールだから、多分そんなに強くないかも（笑）",
    "しかもこの模擬ツールもvisual studio codeでhtml,css,jsを使って作ったよ！",
    "やっぱり最強でしょう！全然無料だからダウンロードして使ってみてね！",
    "今の画面は、htmlの編集画面です！下にあるアイコンを押したら、画面の切り替えができます！",
    `${diaFol}には、用意された画像を選べます！もちろん、urlを貼り付けることでオンライン素材も使えますよ`,
    `${diaBro}のchromeには、vsにあるコードをそのままで反映する！コーディングをしながら、実際の効果もそこで確認しましょう！`,
    "それでは、ちょっと２秒くらい待ってください！今日の体験用サンプルを書きます！",
  ];
  const dialoguesHtml = [
    `できた！早いでしょう？俺の後輩になったらすぐにこのスピードでできるぞ！（笑）`,
    `htmlは骨組みです！ここでたくさん書いてあるけど、${diaBro}に確認してみたら--`,
    "多分何もない(笑)、copyrightの小文字しかない",
    `でも先選んだレイアウトはおおざっぱに反映しているんでしょう！それは今入れたcssの機能です！`,
    "これからhtmlで、それぞれのコンテンツを入れましょう！教室のホワイトボードに書き方もあるので、参考してください！",
    "まずは！h1タグの中で、タイトルを入れましょう！",
    "早い！次は画像を入れましょう！このサンプルサイトには画像４枚が必要です！",
    "タイトルの下にあるキービジュアルの大きめの画像、下にそれぞれのパーツも１枚ずつが必要です",
    "画像の番号はホワイトボードに書いてあるような入れてみましょう！ファイル名はフォルダのヘッダー見て見ましょう",
    `じゃ、${diaFol}には、選んだテーマに関する自分が好きな写真を選んでください！`,
    `もう入れましたか？それでは、三つの画像に対して、そのパーツの見出しを入れましょう！`,
    `h2タグが三つあるから、全部入れましたか？`,
    `よくできたね！次は、三つのpタグの中に、自分が考えた説明文などを入れましょう！`,
    `それで全部入れましたね！じゃどうなったのか${diaBro}に見て見ましょう！`,
  ];
  const dialoguesCssJs = [
    `これでざっくりページ作りました！htmlだけでもまだ様々なタグがあるのでいろんな機能を実現できるよ`,
    `次は${diaBro}にあるものの見た目を編集してみましょうか、`,
    `先の紹介した通り、cssは飾り機能です！`,
    `まず、上にあるcssボタンを押して、コードの様子を見て見ましょう`,
    `注釈の部分の説明文は多分結構詳しいと思います、一生懸命書きましたよね`,
    `何かわからなかったら、ぜひ気軽に聞い...あ--ここダメか、じゃぜひ来校して気軽に聞いてください！（笑）`,
    `今日の体験は、まずh1の背景色を変えて見ましょう！`,
    `bodyのところに見て見ましょう、background-color: bisqueのような設定されたから、今の背景はbisque色です！`,
    `もちろんそこ変えても大丈夫です！（笑）`,
    `同じような書き方で、h1の{}にbackground-color:を追加しましょう！`,
    `後ろの色ならなんでもいい、英語まちがえなかったら～セミコロンも注意しないとね`,
    `じゃ次は下の文字を片付けましょう、真ん中に行ったら方がいいでしょう？`,
    `footer部分を見て見ましょう！その中にpタグ一個あるよ,htmlに確認してみてください`,
    `この文字列はpタグの中にあるんでしょう！footer pの書き方は、footerの中のp要素を調整する意味です！`,
    `その中にpタグの中にある文字を真ん中にしましょう、ホワイトボードに書き方あるよ`,
    `いかかでしょうか？いろんなプロパティを使って、いろんな効果を作れるよ`,
    `ちなみにこの模擬教室の見た目もcssで作りました`,
    `凄いでしょう！入学したら短い期間でここまで作れるよ`,
    `最後はJavaScript、サイトの動く機能です！簡単に体験してみましょう！簡単に言えば、何をしたら何を起こす、今の続きボタン押したら次の台詞に行くような感じです`,
    `もちろんここでの全部の流れと操作要素がJSで作られた！苦戦してたね！`,
    `JavaScriptで、今回は簡単にボタン機能付けましょう！`,
    `h1に付けましょう！押したらfooterの色が変わるーーいかかでしょうか？`,
    `今すでに書かれてるコードの機能は、htmlの中にh1とfooterを取り出した、そしてここで使う`,
    `後h1を押したら、colorChange()の機能を実行するよ！`,
    `じゃこの機能を下にfunction colorChange()のところに組んでみましょう！`,
    `ホワイトボード見てね！footer.styleは、footerのcss styleを編集する、そして、.backgroundColorは背景の色！`,
    `そのままで書きました？どう？${diaBro}に確認してみて！押したらfooterの色が変わるでしょう？`,
    `こんな感じで、htmlにあるものを取り出して,その内容とスタイルを編集することができる、もちろん、新しい要素なども作れる！`,
    `今のaddEventListenerだけでも、いろんな機能が実現できる！`,
    `じゃ！これで今日の用意した分です！他の教室に回りに行ってもいいし、ここでもっと自由に組んで見ても構いません！`,
    `何か聞きたいことがあれば！何でも答えるので！ぜひ学校に来てみてください！新宿でお待ちしております！`,
    `では！お先に失礼します！お疲れ様でした！元気でね！`,
  ];
  const whiteboard = [
    "いぶき最強\n---byいぶき",
    `<h1>タイトル</h1>`,
    `<img src="a1.png"/>`,
    "例\n<h2>齊藤音吹</h2> ",
    "<p>齊藤音吹は\n最強の男です</p>",

    "h1の背景色変える",
    "h1{background-color:red;}",
    "<footer>\n<p><small>....",
    "p{text-align:center;}",
    "h1押したらfooterの色変わる",
    `footer.style.\nbackgroundColor=\n"red"`,
    `ありがとうございました`,
  ];
  const charPpt = document.querySelector(".room771-ppt-img");
  const ppt = [
    "../../img/Rectangle56ibuki.png",
    "../../img/htmlcssjsall.png",
    "../../img/shikumi.png",
    "../../img/honwoyomu_doubutu_kuma.png",
    "../../img/httpwww.png",
    "../../img/mbppt.png",
    "../../img/772ppt.png",
    "../../img/ppthobby.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/layout.png",
    "../../img/pptdekiru.png",
    "../../img/pptdekiru.png",
    "../../img/pptfirstsite.png",
    "../../img/pptfirstsite.png",
  ];
  let dialogueibuki = [
    dialogues,
    dialoguesIntro,
    dialoguesHtml,
    dialoguesCssJs,
  ];
  //解説文の機能
  console.log(dialogueibuki);
  let currentDialogue = 0;
  let ibukiNow;

  charDisplay(0);
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
        charPpt.src = ppt[currentDialogue];
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
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          charText.innerText =
            "やりたいタイトル、お好きなレイアウトを選んでください！";
          whiteboardText.innerText = "タイトル選択";
          nextButton.style.display = "none"; // ボタンを隠す
          skipButton.style.display = "none"; // ボタンを非表示
          charPpt.style.display = "none";
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          choise();
        }
      } else if (x == 1) {
        if (currentDialogue == 3) {
          whiteboardText.innerText = whiteboard[0];
        }

        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          insertCode();
          charDisplay(x + 1);
        }
      } else if (x == 2) {
        if (currentDialogue == 4) {
          whiteboardText.innerText = whiteboard[1];
        }
        if (currentDialogue == 6) {
          whiteboardText.innerText = whiteboard[2];
        }
        if (currentDialogue == 9) {
          whiteboardText.innerText = whiteboard[3];
        }
        if (currentDialogue == 11) {
          whiteboardText.innerText = whiteboard[4];
        }
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          charDisplay(x + 1);
        }
      } else if (x == 3) {
        if (currentDialogue == 6) {
          whiteboardText.innerText = whiteboard[5];
        }
        if (currentDialogue == 7) {
          whiteboardText.innerText = whiteboard[6];
        }
        if (currentDialogue == 11) {
          whiteboardText.innerText = whiteboard[7];
        }
        if (currentDialogue == 13) {
          whiteboardText.innerText = whiteboard[8];
        }
        if (currentDialogue == 20) {
          whiteboardText.innerText = whiteboard[9];
        }
        if (currentDialogue == 25) {
          whiteboardText.innerText = whiteboard[10];
        }
        if (currentDialogue == 29) {
          whiteboardText.innerText = whiteboard[11];
        }
        if (currentDialogue < ibukiNow.length) {
          startDialogue();
        } else {
          skipButton.removeEventListener("click", skipclicked);
          nextButton.removeEventListener("click", nextClicked);
          document.querySelector(".room-char").style.display = "none";
          whiteboardText.innerText = whiteboard[0];
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
    //解説文の機能
    //解説文の機能///7.21 23:30バックアップした
    //解説文の機能///7.21 23:30バックアップした
    //解説文の機能///7.21 23:30バックアップした
    //解説文の機能///7.21 23:30バックアップした無理、、、
  }

  function choise() {
    const pptFrame = document.querySelector(".room771-ppt");
    pptFrame.style.backgroundImage = 'url("../../img/pptback.png")';
    const selectArea = document.createElement("div");
    let selecta = document.createElement("p");
    selecta.innerText = "私の趣味";
    let selectb = document.createElement("p");
    selectb.innerText = "まいばすけっとおすすめ商品";
    pptFrame.appendChild(selectArea);
    selectArea.classList.add("selectarea");
    selectArea.appendChild(selecta);
    selectArea.appendChild(selectb);
    const mockKey = [...document.querySelectorAll(".mock-key img")];
    const mockImage = [...document.querySelectorAll(".mock-image img")];
    const chromeIntro = [...document.querySelectorAll(".chrome-intro-text")];
    selecta.addEventListener("click", function () {
      for (let i = 0; i < mockKey.length; i++) {
        mockKey[i].src = mockKeyHobby[i];
      }
      for (let i = 0; i < mockImage.length; i++) {
        mockImage[i].src = mockImageHobby[i];
      }
      headerArray[0].name = "写真素材（a+数字)）";
      nowPhase = "私の趣味";
      whiteboardText.innerText = "レイアウト選択";
      selectArea.removeChild(selecta);
      selectArea.removeChild(selectb);
      const selectLayouta = document.createElement("img");
      selectLayouta.src = "../../img/layout1.png";
      const selectLayoutb = document.createElement("img");
      selectLayoutb.src = "../../img/layout2.png";

      selectArea.appendChild(selectLayouta);
      selectArea.appendChild(selectLayoutb);

      chromeIntro[0].classList.add("open");
      selectLayouta.addEventListener("click", function () {
        insertCssa();
        layoutElected();
      });
      selectLayoutb.addEventListener("click", function () {
        insertCssb();
        layoutElected();
      });
    });
    selectb.addEventListener("click", function () {
      for (let i = 0; i < mockKey.length; i++) {
        mockKey[i].src = mockKeyMb[i];
      }
      for (let i = 0; i < mockImage.length; i++) {
        mockImage[i].src = mockImageMb[i];
      }
      headerArray[0].name = "写真素材（b+数字使用(例b01)）";
      nowPhase = "まいばすけっとおすすめ商品";
      whiteboardText.innerText = "レイアウト選択";
      selectArea.removeChild(selecta);
      selectArea.removeChild(selectb);
      const selectLayouta = document.createElement("img");
      selectLayouta.src = "../../img/layout1.png";
      const selectLayoutb = document.createElement("img");
      selectLayoutb.src = "../../img/layout2.png";

      selectArea.appendChild(selectLayouta);
      selectArea.appendChild(selectLayoutb);

      chromeIntro[1].classList.add("open");
      selectLayouta.addEventListener("click", function () {
        insertCssa();
        layoutElected();
      });
      selectLayoutb.addEventListener("click", function () {
        insertCssb();
        layoutElected();
      });
    });
  }

  function layoutElected() {
    //1/2どちかの生成サイトを書き込み、終わったらscreenを900pxにする、
    //screenが出る、pptが消える
    document.querySelector(".mockclass").style.height = "900px";
    whiteboardText.innerText = `本日のタイトル：${nowPhase}`;
    document.querySelector(".room771-ppt").style.display = "none";
    document.querySelector(".room771-screen").style.display = "flex";

    footerSwitch(1);
    navSwitch(2);
    charDisplay(1);
  }
});

//screenが出てきたら
// document.querySelector(".mockclass").style.height = "900px";
