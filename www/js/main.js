//------------P5--------------//


function setup() {
  	noCanvas();	//not using P5 2D canvas
  	noLoop();	//do not use draw, use animate. 
  	init(); 	//initTHREE	
}


//------------THREE--------------//

var container, myCamera, scene, renderer;

function init() {

	container = document.getElementById( 'container' );
	var table = new THREE.Object3D();
	var groupTable = []; 

	//environment light
	var ambient = new THREE.AmbientLight( 'rgb(255,255,255)', 0.1 );
	var directionalLight = new THREE.DirectionalLight( 'rgb(255,255,255)', 0.1 );
	directionalLight.position.set( 1, 1, 0 );

	//camera
	myCamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	myCamera.position.z = 100;

	//scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );	

	//materials
	var textureLoader = new THREE.TextureLoader();

	var tableMat = new THREE.MeshStandardMaterial( {
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,
	});
	textureLoader.load( "models/texture/redWood.jpg", function( map ) {
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 4, 4 );
					tableMat.map = map;
					tableMat.needsUpdate = true;
	} );
	textureLoader.load( "models/texture/redWoodNormal.jpg", function( map ) {
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 4, 4 );
					tableMat.normalMap = map;
					tableMat.needsUpdate = true;
	} );

	var cupMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/cup.jpg", function( map ){
					map.anisotropy = 4;
					cupMat.map = map;
					cupMat.needsUpdate = true;
	});
	textureLoader.load( "models/texture/cupBump.jpg", function( map ){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 1, 1 );
					cupMat.bumpMap = map;
					cupMat.needsUpdate = true;
	});

	var teapotMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					metalness: 1.0,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/teapot.jpg", function( map ){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 4, 4 );
					teapotMat.map = map;
					teapotMat.needsUpdate = true;
	});

	var litrMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/litr.jpg", function( map ){
					map.anisotropy = 4;
					litrMat.map = map;
					litrMat.needsUpdate = true;
	});

	var tomatoBodyMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/tomatoBody.jpg", function( map ){
					map.anisotropy = 4;
					tomatoBodyMat.map = map;
					tomatoBodyMat.needsUpdate = true;
	});

	var tomatoPlateMat = new THREE.MeshStandardMaterial({
					roughness: 1,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/marble.jpg", function( map ){
					map.anisotropy = 4;
					tomatoPlateMat.map = map;
					tomatoPlateMat.needsUpdate = true;
	});

	var tomatoLeavesMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/tomatoLeaves.jpg", function( map ){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 1, 1 );
					tomatoLeavesMat.map = map;
					tomatoLeavesMat.needsUpdate = true;
	});

	var chocolateMat = new THREE.MeshStandardMaterial({
					roughness: 1,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/chocolate.jpg", function( map ){
					map.anisotropy = 4;
					chocolateMat.map = map;
					chocolateMat.needsUpdate = true;
	});

	var grassMat = new THREE.MeshStandardMaterial({
					roughness: 1,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/grass.jpg", function( map ){
					map.anisotropy = 4;
					grassMat.map = map;
					grassMat.needsUpdate = true;
	});

	var vaseMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/wood.jpg", function( map ){
					map.anisotropy = 4;
					vaseMat.map = map;
					vaseMat.needsUpdate = true;
	});
	textureLoader.load( "models/texture/woodNormal.jpg", function( map ) {
					map.anisotropy = 4;
					vaseMat.normalMap = map;
					vaseMat.needsUpdate = true;
	} );

	var packetMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/packet.jpg", function( map ){
					map.anisotropy = 4;
					packetMat.map = map;
					packetMat.needsUpdate = true;
	});

	var packet1Mat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/packet1.jpg", function( map ){
					map.anisotropy = 4;
					packet1Mat.map = map;
					packet1Mat.needsUpdate = true;
	});

	var packet2Mat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,		
	});
	textureLoader.load( "models/texture/packet2.jpg", function( map ){
					map.anisotropy = 4;
					packet2Mat.map = map;
					packet2Mat.needsUpdate = true;
	});

	//rightchips
  var chiprightMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					metalness: 1.0,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,
	});
	textureLoader.load( "models/texture/chipbagr.jpg", function( map ){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					//map.repeat.set( 4, 4 );
					chiprightMat.map = map;
					chiprightMat.needsUpdate = true;
	});

  //lefttchips
  var chipleftMat = new THREE.MeshStandardMaterial({
          roughness: 0.8,
          metalness: 1.0,
          color: 0xffffff,
          metalness: 0.2,
          bumpScale: 0.0005,
  });
  textureLoader.load( "models/texture/chipbagl.jpg", function( map ){
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          //map.repeat.set( 4, 4 );
          chipleftMat.map = map;
          chipleftMat.needsUpdate = true;
  });

  //bigbag
  var bigbagMat = new THREE.MeshStandardMaterial({
					roughness: 0.8,
					color: 0xffffff,
					metalness: 0.2,
					bumpScale: 0.0005,
	});
	textureLoader.load( "models/texture/bigbag.jpg", function( map ){
					map.anisotropy = 4;
					bigbagMat.map = map;
					bigbagMat.needsUpdate = true;
	});


  //forks
    var forksMat = new THREE.MeshStandardMaterial({
  					roughness: 0.8,
  					color: 0xffffff,
  					metalness: 0.2,
  					bumpScale: 0.0005,
  	});
  	textureLoader.load( "models/texture/forks.jpg", function( map ){
  					map.anisotropy = 4;
  					forksMat.map = map;
  					forksMat.needsUpdate = true;
  	});

    //forkbowl
      var forkboMat = new THREE.MeshStandardMaterial({
    					roughness: 0.8,
    					color: 0xffffff,
    					metalness: 0.2,
    					bumpScale: 0.0005,
    	});
    	textureLoader.load( "models/texture/forkbo.jpg", function( map ){
    					map.anisotropy = 4;
    					forkboMat.map = map;
    					forkboMat.needsUpdate = true;
    	});

      //salt
        var saltMat = new THREE.MeshStandardMaterial({
      					roughness: 0.8,
      					color: 0xffffff,
      					metalness: 0.2,
      					bumpScale: 0.0005,
      	});
      	textureLoader.load( "models/texture/salt.jpg", function( map ){
      					map.anisotropy = 4;
      					saltMat.map = map;
      					saltMat.needsUpdate = true;
      	});

        //set
          var setMat = new THREE.MeshStandardMaterial({
        					roughness: 0.8,
        					color: 0xffffff,
        					metalness: 0.2,
        					bumpScale: 0.0005,
        	});
        	textureLoader.load( "models/texture/set.jpg", function( map ){
        					map.anisotropy = 4;
        					setMat.map = map;
        					setMat.needsUpdate = true;
        	});

          //toast
            var toastMat = new THREE.MeshStandardMaterial({
          					roughness: 0.8,
          					color: 0xffffff,
          					metalness: 0.2,
          					bumpScale: 0.0005,
          	});
          	textureLoader.load( "models/texture/toast.jpg", function( map ){
          					map.anisotropy = 4;
          					toastMat.map = map;
          					toastMat.needsUpdate = true;
          	});


            //dori
              var doriMat = new THREE.MeshStandardMaterial({
                      roughness: 0.8,
                      color: 0xffffff,
                      metalness: 0.2,
                      bumpScale: 0.0005,
              });
              textureLoader.load( "models/texture/dori.jpg", function( map ){
                      map.anisotropy = 4;
                      doriMat.map = map;
                      doriMat.needsUpdate = true;
              });

              //ori
                var oriMat = new THREE.MeshStandardMaterial({
                        roughness: 0.8,
                        color: 0xffffff,
                        metalness: 0.2,
                        bumpScale: 0.0005,
                });
                textureLoader.load( "models/texture/ori.jpg", function( map ){
                        map.anisotropy = 4;
                        oriMat.map = map;
                        oriMat.needsUpdate = true;
                });


	//model
	var objLoader = new THREE.OBJLoader();

	var mshTable;
	objLoader.load('models/table.obj', function( object ){
		mshTable = object;
		mshTable.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = tableMat;
			}
		});
		scene.add( mshTable );
	});

	var mshCup;
	objLoader.load('models/cup.obj', function( object ){
		mshCup = object;
		mshCup.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = cupMat;
			}
		});
		scene.add( mshCup );
	});

	var mshCup1;
	objLoader.load('models/cup1.obj', function( object ){
		mshCup1 = object;
		mshCup1.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = cupMat;
			}
		});
		scene.add( mshCup1 );
	});

	var mshTeapot;
	objLoader.load('models/teapot.obj', function( object ){
		mshTeapot = object;
		mshTeapot.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = teapotMat;
			}
		});
		scene.add( mshTeapot );
	});

	var mshLitr;
	objLoader.load('models/litr.obj', function( object ){
		mshLitr = object;
		mshLitr.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = litrMat;
			}
		});
		scene.add( mshLitr );
	});

	var mshTomatoBody;
	objLoader.load('models/tomatoBody.obj', function( object ){
		mshTomatoBody = object;
		mshTomatoBody.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = tomatoBodyMat;
			}
		});
		scene.add( mshTomatoBody );
	});

	var mshTomatoPlate;
	objLoader.load('models/tomatoPlate.obj', function( object ){
		mshTomatoPlate = object;
		mshTomatoPlate.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = tomatoPlateMat;
			}
		});
		scene.add( mshTomatoPlate );
	});

	var mshTomatoLeaves;
	objLoader.load('models/tomatoLeaves.obj', function( object ){
		mshTomatoLeaves = object;
		mshTomatoLeaves.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = tomatoLeavesMat;
			}
		});
		scene.add( mshTomatoLeaves );
	});

	var mshChocolate;
	objLoader.load('models/chocolate.obj', function( object ){
		mshChocolate = object;
		mshChocolate.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = chocolateMat;
			}
		});
		scene.add( mshChocolate );
	});

	var mshChocolate1;
	objLoader.load('models/chocolate1.obj', function( object ){
		mshChocolate1 = object;
		mshChocolate1.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = chocolateMat;
			}
		});
		scene.add( mshChocolate1 );
	});

	var mshChocolate2;
	objLoader.load('models/chocolate2.obj', function( object ){
		mshChocolate2 = object;
		mshChocolate2.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = chocolateMat;
			}
		});
		scene.add( mshChocolate2 );
	});

	var mshGrass;
	objLoader.load('models/grass.obj', function( object ){
		mshGrass = object;
		mshGrass.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = grassMat;
			}
		});
		scene.add( mshGrass );
	});

	var mshVase;
	objLoader.load('models/vase.obj', function( object ){
		mshVase = object;
		mshVase.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = vaseMat;
			}
		});
		scene.add( mshVase );
	});

	var mshPacket;
	objLoader.load('models/packet.obj', function( object ){
		mshPacket = object;
		mshPacket.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = packetMat;
			}
		});
		scene.add( mshPacket );
	});

	var mshPacket1;
	objLoader.load('models/packet1.obj', function( object ){
		mshPacket1 = object;
		mshPacket1.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = packet1Mat;
			}
		});
		scene.add( mshPacket1 );
	});

	var mshPacket2;
	objLoader.load('models/packet2.obj', function( object ){
		mshPacket2 = object;
		mshPacket2.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = packet2Mat;
			}
		});
		scene.add( mshPacket2 );
	});

	  //rightchips
  var mshchipright;
	objLoader.load('models/chipright.obj', function( object ){
		mshchipright = object;
		mshchipright.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = chiprightMat;
			}
		});
		scene.add( mshchipright );
	});

  //leftchips
  var mshchipleft;
	objLoader.load('models/chipleft.obj', function( object ){
		mshchipleft = object;
		mshchipleft.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = chipleftMat;
			}
		});
		scene.add( mshchipleft );
	});

  //saladbox
  var mshsalad;
	objLoader.load('models/salad.obj', function( object ){
		mshsalad= object;
		mshsalad.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = saladMat;
			}
		});
		scene.add( mshsalad );
	});

  //bigbag
  var mshbigbag;
	objLoader.load('models/bigbag.obj', function( object ){
		mshbigbag= object;
		mshbigbag.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = bigbagMat;
			}
		});
		scene.add( mshbigbag );
	});

  //forks
  var mshforks;
	objLoader.load('models/forks.obj', function( object ){
		mshforks= object;
		mshforks.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = forksMat;
			}
		});
		scene.add( mshforks );
	});

  //forkbowl
  var mshforkbo;
	objLoader.load('models/forkbo.obj', function( object ){
		mshforkbo= object;
		mshforkbo.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = forkboMat;
			}
		});
		scene.add( mshforkbo );
	});

  //salt
  var mshsalt;
	objLoader.load('models/salt.obj', function( object ){
		mshsalt= object;
		mshsalt.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = saltMat;
			}
		});
		scene.add( mshsalt );
	});

  //set
  var mshset;
	objLoader.load('models/set.obj', function( object ){
		mshset= object;
		mshset.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = setMat;
			}
		});
		scene.add( mshset );
	});

  //toast
  var mshtoast;
	objLoader.load('models/toast.obj', function( object ){
		mshtoast= object;
		mshtoast.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = toastMat;
			}
		});
		scene.add( mshtoast );
	});

  //dori
  var mshdori;
	objLoader.load('models/dori.obj', function( object ){
		mshdori= object;
		mshdori.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = doriMat;
			}
		});
		scene.add( mshdori );
	});

  //ori
  var mshori;
	objLoader.load('models/ori.obj', function( object ){
		mshori= object;
		mshori.traverse(function( child ){
			if ( child instanceof THREE.Mesh ) {
				child.material = oriMat;
			}
		});
		scene.add( mshori );
	});

 	//bulbLight
	var bulbGeometry = new THREE.SphereGeometry(0.5, 32, 32);
	var bulbLight = new THREE.PointLight(0xffee88, 1.8, 120, 5);
	var bulbMat = new THREE.MeshStandardMaterial({
		emissive: 0xffffee,
		emissiveIntensity: 1,
		color: 0x000000
	});

	bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow( 0.02, 2.0 );
	bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
	console.log(bulbLight);
	bulbLight.castShadow = true;

	//render settings
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	//bgm
	container.addEventListener( 'touchend', function() {
		var player = document.getElementById( 'player' );
		player.currentTime = 0;
		player.play(0);
	}) 

	//window events
	window.addEventListener( 'resize', onWindowResize, false );


	scene.add( bulbLight );
	scene.add( ambient );
	scene.add( directionalLight ); 

	//-------In-Scope_Functions-------//

	function onWindowResize() {

		myCamera.aspect = window.innerWidth / window.innerHeight;
		myCamera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	var bulbX = 0;
	var bulbZ = 0;

	function getDeviceOrientation(){
  	
	  	bulbX = Number( Math.round((rotationX/90)*10000)/10000 );

		if(bulbX >= -1 && bulbX <= 1){
			bulbX = -bulbX;
		}
		else if(bulbX > 1 && bulbX < 2){
			bulbX -= 2;
		}
		else if(bulbX < -1 && bulbX > -2){
			bulbX += 2;
		}

	  	var myRotationY = 0;
	  	if(rotationY <= -35){
	  		myRotationY = 90;
	  	}
	  	else if(rotationY > -35){
	  		myRotationY = (rotationY - 45);
	  	}

	  	bulbZ = Number((myRotationY/45).toPrecision(3));

	}

	function animate() {

		getDeviceOrientation();

		var time = Date.now() * 0.005;
		bulbLight.position.y = Math.cos( time ) * 0.6;
			bulbLight.position.x += Number(bulbX*1.5);
			bulbLight.position.z += Number(bulbZ*1.5);

			if (bulbLight.position.x > 200) {
				bulbLight.position.x = 200;
			} 
			else if (bulbLight.position.x < -1136) {
				bulbLight.position.x = -1136;
			}

			if (bulbLight.position.z > 305) {
				bulbLight.position.z = 305;
			} 
			else if (bulbLight.position.z < -1290) {
				bulbLight.position.z = -1290
			}

			myCamera.position.x = bulbLight.position.x;
			myCamera.position.z = bulbLight.position.z + 50;
		requestAnimationFrame( animate );
		render();
	}

	function render(){
		renderer.render( scene, myCamera );
	}

	animate();
}









