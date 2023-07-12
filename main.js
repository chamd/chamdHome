let isSans = false;
let count = 0;
let isUpgrade = false;

function changeSans() {
    if (!isUpgrade) {
        if (!isSans) {
            document.getElementById('img').src = 'img/sans.png'
            isSans = true;
        } else if (isSans) {
            document.getElementById('img').src = 'img/cube.png'
            isSans = false;
        }
    }
    count ++;
    document.getElementById('count').innerHTML = count;
}

function buyCube() {
    if (count >= 30) {
        count -= 30;
        isUpgrade = true;
        document.getElementById('img').src = 'img/upgradecube.jpg'
        document.getElementById('count').innerHTML = count;
    }
}