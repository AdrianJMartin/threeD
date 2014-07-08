ajm.createDomElement( "LINK"  , {href:"core.css",rel:"stylesheet"} , document.head );

ajm.createDomElement( "SCRIPT", {src:"KEYBOARD.js"}, document.head);
ajm.createDomElement( "SCRIPT", {src:"SETTINGS.js"}, document.head);
ajm.createDomElement( "SCRIPT", {src:"three.js"},document.head,start);

function start(){
	
var scene  = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,0.1,1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth , window.innerHeight);

	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial( {color:0x00ff00});

	var cube = new THREE.Mesh( geometry , material );

	scene.add( cube );

	camera.position.z = 5;

	document.addEventListener( "keydown" , function(e){
		switch(e.keyCode){
			case KEYBOARD.KEY_A:
				cube.rotation.z += SETTINGS.ROTATION_SPEED;
				break;
			case KEYBOARD.KEY_D:
				cube.rotation.z -= SETTINGS.ROTATION_SPEED;
				break;
			case KEYBOARD.KEY_W:
				cube.rotation.x -= SETTINGS.ROTATION_SPEED;
				break;
			case KEYBOARD.KEY_S:
				cube.rotation.x += SETTINGS.ROTATION_SPEED;
				break;
			case KEYBOARD.KEY_E:
				cube.rotation.y -= SETTINGS.ROTATION_SPEED;
				break;
			case KEYBOARD.KEY_Q:
				cube.rotation.y += SETTINGS.ROTATION_SPEED;
				break;
			
		}	

	});	

	function render(t){
		requestAnimationFrame(render);
		renderer.render(scene,camera);
	}
	render();
}
