let wWorld;
let wIsDrawing = false;
let wIsLoading = 0;
let wPlayerPos = 0;
let wStep = 0.25;

let wPaths = {
	"res": "./res/"
}

function wLoad(number){
fetch(wPaths.res + "levels.json")
    .then(res => res.json())
    .then(res => {
		wWorld = res.worlds[number];
    })
    .then(res => {
		wIsLoading = 1;
		})
}

function wDraw(){
const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");
let wTile = -1;
for (let i = 0; i < wWorld.size.height; i = i + 1) {
	for (let x = 0; x < wWorld.size.width; x = x + 1) {
		wTile ++;
		wWorld.types.forEach((element) => {
			if (element.number == parseInt(wWorld.board[wTile])){
				if (element.type == "color"){
					ctx.fillStyle = element.res;
				    ctx.fillRect(x*wWorld.size.box, i*wWorld.size.box, wWorld.size.box, wWorld.size.box);
				} else if (element.type == "image") {
					const image = new Image(32,32);
					image.src = wPaths.res + element.res;
				    ctx.drawImage(image, x*wWorld.size.box, i*wWorld.size.box, wWorld.size.box, wWorld.size.box);
				}		
			}
		});	
	}
}
}
function wPlayer(){
const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");
const image = new Image(32,32);
image.src = wPaths.res + wWorld.player.res;
ctx.drawImage(image, wWorld.player.x*wWorld.size.box, wWorld.player.y*wWorld.size.box, wWorld.size.box, wWorld.size.box);
}

function wRender(){
	if (wIsLoading == 1){
	wDraw();
	wPlayer();
	}
	requestAnimationFrame(wRender);
}
async function wMove(e){
	e.preventDefault();
	if (e.code == "ArrowDown" && wWorld.player.y+1 < wWorld.size.height){
			wWorld.player.y++;
	} else if (e.code == "ArrowUp" && wWorld.player.y > 0){
					wWorld.player.y--;
	} else if (e.code == "ArrowLeft" && wWorld.player.x > 0){
					wWorld.player.x--;
	}  else if (e.code == "ArrowRight" && wWorld.player.x+1 < wWorld.size.width){
					wWorld.player.x++;
	} 
}
wLoad(0);
addEventListener("keydown", wMove);
wRender();
