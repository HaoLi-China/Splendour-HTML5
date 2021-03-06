var AMOUNT = 100;

			var container, stats;

			var camera, scene, renderer;

			var video, image, imageContext,
			imageReflection, imageReflectionContext, imageReflectionGradient,
			texture, textureReflection;

			var mesh;

			var mouseX = 0;
			var mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {
				container = document.createElement('div');
				document.getElementById('BB').appendChild( container );

				camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();

				video = document.getElementById( 'video' );

				// 

				image = document.createElement( 'canvas' );
				image.width = 480;
				image.height = 204;

				imageContext = image.getContext( '2d' );
				imageContext.fillStyle = '#000000';
				imageContext.fillRect( 0, 0, 480, 204 );

				texture = new THREE.Texture( image );
				texture.minFilter = THREE.LinearFilter;
				texture.magFilter = THREE.LinearFilter;

				var material = new THREE.MeshBasicMaterial( { map: texture } );

				imageReflection = document.createElement( 'canvas' );
				imageReflection.width = 480;
				imageReflection.height = 204;

				imageReflectionContext = imageReflection.getContext( '2d' );
				imageReflectionContext.fillStyle = '#000000';
				imageReflectionContext.fillRect( 0, 0, 480, 204 );

				imageReflectionGradient = imageReflectionContext.createLinearGradient( 0, 0, 0, 204 );
				imageReflectionGradient.addColorStop( 0.2, 'rgba(240, 240, 240, 1)' );
				imageReflectionGradient.addColorStop( 1, 'rgba(240, 240, 240, 0.8)' );

				textureReflection = new THREE.Texture( imageReflection );
				textureReflection.minFilter = THREE.LinearFilter;
				textureReflection.magFilter = THREE.LinearFilter;

				var materialReflection = new THREE.MeshBasicMaterial( { map: textureReflection } );

				//

				var plane = new THREE.PlaneGeometry( 480, 204, 4, 4 );

				mesh = new THREE.Mesh( plane, material );
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
				mesh.overdraw = true;
				scene.add(mesh);

				mesh = new THREE.Mesh( plane, materialReflection );
				mesh.position.y = -306;
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.5;
				mesh.rotation.x = 180 * Math.PI / 180;
				mesh.doubleSided = true;
				mesh.overdraw = true;
				scene.add( mesh );

				//

				var separation = 150;
				var amountx = 10;
				var amounty = 10;

				var PI2 = Math.PI * 2;
				var material = new THREE.ParticleCanvasMaterial( {
					color: 0x0505050,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 1.5, 0, PI2, true );
						context.closePath();
						context.fill();
					}
				} );
				for ( var ix = 0; ix < amountx; ix++ ) {
					for ( var iy = 0; iy < amounty; iy++ ) {
						particle = new THREE.Particle( material );
						particle.position.x = ix * separation - ( ( amountx * separation ) / 2 );
						particle.position.y = -153
						particle.position.z = iy * separation - ( ( amounty * separation ) / 2 );
						scene.add( particle );
					}
				}
				renderer = new THREE.CanvasRenderer();
				renderer.setSize( 1024, 705 );
				container.appendChild( renderer.domElement );

				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				container.appendChild( stats.domElement );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

			}
			function onDocumentMouseMove(event) {
				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY ) * 0.2;
			}

			//

			function animate() {
				requestAnimationFrame( animate );
				render();
			//	stats.update();
			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt( scene.position );

				if ( video.readyState === video.HAVE_ENOUGH_DATA ) {

					imageContext.drawImage( video, 0, 0 );

					if ( texture ) texture.needsUpdate = true;
					if ( textureReflection ) textureReflection.needsUpdate = true;

				}
				imageReflectionContext.drawImage( image, 0, 0 );
				imageReflectionContext.fillStyle = imageReflectionGradient;
				imageReflectionContext.fillRect( 0, 0, 480, 204 );
				renderer.render( scene, camera );
			}
