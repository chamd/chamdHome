let script = [
    "안녕!",
    "반가워!",
    "이 게임은 테스트 게임이야!",
    "너는 정말 행운아야!",
    "이 게임을 플레이 해줘서 정말 고마워!",
    "* 정말 아름다운 날이야.",
    "* 새들은 지저귀고,          꽃들은 피어나고...",
    "* 이런 날엔,      너같은 꼬마들은...",
    "* 지옥에서 불타야 해."
]
let textSpeed = 60;
let nowText = 0;

function nextText() {
    if (nowText == 5) {
        textSpeed = 80;
        document.body.style.backgroundColor = 'black';
        document.getElementById('img').src = 'img/sans.gif'
        document.getElementById('img').style.width = '500px'
        document.getElementById('img').style.top = '20px'
        document.getElementById('img').style.left = 'calc(50% - 250px)'
        document.getElementById('textBox').style.backgroundColor = 'black'
        document.getElementById('textBox').style.border = '10px solid white'
        document.getElementById('textBox').style.borderRadius = '0px'
        document.getElementById('textBox').style.color = 'white'
    }

    if (nowText == 8) {
        textSpeed = 200;
    }
    let splitedText = script[nowText].split('');
    console.log(splitedText);
    document.getElementById('next').style.display = 'none';
    document.getElementById('textBox').innerHTML = '';
    for (let i = 0; i < splitedText.length; i++) {
        setTimeout(() => {
            document.getElementById('textBox').innerHTML += splitedText[i];
        }, i * textSpeed);   
    }
    setTimeout(() => {
        document.getElementById('next').style.display = 'block';
    }, splitedText.length * textSpeed);
    nowText ++;
}

nextText();