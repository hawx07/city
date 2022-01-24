
  //---------yapılıcaklar
  // tree populate.
  // balkon(normal fransız)
  // window içerisi.
  //çamaşırlık
  //minalar arası boşluk(sokak)
  // çatı türü araştır.
  // klima.
  // pancurüstü.
  // perde
  // baca
  // mağaza
  // insan.
  // statik deniz
  // gökyüzü
  // rare buildings.
  //tepe topo
//pencere kenarlığı
//baca ve çatı shadowlarını birleştir.
//bina renk patterni ekle



//shadow sorununu çöz. bazı öğeleri de etkiliyor
//texture olarak point populatelenmesini ayarla. karesi.


//bina color paleti ayarla
//gökyüzü farklı varyasyonlarda lerplesin. kırmızı ve sarı
//deniz dalgalı
// scale 50 den bakınca en arkadaki katman birden bitiyor. oraya fazladan katman ekle
//araba ve ağaç


let img,people;
let photo;

function preload() {
  // img = loadImage('./d1.svg');
  // people = loadImage('./pe.svg');
  // tree = loadImage('./SVG/tree(5).svg');
  // night=1
  night=int(map(fxrand(), 0, 1, 0, 2))
  // cami = loadImage('./c1.svg');
  // cami = loadImage('./4x/SVG/Asset 1.svg');
  if(night){
	 cami = loadImage('./SVG/Asset3.png'); 
  }else{
  cami = loadImage('./SVG/Asset2.png');
  }
  // cami = loadImage('./d1.svg');

bird = loadImage('./SVG/bird.png');


  for(x=1;x<30;x++){
	  this["people"+x] = loadImage('./SVG/pe('+x+').svg');
  }
  
    for(x=1;x<6;x++){
	  this["tree"+x] = loadImage('./SVG/tree('+x+').svg');
  }
  
  
  
}

function setup() {
	
	
	  // print("h",cami.height)
	// print("w",cami.width)
	print(pixelDensity())
	// pixelDens=pixelDensity()
	pixelDensity(1);
	camiCount=0
      screen = [windowWidth, windowHeight]
     Adcanvas = sort(screen, 0);
    print(Adcanvas[0]);
    canvas = Adcanvas[0];
	// canvas = 2000
	orjCanvas=canvas
	isSave=0
    createCanvas(canvas, canvas);
	// canvas = Adcanvas[0];
	cnv=canvas/800
  // recY=map(fxrand(), 0, 1, 0, canvas)
  
  dik=createGraphics(canvas, canvas)
  yan=createGraphics(canvas, canvas)
  roof=createGraphics(canvas, canvas)
  dikTemp=createGraphics(canvas, canvas)
  yanTemp=createGraphics(canvas, canvas)
  pointPopulate=createGraphics(canvas, canvas)
sky=createGraphics(canvas, canvas)
sea=createGraphics(canvas, canvas)
baklava=createGraphics(canvas, canvas)
fillPattern1 = createGraphics(canvas*2, canvas);
// background(62,186,207)
  // recH=map(fxrand(), 0, 1, 50, canvas)
  // recW=map(fxrand(), 0, 1, 50, canvas)
  //rect(recX,recY,recW,-recH)
  // winSize=20
  // winDens=30
  // print("width:"+recW+" aralık:"+recW/winDens)
  // print("height:"+recH+" aralık:"+recH/winDens)
  
	// min = [recW/winDens, recH/winDens]
     // size = sort(min, 0);
	// print(size[0])
	// size=size[0]
	
	
  //----------------------parameters
  // scaleAll=int(map(fxrand(), 0, 1, 50, 150)) //100
  // scaleAll=50
  
  
  
  
  sAngle=int(map(fxrand(),0,1,0,2))
	switch(sAngle){
		  case 0:
			  print("Shadow: Negative")
			  sAngle=1
		  break;
		  case 1:
			  print("Shadow: Positive")
			  sAngle=-1
		  break;
		  }
  
  
  parkProb=int(map(fxrand(),0,1,50,85))
  // parkProb=30
  parkMap=int(map(parkProb,50,85,0,3))
  // print("parkDensity",parkProb)
  switch(parkMap){
		  case 0:
			  print("parkDensity: High")
		  break;
		  case 1:
			  print("parkDensity: Medium")
		  break;
		  case 2:
			  print("parkDensity: Low")
		  break;
		  }
  
  // slope=30
  slope=floor(map(fxrand(), 0, 1, 25, 45))
  slopeMap=int(map(slope,24,45,0,3))
  // print("Slope",slope)
  switch(slopeMap){
		  case 0:
			  print("Slope: Low")
		  break;
		  case 1:
			  print("Slope: Medium")
		  break;
		  case 2:
			  print("Slope: High")
		  break;
		  }
  
  
  
  
  // buildingType=1
  buildingType=floor(map(fxrand(), 0, 1, 0, 3))
  		  switch(buildingType){
		  case 0:
			  print("buildingType: Big")
		  break;
		  case 1:
			  print("buildingType: Small")
		  break;
		  case 2:
			  print("buildingType: Relative")
		  break;
		  }
  
  
  // scaleType=2
 scaleType=floor(map(fxrand(), 0, 1, 0, 4))
  		  switch(scaleType){
		  case 0:
			  print("Camera: Far")
			  scaleAll=50
		  break;
		  case 1:
			  print("Camera: Medium")
			  scaleAll=100
		  break;
		  case 2:
			  print("Camera: Close")
			  scaleAll=150
		  break;
		  case 3:
			  print("Camera: Far")
			  scaleAll=50
		  break;
		  }
		  
		  
	s2=scaleAll/100
	
	slopetogap=slope*2
   katmanGap=slopetogap*s2*cnv//60
  if(scaleAll==50){katmanSayısı=int(15/(katmanGap/(60*s2*cnv)))}else{katmanSayısı=int(12/(katmanGap/(60*s2*cnv)))}
  // katmanSayısı=10
  
 
  // sonKatmanY=katmanGap*katmanSayısı
  // print(sonKatmanY)
  for(aa=1;aa<30;aa++){
			  eval("people"+aa).resize(eval("people"+aa).width/9*cnv*s2,eval("people"+aa).height/9*cnv*s2)
			  }
  
  //----------------------/parameters
  // treeOran=tree.height/tree.width
  // treeHH=60*s2*cnv
  // cami2=createGraphics(cami.width, cami.height)
  // cami2.image(cami,0,0)
	// cami=cami2
  // cami.resizeCanvas(360*cnv*s2,360*cnv*s2)
  cami.resize(0,360*cnv*s2)
  bird.resize(0,5*cnv*s2)
  for(x=1;x<6;x++){
  
  eval("tree"+x).resize(90*s2*cnv,0)//ağaçları aynı boyuta getir 80
  
  }
dik.colorMode(HSL,360,100,100)
yan.colorMode(HSL,360,100,100)
makeDik()
makeYan()
makeRoof()

// for(x=0;x<canvas;x+=4*cnv*s2){
		// for(y=0;y<canvas;y+=4*cnv*s2){
		// pointPopulate.point(x,y)
	// }
// }
// for(x=0;x<40000000/(scaleAll*2);x+=1){
	// pointPopulate.strokeWeight(0.10*cnv*s2)
			// pointPopulate.stroke(100)
// pointPopulate.point(map(fxrand(),0,1,0,canvas),map(fxrand(),0,1,0,canvas))
// }
// randHueGrad=map(fxrand(),0,1,1,6)
randHue=map(fxrand(),0,1,0,300)
  gapX=6*s2*cnv
  gapY=14*s2*cnv
  winX=13*s2*cnv
  winY=19*s2*cnv
  inside=createGraphics(winX-2*cnv*s2, winY-2*cnv*s2)
  insideBalkon=createGraphics(winX-2*cnv*s2, winY+5*cnv*s2)
  colorMode(HSL,360,100,100)
  recY=orjCanvas-100*cnv
  for (var i = -1; i < katmanSayısı+2; i++) {
   this["drawingLayer"+i] = createGraphics(canvas+200*cnv, canvas)
}
  
  recY-=katmanGap*katmanSayısı
layer=0
nextLayer=0



fillPattern1.background("white")

//----------------------------moon
	
	
	push();
	colorMode(RGB)
	pC=color(200)
	// fillPattern1.colorMode(HSL);
	
	//fillPattern1.background("#fd79a8");
	// fillPattern1.background(pC);
	fillPattern1.colorMode(RGB);

	fillPattern1.fill(200,200,200,50)
	fillPattern1.noStroke();
	for ( i = 0; i < 1000; i++){
		 x = map(fxrand(), 0, 1, 0, canvas);
		 y = map(fxrand(), 0, 1, 0, canvas);
		 r = map(fxrand(), 0, 1, 50*cnv*s2, 100*cnv*s2);
		fillPattern1.ellipse(x, y, r);
	}
	for (let i = 0; i < 6000; i++){
		let x = map(fxrand(), 0, 1, 0, canvas);
		let y = map(fxrand(), 0, 1, 0, canvas);
		fillPattern1.stroke(200,200,200,100);
		fillPattern1.strokeWeight(map(fxrand(), 0, 1, 5*cnv*s2, 10*cnv*s2));
		fillPattern1.point(x, y);
	}

		 newC=color(10,10,10,8)
	// newC.setAlpha(2)
	//fillPattern1.colorMode(RGB);
	// fillPattern1.newC.setAlpha(color)
	fillPattern1.fill(newC)
	fillPattern1.noStroke();
	for (let i = 0; i < 10000; i++){
		let x = map(fxrand(), 0, 1, 0, canvas);
		let y = map(fxrand(), 0, 1, 0, canvas);
		let r = map(fxrand(), 0, 1, 50*cnv*s2, 100*cnv*s2);
		fillPattern1.ellipse(x, y, r);
	}
	pop();
//----------------------------moon






}

function draw() {
  //background(220);
  	// t1.rect(100,100,100,100)
	// t1.rect(100,200,100,100)
		if(layer<katmanSayısı){	
		
    // for(layer=0;layer<katmanSayısı;layer++){
		if(layer==0){üstKatman=recY}

		
		
		tL1=eval(layer-1)
		d=eval("drawingLayer"+layer)
		// d2=eval("drawingLayer"+layer)
		
		
				if(layer==0){//gökyüzüne gölge düşmemesi için buraya aldım
					d.push()
			// print(üstKatman)
			colorMode(RGB)
			segment=4000*cnv/scaleAll
			 // from = color(221, 97, 45);
			 // from = color(186.15, 150.41, 91.21);
			 // to = color(68.53, 136, 201.45);
				// from = color(186.15, 150.41, 91.21);//sarı
				//to = color(68.53, 136, 201.45);	//mavi
			 from = color(103, 167, 207)
			 to = color(49, 100, 155)	

			if(night){
				from = color(27, 62, 95);
			 to = color(20);
				}

			 
				for(x=0;x<segment;x++){
					cc=lerpColor(from, to, map(x,0,segment,0,1))
					d.noStroke()
					d.fill(cc)
				d.rect(+21*s2*cnv,üstKatman-(üstKatman/segment)*x,canvas+20*s2*cnv,-üstKatman/segment-2*cnv*s2)
				}
			d.pop()
			colorMode(HSL,360,100,100)
			// d.image(sky,0,0)
		if(night==1&&scaleAll==50){
			d.push()
			d.stroke(255)
			
			for(x=0;x<5000*s2;x++){
				d.strokeWeight(map(fxrand(),0,1,0.3*s2*cnv,1.5*s2*cnv))
			d.point(map(fxrand(),0,1,0,canvas),map(fxrand(),0,1,0,canvas))
			}
			
			// d.fill(0)
			d.noStroke()
			mX=map(fxrand(),0,1,50*cnv*s2,canvas-50*cnv*s2)
			mY=map(fxrand(),0,1,0,300*cnv*s2)
			mR=map(fxrand(),0,1,150*s2*cnv,250*s2*cnv)
			moonCycle=floor(map(fxrand(),0,1,0,7))
			// moonCycle=0
			fillPattern1.fill(0,0,0,140)
			fillPattern1.push()
			fillPattern1.drawingContext.shadowColor = color(0,0,0)
			fillPattern1.drawingContext.shadowBlur = 50*s2*cnv;
			switch(moonCycle){
				case 0:
				fillPattern1.circle(mX+mR/5.5,mY,mR)//solhilal
				print("Moon: Wanning Crescent")
				break;
				case 1:
				fillPattern1.circle(mX-mR/5.5,mY,mR)//sağhilal
				print("Moon: Waxing Crescent")
				break;
				case 2:
				// fillPattern1.rect(mX,mY-mR/2,mR,mR)//solyarım
				break;
				case 3:
				// fillPattern1.rect(mX,mY-mR/2,-mR,mR)//sağyarım
				break;
				("Moon: Full Moon")
			}
			fillPattern1.pop()
			d._renderer._setFill(d.drawingContext.createPattern(fillPattern1.canvas, 'repeat'));
						d.drawingContext.shadowColor = color(255,255,255,0.5)
						d.drawingContext.shadowBlur = 200*s2*cnv;
			d.circle(mX,mY,mR)
			
		d.pop()
		
		}
		
		//cloud
		d.push()
		for(r=0;r<50;r++){ 
			mX=map(fxrand(),0,1,50*cnv*s2,canvas-50*cnv*s2)
			mY=map(fxrand(),0,1,0,300*cnv*s2)
		// print(int(rnd(10,30)))
		d.noStroke()
		col=rnd(100,200)
		d.fill(col,col,col,2)
		yrange=rnd(40,90)
		xrange=rnd(20,40)
		for(c=0;c<200;c++){
			
		// d.circle(mX+rnd(-yrange,yrange),mY+rnd(-xrange,xrange),rnd(5,50))
		}
		
		
		}
		// d.fill(col,col,col,200)
		// d.drawingContext.shadowColor = color(255)
						// d.drawingContext.shadowBlur = 50*s2*cnv;
						// d.circle(mX,mY,30)
		d.pop()
		// colorMode(RGB)
		
		
		// os=color(hue(skycol), saturation(skycol), brightness(skycol))
	  // print(skycol)
	  // print(hue(skycol))
		// d.colorMode(HSB,360,100,100)
		// skytemp=createGraphics(canvas,canvas)
		
		// d.colorMode(HSB);
		  // skytemp.colorMode(HSB);
// skytemp.colorMode(HSB,360,100,100);
			// skytemp.noStroke();
		// d.fill(220, 50, 200);
		// print(d.get())
//d.loadPixels()
//cloud2
	
	//black
	if(scaleAll==50){
	
noiseSeed(fxrand()*20000)
d.push()
rangeC=2
zoom=0.5
fll=150
if(night){fll=50}
  for ( i = 0; i < canvas+50*s2*cnv; i+=rangeC) {//x
    for ( j = 0; j < 500*s2*cnv; j+=rangeC) {//y
		// skytemp.push()
       ran = noise(i / 40*zoom, j / 20*zoom);
       col = map(ran, 0, 1, 0, 200);
	   eksi = map(j, 0, 500*s2*cnv, 0, 255);
	   col-=eksi
	   d.noStroke()
	  // skycol=d.color(d.get(i,j))
	  // d.colorMode(HSB);
	  // skycol=skytemp.color(hue(skycol), saturation(skycol), brightness(skycol))//soluk kalıyor.
	  d.fill(fll,fll,fll,col)
	  d.rect(i * 1, j * 1, rangeC, rangeC);

    }
  }
d.pop()
		
		//white
		noiseSeed(fxrand()*30000)
d.push()
rangeC=1
zoom=rnd(0.3,1.1)
fll=255
if(night){fll=100}
  for ( i = 0; i < canvas+50*s2*cnv; i+=rangeC) {//x
    for ( j = 0; j < 500*s2*cnv; j+=rangeC) {//y
		// skytemp.push()
       ran = noise(i / 60*zoom, j / 20*zoom);
       col = map(ran, 0, 1, 0, 255);
	   eksi = map(j, 0, 600*s2*cnv, 0, 255);
	   col-=eksi
	   d.noStroke()
	  // skycol=d.color(d.get(i,j))
	  // d.colorMode(HSB);
	  // skycol=skytemp.color(hue(skycol), saturation(skycol), brightness(skycol))//soluk kalıyor.
	  d.fill(fll,fll,fll,col)
	  d.rect(i * 1, j * 1, rangeC, rangeC);

    }
  }
d.pop()		
		
	}
		
		}
		
		
		
		
		
		
		// print(d2)
		//stroke(1/katmanSayısı*layer)
		strokeWeight(1/(katmanSayısı+1)*(layer+1)*s2)
		recX=0
		recY+=katmanGap
		// if(layer==katmanSayısı-1){
			// print("yer")
			// d.push()
			// d.fill(50)
			// d.rect(0,recY,canvas+300*cnv*s2,37*cnv*s2)//yer: tam oturmuyor
			 
			// d.pop()
		// }
		noGap=0
	  for(c=0;c<(800/scaleAll)+3;c++){
		  if(layer!=katmanSayısı-1){
			//recY+=map(fxrand(),0,1,-3*cnv*s2,3*cnv*s2)//Katmanlardaki binalar Y de hafif yükselsin alçalsın
		  }
		  if(layer!=0){
			//recY+=map(fxrand(),0,1,-3*cnv*s2,3*cnv*s2)//Katmanlardaki binalar Y de hafif yükselsin alçalsın
		  d.push()
		  d.fill(20)
		  d.noStroke()
		  
		  if(noGap==4){
		  if (int(map(fxrand(), 0, 1, 0, 100))>1){//merdiven
		  yolX=40*cnv*s2
		  for(t=0;t<20;t++){
			  d.colorMode(RGB)
			  d.stroke(50)
			  d.strokeWeight(0.5*cnv*s2)
			  d.fill(245-10*t)
			  
			d.rect(recX-6*cnv*s2,recY+19*cnv*s2-katmanGap/20*t,yolX,-katmanGap/20)
		  }
		  for(p=0;p<8;p++){
			  d.push()
				d.drawingContext.shadowColor = color(0,0,0,0.4)
						d.drawingContext.shadowOffsetX = -3*s2*cnv*sAngle;
						// d.drawingContext.shadowOffsetY = 3*s2*cnv;
						d.drawingContext.shadowBlur = 2*s2*cnv;
			  randPeopleX=map(fxrand(),0,1,recX-6*cnv*s2,recX-6*cnv*s2+yolX)
			  randPeopleY=map(fxrand(),0,1,recY+19*cnv*s2,recY+19*cnv*s2-katmanGap)
			  d.image(eval("people"+int(map(fxrand(),0,1,1,30))), randPeopleX, randPeopleY-13*cnv*s2)
			  d.pop()
		  }
		  
		  
		  
		  recX+=yolX
		  }
		  noGap=0
		  }
		  
		  if(noGap!=0){//if(noGap!=0){
		  if (int(map(fxrand(), 0, 1, 0, 100))>parkProb){//park 70	parkProb
			  yolX=map(fxrand(),0,1,70*cnv*s2,170*cnv*s2)
			  // d2.rect(recX-6*cnv*s2,recY+19*cnv*s2,yolX,-katmanGap)
			  for(t=0;t<20;t++){//park basamak
				  d.colorMode(RGB)
				  d.stroke(50)
				  d.strokeWeight(0.5*cnv*s2)
				  // d.fill(245-10*t)
				  d.fill(70)
				  if(night){d.fill(130-10*t)}
				  
				d.rect(recX-6*cnv*s2,recY+19*cnv*s2-katmanGap/20*t,yolX,-katmanGap/20)
				// d.fill(41, 55, 27,20)
				// d.rect(recX-6*cnv*s2,recY+19*cnv*s2,yolX,-katmanGap)
				
				
				
			  }
			  
			   for(p=0;p<6000;p++){//park grass
				  d.push()
					// d.drawingContext.shadowColor = color(0,0,0,0.4)
							// d.drawingContext.shadowOffsetX = -3*s2*cnv*sAngle;
							
							// d.drawingContext.shadowBlur = 2*s2*cnv;
							d.colorMode(HSL,360,100,100)
							tC=color(map(fxrand(),0,1,40,100), map(fxrand(),0,1,20,30), map(fxrand(),0,1,10,30))
							d.stroke(tC)
							d.strokeWeight(0.6*s2*cnv)
				  randGrassX=map(fxrand(),0,1,recX-6*cnv*s2,recX-6*cnv*s2+yolX)
				  randGrassY=map(fxrand(),0,1,recY+19*cnv*s2,recY+19*cnv*s2-katmanGap)
				  d.line(randGrassX,randGrassY,randGrassX+rnd(-1*cnv*s2,1*cnv*s2),randGrassY-3*cnv*s2)
				  d.pop()
			  }
			  
			  
			  
			  
			  for(p=0;p<20;p++){//parkpeople
				  d.push()
					d.drawingContext.shadowColor = color(0,0,0,0.4)
							d.drawingContext.shadowOffsetX = -3*s2*cnv*sAngle;
							// d.drawingContext.shadowOffsetY = 3*s2*cnv;
							d.drawingContext.shadowBlur = 2*s2*cnv;
				  randPeopleX=map(fxrand(),0,1,recX-6*cnv*s2,recX-6*cnv*s2+yolX)
				  randPeopleY=map(fxrand(),0,1,recY+19*cnv*s2,recY+19*cnv*s2-katmanGap)
				  d.image(eval("people"+int(map(fxrand(),0,1,1,30))), randPeopleX, randPeopleY-13*cnv*s2)
				  d.pop()
			  }
			  treeY=[]
					for(p=0;p<5;p++){//parkTree
							// d.push()
							d.colorMode(HSL,360,100,100)
							tC=color(map(fxrand(),0,1,40,100), map(fxrand(),0,1,20,30), map(fxrand(),0,1,50,60))
							
						
						randTreeY=map(fxrand(),0,1,recY+19*cnv*s2,recY+19*cnv*s2-katmanGap)
						append(treeY,randTreeY)
						sort(treeY)
						}
						// print(treeY)
						for(p=0;p<5;p++){
					d.push()//ağaç
					randTreeX=map(fxrand(),0,1,recX-6*cnv*s2,recX-6*cnv*s2+yolX)
						treeq="tree"+floor(map(fxrand(),0,1,1,6))
						// eval(treeq).filter(DILATE)
						ssTree=map(fxrand(),0,1,0.7,1)
						treeTemp=createGraphics(eval(treeq).width*ssTree,eval(treeq).height*ssTree)
						treeTemp.push()
						treeTemp.scale(ssTree,ssTree)
						if(fxrand()<0.5){
						treeTemp.translate(eval(treeq).width,0)
						treeTemp.scale(-1,1)
						// print(treeTemp.get(100,100))
						}
							
							treeTemp.drawingContext.shadowColor = color(tC)
							treeTemp.drawingContext.shadowOffsetX = 0.002*s2*cnv;
							treeTemp.drawingContext.shadowBlur = 0.001*s2*cnv;
						treeTemp.image(eval(treeq),0,5*cnv*s2)

						d.translate(0,-treeTemp.height)
						d.image(treeTemp,randTreeX,treeY[p])
										for(t=0;t<20;t++){//ağaç önü çim
												d.push()
												d.colorMode(HSL,360,100,100)
												tC2=color(map(fxrand(),0,1,40,100), map(fxrand(),0,1,20,30), map(fxrand(),0,1,10,30))
												d.stroke(tC2)
												d.strokeWeight(0.6*s2*cnv)
												randGrassX=rnd(randTreeX-6*s2*cnv,randTreeX+6*s2*cnv)
											  // randGrassY=map(fxrand(),0,1,recY+19*cnv*s2,recY+19*cnv*s2-katmanGap)
												d.line(randGrassX+treeTemp.width/2,treeY[p]+treeTemp.height,randGrassX+treeTemp.width/2+rnd(-2*cnv*s2,2*cnv*s2),treeY[p]-4*cnv*s2+treeTemp.height)
												
												// d.stroke("red ")
												// d.strokeWeight(5)
												// d.point(randGrassX+treeTemp.width/2,treeY[p]+treeTemp.height)
												d.pop()
										}
						
						treeTemp.pop()
					d.pop()
					// d.image(eval("people"+int(map(fxrand(),0,1,1,30))), randPeopleX, randPeopleY)
					
			  }
			  
		  
		  
		  
		  
		  recX+=yolX
		  noGap=0
		  }
		  }
		  noGap++
		  
		  d.pop()
		  
		  }
		  
		  
		  
		  d.push()
		  if (map(fxrand(), 0, 1, 0, 100)>99){//makecami
		  camiX=cami.width-14*cnv*s2
			d.drawingContext.shadowBlur = 2.5*cnv*s2
		    d.drawingContext.shadowColor = color(0)
			d.image(cami,recX-12*cnv*s2,recY+19*cnv*s2-cami.height)
		  recX+=camiX
		  camiCount+=1
		  }
		  d.pop()
		  
		  
		  //delen
		  switch(buildingType){
		  case 0:
			  countX=int(map(fxrand(), 0, 1, 4, 6))//bina yan pencere old sett
			  countY=int(map(fxrand(), 0, 1, 5, 10))//bina dik pencere
		  break;
		  case 1:
			  countX=int(map(fxrand(), 0, 1, 4, 6))//bina yan pencere
			  countY=int(map(fxrand(), 0, 1, 3, 5))//bina dik pencere
		  break;
		  case 2:
			  countY=int(map(fxrand(), 0, 1, 2+(map(katmanSayısı-layer+1,1,katmanSayısı,1,3)), 4+(map(katmanSayısı-layer+2,1,katmanSayısı,1,7))))//bina dik pencere
			  countX=int(map(fxrand(), 0, 1, 2+(map(katmanSayısı-layer+1,1,katmanSayısı,1,3)), 4+(map(katmanSayısı-layer+2,1,katmanSayısı,1,5))))//bina yan pencere
		  break;
		  }
		  
		  d.colorMode(HSL,360,100,100)
		  
		  cL=color(map(fxrand(), 0, 1, randHue, randHue+60),map(fxrand(), 0, 1, 0, 70),map(fxrand(), 0, 1, 80, 90))//70-80
		  if(night){cL=color(map(fxrand(), 0, 1, randHue, randHue+60),map(fxrand(), 0, 1, 1, 5),map(fxrand(), 0, 1, 30, 45))}
		  // cL=color(500)
		  // cL=color(map(fxrand(), 0, 1, 0, 100),map(fxrand(), 0, 1, 0, 100),map(fxrand(), 0, 1, 40+12*(katmanSayısı-layer), 60+10*(katmanSayısı-layer)))
		  roofDistance=recX-gapX-(recX+countX*(gapX+winX))
		  d.push();
		  d.fill(hue(cL), saturation(cL), lightness(cL))
		  // d.fill(400)
		  d.drawingContext.shadowBlur = 1.5*cnv*s2
		  d.drawingContext.shadowColor = color(0)
		  // d.drawingContext.shadowBlur = 110*cnv*s2
		  // d.drawingContext.shadowColor = color(0)
		  // d.drawingContext.shadowOffsetX = 50*s2*cnv;
		  
		  if(c%2==0){
			  dik.background(cL)
			  dik.image(dikTemp,0,0)
			  dik.image(pointPopulate,0,0)
			  d._renderer._setFill(d.drawingContext.createPattern(dik.canvas, 'repeat'));
		  }else{
			  yan.background(cL)
			  yan.image(yanTemp,0,0)
			  yan.image(pointPopulate,0,0)
			  d._renderer._setFill(d.drawingContext.createPattern(yan.canvas, 'repeat'));
		  }
		  
		  
		  roofType=int(map(fxrand(),0,1,0,3))//rooftype
		  // roofType=3
		  if(roofType!=3){
		  for(bC=0;bC<2;bC++){
		  bacaX=recX-gapX+map(fxrand(),0,1,15*cnv*s2,abs(roofDistance)-15*cnv*s2)
		  bacaY=recY+winY-countY*(gapY+winY)-gapX
		  d.rect(bacaX,bacaY,7*cnv*s2,-10*cnv*s2)//baca
		  if(fxrand()>0.9){
		  // dumanTemp=createGraphics(canvas,canvas)
		  for(bDuman=0;bDuman<map(fxrand(),0,1,200,350);bDuman++){
			  d.push()
			  d.colorMode(RGB)
			  bacaCol=map(fxrand(),0,1,240,255)
			  
			  d.strokeWeight(map(fxrand(),0,1,2*cnv*s2,15*cnv*s2))
			  dumanX=bacaX+3*cnv*s2+map(fxrand(),0,1,-7*cnv*s2,+7*cnv*s2)
			  dumanYrand=fxrand()
			  d.stroke(bacaCol,bacaCol,bacaCol,12*(1-dumanYrand))
			  dumanY=bacaY+map(dumanYrand,0,1,-15*cnv*s2,-map(fxrand(),0,1,40*cnv*s2,90*cnv*s2))
			  d.point(dumanX,dumanY)
			  d.pop()
			
		  }
		  // DaddGrain(100)
		   // d.image(dumanTemp,0,0)
			
		  }
		  }
		  }
		  

		  d.strokeWeight(1/(katmanSayısı+1)*(layer+1)*s2/5)
		  d.rect(recX-gapX,recY+winY,countX*(gapX+winX)+gapX,-countY*(gapY+winY)-gapX) //binaR
		  d.push()
		  d.noFill()
		  
		  d.rect(recX-gapX,recY+winY-countY*(gapY+winY)-gapX,countX*(gapX+winX)+gapX,gapY-5*cnv*s2)//çatı çizgisi
		  d.pop()
		  
			  d.push()
			  d.colorMode(RGB)
			  fill=(map(fxrand(),0,1,150,240))
			  d.fill(fill)
			  
			  d.rect(recX,recY-3*cnv*s2,countX/2*(gapX+winX)-gapX,winY+3*cnv*s2)//dükkan
			  // fill=color(200)
			  winCordX=recX
			  winCordY=recY-3*cnv*s2
			  
			  fillInsideBalkon(recX,recY-3*cnv*s2)
			  
			  
			  d.rect(recX+countX/2*(gapX+winX),recY-3*cnv*s2,countX/2*(gapX+winX)-gapX,winY+3*cnv*s2)//dükkan2
			  winCordX=recX+countX/2*(gapX+winX)
			  winCordY=recY-3*cnv*s2
			  fillInsideBalkon(recX+countX/2*(gapX+winX),recY-3*cnv*s2)
			  d.pop()
		  d.pop();
		  
		  bt=[0,1,2,0,1,0]
		  balkonType=bt[floor(map(fxrand(),0,1,0,6))]
		  // balkonType=int(map(fxrand(),0,1,0,3))
		  // balkonType=2
		  
		  //print(roofType)
		  d.drawingContext.shadowBlur = 0
			d.drawingContext.shadowOffsetY = 0
			d.drawingContext.shadowColor = color(0)
		  switch(roofType){//----------------------------------------roofType
		  case 0://boş
		  
		  break;
		  case 1://üçgen
		  p1=[recX+countX*(gapX+winX),recY+winY-countY*(gapY+winY)-gapX]
		  p2=[recX-gapX,recY+winY-countY*(gapY+winY)-gapX]
		  p3=[recX+(countX*(gapX+winX)-gapX)/2,recY+winY-countY*(gapY+winY)-gapX+roofDistance/5]
		  // print(p1)
		  d.push();
			d.drawingContext.shadowBlur = 1.5*cnv*s2
			d.drawingContext.shadowOffsetY = 0.2*s2*cnv;
			d.drawingContext.shadowColor = color(0)
		  d.stroke(39,58,68)
		  // d.fill(39,58,68)
		  roof.colorMode(HSL,360,100,100)
		  
		  roof.background(19.86,map(fxrand(),0,1,25,46),60)//39,58,68
		  if(night){roof.background(19.86,map(fxrand(),0,1,5,20),20)}
		  roof.image(baklava,0,0)
		  d._renderer._setFill(d.drawingContext.createPattern(roof.canvas, 'repeat'));
		  d.strokeWeight(0.2*cnv*s2)
		  d.triangle(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1])
		  d.pop();
		  // p2=
		  // p3=
		  // triangle()
		  break;
		  case 2: //tonoz
		  p2=[recX+countX*(gapX+winX),recY+winY-countY*(gapY+winY)-gapX]
		  p1=[recX-gapX,recY+winY-countY*(gapY+winY)-gapX]
		  // p3=[recX+(countX*(gapX+winX)-gapX)/2,recY+winY-countY*(gapY+winY)-gapY+-20*cnv*s2]
		  // print(p1)
		  d.push();
		  d.stroke(0)
		  d.fill(39,58,68)
		  d.strokeWeight(0.2*cnv*s2)
		  //d.point(p1[0],p1[1])
		  d._renderer._setFill(d.drawingContext.createPattern(roof.canvas, 'repeat'));
		  // d.arc(p1[0]+(p2[0]-p1[0])/2, p1[1], (p2[0]-p1[0]), 30*cnv*s2, -PI, 0, PIE);
		  d.pop();
		  break;
		  
		  case 3:
		  p2=[recX+countX*(gapX+winX),recY+winY-countY*(gapY+winY)-gapX]
		  p1=[recX-gapX,recY+winY-countY*(gapY+winY)]
		  d.push()
		  d.drawingContext.shadowBlur = 1.5*cnv*s2
			d.drawingContext.shadowOffsetY = 0.2*s2*cnv;
			d.drawingContext.shadowColor = color(0)
		  d.strokeWeight(0.5*cnv*s2)
		  // d.line(p1[0],p1[1]-10,p2[0],p2[1]-10)
		  roof.colorMode(HSL,360,100,100)
		  roof.background(19.86,map(fxrand(),0,1,10,30),map(fxrand(),0,1,10,20))//39,58,68
		  roof.image(baklava,0,0)
		  d._renderer._setFill(d.drawingContext.createPattern(roof.canvas, 'repeat'));
		  d.rect(p1[0],p1[1]-2*winY+7*cnv*s2,countX*(gapX+winX)+gapX,+25*cnv*s2)
		  
		  roof.colorMode(HSL,360,100,100)
		  roof.background(19.86,map(fxrand(),0,1,25,46),60)//39,58,68
		  roof.image(baklava,0,0)
		  d._renderer._setFill(d.drawingContext.createPattern(roof.canvas, 'repeat'));
		  // roofD=dist(p1[0],p1[1],p2[0],p2[1])
		  // print(abs(roofDistance))
		  if(c%2==0){
			  dik.background(cL)
			  dik.image(dikTemp,0,0)
			  dik.image(pointPopulate,0,0)
			  d._renderer._setFill(d.drawingContext.createPattern(dik.canvas, 'repeat'));
		  }else{
			  yan.background(cL)
			  yan.image(yanTemp,0,0)
			  yan.image(pointPopulate,0,0)
			  d._renderer._setFill(d.drawingContext.createPattern(yan.canvas, 'repeat'));
		  }
		  
		  
		  
		  
		  calc=abs(roofDistance)/(15*cnv*s2)
		  // print(roofD)
		  for(roofl=0;roofl<calc;roofl++){
			  d.push()
			  d.strokeWeight(2*cnv*s2)
			  d._renderer._setStroke(d.drawingContext.createPattern(roof.canvas, 'repeat'));
			  
			  
			  
		  d.line(p1[0]+5*cnv*s2+15*cnv*s2*roofl,-7*cnv*s2+p1[1],p1[0]+5*cnv*s2+15*cnv*s2*roofl,p1[1]-30*cnv*s2)
		  d.pop()
		  }
		  d.rect(p1[0],p1[1]-winY+3*cnv*s2,countX*(gapX+winX)+gapX,-15*cnv*s2,5*cnv*s2,5*cnv*s2,0,0)
		  d.pop()
		  break;
		  }
		  
		  
		  for(x=0;x<countX;x++){//pencere
			  for(y=1;y<countY;y++){
				d.strokeWeight(0.5*cnv*s2)
				winCordX=recX+(winX+gapX)*x
				winCordY=recY-(winY+gapY)*y
				d.push()
				d.colorMode(RGB)
				fill=map(fxrand(),0,1,20,255)
				
				// d.fill(41.82,100,map(fxrand(),0,1,78,100))
				

				if(balkonType==1){//bina yanları balkon
					if (x==0){//en sol
						d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
						fill=map(fxrand(),0,1,130,255)
						fillInsideBalkon(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
						
						d.fill(cL)
						d.line(winCordX+2*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX-gapX,winCordY+winY-3*cnv*s2)
						d.rect(winCordX-gapX,winCordY+winY+6*cnv*s2,gapX+winX+2*cnv*s2,+3*cnv*s2)//balkon altlık
						d.noFill()
						d.push()
						d.drawingContext.shadowBlur = 1.5*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowColor = color(0)
						d.drawingContext.shadowOffsetX = -2*s2*cnv*sAngle;
						
						d.rect(winCordX+winX+2*cnv*s2,winCordY+winY+6*cnv*s2,-gapX-winX-2*cnv*s2,-29*cnv*s2)//balkonderinlik çizgisi
						d.pop()
						for(bLineX=0;bLineX<12;bLineX++){
							
							d.line(winCordX+2*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY+6*cnv*s2,winCordX+2*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY-3*cnv*s2)
						}
					}else if(x==countX-1) {//en sağ
						// winCordX=winCordX+2*cnv*s2
						d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
						// d.fill(fill)
						fill=map(fxrand(),0,1,130,255)
						// d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-1*cnv*s2+6*cnv*s2)
						fillInsideBalkon(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
						d.line(winCordX+gapX+0*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX-2*cnv*s2,winCordY+winY-3*cnv*s2)
						// d.line(winCordX+gapX+2*cnv*s2+winX,winCordY+winY+6*cnv*s2,winCordX,winCordY+winY+6*cnv*s2)
						d.fill(cL)
						// d.drawingContext.shadowBlur = 3.5*cnv*s2 //çok koyulaştı
						// d.drawingContext.shadowOffsetY = 1*s2*cnv;
						// d.drawingContext.shadowColor = color(0)
						d.line(winCordX+gapX+0*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX-2*cnv*s2,winCordY+winY-3*cnv*s2)
						d.rect(winCordX-2*cnv*s2,winCordY+winY+6*cnv*s2,gapX+winX+2*cnv*s2,+3*cnv*s2)//balkon altlık
						d.noFill()
						d.push()
						d.drawingContext.shadowBlur = 1.5*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowOffsetX = -2*s2*cnv*sAngle;
						d.drawingContext.shadowColor = color(0)
						d.rect(winCordX+winX+0*cnv*s2+gapX,winCordY+winY+6*cnv*s2,-gapX-winX-2*cnv*s2,-29*cnv*s2)//balkonderinlik çizgisi
						d.pop()
						for(bLineX=0;bLineX<12;bLineX++){
							
							d.line(winCordX+gapX+0*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY+6*cnv*s2,winCordX+gapX+0*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY-3*cnv*s2)
						}
					}
					else{
						fillInside(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
						makeKlima()
						d.drawingContext.shadowBlur = 1.5*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowOffsetX = -1*s2*cnv*sAngle;
						d.drawingContext.shadowColor = color(0,0,0,0.3)
						
						makePerde()
					}
				}
				else if(balkonType==2){//fransız
				d.push()
					fillInside(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
					d.strokeWeight(0.9*s2*cnv)
					d.line(winCordX+gapX-5*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX+0*cnv*s2,winCordY+winY-3*cnv*s2)
					// d.line(winCordX+gapX+0*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX-2*cnv*s2,winCordY+winY-3*cnv*s2)
					d.drawingContext.shadowBlur = 2*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowOffsetX = -1*s2*cnv*sAngle;
						d.drawingContext.shadowColor = color(0)
						d.strokeWeight(0.4*s2*cnv)
						d.fill(cL)
					d.rect(winCordX-1*cnv*s2,winCordY+winY+6*cnv*s2,gapX+winX-4*cnv*s2,+3*cnv*s2)//balkon altlık
					d.pop()
					makeKlima()
					d.drawingContext.shadowBlur = 1.5*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowOffsetX = -1*s2*cnv*sAngle;
						d.drawingContext.shadowColor = color(0,0,0,0.3)
					makePerde()
					for(bLineX=0;bLineX<8;bLineX++){
						d.strokeWeight(0.4*s2*cnv)
							if(bLineX==0){d.strokeWeight(0.7*s2*cnv)}
							if(bLineX==7){d.strokeWeight(0.7*s2*cnv)}
							d.line(winCordX+gapX-5.5*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY+6*cnv*s2,winCordX+gapX-5.5*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY-3*cnv*s2)
						}
						
					
				}
				
				
				else{
					fillInside(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
					
					makeKlima()
					d.drawingContext.shadowBlur = 1*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowOffsetX = -1*s2*cnv*sAngle;
						d.drawingContext.shadowColor = color(0,0,0,0.3)
						d.strokeWeight(0.4*s2*cnv)
					makePerde()
				}	
				d.colorMode(HSB,360,100,100,100)
				d.pop()
				// d.point(recX+(winSize)*x,recY+(winSize)*y)
			  }

		  }
		  
		  			d.push()//ağaç
					
					// d.drawingContext.shadowBlur = 50.5*cnv*s2
					// d.drawingContext.shadowOffsetX = -1*s2*cnv;
					// d.drawingContext.shadowColor = color(0)
					
					// d.imageMode(CORNER)
					// print(tree.height)
					
					// d.strokeWeight(20)
					// d.stroke("blue")
					// d.point(recX+map(fxrand(),0,1,-30*cnv*s2,10*cnv*s2),recY+20*cnv*s2)
					// map(fxrand(),0,1,1.05*cnv*s2,1.3*cnv*s2)
					
					d.colorMode(HSL,360,100,100)
						tC=color(map(fxrand(),0,1,40,100), map(fxrand(),0,1,20,30), map(fxrand(),0,1,40,50))
						// d.drawingContext.shadowColor = color(tC)
						// d.drawingContext.shadowOffsetX = 0.002*s2*cnv;
						// d.drawingContext.shadowBlur = 0.001*s2*cnv;
						d.drawingContext.shadowColor = color(0,0,0,0.6)
						d.drawingContext.shadowOffsetX = -10*s2*cnv*sAngle;
						d.drawingContext.shadowOffsetY = 10*s2*cnv;
						d.drawingContext.shadowBlur = 2*s2*cnv;
						
						
					
					
					treeq="tree"+floor(map(fxrand(),0,1,1,6))
					// eval(treeq)
					ssTree=map(fxrand(),0,1,0.7,1)
					treeTemp=createGraphics(eval(treeq).width*ssTree,eval(treeq).height*ssTree)
					treeTemp.push()
					// treeTemp.scale(int(2*cnv*s2),int(map(fxrand(),0,1,150*cnv*s2,200*cnv*s2)))
					treeTemp.scale(ssTree,ssTree)
					if(fxrand()<0.5){
					treeTemp.translate(eval(treeq).width,0)
					treeTemp.scale(-1,1)
					}
					// treeTemp.tint(50,200)
					treeTemp.drawingContext.shadowColor = color(tC)
						treeTemp.drawingContext.shadowOffsetX = 0.002*s2*cnv;
						treeTemp.drawingContext.shadowBlur = 0.001*s2*cnv;
					treeTemp.image(eval(treeq),0,5*cnv*s2)
					
					
					
					// treeTemp.scale(40*cnv*s2,100*cnv*s2)
					// treeTemp.filter(BLUR, 1);
					// d.tint(50,50)
					// treeTemp.scale(int(2*cnv*s2),int(map(fxrand(),0,1,150*cnv*s2,200*cnv*s2)))
					// d.scale(1.3)
					// d.scale(1/1.3)
					// d.drawingContext.shadowColor = color(41, 55, 27)
						// d.drawingContext.shadowOffsetX = 0.2*s2*cnv;
						// d.drawingContext.shadowBlur = 0.001
					d.translate(0,-treeTemp.height)
					// d.image(tree,0,0)
					d.image(treeTemp,recX+map(fxrand(),0,1,-30*cnv*s2,10*cnv*s2)-30*cnv*s2,recY+20*cnv*s2)
					// tree.resize(40*cnv*s2,100*cnv*s2)
					// d.image(tree,recX+map(fxrand(),0,1,-30*cnv*s2,10*cnv*s2),recY-107*cnv*s2)
					// d.rect(recX+map(fxrand(),0,1,-30*cnv*s2,30*cnv*s2),recY+19*cnv*s2,20*cnv*s2,-150*cnv*s2)
					// tree.filter(BLUR, -1);
					treeTemp.pop()
					d.pop()
		  
		  
	  if(recX>canvas){c=(800/scaleAll)+30} //sınırsız üretimi durdurmak için kullanılan fonksiyon. incele.
	  recX+=countX*(gapX+winX)+gapX
	  
	  } 
	
	
	 for(x=0;x<5000/scaleAll;x++){//katman people
			  d.push()
						d.drawingContext.shadowColor = color(0,0,0,0.4)
						d.drawingContext.shadowOffsetX = -5*s2*cnv*sAngle;
						d.drawingContext.shadowOffsetY = 3*s2*cnv;
						d.drawingContext.shadowBlur = 2*s2*cnv;
			  d.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,0,canvas), recY+3*cnv*s2)
			  d.pop()
		}
		
	for(x=0;x<600/scaleAll;x++){//katman car
			  d.push()
						d.drawingContext.shadowColor = color(0,0,0,0.4)
						d.drawingContext.shadowOffsetX = -5*s2*cnv*sAngle;
						d.drawingContext.shadowOffsetY = 3*s2*cnv;
						d.drawingContext.shadowBlur = 2*s2*cnv;
			  // d.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,0,canvas), recY+3*cnv*s2)
			  d.fill(0)
			  // d.rect(map(fxrand(),0,1,0,canvas), recY+3*cnv*s2,40*s2*cnv,20*s2*cnv)
			  d.pop()
		}
	
	for(x=0;x<int((canvas));x+=130*cnv*s2){//katman lamba
			// print(x)
			  d.push()
						d.drawingContext.shadowColor = color(0,0,0,0.4)
						d.drawingContext.shadowOffsetX = -5*s2*cnv*sAngle;
						d.drawingContext.shadowOffsetY = 3*s2*cnv;
						d.drawingContext.shadowBlur = 2*s2*cnv;
			  // d.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,0,canvas), recY+3*cnv*s2)
			  fill2=map(fxrand(),0,1,170,255)
			  // fill2=240
			  lampHeight=-40*cnv*s2
			  lampWidth=1.5*cnv*s2
			  d.fill(50)
			  d.rect(x,recY+20*cnv*s2,lampWidth,lampHeight)
			  d.fill(100,100,100,0.4)
			  d.circle(x+lampWidth/2,recY+20*cnv*s2+lampHeight,7*cnv*s2)
			  
			  d.colorMode(HSB,360,100,100,100)
				// d.strokeWeight(map(fill,0,255,0.2*cnv*s2,0.4*cnv*s2)) 
				// d.drawingContext.shadowBlur = 5*s2*cnv
				// d.drawingContext.shadowColor = color(0)
				// d.drawingContext.shadowOffsetY = -1*s2*cnv;
				// d.drawingContext.shadowOffsetX = -1*s2*cnv;

				// d.line(winX/2-1*cnv*s2,0,winX/2-1*cnv*s2,lambaLine*cnv*s2)
				// d.fill(37.41,50,map(fill2,0,255,0,100))
				// d.fill(41.82,100,78,map(fill,0,255,0,100))
				//d.stroke(41.82,100,78,map(fill,0,255,0,100))
				// d.noStroke();
				// inside.strokeWeight(map(fill,0,255,0.1*cnv*s2,0.2*cnv*s2)) 
				
				d.push()
				d.colorMode(HSB,360,100,100,100)
				d.noStroke()
				if(night){lightrange=80}else{lightrange=40}
				for(lr=0;lr<lightrange;lr++){
					crand=map(fxrand(),0,1,20,100)
					d.fill(50.41,map(fxrand(),0,1,20,100),crand,0.2)
					// if(night){d.fill(37.41,50,map(fill2,0,255,0,100),0.8)}
					// if(night){d.fill(37.41,50,map(fill,0,255,0,100),10)}
				d.circle(x+lampWidth/2,recY+20*cnv*s2+lampHeight,5*cnv*s2-lr*cnv*s2)
				}
				
				d.strokeWeight(0.1*cnv*s2)
				d.fill(50.41,50,100)
				d.circle(x+lampWidth/2,recY+20*cnv*s2+lampHeight,3*cnv*s2)//lamba
				d.pop()	
			  d.pop()
			  }
			d.push()
			d.fill(30)
			if(layer<katmanSayısı-1){d.rect(0,recY+20*cnv*s2,canvas*2,(canvas/60)*s2)}
			d.pop()
			if(layer==katmanSayısı-1){
			// print("yer")
			d.push()
			// d.fill(50)
			roof.background(70)//39,58,68
			roof.image(baklava,0,0)
			d._renderer._setFill(d.drawingContext.createPattern(roof.canvas, 'repeat'));
			if(night){d.fill(20)}
			d.rect(0,recY+winY,canvas+300*cnv*s2,20*cnv*s2)//yer: tam oturmuyor
			
			 
			d.pop()
		}
	
	
	
		if(x==0){//son katmandaki gölgeyi siliyor
			
			image(d,-20*cnv,0)
		}else{
			
		// drawingContext.shadowBlur = 50*s2*cnv//80di eskiden
			// drawingContext.shadowColor = color(2)
			// drawingContext.shadowOffsetY = -10*s2*cnv;
			push()
			drawingContext.shadowBlur = 30*cnv*s2
		  drawingContext.shadowColor = color(3,3,3,0.57)
		  drawingContext.shadowOffsetX = -60*s2*cnv*sAngle;
			// drawingContext.shadowOffsetY = 30*s2*cnv;
			
			
			
			
	image(d,-20*cnv,0)
		// print(layer)
	pop()
	}
	
	layer++
	// }
}
else{
	nextLayer=1}
				
			if (nextLayer==1){
						drawingContext.shadowBlur = 0
						drawingContext.shadowColor = 0
						drawingContext.shadowOffsetX = 0
				for(b=0;b<4000/scaleAll;b++){
				Bx=rnd(0,canvas)
				By=rnd(0,recY+37*cnv*s2)
				image(bird,Bx,By)
				}
				
				
				
				drawingContext.shadowBlur = 50*s2*cnv//80di eskiden
			drawingContext.shadowColor = color(2)
			drawingContext.shadowOffsetY = -2*s2*cnv;
			push()
			allimg=get()
			translate(canvas/2,canvas/2)
			scale(1,-1/3)
			// tint(255, 40);
			if(night){allimg.filter(BLUR, 5*cnv*s2);}else{
			allimg.filter(BLUR, 4*cnv*s2);
			}
			image(allimg,-canvas/2,-canvas*2-149*cnv*s2)
			// rect(0,recY+winY,canvas+300*cnv*s2,20*cnv*s2)//yer: tam oturmuyor
			pop()



			denizStart=recY+37*cnv*s2
				sea.push()
			// print(üstKatman)
			colorMode(RGB)
			segment=1200/scaleAll
			 // from = color(16.32, 59.81, 102);	
			 // from = color(50);//black
			 from = color(31, 42, 54)//black	
			 to = color(16.32, 59.81, 102);
			 // to = color(16.32, 30, 50); //dark blue
			 // (92.33,161.69,228.97)
			 // (68.53, 136, 201.45);
				for(x=0;x<segment;x++){
					cc=lerpColor(from, to, map(x,0,segment,0,1))
					// sea.noStroke()
					// sea.stroke(200)
					sea.strokeWeight(0.07*cnv*s2)
					sea.fill(cc)
					// sea.setAlpha(255)
				sea.rect(0,denizStart+((canvas-denizStart)/segment)*x,canvas,(canvas-denizStart)/segment+2*cnv*s2)
				}
			sea.pop()
			push()
			tint(255, 190);
			if(night){tint(255, 100);}
			image(sea,0,0)
			pop()
	// addGrain(15)
	// addGrain(15*cnv)
	print("camiCount",camiCount)
	if(isSave){saveCanvas('myCanvas', 'jpg')}
	noLoop()
			}

  
  
}


		// inside.drawingContext.shadowColor = color(0,0,0,0.4)
		// inside.drawingContext.shadowOffsetX = -5*s2*cnv*sAngle;
		// inside.drawingContext.shadowOffsetY = 3*s2*cnv;
		// inside.drawingContext.shadowBlur = 2*s2*cnv;

function fillInside(x,y){
	
	d.push()
					d.fill(255)
				d.rect(winCordX,winCordY,winX,winY)
				d.fill(fill)
				d.drawingContext.shadowBlur = 1.5*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-2*cnv*s2)
	inside.colorMode(RGB)
	// inside.background(fill)
	
inside.push()
	inside.noStroke()
	inside.translate(-3*cnv*s2*sAngle,2*cnv*s2)
	inside.fill(fill-30)
	inside.rect(-20*cnv*s2,-20*cnv*s2,winX+22*cnv*s2,winY+22*cnv*s2)
	inside.fill(fill)
	inside.rect(0,0,winX-2*cnv*s2,winY-2*cnv*s2)
	
inside.pop()
		
	
	
	
	lamba=int(map(fxrand(),0,1,0,3))
	switch(lamba){//----------------------------------------lamba
				case 0://boş

					break;
				case 1:
								
				lambaLine=map(fxrand(),0,1,1,3)
				inside.colorMode(HSB,360,100,100,100)
				inside.strokeWeight(map(fill,0,255,0.2*cnv*s2,0.4*cnv*s2)) 
				inside.drawingContext.shadowBlur = 5*s2*cnv
				inside.drawingContext.shadowColor = color(0)
				inside.drawingContext.shadowOffsetY = -1*s2*cnv;
				inside.drawingContext.shadowOffsetX = -1*s2*cnv;

				inside.line(winX/2-1*cnv*s2,0,winX/2-1*cnv*s2,lambaLine*cnv*s2)
				inside.fill(37.41,50,map(fill,0,255,0,100))
				// d.fill(41.82,100,78,map(fill,0,255,0,100))
				//d.stroke(41.82,100,78,map(fill,0,255,0,100))
				// d.noStroke();
				// inside.strokeWeight(map(fill,0,255,0.1*cnv*s2,0.2*cnv*s2)) 
				
				inside.push()
				inside.noStroke()
				for(lr=0;lr<20;lr++){
					inside.fill(37.41,50,map(fill,0,255,0,100),3)
					if(night){inside.fill(37.41,50,map(fill,0,255,0,100),10)}
				inside.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,20*cnv*s2-lr*cnv*s2)
				}
				inside.pop()
				
				inside.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba
					break;
				
				case 2://rect
				inside.push()
				lambaLine=map(fxrand(),0,1,1,3)
				inside.colorMode(HSB,360,100,100,100)
				inside.strokeWeight(map(fill,0,255,0.2*cnv*s2,0.4*cnv*s2)) 
				inside.drawingContext.shadowBlur = 5*s2*cnv
				inside.drawingContext.shadowColor = color(0)
				inside.drawingContext.shadowOffsetY = -1*s2*cnv;
				inside.drawingContext.shadowOffsetX = -1*s2*cnv;

				inside.line(winX/2-1*cnv*s2,0,winX/2-1*cnv*s2,lambaLine*cnv*s2)
				inside.fill(37.41,50,map(fill,0,255,0,100))
				// d.fill(41.82,100,78,map(fill,0,255,0,100))
				//d.stroke(41.82,100,78,map(fill,0,255,0,100))
				// d.noStroke();
				// inside.strokeWeight(map(fill,0,255,0.1*cnv*s2,0.2*cnv*s2)) 
				
				inside.push()
				inside.noStroke()
				for(lr=0;lr<20;lr++){
					inside.fill(37.41,50,map(fill,0,255,0,100),3)
					if(night){inside.fill(37.41,50,map(fill,0,255,0,100),10)}
				inside.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,20*cnv*s2-lr*cnv*s2)
				}
				inside.pop()
				
				inside.rectMode(CENTER)
				inside.rect(winX/2-1*cnv*s2,lambaLine*cnv*s2,2.3*cnv*s2,3*cnv*s2)
				// insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba
				inside.pop()

					break;
			}
	inside.push()
	inside.imageMode(BOTTOM)
	// inside.scale(0.12*cnv*s2,0.12*cnv*s2)
	// print(eval("people"+int(map(fxrand(),0,1,1,31))))
	inside.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,-winX*2,winX*2), 8*cnv*s2)
	inside.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,-winX*2,winX*2), 8*cnv*s2)
	inside.pop()
	d.translate(x,y)
	d.image(inside,0,0)
	
	d.pop()
}

function fillInsideBalkon(x,y){
	insideBalkon.colorMode(RGB)
	d.colorMode(RGB)
	d.push()
					d.fill(255)
				d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
				d.fill(fill)
				d.drawingContext.shadowBlur = 1.5*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-20*cnv*s2)
	insideBalkon.colorMode(RGB)
	insideBalkon.background(fill)
	
insideBalkon.push()
	insideBalkon.noStroke()
	insideBalkon.translate(-3*cnv*s2*sAngle,2*cnv*s2)
	insideBalkon.fill(fill-30)
	insideBalkon.rect(-20*cnv*s2,-20*cnv*s2,winX+22*cnv*s2,winY+22*cnv*s2)
	insideBalkon.fill(fill)
	insideBalkon.rect(0,0,winX-2*cnv*s2,winY+5*cnv*s2)
	
insideBalkon.pop()
	
	
	// lamba=2
	lamba=int(map(fxrand(),0,1,0,3))
	switch(lamba){//----------------------------------------lamba
				case 0://boş

					break;
				case 1://circle
								
				lambaLine=map(fxrand(),0,1,1,3)
				insideBalkon.colorMode(HSB,360,100,100,100)
				insideBalkon.strokeWeight(map(fill,0,255,0.2*cnv*s2,0.4*cnv*s2)) 
				insideBalkon.drawingContext.shadowBlur = 5*s2*cnv
				insideBalkon.drawingContext.shadowColor = color(0)
				insideBalkon.drawingContext.shadowOffsetY = -1*s2*cnv;
				insideBalkon.drawingContext.shadowOffsetX = -1*s2*cnv;

				insideBalkon.line(winX/2-1*cnv*s2,0,winX/2-1*cnv*s2,lambaLine*cnv*s2)
				insideBalkon.fill(37.41,50,map(fill,0,255,0,100))
				// d.fill(41.82,100,78,map(fill,0,255,0,100))
				//d.stroke(41.82,100,78,map(fill,0,255,0,100))
				// d.noStroke();
				// inside.strokeWeight(map(fill,0,255,0.1*cnv*s2,0.2*cnv*s2)) 
				
				insideBalkon.push()
				insideBalkon.noStroke()
				for(lr=0;lr<20;lr++){
					insideBalkon.fill(37.41,50,map(fill,0,255,0,100),3)
					if(night){insideBalkon.fill(37.41,50,map(fill,0,255,0,100),10)}
				insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,20*cnv*s2-lr*cnv*s2)
				}
				insideBalkon.pop()
				
				
				insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba
					break;
				
				case 2://rect
				insideBalkon.push()
				lambaLine=map(fxrand(),0,1,1,3)
				insideBalkon.colorMode(HSB,360,100,100,100)
				insideBalkon.strokeWeight(map(fill,0,255,0.2*cnv*s2,0.4*cnv*s2)) 
				insideBalkon.drawingContext.shadowBlur = 5*s2*cnv
				insideBalkon.drawingContext.shadowColor = color(0)
				insideBalkon.drawingContext.shadowOffsetY = -1*s2*cnv;
				insideBalkon.drawingContext.shadowOffsetX = -1*s2*cnv;

				insideBalkon.line(winX/2-1*cnv*s2,0,winX/2-1*cnv*s2,lambaLine*cnv*s2)
				insideBalkon.fill(37.41,50,map(fill,0,255,0,100))
			
				insideBalkon.push()
				insideBalkon.noStroke()
				for(lr=0;lr<20;lr++){
					insideBalkon.fill(37.41,50,map(fill,0,255,0,100),3)
					if(night){insideBalkon.fill(37.41,50,map(fill,0,255,0,100),10)}
				insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,20*cnv*s2-lr*cnv*s2)
				}
				insideBalkon.pop()
				
				insideBalkon.rectMode(CENTER)
				insideBalkon.rect(winX/2-1*cnv*s2,lambaLine*cnv*s2,2.3*cnv*s2,3*cnv*s2)
				insideBalkon.pop()
				// insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba

					break;
			}
	
	insideBalkon.push()
	insideBalkon.imageMode(BOTTOM)
	// insideBalkon.scale(0.12*cnv*s2,0.12*cnv*s2)
	// print(eval("people"+int(map(fxrand(),0,1,1,31))))
	insideBalkon.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,-winX*2,winX*2), 8*cnv*s2)
	insideBalkon.image(eval("people"+int(map(fxrand(),0,1,1,30))), map(fxrand(),0,1,-winX*2,winX*2), 8*cnv*s2)
	insideBalkon.pop()
	d.translate(x,y)
	d.image(insideBalkon,0,0)
	
	d.pop()
}


function makeKlima(){
	klima=[10*cnv*s2,6*cnv*s2]
			  isKlima=int(map(fxrand(),0,1,0,4))
			  switch(isKlima){
				case 0:
				break;
				case 1:
				if(night){d.fill(130)}
				d.push()
					d.push()
						d.drawingContext.shadowColor = color(0,0,0,0.4)
						d.drawingContext.shadowOffsetX = -2*s2*cnv*sAngle;
						d.drawingContext.shadowOffsetY = 1.3*s2*cnv;
						d.drawingContext.shadowBlur = 1.7*s2*cnv;
					d.rect(winCordX+1*cnv*s2,winCordY+winY+1*cnv*s2,klima[0],klima[1])
					d.pop()
				//yan veya dik klima çizgileri ekle
				d.circle(winCordX+4*cnv*s2,winCordY+winY+4*cnv*s2,4.4*cnv*s2)
					
				// d.push()
				
				// d.translate(winCordX+4*cnv*s2,winCordY+winY-10*cnv*s2)
				// d.scale(0.06*cnv*s2,0.06*cnv*s2);
				// d.image(img, 0, 0);
				// d.copy(img, 0, 0, 200, 400, winCordX+4*cnv*s2,winCordY+winY-10*cnv*s2, 50,100);
				// d.pop()
				
				// d.drawingContext.shadowBlur = 0*cnv*s2
				// d.drawingContext.shadowColor = color(0)
				d.strokeWeight(0.3*cnv*s2)
				// klimaAx=int(map(fxrand(),0,1,0,1))
				// print(klimaAx)
				// if(klimaAx==0){
					
						// for(r1=0;r1<klima[1]/25*cnv*s2;r1++){
						// d.strokeWeight(0.1*cnv*s2)
						for(rc=0;rc<8;rc++){
						d.line(winCordX+1*cnv*s2,winCordY+winY+rc*cnv*s2,winCordX+1*cnv*s2+klima[0],winCordY+winY+rc*cnv*s2)
						
						}
						// po= [winCordX+1*cnv*s2,winCordY+winY+1*cnv*s2]
						
						// d.line(po[0],po[1]+r1*cnv*s2,po[0]+klima[0],po[1]+r1*cnv*s2)
						// }
					
				// }
				d.circle(winCordX+4*cnv*s2,winCordY+winY+4*cnv*s2,3.0*cnv*s2)
				d.circle(winCordX+4*cnv*s2,winCordY+winY+4*cnv*s2,1.0*cnv*s2)
				d.line(point[0],point[1],point[0]+5,point[0]+5)

				
				d.pop()
				break;
			  }
			  
}


function makePerde(){
	windowType=int(map(fxrand(),0,1,0,2))
			  switch(windowType){//------------------------------------windowType
				  case 0:
				  break;
				  case 1://panjur
				  d.push();
				  d.strokeWeight(0.4*s2*cnv)
				  panjurLevel=int(map(fxrand(),0,1,0,winY))
				  panjurDense=1.5*s2*cnv
				  
				  d.fill(255)
				  if(night){d.fill(130)}
				  d.rect(winCordX,winCordY,winX,panjurDense*panjurLevel/panjurDense)
				  for(t2=0;t2<panjurLevel/panjurDense;t2++){
					  d.line(winCordX,winCordY+panjurDense*t2,winCordX+winX,winCordY+panjurDense*t2)
				  }
				  d.rect(winCordX,winCordY-1*cnv*s2,winX,3*cnv*s2)
				  
				  d.pop();
				  break;
			  }
			  
}


function makeDik(){
	for(x=0;x<canvas;x+=3*cnv*s2){
			dikTemp.strokeWeight(0.12*cnv*s2)
			dikTemp.stroke(0)
			dikTemp.line(x,0,x,canvas)
		}
}

function makeYan(){
	for(y=0;y<canvas;y+=3*cnv*s2){
			yanTemp.strokeWeight(0.12*cnv*s2)
			yanTemp.stroke(0)
			yanTemp.line(0,y,canvas,y)
		}

}
function makeRoof(){
	for(x=0;x<canvas*2;x+=3*cnv*s2){
			baklava.strokeWeight(0.12*cnv*s2)
			baklava.stroke(0)
			baklava.line(x,0,0,x)
		}
		for(y=0;y<canvas*2;y+=3*cnv*s2){
			baklava.strokeWeight(0.12*cnv*s2)
			baklava.stroke(0)
			baklava.line(canvas-y,0,canvas,y)
		}

}


function addGrain(qty = 20) {
  loadPixels();
  let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
    pixels[i] += round(qty * (fxrand() - 0.5));
    pixels[i + 1] += round(qty * (fxrand() - 0.5));
    pixels[i + 2] += round(qty * (fxrand() - 0.5));
  }
  updatePixels();
}


function DaddGrain(qty = 20) {
  dumanTemp.loadPixels();
  let pD = pixelDensity();
  let halfImage = 5 * (width * pD) * (height * pD);//pixel density. pixels.lenght
  for (let i = 0; i < halfImage; i += 4) {
    dumanTemp.pixels[i] += round(qty * (fxrand() - 0.5));
    dumanTemp.pixels[i + 1] += round(qty * (fxrand() - 0.5));
    dumanTemp.pixels[i + 2] += round(qty * (fxrand() - 0.5));
  }
  dumanTemp.updatePixels();
}


// function createGrainImage(e = 30, t = 255) {
	// let a = createImage(canvas * 1, canvas * 1);
	// a.loadPixels();
	// for(let l = 0; l < a.pixels.length; l += 4) {
		// let o = random(-e / 2, e / 2);
		// a.pixels[l] += 127 + o, a.pixels[l + 1] = 127 + o, a.pixels[l + 2] = 127 + o, a.pixels[l + 3] = t
	// }
	// return a.updatePixels(), a
// }


function rnd(x,y){
	return map(fxrand(),0,1,x,y)
}


function keyTyped() {
  if (key === 'a') {
    print("a")
	background(255)
	pixelDensity(1);
	camiCount=0
      screen = [windowWidth, windowHeight]
     Adcanvas = sort(screen, 0);
    print(Adcanvas[0]);
    canvas = Adcanvas[0];
	canvas = 2000
	orjCanvas=canvas
	
    createCanvas(canvas, canvas);
	// canvas = Adcanvas[0];
	cnv=canvas/800
  // recY=map(fxrand(), 0, 1, 0, canvas)
  
  dik=createGraphics(canvas, canvas)
  yan=createGraphics(canvas, canvas)
  roof=createGraphics(canvas, canvas)
  dikTemp=createGraphics(canvas, canvas)
  yanTemp=createGraphics(canvas, canvas)
  pointPopulate=createGraphics(canvas, canvas)
sky=createGraphics(canvas, canvas)
sea=createGraphics(canvas, canvas)
baklava=createGraphics(canvas, canvas)
	  
		  
	s2=scaleAll/100
	
	slopetogap=slope*2
   katmanGap=slopetogap*s2*cnv//60
  if(scaleAll==50){katmanSayısı=int(15/(katmanGap/(60*s2*cnv)))}else{katmanSayısı=int(12/(katmanGap/(60*s2*cnv)))}
  // katmanSayısı=10
  
 
  // sonKatmanY=katmanGap*katmanSayısı
  // print(sonKatmanY)
  // for(aa=1;aa<30;aa++){
			  // eval("people"+aa).resize(eval("people"+aa).width/9*cnv*s2,eval("people"+aa).height/9*cnv*s2)
			  // }
  
  // ----------------------/parameters
  // treeOran=tree.height/tree.width
  // treeHH=60*s2*cnv
  // cami2=createGraphics(cami.width, cami.height)
  // cami2.image(cami,0,0)
	// cami=cami2
  // cami.resizeCanvas(360*cnv*s2,360*cnv*s2)
  // cami.resize(0,360*cnv*s2)
  // for(x=1;x<6;x++){
  
  // eval("tree"+x).resize(80*s2*cnv,0)//ağaçları aynı boyuta getir
  
  // }
dik.colorMode(HSL,360,100,100)
yan.colorMode(HSL,360,100,100)
makeDik()
makeYan()
makeRoof()

// for(x=0;x<canvas;x+=4*cnv*s2){
		// for(y=0;y<canvas;y+=4*cnv*s2){
		// pointPopulate.point(x,y)
	// }
// }
// for(x=0;x<40000000/(scaleAll*2);x+=1){
	// pointPopulate.strokeWeight(0.10*cnv*s2)
			// pointPopulate.stroke(100)
// pointPopulate.point(map(fxrand(),0,1,0,canvas),map(fxrand(),0,1,0,canvas))
// }
// randHueGrad=map(fxrand(),0,1,1,6)
randHue=map(fxrand(),0,1,0,300)
  gapX=6*s2*cnv
  gapY=14*s2*cnv
  winX=13*s2*cnv
  winY=19*s2*cnv
  inside=createGraphics(winX-2*cnv*s2, winY-2*cnv*s2)
  insideBalkon=createGraphics(winX-2*cnv*s2, winY+5*cnv*s2)
  colorMode(HSL,360,100,100)
  recY=orjCanvas-100*cnv
  for (var i = -1; i < katmanSayısı+2; i++) {
   this["drawingLayer"+i] = createGraphics(canvas+200*cnv, canvas)
}
  
  recY-=katmanGap*katmanSayısı
layer=0
nextLayer=0
isSave=1
	// for(draw=0;draw<10;draw++){
	// print("draw",draw)
	
	loop()
	
  // }
	// draw()
  } 
}