ajm.createDomElement( "LINK"  , {href:"core.css",rel:"stylesheet"} , document.head );

ajm.createDomElement( "SCRIPT", {src:"KEYS.js"}, document.head);
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
			case KEYS.KEY_A:
				cube.rotation.z += 0.01;
				break;
			case "d":
				cube.rotation.z -= 0.01;
				break;
		}	

	});	

	function render(t){
		requestAnimationFrame(render);
		renderer.render(scene,camera);
	}
	render();
}
