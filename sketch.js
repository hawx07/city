
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


let img;

function preload() {
  img = loadImage('d1.svg');
}

function setup() {
	
      let screen = [windowWidth, windowHeight]
    let Adcanvas = sort(screen, 0);
    print(Adcanvas[0]);
    canvas = Adcanvas[0];
	orjCanvas=canvas
	
    createCanvas(canvas, canvas);
	canvas = Adcanvas[0];
	cnv=canvas/800
  // recY=map(fxrand(), 0, 1, 0, canvas)
  
  dik=createGraphics(canvas, canvas)
  yan=createGraphics(canvas, canvas)
  roof=createGraphics(canvas, canvas)
  dikTemp=createGraphics(canvas, canvas)
  yanTemp=createGraphics(canvas, canvas)
  pointPopulate=createGraphics(canvas, canvas)
	
  
  
  
  
  
  
  
background(62,186,207)
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
  scaleAll=150
  katmanSayısı=10
  s2=scaleAll/100
  katmanGap=80*s2*cnv
  
  
  
  //----------------------/parameters
  
dik.colorMode(HSL,360,100,100)
yan.colorMode(HSL,360,100,100)
makeDik()
makeYan()
roof.colorMode(HSL,360,100,100)
roof.background(39,80,85)//39,58,68
makeRoof()
// for(x=0;x<canvas;x+=4*cnv*s2){
		// for(y=0;y<canvas;y+=4*cnv*s2){
		// pointPopulate.point(x,y)
	// }
// }
// for(x=0;x<90000000/(scaleAll*2);x+=1){
	// pointPopulate.strokeWeight(0.08*cnv*s2)
			// pointPopulate.stroke(100)
// pointPopulate.point(map(fxrand(),0,1,0,canvas),map(fxrand(),0,1,0,canvas))
// }

  gapX=6*s2*cnv
  gapY=14*s2*cnv
  winX=13*s2*cnv
  winY=19*s2*cnv
  inside=createGraphics(winX-2*cnv*s2, winY-2*cnv*s2)
  insideBalkon=createGraphics(winX-2*cnv*s2, winY+5*cnv*s2)
  colorMode(HSL,360,100,100)
  recY=orjCanvas-100*cnv
  for (var i = 0; i < katmanSayısı; i++) {
   this["drawingLayer"+i] = createGraphics(canvas+200*cnv, canvas)
}
  
  recY-=katmanGap*katmanSayısı
    for(layer=0;layer<katmanSayısı;layer++){
		
		d=eval("drawingLayer"+layer)
		//stroke(1/katmanSayısı*layer)
		strokeWeight(1/(katmanSayısı+1)*(layer+1)*s2)
		recX=0
		recY+=katmanGap
		if(layer==katmanSayısı-1){
			// print("yer")
			d.push()
			d.fill(50)
			d.rect(0,recY,canvas+300*cnv*s2,37*cnv*s2)//yer: tam oturmuyor
			
			d.pop()
		}
	  for(c=0;c<(800/scaleAll)+3;c++){
		  if(layer!=katmanSayısı-1){
			recY+=map(fxrand(),0,1,-3*cnv*s2,3*cnv*s2)
		  }
		  countX=int(map(fxrand(), 0, 1, 4, 6))//bina yan pencere
		  countY=int(map(fxrand(), 0, 1, 5, 10))//bina dik pencere
		  d.colorMode(HSL,360,100,100)
		  cL=color(map(fxrand(), 0, 1, 0, 360),map(fxrand(), 0, 1, 0, 100),map(fxrand(), 0, 1, 80, 90))//70-80
		  
		  // cL=color(500)
		  // cL=color(map(fxrand(), 0, 1, 0, 100),map(fxrand(), 0, 1, 0, 100),map(fxrand(), 0, 1, 40+12*(katmanSayısı-layer), 60+10*(katmanSayısı-layer)))
		  roofDistance=recX-gapX-(recX+countX*(gapX+winX))
		  d.push();
		  d.fill(hue(cL), saturation(cL), lightness(cL))
		  // d.fill(400)
		  d.drawingContext.shadowBlur = 1.5*cnv*s2
		  d.drawingContext.shadowColor = color(0)
		  
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
		  d.rect(recX-gapX+map(fxrand(),0,1,10*cnv*s2,abs(roofDistance)-10*cnv*s2),recY+winY-countY*(gapY+winY)-gapX,7*cnv*s2,-10*cnv*s2)//baca
		  d.strokeWeight(1/(katmanSayısı+1)*(layer+1)*s2/5)
		  d.rect(recX-gapX,recY+winY,countX*(gapX+winX)+gapX,-countY*(gapY+winY)-gapX) //bina
		  d.push()
		  d.noFill()
		  
		  d.rect(recX-gapX,recY+winY-countY*(gapY+winY)-gapX,countX*(gapX+winX)+gapX,gapY-5*cnv*s2)//çatı çizgisi
		  d.pop()
			  d.push()
			  d.colorMode(RGB)
			  d.fill(map(fxrand(),0,1,150,255))
			  
			  d.rect(recX,recY-3*cnv*s2,countX*(gapX+winX)-gapX,winY+3*cnv*s2)//dükkan
			  d.pop()
		  d.pop();
		  balkonType=int(map(fxrand(),0,1,0,3))
		  roofType=int(map(fxrand(),0,1,0,3))
		  //print(roofType)
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
		  // d.arc(p1[0]+(p2[0]-p1[0])/2, p1[1], (p2[0]-p1[0]), 30*cnv*s2, -PI, 0, PIE);
		  d.pop();
		  break;
		  }
		  
		  for(x=0;x<countX;x++){//pencere
			  for(y=1;y<countY;y++){
				d.strokeWeight(0.5*cnv*s2)
				winCordX=recX+(winX+gapX)*x
				winCordY=recY-(winY+gapY)*y
				d.push()
				d.colorMode(RGB)
				fill=map(fxrand(),0,1,0,255)
				
				// d.fill(41.82,100,map(fxrand(),0,1,78,100))
				

				if(balkonType==1){//bina yanları balkon
					if (x==0){//en sol
						d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
						// d.fill(fill)
						
						// d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-1*cnv*s2+6*cnv*s2)
						fillInsideBalkon(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
						
						// d.line(winCordX+2*cnv*s2+winX,winCordY+winY+6*cnv*s2,winCordX-gapX,winCordY+winY+6*cnv*s2)
						d.fill(cL)
						// d.drawingContext.shadowBlur = 3.5*cnv*s2
						// d.drawingContext.shadowOffsetY = 1*s2*cnv;
						// d.drawingContext.shadowColor = color(0)
						d.line(winCordX+2*cnv*s2+winX,winCordY+winY-3*cnv*s2,winCordX-gapX,winCordY+winY-3*cnv*s2)
						d.rect(winCordX-gapX,winCordY+winY+6*cnv*s2,gapX+winX+2*cnv*s2,+3*cnv*s2)//balkon altlık
						d.noFill()
						d.push()
						d.drawingContext.shadowBlur = 1.5*cnv*s2
						d.drawingContext.shadowOffsetY = 1*s2*cnv;
						d.drawingContext.shadowColor = color(0)
						
						d.rect(winCordX+winX+2*cnv*s2,winCordY+winY+6*cnv*s2,-gapX-winX-2*cnv*s2,-29*cnv*s2)//balkonderinlik çizgisi
						d.pop()
						for(bLineX=0;bLineX<12;bLineX++){
							
							d.line(winCordX+2*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY+6*cnv*s2,winCordX+2*cnv*s2+winX-bLineX*2*cnv*s2,winCordY+winY-3*cnv*s2)
						}
					}else if(x==countX-1) {//en sağ
						// winCordX=winCordX+2*cnv*s2
						d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
						// d.fill(fill)
						
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
						makePerde()
					}
				}else{
					fillInside(winCordX+1*cnv*s2,winCordY+1*cnv*s2)
					makeKlima()
					makePerde()
				}	
				d.colorMode(HSB,360,100,100,100)
				d.pop()
				// d.point(recX+(winSize)*x,recY+(winSize)*y)
			  }
		  }
	  if(recX>canvas){c=(800/scaleAll)+30} //sınırsız üretimi durdurmak için kullanılan fonksiyon. incele.
	  recX+=countX*(gapX+winX)+gapX
	  
	  }
	}
}

function draw() {
  //background(220);

  	// t1.rect(100,100,100,100)
	// t1.rect(100,200,100,100)
		  	
	for(x=0;x<katmanSayısı;x++){
		if(x==0){//son katmandaki gölgeyi siliyor
			
			image(eval("drawingLayer"+x),-20*cnv,0)
		}else{
			
		drawingContext.shadowBlur = 80*s2*cnv
			drawingContext.shadowColor = color(0)
			drawingContext.shadowOffsetY = -10*s2*cnv;
	image(eval("drawingLayer"+x),-20*cnv,0)
		}
	}

	// makeRoof()
	// image(roof,0,0)
	// image(yan,0,0)
	// image(dik,0,0)
  noLoop()
}

function fillInside(x,y){
	
	d.push()
					d.fill(255)
				d.rect(winCordX,winCordY,winX,winY)
				d.fill(fill)
				d.drawingContext.shadowBlur = 1.5*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-2*cnv*s2)
	inside.colorMode(RGB)
	inside.background(fill)
	
	lamba=int(map(fxrand(),0,1,1,2))
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
				inside.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba
					break;
				
				case 2:

					break;
			}
	inside.push()
	inside.scale(0.06*cnv*s2,0.06*cnv*s2)
	inside.imageMode(BOTTOM)
	inside.image(img, map(fxrand(),0,1,-winX*8,winX*8)*cnv*s2, 120*cnv)
	inside.pop()
	d.translate(x,y)
	d.image(inside,0,0)
	
	d.pop()
}

function fillInsideBalkon(x,y){
	
	d.push()
					d.fill(255)
				d.rect(winCordX,winCordY,winX,winY+6*cnv*s2)
				d.fill(fill)
				d.drawingContext.shadowBlur = 1.5*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.rect(winCordX+1*cnv*s2,winCordY+1*cnv*s2,winX-2*cnv*s2,winY-1*cnv*s2+6*cnv*s2)
	insideBalkon.colorMode(RGB)
	insideBalkon.background(fill)
	
	lamba=int(map(fxrand(),0,1,1,2))
	switch(lamba){//----------------------------------------lamba
				case 0://boş

					break;
				case 1:
								
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
				insideBalkon.circle(winX/2-1*cnv*s2,lambaLine*cnv*s2,3*cnv*s2)//lamba
					break;
				
				case 2:

					break;
			}
	insideBalkon.push()
	insideBalkon.scale(0.06*cnv*s2,0.06*cnv*s2)
	insideBalkon.imageMode(BOTTOM)
	insideBalkon.image(img, map(fxrand(),0,1,-winX*8,winX*8)*cnv*s2, 120*cnv)
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
				d.push()
				d.drawingContext.shadowBlur = 1*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.rect(winCordX+1*cnv*s2,winCordY+winY+1*cnv*s2,klima[0],klima[1])
				//yan veya dik klima çizgileri ekle
				d.circle(winCordX+4*cnv*s2,winCordY+winY+4*cnv*s2,4.4*cnv*s2)
					
				d.push()
				
				d.translate(winCordX+4*cnv*s2,winCordY+winY-10*cnv*s2)
				// d.scale(0.06*cnv*s2,0.06*cnv*s2);
				// d.image(img, 0, 0);
				// d.copy(img, 0, 0, 200, 400, winCordX+4*cnv*s2,winCordY+winY-10*cnv*s2, 50,100);
				d.pop()
				
				d.drawingContext.shadowBlur = 1*cnv*s2
				d.drawingContext.shadowColor = color(0)
				d.strokeWeight(0.2*cnv*s2)
				klimaAx=int(map(fxrand(),0,1,0,1))
				// print(klimaAx)
				if(klimaAx==0){
					
						for(r1=0;r1<klima[1]/25*cnv*s2;r1++){
						d.strokeWeight(0.1*cnv*s2)
						po= [winCordX+1*cnv*s2,winCordY+winY+1*cnv*s2]
						
						d.line(po[0],po[1]+r1*cnv*s2,po[0]+klima[0],po[1]+r1*cnv*s2)
						}
					
				}
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
			roof.strokeWeight(0.12*cnv*s2)
			roof.stroke(0)
			roof.line(x,0,0,x)
		}
		for(y=0;y<canvas*2;y+=3*cnv*s2){
			roof.strokeWeight(0.12*cnv*s2)
			roof.stroke(0)
			roof.line(canvas-y,0,canvas,y)
		}

}

// function makeYan(){
	// for(y=0;y<canvas;y+=3*cnv*s2){
			// yanTemp.strokeWeight(0.12*cnv*s2)
			// yanTemp.stroke(0)
			// yanTemp.line(0,y,canvas,y)
		// }

// }