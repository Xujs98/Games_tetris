class BlockAll{
	constructor(speed,type,direction){
		this.init();
		this.monitor();
		if(arguments.length == 0){
			this.initType()
		}else{
			this.speed = speed;
			this.blockType = type;
			this.direction = direction
		}
		
		this.monitor();
		//顏色
		this.color = 0;
		this.size = 20;

		
		this.speeds = 1;
		
		
		

	}
	initType(){
		//方块下落速度
		this.speed = 100;
		//方块类型:  
		this.blockType = parseInt(Math.random()*(this.blockGatherX.length-0)+0);
		//变形参数
		this.direction = parseInt(Math.random()*(4-0)+0);
		
	}
	//初始化
	init(){
		this.random = parseInt(Math.random()*(9-1)+1);
		this.blockGatherX = [];
		this.blockGatherY = [];
		this.blockAllResource();
		
		
		//是否清楚
		this.eliminate = false;
		this.locks = true;
		this.lock = true;
		
	}	

	//资源集合
	blockAllResource(){
	//L1型
	this.L1x = [
		{"x0":0+this.random,"x1":1+this.random,"x2":1+this.random,"x3":1+this.random},
		{"x0":2+this.random,"x1":0+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":1+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":2+this.random,"x3":0+this.random},
		{"color":"rgba(50, 133, 205)"}
	]
	this.L1y = [
		{"y0":0,"y1":0,"y2":1,"y3":2},
		{"y0":0,"y1":1,"y2":1,"y3":1},
		{"y0":0,"y1":1,"y2":2,"y3":2},
		{"y0":1,"y1":1,"y2":1,"y3":2}
	]
	//L2
	this.L2x = [
		{"x0":0+this.random,"x1":1+this.random,"x2":0+this.random,"x3":0+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":2+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":1+this.random,"x2":0+this.random,"x3":1+this.random},
		{"x0":0+this.random,"x1":0+this.random,"x2":1+this.random,"x3":2+this.random},
		{"color":"rgb(45, 226, 182)"}
	]
	this.L2y = [
		{"y0":0,"y1":0,"y2":1,"y3":2},
		{"y0":1,"y1":1,"y2":1,"y3":2},
		{"y0":0,"y1":1,"y2":2,"y3":2},
		{"y0":0,"y1":1,"y2":1,"y3":1}
	]
	//T型
	this.Tx = [
		{"x0":1+this.random,"x1":0+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":1+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":2+this.random,"x3":1+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":1+this.random,"x3":1+this.random},
		{"color":"rgb(226, 45, 45)"}
	]
	this.Ty = [
		{"y0":0,"y1":1,"y2":1,"y3":1},
		{"y0":0,"y1":1,"y2":2,"y3":1},
		{"y0":1,"y1":1,"y2":1,"y3":2},
		{"y0":1,"y1":0,"y2":1,"y3":2}
	]

	//I型
	this.Ix = [
		{"x0":0+this.random,"x1":0+this.random,"x2":0+this.random,"x3":0+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":2+this.random,"x3":3+this.random},
		{"x0":0+this.random,"x1":0+this.random,"x2":0+this.random,"x3":0+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":2+this.random,"x3":3+this.random},
		{"color":"rgb(10, 173, 38)"}
	]
	this.Iy = [
		{"y0":0,"y1":1,"y2":2,"y3":3},
		{"y0":1,"y1":1,"y2":1,"y3":1},
		{"y0":0,"y1":1,"y2":2,"y3":3},
		{"y0":1,"y1":1,"y2":1,"y3":1}
	]
	
	//H1型
	this.H1x = [
		{"x0":0+this.random,"x1":0+this.random,"x2":1+this.random,"x3":1+this.random},
		{"x0":1+this.random,"x1":2+this.random,"x2":0+this.random,"x3":1+this.random},
		{"x0":0+this.random,"x1":0+this.random,"x2":1+this.random,"x3":1+this.random},
		{"x0":1+this.random,"x1":2+this.random,"x2":0+this.random,"x3":1+this.random},
		{"color":"rgb(255, 83, 1)"}
	]
	this.H1y = [
		{"y0":0,"y1":1,"y2":1,"y3":2},
		{"y0":0,"y1":0,"y2":1,"y3":1},
		{"y0":0,"y1":1,"y2":1,"y3":2},
		{"y0":0,"y1":0,"y2":1,"y3":1}
	]	

	
	//H2型
	this.H2x = [
		{"x0":1+this.random,"x1":0+this.random,"x2":1+this.random,"x3":0+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":0+this.random,"x2":1+this.random,"x3":0+this.random},
		{"x0":0+this.random,"x1":1+this.random,"x2":1+this.random,"x3":2+this.random},
		{"color":"rgb(237, 241, 5)"}
	]
	this.H2y = [
		{"y0":0,"y1":1,"y2":1,"y3":2},
		{"y0":0,"y1":0,"y2":1,"y3":1},
		{"y0":0,"y1":1,"y2":1,"y3":2},
		{"y0":0,"y1":0,"y2":1,"y3":1}
	]	
	
	//O型
	this.Ox = [
		{"x0":1+this.random,"x1":2+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":2+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":2+this.random,"x2":1+this.random,"x3":2+this.random},
		{"x0":1+this.random,"x1":2+this.random,"x2":1+this.random,"x3":2+this.random},
		{"color":"rgb(103, 6, 210)"}
	]
	this.Oy = [
		{"y0":1,"y1":1,"y2":2,"y3":2},
		{"y0":1,"y1":1,"y2":2,"y3":2},
		{"y0":1,"y1":1,"y2":2,"y3":2},
		{"y0":1,"y1":1,"y2":2,"y3":2},
	]	


	this.blockGatherX.push(this.L1x,this.L2x,this.Tx,this.Ix,this.H1x,this.H2x,this.Ox)
	this.blockGatherY.push(this.L1y,this.L2y,this.Ty,this.Iy,this.H1y,this.H2y,this.Oy)
	


	}
	//事件监听
	monitor(){
		var self = this
		document.onkeydown = function(e){
			
			if(e.keyCode == 38){
				//上
				self.transformation()
			}else if(e.keyCode == 39){
				//右
				self.upright()
			
			}else if(e.keyCode == 40){
				//下
				self.upbottom()
			}else if(e.keyCode == 37){
				//左
				self.upleft()
				
			}
		}
	
	}
	//移除监听
	removeMonitor(){
		document.onkeydown = false;
	}
	//变形
	transformation(){
		if(
			this.blockGatherX[this.blockType][this.direction].x3 <= 0 ||
			this.blockGatherX[this.blockType][this.direction].x2 <= 0 ||
			this.blockGatherX[this.blockType][this.direction].x1 <= 0 ||
			this.blockGatherX[this.blockType][this.direction].x0 <= 0 ||
			this.blockGatherX[this.blockType][this.direction].x3+1 > 11 ||
			this.blockGatherX[this.blockType][this.direction].x2+1 > 11 ||
			this.blockGatherX[this.blockType][this.direction].x1+1 > 11 ||
			this.blockGatherX[this.blockType][this.direction].x0 +1> 11 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x0-1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x2-1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x3-1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x1-1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x0+1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x1+1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x2+1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x3+1] == 1
		){
			return;
		}


		if(this.direction >= 3){
			this.direction = 0
		}else{
			this.direction++;
		}
		
	}
	//左移动
	upleft(){
		if(
			this.blockGatherX[this.blockType][this.direction].x3 > 0 &&
			this.blockGatherX[this.blockType][this.direction].x2 > 0 &&
			this.blockGatherX[this.blockType][this.direction].x1 > 0 &&
			this.blockGatherX[this.blockType][this.direction].x0 > 0 &&    
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x0-1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y1][this.blockGatherX[this.blockType][this.direction].x1-1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y2][this.blockGatherX[this.blockType][this.direction].x2-1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y3][this.blockGatherX[this.blockType][this.direction].x3-1] != 1 

		){
			
			
			this.yidongX(1,this.blockType);
		}else{
			console.log("碰到障碍物了")
		}
	}
	//右移动
	upright(){
		if(
			this.blockGatherX[this.blockType][this.direction].x0 < 11 &&
			this.blockGatherX[this.blockType][this.direction].x1 < 11 &&
			this.blockGatherX[this.blockType][this.direction].x2 < 11 &&
			this.blockGatherX[this.blockType][this.direction].x3 < 11 &&    
			game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x0+1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y1][this.blockGatherX[this.blockType][this.direction].x1+1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y2][this.blockGatherX[this.blockType][this.direction].x2+1] != 1 &&
			game.map[this.blockGatherY[this.blockType][this.direction].y3][this.blockGatherX[this.blockType][this.direction].x3+1] != 1 
 

		){
			
			
			this.yidongX(0,this.blockType);
		}else{
			console.log("碰到障碍物了")
		}
	}
	//下移动
	upbottom(){
		if(!this.locks) return;
		if(
			this.blockGatherY[this.blockType][this.direction].y3 >= 19 ||
			this.blockGatherY[this.blockType][this.direction].y2 >= 19 ||
			this.blockGatherY[this.blockType][this.direction].y1 >= 19 ||
			this.blockGatherY[this.blockType][this.direction].y0 >= 19 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y0+1][this.blockGatherX[this.blockType][this.direction].x0] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y1+1][this.blockGatherX[this.blockType][this.direction].x1] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y2+1][this.blockGatherX[this.blockType][this.direction].x2] == 1 ||
			game.map[this.blockGatherY[this.blockType][this.direction].y3+1][this.blockGatherX[this.blockType][this.direction].x3] == 1
			
			

		){	
			this.lock = false;
			//game地图添加坐标
			this.tomap();
		}else{
			this.yidongY(this.blockType);
		}
		
	}
	
	//Y移动计算
	yidongY(Type){
		if(!this.lock) return;
		for(var k in this.blockGatherY[Type][0]){
			this.blockGatherY[Type][0][k]++;
		}
		for(var k in this.blockGatherY[Type][1]){
			this.blockGatherY[Type][1][k]++;
		}
		for(var k in this.blockGatherY[Type][2]){
			this.blockGatherY[Type][2][k]++;
		}
		for(var k in this.blockGatherY[Type][3]){
			this.blockGatherY[Type][3][k]++;
		}
	
	}
	//X移动计算
	yidongX(number,Type){
		if(number == 0){
			for(var k in this.blockGatherX[Type][0]){
				this.blockGatherX[Type][0][k]++ ;
			}
			for(var k in this.blockGatherX[Type][1]){
				this.blockGatherX[Type][1][k]++;
			}
			for(var k in this.blockGatherX[Type][2]){
				this.blockGatherX[Type][2][k]++;
			}
			for(var k in this.blockGatherX[Type][3]){
				this.blockGatherX[Type][3][k]++;
			}
		}else if(number == 1){
			for(var k in this.blockGatherX[Type][0]){
				this.blockGatherX[Type][0][k]--;
			}
			for(var k in this.blockGatherX[Type][1]){
				this.blockGatherX[Type][1][k]--;
			}
			for(var k in this.blockGatherX[Type][2]){
				this.blockGatherX[Type][2][k]--;
			}
			for(var k in this.blockGatherX[Type][3]){
				this.blockGatherX[Type][3][k]--;
			}
		
		}

	}	

	//game地图添加坐标
	tomap(){
		//停止运动
		this.eliminate = true;
		//坐标追加实例化到地图
		game.map[this.blockGatherY[this.blockType][this.direction].y0][this.blockGatherX[this.blockType][this.direction].x0] = 1;
		game.map[this.blockGatherY[this.blockType][this.direction].y1][this.blockGatherX[this.blockType][this.direction].x1] = 1;
		game.map[this.blockGatherY[this.blockType][this.direction].y2][this.blockGatherX[this.blockType][this.direction].x2] = 1;
		game.map[this.blockGatherY[this.blockType][this.direction].y3][this.blockGatherX[this.blockType][this.direction].x3] = 1;
	}
	//更新
	update(){
		
	
	}
	
	//渲染视图
	render(){
		
		this.speeds += this.speed;
		
		if(this.speeds >= 1000){
			this.speeds = 0;
			if(!this.lock) return;
			this.upbottom();
			
			
		}
		
		if(this.eliminate){
			//game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);
			this.lock = false;
			//拿掉监听
			this.removeMonitor();
			
			game.initType();
			game.blockall = new BlockAll(game.speed,game.blockType,game.direction);
			this.locks = false;
				
		}
		else{	
			var color = this.blockType;
			game.ctx.strokeStyle = "rgb(255, 255, 255)";
			game.ctx.fillStyle = this.blockGatherX[color][4].color;
			game.ctx.fillRect(this.blockGatherX[this.blockType][this.direction].x0*this.size,this.blockGatherY[this.blockType][this.direction].y0*this.size,this.size,this.size);
			game.ctx.fillRect(this.blockGatherX[this.blockType][this.direction].x1*this.size,this.blockGatherY[this.blockType][this.direction].y1*this.size,this.size,this.size);
			game.ctx.fillRect(this.blockGatherX[this.blockType][this.direction].x2*this.size,this.blockGatherY[this.blockType][this.direction].y2*this.size,this.size,this.size);
			game.ctx.fillRect(this.blockGatherX[this.blockType][this.direction].x3*this.size,this.blockGatherY[this.blockType][this.direction].y3*this.size,this.size,this.size);
			game.ctx.strokeRect(this.blockGatherX[this.blockType][this.direction].x0*this.size,this.blockGatherY[this.blockType][this.direction].y0*this.size,this.size,this.size)
			game.ctx.strokeRect(this.blockGatherX[this.blockType][this.direction].x1*this.size,this.blockGatherY[this.blockType][this.direction].y1*this.size,this.size,this.size)
			game.ctx.strokeRect(this.blockGatherX[this.blockType][this.direction].x2*this.size,this.blockGatherY[this.blockType][this.direction].y2*this.size,this.size,this.size)
			game.ctx.strokeRect(this.blockGatherX[this.blockType][this.direction].x3*this.size,this.blockGatherY[this.blockType][this.direction].y3*this.size,this.size,this.size)

		}
	}


}