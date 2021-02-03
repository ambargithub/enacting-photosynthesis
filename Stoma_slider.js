var e = d3.select("#expl")
.append("image")
.attr("xlink:href","Images_1\\Expl.svg")
.attr("x",0)
.attr("y",0)


var u = d3.select("#stoma-2")
.append("image")
.attr("width",450)
.attr("height",350)
.attr("xlink:href","Images_1\\Gist_Leaf.jpg")
.attr("visibility","hidden")


var t = d3.select("#stoma")
.append("image")
.attr("width",1200)
.attr("height",1200)
.attr("x",-180)
.attr("y",-180)
.attr("xlink:href","Images_1\\leaf.jpg")
.attr("visibility","hidden")

//Slider 1 animation//

var i1 = d3.select("#ins-1")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("visibility","hidden");

d3.select("#slider-1").on("mousemove",function(event){
  i1.attr("visibility","")
  x = event.clientX;
  i1.attr("x",x-433);
})
.on("mouseout",function(){
  i1.attr("visibility","hidden")
  e.attr("visibility","hidden");
})

d3.select("#slider-1").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
var w = 1200-(16*i+5)
//else{var w = 1250 - i}
var h = 1200-(16*i+5)
//else{var h = 650 - i}
t.transition().duration(400).attr("xlink:href","Images_1\\leaf.jpg").attr("width",w).attr("height",h).attr("x",-180 + 2*i).attr("y",-180 + 3*i).attr("visibility","")
u.attr("visibility","")
})

//Slider 2 animation

var i2 = d3.select("#ins-2")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("visibility","hidden");

d3.select("#slider-2").on("mousemove",function(event){
  i2.attr("visibility","")
  x = event.clientX;
  i2.attr("x",x-464);
})
.on("mouseout",function(){i2.attr("visibility","hidden")})


d3.select("#slider-2").on("input", function(){
  let i = d3.select(this).property('value');
if(i % 3 == 0 ){t.attr("xlink:href","Images_1\\leaf_label_a1.jpg").attr("visibility","").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
else if(i % 3 == 1){t.attr("xlink:href","Images_1\\leaf_label_a2.jpg").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
else if(i %3  == 2){t.attr("xlink:href","Images_1\\leaf_label_a3.jpg").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
u.attr("visibility","")
})

//Slider 3 animation - mix of 1 and 2

var i3 = d3.select("#ins-3")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-3").on("mousemove",function(event){
  i3.attr("visibility","")
  x = event.clientX;
  i3.attr("x",x-302);
})
.on("mouseout",function(){i3.attr("visibility","hidden")})

d3.select("#slider-3").on("input", function(){
  let i = d3.select(this).property('value');
  var w = 1000-(i+2)
  var h = 900-(i+2)
if(i <60 ){t.attr("xlink:href","Images_1\\P3.jpg").attr("width",w).attr("height",h).attr("x",0).attr("y",30-0.5*i).attr("visibility","")}
else if(i>60 & i % 3 == 0){t.attr("xlink:href","Images_1\\P3.1_b.png").attr("width",408).attr("height",308).attr("x",0).attr("y",0.5)}
else if(i>60 & i % 3 == 1){t.attr("xlink:href","Images_1\\P3.2_b.png").attr("width",408).attr("height",308).attr("x",0).attr("y",0.5)}
else if(i>60 & i % 3 == 2){t.attr("xlink:href","Images_1\\P3.3_b.png").attr("width",408).attr("height",308).attr("x",0).attr("y",0.5)}
u.attr("xlink:href","Images_1\\Gist_Plant.jpg").attr("width",408).attr("height",308).attr("y",30).attr("visibility","")
})

//Slider 4 animation 
var i4 = d3.select("#ins-4")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-4").on("mousemove",function(event){
  i4.attr("visibility","")
  x = event.clientX;
  i4.attr("x",x-345);
})
.on("mouseout",function(){i4.attr("visibility","hidden")})

d3.select("#slider-4").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
  var w = i*9 + 408;
  var h = i*9 + 308;
if(i <40 ){t.attr("xlink:href","Images_1\\P3.jpg").attr("width",w).attr("height",h).attr("visibility","").attr("x",0).attr("y",0.5)}

if(i>40 & i % 3 == 0){t.attr("xlink:href","Images_1\\P3_H2O1.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
else if(i>40 & i % 3 == 1){t.attr("xlink:href","Images_1\\P3_H202.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
else if(i>80 & i % 3 == 2){t.attr("xlink:href","Images_1\\P3_H2O3.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
u.attr("xlink:href","Images_1\\Gist_Leaf.jpg").attr("visibility","")

})
//Slider 5 animation [Pore closing]

var i5 = d3.select("#ins-5")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-5").on("mousemove",function(event){
  i5.attr("visibility","")
  x = event.clientX;
  i5.attr("x",x-820);
})
.on("mouseout",function(){i5.attr("visibility","hidden")})

d3.select("#slider-5").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
if(i<5){t.attr("xlink:href","Images_1\\P3_pore1.jpg").attr("width",759).attr("height",659).attr("visibility","").attr("x",0).attr("y",-20)}
if(i>5){t.attr("xlink:href","Images_1\\P3_pore2.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",-20)}
if(i>15){t.attr("xlink:href","Images_1\\P3_pore3.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",-20)}
u.attr("visibility","")
})

//Slider 6 animation [Guard cells]

var i6 = d3.select("#ins-6")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-6").on("mousemove",function(event){
  i6.attr("visibility","")
  x = event.clientX;
  i6.attr("x",x-255);
})
.on("mouseout",function(){i6.attr("visibility","hidden")})

d3.select("#slider-6").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
  var w = i*2+ 759;
  var h = i*2 + 659;
if(i <20 ){t.attr("xlink:href","Images_1\\P3_pore1.jpg").attr("width",759).attr("height",659).attr("y",-20).attr("visibility","")}
if(i >20){t.attr("xlink:href","Images_1\\P3_pore2.jpg").attr("width",759).attr("height",659).attr("y",-20)}
if(i >40 ){t.attr("xlink:href","Images_1\\P3_pore3.jpg").attr("width",759).attr("height",659).attr("y",-20)}
if(i >70 & i % 2 == 0 ){t.attr("xlink:href","Images_1\\P3_pore1_gc.png").attr("width",759).attr("height",659).attr("y",-20)}
else if(i >70 & i % 2 == 1){t.attr("xlink:href","Images_1\\P3_pore3_gc.png").attr("width",759).attr("height",659).attr("y",-20)}
u.attr("xlink:href","Images_1\\Gist_Stomata.jpg").attr("y",30).attr("visibility","")
})


//Slider 7 animation [Guard cells - water in]
var i7 = d3.select("#ins-7")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-7").on("mousemove",function(event){
  i7.attr("visibility","")
  x = event.clientX;
  i7.attr("x",x-670);
})
.on("mouseout",function(){i7.attr("visibility","hidden")})



d3.select("#slider-7").on("input", function(){
  let i = d3.select(this).property('value');
  if(i % 4 == 0 ){t.attr("xlink:href","Images_1\\stoma_closed_arrows1.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50).attr("visibility","")}
  else if(i % 4 == 1){t.attr("xlink:href","Images_1\\stoma_closed_arrows2.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i %4  == 2){t.attr("xlink:href","Images_1\\stoma_closed_arrows3.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i %4  == 3){t.attr("xlink:href","Images_1\\stoma_closed_arrows4.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  if(i>70){t.attr("xlink:href","Images_1\\stoma_open.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  u.attr("xlink:href","Images_1\\Gist_Stomata.jpg").attr("y",30).attr("visibility","")
})

//Slider 8 animation [Guard cells - water out]
var i8 = d3.select("#ins-8")
.append("image")
.attr("xlink:href","Images_1\\Instruction.svg")
.attr("width",30)
.attr("x",0)
.attr("y",0)
.attr("visibility","hidden");

d3.select("#slider-8").on("mousemove",function(event){
  i8.attr("visibility","")
  x = event.clientX;
  i8.attr("x",x-250);
})
.on("mouseout",function(){i8.attr("visibility","hidden")})

d3.select("#slider-8").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
  if(i % 4 == 0 ){t.attr("xlink:href","Images_1\\stoma_open_arr1.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50).attr("visibility","")}
  else if(i % 4 == 1){t.attr("xlink:href","Images_1\\stoma_open_arr2.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i % 4  == 2){t.attr("xlink:href","Images_1\\stoma_open_arr3.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i % 4  == 3){t.attr("xlink:href","Images_1\\stoma_open_arr4.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  if(i>70){t.attr("xlink:href","Images_1\\stoma_closed.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  u.attr("xlink:href","Images_1\\Gist_Stomata.jpg").attr("y",30).attr("visibility","")
})
