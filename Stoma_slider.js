
//let zoom = d3.zoom().on("zoom",function(){
 // t.attr("width", 400)
//  .attr("height",400)
//})

// Appending image to SVG //

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

/*.call(d3.zoom().on("zoom", function () {
  t.attr("transform",function(event){
    console.log(event);
    return(event.transform);
  }) 
}))
*/
//Slider 1 animation//

console.log()
d3.select("#slider-1").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
var w = 1200-(16*i+5)
//else{var w = 1250 - i}
var h = 1200-(16*i+5)
//else{var h = 650 - i}
t.transition().duration(400).attr("xlink:href","Images_1\\leaf.jpg").attr("width",w).attr("height",h).attr("x",-180 + 2*i).attr("y",-180 + 3*i).attr("visibility","")
u.attr("visibility","")
})

//Slider 1 zooming manual code
/*
if(i == 0){ t.transition().duration(400).attr("width",w).attr("height",h) }
   else if(i == 5){t.transition().duration(400).attr("width",750).attr("height",750) }
   else if(i == 10){t.transition().duration(400).attr("width",650).attr("height",650) }
    else if(i == 15){t.transition().duration(400).attr("width",550).attr("height",550) }
    
})
*/

//Slider 2 animation
d3.select("#slider-2").on("input", function(){
  let i = d3.select(this).property('value');
if(i % 3 == 0 ){t.attr("xlink:href","Images_1\\leaf_label_a1.jpg").attr("visibility","").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
else if(i % 3 == 1){t.attr("xlink:href","Images_1\\leaf_label_a2.jpg").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
else if(i %3  == 2){t.attr("xlink:href","Images_1\\leaf_label_a3.jpg").attr("width",459).attr("height",459).attr("x",-88).attr("y",-42)}
u.attr("visibility","")
})

//Slider 3 animation - mix of 1 and 2
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

d3.select("#slider-4").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
  console.log(i)
  var w = i*9 + 408;
  console.log(w)
  var h = i*9 + 308;
if(i <40 ){t.attr("xlink:href","Images_1\\P3.jpg").attr("width",w).attr("height",h).attr("visibility","").attr("x",0).attr("y",0.5)}
/*
if(i>=40 & i % 3 == 0){t.attr("xlink:href","P3_water1.jpg").attr("width",759).attr("height",659)}
else if(i>40 & i % 3 == 1){t.attr("xlink:href","P3_water2.jpg").attr("width",759).attr("height",659)}
else if(i>40 & i % 3 == 2){t.attr("xlink:href","P3_water3.jpg").attr("width",759).attr("height",659)}
*/
if(i>40 & i % 3 == 0){t.attr("xlink:href","Images_1\\P3_H2O1.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
else if(i>40 & i % 3 == 1){t.attr("xlink:href","Images_1\\P3_H202.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
else if(i>80 & i % 3 == 2){t.attr("xlink:href","Images_1\\P3_H2O3.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",0.5)}
u.attr("xlink:href","Images_1\\Gist_Leaf.jpg").attr("visibility","")
/*
if(i>89 & i % 3 == 0){t.attr("xlink:href","P3_pore1.jpg").attr("width",759).attr("height",659)}
else if(i>89 & i % 3 == 1){t.attr("xlink:href","P3_pore2.jpg").attr("width",759).attr("height",659)}
else if(i>90 & i % 3 == 2){t.attr("xlink:href","P3_pore3.jpg").attr("width",759).attr("height",659)}
*/
})
//Slider 5 animation [Pore closing]
d3.select("#slider-5").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
if(i<5){t.attr("xlink:href","Images_1\\P3_pore1.jpg").attr("width",759).attr("height",659).attr("visibility","").attr("x",0).attr("y",-20)}
if(i>5){t.attr("xlink:href","Images_1\\P3_pore2.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",-20)}
if(i>15){t.attr("xlink:href","Images_1\\P3_pore3.jpg").attr("width",759).attr("height",659).attr("x",0).attr("y",-20)}
u.attr("visibility","")
})

//Slider 6 animation [Guard cells]

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
d3.select("#slider-8").on("input", function(){
  let i = parseInt(d3.select(this).property('value'));
  if(i % 4 == 0 ){t.attr("xlink:href","Images_1\\stoma_open_arr1.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50).attr("visibility","")}
  else if(i % 4 == 1){t.attr("xlink:href","Images_1\\stoma_open_arr2.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i % 4  == 2){t.attr("xlink:href","Images_1\\stoma_open_arr3.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  else if(i % 4  == 3){t.attr("xlink:href","Images_1\\stoma_open_arr4.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  if(i>70){t.attr("xlink:href","Images_1\\stoma_closed.jpg").attr("width",330).attr("height",300).attr("x",50).attr("y",50)}
  u.attr("xlink:href","Images_1\\Gist_Stomata.jpg").attr("y",30).attr("visibility","")
})
