var carousel = document.getElementsByClassName('carousel')[0], //獲取carousel的class類
			// 獲取所有包含圖片的鏈接
			innerImg = document.getElementsByClassName('inner-img'),
			// 獲取左右按鈕
			btnL = document.getElementsByClassName('leftBtn')[0],
			btnR = document.getElementsByClassName('rightBtn')[0],
			// 獲取分頁器
			page = document.getElementsByClassName('page'),
			num = 0; // 宣告變數 初始圖片為第一張0
		// 宣告時間控制函式
		var timer = setInterval(moveR, 2500); //呼叫moveR 時間間隔2.5s 
		// 圖片向右輪播
		function moveR() {
			num++; // 變數每3000毫秒遞增一次,圖片向右輪播
			// 如果是最后一張圖片的時候從0開始顯示
			if(num == innerImg.length) {
				num = 0;
			}
			move();
		};
		// 圖片向左輪播
		function moveL() {
			num--; // 每呼叫一次moveL(),變數遞減一次
			// 如果是第一張圖片，則從最后一張圖片開始顯示
			if(num == -1) {
				num = innerImg.length - 1;
			};
			move();
		}　　　　 // 圖片切換
		　　
		function move() {　　　　 // 把所有的innerImg隱藏和page背景全部變成黑色
			for(var i = 0; i < innerImg.length; i++) {
				innerImg[i].style.display = 'none';
				page[i].style.background = 'black';
			}
			// 把當前num下標的innerImg顯示和page背景變成red
			innerImg[num].style.display = 'block';
			page[num].style.background = 'red';　　
		}

		// 分頁器滑鼠滑過時圖片切換
		for(var i = 0; i < page.length; i++) {
			// 用來保存下標，page[i].index == 0 / 1 / 2 / 3 /4...
			page[i].index = i;
			// console.log(page[i].index);
			// 因為已經保存好的下邊，這里的page[i], page[0], page[1], page[2], page[3]
			page[i].onmouseover = function() {
				for(var j = 0; j < page.length; j++) {
					page[j].style.background = 'black';
					innerImg[j].style.display = 'none';
				}
				this.style.background = 'red';　　　　　　　 // console.log(this.index);可以查看是多少
				innerImg[this.index].style.display = 'block';
				num = this.index;
			}
		}
		btnL.onclick = function() {
			moveL();
		}
		btnR.onclick = function() {
			moveR();
		}

		// 滑鼠劃上carousel時讓左右按鈕顯示 并清除時間函式 
		carousel.onmouseover = function() {
			// 清除時間函式
			clearInterval(timer); //暫停 圖片不繼續回圈
			btnR.style.display = 'block';
			btnL.style.display = 'block';
		}

		// 滑鼠離開carousel時讓左右按鈕隱藏
		carousel.onmouseout = function() {
			// 開啟時間函式
			timer = setInterval(moveR, 2500);
			btnR.style.display = 'none';
			btnL.style.display = 'none';
		}