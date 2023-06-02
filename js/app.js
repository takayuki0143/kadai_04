
var x, y ,r;
var stopDrawingFlag = false;

function setup(){
    // 最初に1回だけ実行される処理
    createCanvas(1500, 1000);

    noStroke();
    background(random(0,255),random(0,255),random(0,255));
}


function draw(){
    // そのあと繰り返し実行される処理
if (!stopDrawingFlag){
    x = random(width); 
    y = random(height);
  
    if(random() > 0.9){
      r = random(50, 80);
    }else {
      r = random(10, 30);
    }
    fill(random(0,255), random(0,255), random(0,255), random(30,250));
    ellipse(x, y, r, r); 
    } 
}


function stopDrawing() {
    stopDrawingFlag = true; // 描画フラグをtrueに設定
  }

  function restartDrawing() {
    stopDrawingFlag = false; // 描画フラグをfalseに設定
  }

  //クリックした回数によってlocalstrageに保存される
  let clickCount = 0;
  function saveDrawing() {
    saveCanvas('myCanvas', 'png', 'drawing.png'); // Canvasを画像として保存する
    clickCount ++;
    let click = clickCount;
    console.log(click);
    var canvas = document.getElementById('defaultCanvas0'); // Canvas要素を取得
    canvas.toBlob(function (blob) {
      var reader = new FileReader();
      reader.onloadend = function () {
        var base64Image = reader.result;
        localStorage.setItem('capturedImage'+ click , base64Image);
      };
      reader.readAsDataURL(blob);
    });
  }

  function clearDrawing(){
    localStorage.clear();
  }


  function appearDrawing(){
    clickCount ++;
    let click = clickCount;
    var capturedImage = localStorage.getItem('capturedImage' + click);

    // 新しい img 要素を作成し、src 属性に capturedImage を設定
    let img = document.createElement('img');
    img.src = capturedImage;
    // img 要素を appear 要素に追加
    document.body.appendChild(img);
  }
