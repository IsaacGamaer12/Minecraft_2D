
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

//CLASE 87:

// 1. Añade un evento listener y llama la función my_keydown:
window.addEventListener("keydown" , my_keydown);


function my_keydown(e){

	//2. Obtén el valor de la tecla presionada utilizando e.keyCode
	keyPressed =  e.keyCode;
	console.log(keyPressed);

	//3. Completa la condición para que el tamaño del bloque aumente:
	if( e.shiftKey && keyPressed == "80" )
	{
		console.log("Se presiona p y shift al mismo tiempo");

		// 4. Suma +10 a la variable block_image_width para que el tamaño del bloque aumente:
		block_image_width = block_image_width+10;

		// 5. Suma +10 a la variable block_image_height para que el tamaño del bloque aumente:
		block_image_height = block_image_height+10;
		
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;	
	}

	//6. Completa la condición para que el tamaño del bloque disminuya:
	if( e.shiftKey && keyPressed == "77")
	{
		console.log("Se presiona m y shift al mismo tiempo");

		// 7. Resta -10 a la variable block_image_width para que el tamaño del bloque disminuya:
		block_image_width = block_image_width-10;

		// 8. Resta -10 a la variable block_image_height para que el tamaño del bloque disminuya:
		block_image_height = block_image_height-10;

		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}
	

	//9. Completa las condiciones para verificar cual es el valor d ela tecla que está presionando el usuario:
	if( keyPressed == "38")
	{
		up();
		console.log("up");
	}

	if( keyPressed == "40")
	{
		down();
		console.log("down");
	}

	if( keyPressed == "37")
	{
		left();
		console.log("left");
	}

	if( keyPressed == "39")
	{
		right();
		console.log("right");
	}

	if( keyPressed == "87")
	{
		new_image('wall.jpg'); 
		console.log("w");
	}

	if( keyPressed == "71")
	{
		new_image('ground.png'); 
		console.log("g");
	}

	if( keyPressed == "76")
	{
		new_image('light_green.png'); 
		console.log("l");
	}

	if( keyPressed == "84")
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}

	if( keyPressed == "82")
	{
		new_image('roof.jpg'); 
		console.log("r");
	}

	if( keyPressed == "89")
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}

	if( keyPressed == "68")
	{
		new_image('dark_green.png'); 
		console.log("d");
	}

	if( keyPressed == "85")
	{
		new_image('unique.png'); 
		console.log("u");
	}

	if( keyPressed == "67")
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}

function up()
{
  if (player_y>=0){
	player_y= player_y - block_image_height;
	canvas.remove(player_object);
	player_update();
  }

}

function down()
{
	if (player_y<600){
		player_y= player_y + block_image_height;
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if (player_x<1000){
		player_x= player_x + block_image_width;
		canvas.remove(player_object);
		player_update();
	}

}

function left()
{
	if (player_x>=0)
		player_x= player_x - block_image_width;
		canvas.remove(player_object);
		player_update();
}