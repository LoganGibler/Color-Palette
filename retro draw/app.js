
const PALETTE = 
[
"blue",
"red",
"yellow",
"purple",
"pink",
"green",
"black",
]



function makePalette(){

for(let i = 0; i < PALETTE.length; i++){
  const nextColor = PALETTE[i]
  const newButton = $("<button>" + "</button>")
  newButton.css("background-color", nextColor)

  $(".palette").append(newButton)
}

$('.palette button').first().addClass('active');
}

makePalette();


function makeGrid(){
  
    for(i=0; i<64; i++) {
        let cells =  $('<div class=cell></div>').addClass("cell")
        cells.prependTo('.grid')
      }
    }

makeGrid();


function onPaletteClick(){
   let paletteButtons = $('.palette button')
   let ifActive = $(this)
   
   
   console.log(ifActive)
   paletteButtons.removeClass("active")
   ifActive.addClass("active") 
  
}

$('.palette button').click(onPaletteClick)





// GRID CLICK FUNCTION

function onGridClick(){
  let currentColor = $(".palette .active").css("background-color")
  if ($(this).css("background-color",) === currentColor){
    $(this).css("background-color","")
  } else{
    $(this).css("background-color", currentColor)
  }


}
 
 
 $(".grid .cell").click(onGridClick)



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  function onClearClick(){
$('.grid .cell').css("background-color", "")

 }
 
$(".controls .clear").click(onClearClick)






function onFillAllClick(){
  let fillColor = $(".palette .active").css("background-color")
  $('.grid .cell').css("background-color", fillColor)


}

$(".controls .fill-all").click(onFillAllClick)








function onFillEmptyClick(){
  let elements = $('.grid .cell')
  let newColor = $(".palette .active").css("background-color")
  for (let i = 0; i < elements.length; i++) {
    let nextElement = $(elements[i]);
    if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
      nextElement.css("background-color", newColor)
  }
 }
}
$(".controls .fill-empty").click(onFillEmptyClick)























 








