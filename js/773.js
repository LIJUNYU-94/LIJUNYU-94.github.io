"use strict";
const students = [
  {},
  //空き要素
  {
    fullname: "秋山 陽菜乃",
    name: "秋山",
    image: "../../img/female1.png",
    serif: [
      "秋山 陽菜乃です！よろしくお願いします",
      "よくピンクのイメージがあるって言われるね",
      "卓球が好きです！",
      "絶叫系のものが好きです！",
    ],
  },
  //   1
  {
    fullname: "新井 明里",
    name: "新井",
    image: "../../img/female2.png",
    serif: [
      "新井 明里です！よろしくお願いします",
      "チョコがすき！",
      "留学生のみんなと仲良しです！",
      "筋トレが好き！",
      "この画像５時間で作ったよ",
    ],
  },
  //   2
  {
    fullname: "アンドロノフ コンスタンチン",
    name: "コスチャ",
    image: "../../img/male1.png",
    serif: [
      "アンドロノフ コンスタンチンです！ロシア出身です！よろしくお願いします",
      "二階が広いから放課後よくそこに居る",
      "漢字難しいですね",
      "身長188㎝です！日本には高いに見えるけどロシアはそんなに",
    ],
  },
  //   3
  {
    fullname: "李　康九",
    name: "李(イ)",
    image: "../../img/male3.png",
    serif: [
      "李　康九（イ　カング）です！韓国出身です！よろしくお願いします",
      "飲む？",
      "夏休み韓国旅行行かない？",
      "新宿駅わかる？",
      "辛いつけ麺が好きです！",
    ],
  },
  //   4
  {
    fullname: "易　松静",
    name: "易",
    image: "../../img/female1.png",
    serif: [
      "易　松静（イ　ソウセイ）です！中国出身です！よろしくお願いします",
      "ハハハハハハハハハハハハハハハハハハハハ（意味不明）",
      "今日の総武線も無事に死んだ",
      "高校時代に数学の授業で日本語を勉強したｗ",
      "肉すき！辛いもの好き！そば行かない？",
      "社会人だった時期より疲れる......",
    ],
  },
  //   5
  {
    fullname: "飯島 かほ",
    name: "飯島",
    image: "../../img/female2.png",
    serif: [
      "飯島 かほです！よろしくお願いします",
      "早く就職したい",
      "ネイル大好き！ネイルの仕事やりたい",
    ],
  },
  //   6
  {
    fullname: "石川 満貴",
    name: "石川",
    image: "../../img/male1.png",
    serif: [
      "石川 満貴です！よろしくお願いします",
      "よろしくね",
      "俺の髪型はどう？15000円かかったよ",
      "“day by day　どんなスピードで追いかけたら,また君と巡り会えるんだろう”",
    ],
  },
  //   7
  {
    fullname: "猪野迫 日菜",
    name: "猪野迫",
    image: "../../img/female1.png",
    serif: [
      "猪野迫（いのさこ） 日菜です！よろしくお願いします",
      "よろしく!",
      "苗字は猪野迫です！珍しいでしょう？いのさこって入力しても出てこない",
      "文房具が大好きです",
    ],
  },
  //   8
  {
    fullname: "イリヤシェンコ ナタリア",
    name: "ナタリア",
    image: "../../img/female1.png",
    serif: [
      "イリヤシェンコ ナタリアです！ロシア出身です！よろしくお願いします",
      "馬のお世話をしています！",
      "ハリーポッターが好きです！",
    ],
  },
  //   9
  {
    fullname: "宇治野 恵維",
    name: "宇治野",
    image: "../../img/female1.png",
    serif: [
      "宇治野 恵維（めい）です！よろしくお願いします",
      "いい雰囲気のカフェ知ってる？行きたい！",
      "ハーゲンダッツが好き！バニラが一番！",
      "今日も放課後に残る！",
      "ライブ行きたい！",
    ],
  },
  //   10
  {
    fullname: "小澤 一輝",
    name: "小澤",
    image: "../../img/male1.png",
    serif: [
      "小澤 一輝です！よろしくお願いします",
      "朝学校来る時に電車寝過ごして川崎に行っちゃった...",
      "アペックスやる？",
      "音ゲーが好きです！",
      "同じ高校出身の人クラスに三人居るよ、頑張って探してください",
    ],
  },
  //   11
  {
    fullname: "オスマン スアド",
    name: "スアド",
    image: "../../img/female1.png",
    serif: [
      "オスマン スアドです！ウクライナ出身です！よろしくお願いします",
      "好きな食べ物、特にないかも",
    ],
  },
  //   12
  {
    fullname: "加瀬 俊太",
    name: "加瀬",
    image: "../../img/male1.png",
    serif: [
      "加瀬 俊太です！よろしくお願いします",
      "ポケモンが好きです！",
      "一蘭行かない（このクラスに一蘭が好きな人が多いね）？",
      "同じ高校出身の人クラスに三人居るよ、頑張って探してください",
    ],
  },
  //   13
  {
    fullname: "神田 祐歌",
    name: "神田",
    image: "../../img/female2.png",
    serif: [
      "神田 祐歌です！よろしくお願いします",
      "毎日2Lの水飲んでいます！",
      "色彩検定二級受けるのは私一人しかないか...",
    ],
  },
  //   14
  {
    fullname: "熊谷 琉二",
    name: "熊谷",
    image: "../../img/male1.png",
    serif: [
      "熊谷 琉二です！よろしくお願いします",
      "深い話が得意です",
      "留学生大好きですね",
      "二郎ラーメンが好き",
      "学校初日に遅刻しちゃって公開処刑された",
    ],
  },
  //   15
  {
    fullname: "江 瀾",
    name: "江",
    image: "../../img/female1.png",
    serif: [
      "江 瀾（こう　らん）です！よろしくお願いします",
      "日本の果物系のお酒が好き！",
      "格闘が好き、やる？",
      "キックボクシングやっている、筋肉痛！",
    ],
  },
  //   16
  {
    fullname: "斉藤 衣織",
    name: "斉藤",
    image: "../../img/male1.png",
    serif: [
      "斉藤 衣織です！よろしくお願いします",
      "朝霞住んでいる、遠くない？",
      "俺の自慢の推し１位：常闇トワ",
      "俺の自慢の推し１位：常闇トワ",
      "俺の自慢の推し１位：常闇トワ",
      "俺の自慢の推し２位：天音かなた",
      "俺の自慢の推し２位：天音かなた",
      "俺の自慢の推し３位：AZKI",
      "俺の自慢の推し４位：兎田ぺこら",
      "俺の自慢の推し５位：星街すいせい",
      "さいとうが三人居るけどみんなの漢字がそれぞれ",
    ],
  },
  //   17
  {
    fullname: "齊藤 音吹",
    name: "齊藤",
    image: "../../img/male2.png",
    serif: [
      "齊藤 音吹です！よろしくお願いします",
      "元気でね",
      "css何点くらい取れると思う？俺３点だよ(満点50点)",
      "写真素材が欲しい！どうぞ！",
      "高校時代陸上部でした！",
      "まずい！まずすぎる！まずい！(食べ続けている)",
      "長野佐久市の出身です！",
      "おれのインスタ100いいね来た、有名人になるかも",
      "さいとうが三人居るけどみんなの漢字がそれぞれ",
    ],
  },
  //   18
  {
    fullname: "齋藤 栞",
    name: "齋藤",
    image: "../../img/female1.png",
    serif: [
      "齋藤 栞です！よろしくお願いします",
      "オムライスが好きです！",
      "桜坂46が好きです！",
      "さいとうが三人居るけどみんなの漢字がそれぞれ",
    ],
  },
  //   19
  {
    fullname: "佐藤 優介",
    name: "佐藤",
    image: "../../img/male1.png",
    serif: [
      "佐藤 優介です！よろしくお願いします",
      "俺がうるさい？（うるさいかも）",
      "しわしわに～萎れた花束小わきに抱えて",
      "ケセラセラ　今日も唱える　限界？上等　やってやろうか？",
      "耳障りな演説が頭の中で響いてる",
    ],
  },
  //   20
  {
    fullname: "",
    name: "",
    image: "",
    serif: "",
  },
  //21空き
  {
    fullname: "ジィン ウィン リー",
    name: "リー",
    image: "../../img/female1.png",
    serif: [
      "ジィン ウィン リーです！ミャンマー出身です！よろしくお願いします",
      "料理を作るのが好き！",
      "日本に来る前にn1合格したよ",
      "スイスフラン行きたい！",
      "最近コーラ飲み過ぎかも",
    ],
  },
  //   22
  {
    fullname: "塩澤 桃佳",
    name: "塩澤",
    image: "../../img/female1.png",
    serif: [
      "塩澤 桃佳です！よろしくお願いします",
      "たこ焼きが好きです",
      "バイクでキャンプ行きたいな",
    ],
  },
  //   23
  {
    fullname: "清水 北斗",
    name: "清水",
    image: "../../img/male3.png",
    serif: [
      "清水 北斗です！よろしくお願いします",
      "Jsの課題あと少しか",
      "同じ高校出身の人クラスに三人居るよ、頑張って探してください",
      "ポケモンやる？",
    ],
  },
  //   24
  {
    fullname: "沈 霸",
    name: "沈",
    image: "../../img/male3.png",
    serif: [
      "沈 霸（シン　ハ）です！中国出身です！よろしくお願いします",
      "中国に居たときに配達の店を作った",
      "デザインのツールとかいっぱい知ってる",
      "7号館の向こうの中華料理屋さんは450円の定食売ってるよ、やすいし、うまいし、おすすめです",
      "飲みに行かない？私がバイトしてる店行こうよ",
    ],
  },
  //   25
  {
    fullname: "ス ヤダナー ライ",
    name: "スー",
    image: "../../img/female1.png",
    serif: [
      "ス ヤダナー ライです！ミャンマー出身です！よろしくお願いします",
      "日本の音楽と映画が好き！",
      "寿司大好き！",
      "毎朝電車にクラスメイトと遭遇しているwww",
      "お菓子食べる？ここなら大丈夫だよ",
    ],
  },
  //   26
  {
    fullname: "徐 銀逵 ",
    name: "ソ",
    image: "../../img/female1.png",
    serif: [
      "徐 銀逵(ソ　ウンギュ)です！よろしくお願いします",
      "生きろ。そなたは...ほら...あれだ！",
      "公民館行きたい",
      "焼きホルモンが好きです！",
    ],
  },
  //   27
  {
    fullname: "田本 龍之助",
    name: "田本",
    image: "../../img/male1.png",
    serif: [
      "田本 龍之助です！よろしくお願いします",
      "沖縄出身です！ハーフじゃないです！",
    ],
  },
  //   28
  {
    fullname: "チョー ニャン リン",
    name: "リン",
    image: "../../img/male2.png",
    serif: [
      "チョー ニャン リンです！ミャンマー出身です！よろしくお願いします",
      "お酒大好き！！！（仲間求む）",
      "眠い...帰りたい",
      "サッカーやる？やらない？",
    ],
  },
  //   29
  {
    fullname: "陳 麗而",
    name: "陳",
    image: "../../img/female2.png",
    serif: [
      "陳 麗而（チン　リア）です！台湾出身です！よろしくお願いします",
      "リアって呼んでください",
      "いちごが好きです！",
      "絵を描くことが好きです！イラストの授業楽しい",
    ],
  },
  //   30
  {
    fullname: "中田 大暉",
    name: "中田",
    image: "../../img/male1.png",
    serif: [
      "中田 大暉です！よろしくお願いします",
      "ブルーチーズが好き",
      "家に着くまで二時間かかる、遠いね",
      "小説書いたかったからwebライターなりたい",
    ],
  },
  //   31
  {
    fullname: "平井 晴奈",
    name: "平井",
    image: "../../img/female1.png",
    serif: [
      "平井 晴奈です！よろしくお願いします",
      "目玉焼きがすきです！",
      "マリオパーティやらない？",
    ],
  },
  //   32
  {
    fullname: "藤田 香織",
    name: "藤田",
    image: "../../img/female1.png",
    serif: [
      "藤田 香織です！よろしくお願いします",
      "adoの新曲聞いた？",
      "ホラーが好きです！今度お化け屋敷行きましょう！",
      "実際はフィリピン出身です！",
    ],
  },
  //   33
  {
    fullname: "前山 渉",
    name: "前山",
    image: "../../img/male2.png",
    serif: [
      "前山 渉です！よろしくお願いします",
      "はい皆さんこんにちは～！",
      "今日は日専祭制作チームの打ち合わせがありそうね！",
      "新潟出身です、それのおかげ今クラスに住んでるところが一番学校に近いかも",
      "銀たこが好き、このクラスに銀たこが好きの人が多いね",
    ],
  },
  //   34
  {
    fullname: "宮本 怜",
    name: "宮本",
    image: "../../img/male1.png",
    serif: [
      "宮本 怜です！よろしくお願いします",
      "トイレは...悪くはないね、わかる？",
      "今日はすーぴんじゃないです！",
      "自然の田舎が好き",
      "スシロー高いなー、でも行く",
    ],
  },
  //   35
  {
    fullname: "村田 拓未",
    name: "村田",
    image: "../../img/male1.png",
    serif: [
      "村田 拓未です！よろしくお願いします",
      "ソフトテニスやる？",
      "２３歳です！大学卒業の後に来た",
    ],
  },
  //   36
  {
    fullname: "目黒 陽生",
    name: "目黒",
    image: "../../img/male3.png",
    serif: [
      "目黒 陽生です！よろしくお願いします",
      "やぎせんもできなかったらどうしようもないじゃん(やぎせん＝青柳先輩)",
      "position使いすぎてとんでもないバグが出てきた",
      "俺わからないけどよく走るのがかわいいって言われる",
    ],
  },
  //   37
  {
    fullname: "矢代 敦大",
    name: "矢代",
    image: "../../img/male1.png",
    serif: [
      "矢代 敦大（やしろ　あつひろ）です！よろしくお願いします",
      "企画楽しいね",
      "夏休み勉強をしながら遊ぼうー",
      "今日はお湯泥棒を、、しません！ちゃんと飲み物買ったから",
      "ファミマ？まいば？",
      "ほうじ茶飲む？",
    ],
  },
  //   38
  {
    fullname: "山田 羽根",
    name: "山田",
    image: "../../img/male3.png",
    serif: [
      "山田 羽根（つばさ）です！よろしくお願いします",
      "今日もコロッケ６個食べた！うまかった！",
      "今日もコロッケ６個食べた！うまかった！",
      "今日もコロッケ６個食べた！うまかった！",
      "なんでお湯がないの",
      "課題マジやばいかも、バイト休み取ったら店長に怒られそうどうしよう",
    ],
  },
  //   39
  {
    fullname: "籃 予彤",
    name: "籃",
    image: "../../img/female1.png",
    serif: [
      "籃 予彤（ラン　ユ　トン）です！台湾出身です！よろしくお願いします",

      "デザイン楽しい、コーディング大嫌い...(しかもcss満点)",
      "今日はどこのカフェ行こうかな",
    ],
  },
  //   40
  {
    fullname: "李　軍宇",
    name: "李(リ)",
    image: "../../img/male1.png",
    serif: [
      "李　軍宇（リ　グンウ）です！中国出身です！よろしくお願いします",

      "今日は日専祭制作チームの打ち合わせがありそうね！",
      "ファミマの塩むすびは三日連続売り切れちゃって買えなかった最悪",
      "入学後最初の資格テストは色彩検定ですね、落ちたら色盲検定受かった説もあるけど",
      "全然絵描いたことないおれにはイラストの授業はマジ地獄www、すごい成長になったけど",
    ],
  },
  //   41
  {
    fullname: "刘 佩玉",
    name: "劉",
    image: "../../img/male2.png",
    serif: [
      "刘 佩玉(リュウ　ハイギョク)です！中国出身です！よろしくお願いします",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
      "最近毎日(めいにち)一蘭食べている",
      "毎日は毎日、命日は命日、命日一個コンテンツはいらない",
      "大学卒業した時業界トップの企業入ったよ",
      "この名前はよく女の子に間違えられた...100％の男です！",
      "k-popのmvはほぼ全部見たことある..",
    ],
  },
  //   42
  {
    fullname: "高橋 快人",
    name: "高橋",
    image: "../../img/male3.png",
    serif: [
      "高橋 快人です！よろしくお願いします",
      "学籍番号は五十音順だけど43番です",
      "どこの出身ですか？",
      "体調クソだな...眠い",
      "長野出身です！遠いかも",
    ],
  },
  //   43
  // 最初のところが空いている、それで番号と人と対応できる
];
const nakayoshi = [];
//仲良しさんチームの組み合わせ
const whiteboard = [
  "../../img/whiteboard1.png",
  "../../img/whiteboard1.png",
  "../../img/whiteboard3.png",
  "../../img/whiteboard4.png",
  "../../img/whiteboard5.png",
  "../../img/whiteboard6.png",
  "../../img/whiteboard7.png",
];
//写真素材はまだ揃っていない-------------------------------------7.17
//whiteboardにあるランダム要素

//重複なしの数字生成する
window.onload = function loadIn() {
  //教室の各要素を読み込む
  const currentStudent = [...document.querySelectorAll(".life-mock-img")]; //ランダム学生を受け取る
  const currentName = [...document.querySelectorAll(".life-mock-name")]; //ランダム学生の背中の名前を受け取る
  const currentNum = document.querySelector(".life-mock-serif-num"); //出てきた学生の数
  const serifName = document.querySelector(".life-mock-serif-name"); //ランダム学生の台詞の名前fullname,押したら表示させるもの
  const serifText = document.querySelector(".life-mock-serif-text"); //ランダム学生の台詞
  //ランダム学生のルールを決める
  whiteboardRandom();
  document
    .querySelector(".life-mock-switch")
    .addEventListener("click", mockSwitch); //switch暗くなる機能を与える
  const currentRule = Math.floor(Math.random() * 10 + 1);
  // if (currentRule <= 12) {
  //今仲良しがないから全部randomにする、作れたから４/10にする------------------------------
  let randomUX = createNums(8);
  // } else {
  //   const randomUX = selectNakayoshi();
  // }
  randomUX = randomUX.filter((item) => item !== 21);
  currentNum.innerText = randomUX.length;
  console.log(randomUX);
  if (randomUX.includes(41) || randomUX.includes(18)) {
    document.querySelector(".life-mock-game-switch").style.display = "block";
  } else {
    document.querySelector(".life-mock-game-switch").style.display = "none";
  }
  //41,18番の人が居るならおみくじ引ける
  document
    .querySelector(".life-mock-game-switch-button")
    .addEventListener("click", function () {
      document.querySelector(".omikuji").style.display = "block ";
      document.querySelector(".life-mock-gamewindow-text").style.display =
        "none ";
      document.querySelector(".life-mock-game-switch-button").style.display =
        "none ";
    });
  //ボタン押したらボタンが消える、おみくじが出る
  let serifNow = [];
  for (let i = 0; i < randomUX.length; i++) {
    currentStudent[i].src = students[randomUX[i]].image;
    currentName[i].innerHTML = students[randomUX[i]].name;
    serifNow.push({
      fullname: students[randomUX[i]].fullname,
      serif: students[randomUX[i]].serif,
    });
    currentStudent[i].addEventListener("click", function () {
      serifName.innerText = serifNow[i].fullname;
      const x = Math.floor(Math.random() * serifNow[i].serif.length);
      serifText.innerText = serifNow[i].serif[x];
      document.querySelector(".life-mock-game-switch").style.display = "none";
    });
  }
  console.log(serifNow);
};
function createNums(y) {
  const randomArray = [];
  let randomU = [];
  for (let i = 0; randomU.length < y; i++) {
    const studentsR = Math.floor(Math.random() * 43 + 1);
    randomArray[i] = studentsR;
    randomU = Array.from(new Set(randomArray));
  }
  return randomU;
}
//完全にランダムで42人が出てくる
//21番が空いている
function selectNakayoshi() {}
//仲良しさんチームが出てくる
function mockSwitch() {
  const classRoom = document.querySelector(".life-mock-classroom");
  classRoom.style.opacity = "0.15";
  document.querySelector(".life-mock-serif-name").innerText = "みんな：";
  document.querySelector(".life-mock-serif-text").innerText = "えー？？？？";
  document.querySelector(".life-mock-game-switch").style.display = "none";
  setTimeout(() => {
    classRoom.style.opacity = "0.3";
  }, 2500);
  setTimeout(() => {
    classRoom.style.opacity = "1";

    document.querySelector(".life-mock-serif-name").innerText =
      document.querySelector(".name2").innerText;
    document.querySelector(".life-mock-serif-text").innerText =
      "人がいるときに教室の照明を消さないでください！先生に怒られちゃうよ！！！";
  }, 3500);
}
//教室にあるswitchを押したら5秒くらい暗くなる
function whiteboardRandom() {
  const whiteboardCurrent = Math.floor(Math.random() * whiteboard.length);
  document.querySelector(".life-mock-whiteboardimg").src =
    whiteboard[whiteboardCurrent];
}
//whiteboardの内容がランダムで変更する、教室に入る時に読み込む

function omikuji() {
  const img = document.querySelector(".omikuji-img");
  const resultText = document.querySelector(".omikuji-text");
  const num = Math.floor(Math.random() * 100 + 1);
  const btn = document.querySelector(".omikuji-btn");
  resultText.style.top = "230px";
  if (num <= 10) {
    img.src = "../../img/omikuji2.png";
    resultText.innerText = "今日の運勢は大吉です！";
  } else if (num <= 30) {
    img.src = "../../img/omikuji3.png";
    resultText.innerText = "今日の運勢は中吉です！";
  } else if (num <= 50) {
    img.src = "../../img/omikuji4.png";
    resultText.innerText = "今日の運勢は末吉です！";
  } else if (num <= 80) {
    img.src = "../../img/omikuji5.png";
    resultText.innerText = "今日の運勢は小吉です！";
  } else if (num <= 88) {
    img.src = "../../img/omikuji6.png";
    resultText.innerText = "今日の運勢は凶です！";
  } else {
    img.src = "../../img/omikuji1.png";
    resultText.innerText = "今日の運勢はいぶきです！いぶきを押して見て！";
    img.addEventListener("click", function () {
      document.querySelector(".omikuji").style.display = "none";
      document.querySelector(".omikuji-video").style.display = "block";
    });
  }
  btn.style.display = "none";
}
