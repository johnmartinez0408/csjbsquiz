curX = 0;
curY = 0;
prevX = 0;
prevY = 0;
down = false;

function draw(){
	drawContext = drawboard.getContext("2d");
	drawContext.fillStyle="yellow";
	drawContext.fillRect(0,0,500,500);
	drawContext.fill();



}



Template.quiz2.rendered = function(){

draw();

document.getElementById("drawboard").addEventListener('mousemove', 
	  function(e){
	  	
	  	curX = e.pageX - 100;
	  	curY = e.pageY - 170;
	  	document.getElementById("coord").innerHTML = "x: " + curX + " y: " + curY;

	  	if(down){

	  		drawContext.beginPath();


      		drawContext.beginPath();
		    drawContext.moveTo(prevX, prevY);
		    drawContext.lineTo(curX, curY);
		    drawContext.strokeStyle = "black";
		    drawContext.lineWidth = 5;
		    drawContext.stroke();
		    drawContext.closePath();
	  	}
	  	prevX = curX;
	  		prevY = curY;

	  }
);

document.getElementById("drawboard").addEventListener('mousedown', 
	  function(e){
	  		down = true;
	  		prevX = curX;
	  		prevY = curY;
	  		
	  }
);

document.getElementById("drawboard").addEventListener('mouseup', 
	  function(e){
			
			down = false;


	  }
);


}


Template.quiz2.events({
	"click #erase": function(event){
			draw();
	},
})