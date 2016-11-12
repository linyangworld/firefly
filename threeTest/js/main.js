var container, camera, scene, renderer;

var stats, controls;

//materials
var chrome = new THREE.MeshLambertMaterial( { color: 0xffffff } );

//render object: table model
var mshTable;
var table = new THREE.Object3D();
var groupTable = [];

//scene light: directionLight
var directionalLight = new THREE.DirectionalLight( 'rgb(255,255,255)', 1 );
directionalLight.position.set( 1, 1, 0 );

//scene lights: AmbientLight
var ambient = new THREE.AmbientLight( 'rgb(255,255,255)', 0.8 );

init();
animate();

function init() {
	container = document.getElementById( 'container' );

	//camera
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;

	//scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );	

	//OBJLoader
	var objLoader = new THREE.OBJLoader();
	objLoader.load('models/table.obj', function( object ){

		mshTable = object;
		mshTable.position.set(0, -120, 240);
		mshTable.rotation.set(0, -180, 0);
		scene.add( mshTable );

	});
 

	scene.add( directionalLight );
	scene.add( ambient );

	//render settings
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	//window events
	window.addEventListener( 'resize', onWindowResize, false );

	stats = new Stats();
	container.appendChild( stats.dom );

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.minDistance = 200;
	controls.maxDistance = 600;

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );
	stats.update();
	render();

}

function render(){

	renderer.render( scene, camera );

}








