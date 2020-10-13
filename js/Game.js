/*  
	version:v1.0,
	developer:Xu.js,


*/
class Game{
	constructor(page){
		if(arguments[0] == ""){
			console.log("")
		}
		this.ISstart = false;
		this.count = 0
		this.canvas = document.querySelector(page.id);
		//上下文
		this.ctx = this.canvas.getContext("2d");
			
		this.gameinfo = document.querySelector(page.game);	
	
		this.init();
		this.start();
		
		this.counts = this.map.length-1;
		this.col = 0;
		//小方塊大小
		this.size = 20;
		//分数
		this.point = 0;
		this.points = 5;
		this.initType()
		//速度
		this.speed = 100;
		
		this.initType()
		this.color;
		this.g = 1;
	}
	initType(){

		//形状:随机选中；为了足够鲁棒随机数max取数组长度,取范围值公式 随机数*(max-min)+min
		this.blockType = parseInt(Math.random()*(this.blockall.blockGatherX.length-0)+0);
		//随机变形参数
		this.direction = parseInt(Math.random()*(4-0)+0);

	}
	//开始
	Event(){
		this.ISstart = true;
	
	}

	//初始化
	init(){
		
		this.map = [];
		//自动生成地图
		for(var i=0;i<20;i++){
			for(var j=0;j<12;j++){
				//this.map[i][j] = 0;	
			}
		}
		


		//测试地图
		this.map = [
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0]
		]
			
		
		
		//this.ctx.fillStyle = "rgba(111,222,100,1)"
		//this.ctx.fillRect(10,10,10,10);
		this.ctx.strokeStyle = "rgb(255, 255, 255)"
		this.canvas.width = 320;
		this.canvas.height = 400;
		this.idxs = 0;
		this.row = this.map.length-1;

		//游戏结束
		this.overGame = false;
		this.blockall = new BlockAll();

		
	}
	//游戏结束检测
	overgame(){
        //游戏结束算法
		for(var i = 0;i<this.map[this.row].length;i++){
			if(this.map[this.row][i] == 1){
				for(var j=this.row;j>=0;j--){
					if(this.map[this.row][i] == 1){
						this.idxs++;
						this.row != 0 ? this.row--:0
					}
					if(this.idxs == 20){
						this.overGame = true;
						//this.ctx.fillStyle = "rgba(111,222,333,0.5)"
						//this.ctx.fillRect(15,160,200,80)
						//this.ctx.font = "30px 微软雅黑"
						//this.ctx.fillStyle = "red"
						//this.ctx.fillText("Gameover!",40,210)
						this.gameinfo.style.top = "50%";
					}else if(this.idxs > 20){
						this.idxs = 0
					}
				}
			}
		}
	
	}
	
	
	//資源配置
	dataAllLoad(){
		
	}
	nextBlock(col,row){
			game.ctx.fillStyle = this.blockall.blockGatherX[this.blockall.color][4].color;
			game.ctx.fillRect(this.blockall.blockGatherX[this.blockall.blockType][this.blockall.direction].x0*11+245,this.blockall.blockGatherY[this.blockall.blockType][this.blockall.direction].y0*11+150,10,10);
			game.ctx.fillRect(this.blockall.blockGatherX[this.blockall.blockType][this.blockall.direction].x1*11+245,this.blockall.blockGatherY[this.blockall.blockType][this.blockall.direction].y1*11+150,10,10);
			game.ctx.fillRect(this.blockall.blockGatherX[this.blockall.blockType][this.blockall.direction].x2*11+245,this.blockall.blockGatherY[this.blockall.blockType][this.blockall.direction].y2*11+150,10,10);
			game.ctx.fillRect(this.blockall.blockGatherX[this.blockall.blockType][this.blockall.direction].x3*11+245,this.blockall.blockGatherY[this.blockall.blockType][this.blockall.direction].y3*11+150,10,10);
	
	}
	
	//开始渲染
	start(){
		var self = this;
		
		this.time = setInterval(()=>{

			if(self.overGame) return;
			
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height)
			
			
			
			self.ctx.strokeStyle = "rgb(255, 255, 255)";
			self.ctx.strokeRect(0,0,self.canvas.width-80,self.canvas.height);
			
			self.ctx.fillStyle = "white";
			self.ctx.font = "14px 微软雅黑"
			
			//self.ctx.fillText("当前分数",255,20)
			self.ctx.fillText(self.point,280,50)
			//self.ctx.fillText("第 "+self.g+" 关",255,70)
			self.ctx.fillText("next block",251,100)
			//下一組
			//self.nextBlock();
			//self.color = self.blockall.blockGatherX[self.blockall.blockType][4].color;
			self.ctx.fillStyle = "rgb(0, 136, 255)";
			//渲染this.map
			for(var row =0;row < self.map.length;row++){
				for(var col=0;col < self.map[row].length;col++){
					if(self.map[row][col] == 1){
						
						
						self.idx++;
						
						self.ctx.strokeStyle = "rgba(0,0,0,.7)";
						
						self.ctx.strokeRect(col*self.size,row*self.size,self.size,self.size)
						self.ctx.fillStyle = "rgb(0, 136, 255)";
						self.ctx.fillRect(col*self.size,row*self.size,self.size,self.size);
					}
					

					
						
				}
				
				
				
				//消除算法
				if(self.map[row][0] == 1){
				self.idxl = 0;
				self.map[row].forEach((item,index,v)=>{
					this.idxl += item;
					if(self.idxl == self.map[0].length){
						for(var i=0;i<self.map[row].length;i++){
							self.map[row][i] = 0;
						}
						self.map.splice(row,1);

						console.log('可以清除了')
						//消除加分
						self.point += self.points;
						self.map.unshift([0,0,0,0,0,0,0,0,0,0,0,0]);
					}
					
					
				})
				
				}
			}
			
			//是否开始
			if(!self.ISstart) return;
			//游戏结束检测
			self.overgame();
			//开始渲染方块
			self.blockall.render();
			//游戏等级
			if(this.point >= 200){
				self.speed = 200;
				self.points = 2;
				self.g = 2
			}else if(this.point >= 450){
				self.speed = 300;
				self.points = 4;
				self.g = 3
			}else if(this.point >= 600){
				self.speed = 400;
				self.points = 5;
				self.g = 4
			}else if(this.point >= 1000){
				self.speed = 500;
				self.points = 8;
				self.g = 5
			}
			//小方格
			/*for(var i=0;i<200;i++){
				for(var j=0;j<120;j++){
					self.ctx.strokeRect(j*10,i*10,10,10)
				}
			}*/
			
			
			
		},50)
	}

}
