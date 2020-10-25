const quiz = [
    {
        question: "乃木坂で最もセンターの経験があるの人物は次の内どれ？",
        answers: [
            "秋元 真夏",
            "生田 絵梨花",
            "白石 麻衣",
            "斎藤 飛鳥"
        ],
        correct: "白石 麻衣"
    },{
        question: "次の人物の内、乃木坂2期生なのはだれ？",
        answers: [
            "堀 未央奈",
            "岩本 蓮加",
            "樋口 日奈",
            "星野 みなみ"
        ],
        correct: "堀 未央奈"
    },{
        question: "次の人物の内、私の一推しはだれ？",
        answers: [
            "久保 史緒里",
            "斎藤 飛鳥",
            "高山 一実",
            "星野　みなみ"
        ],
        correct: "久保 史緒里"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
// 正解数
let score =0;


//「$」でHTMLのオブジェクトが入ってることが理解しやすい
const $button = document.getElementsByTagName("button")
let buttonLength = $button.length;


//クイズの問題文,選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}


setupQuiz();
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解!")
        score++;
    }else{
        window.alert("不正解!")
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        window.alert("終了! あなたの正解数は" + score + "/" + quizLength +"です!");
    }
};



//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handleIndex++;
}





