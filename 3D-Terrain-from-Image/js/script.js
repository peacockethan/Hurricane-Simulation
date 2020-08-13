var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x -= 0.02;
  cube.rotation.y += 0.01;
  camera.position.z +=0.05;
  camera.position.y +=0.03;
  camera.lookAt(0,0,0);
  renderer.render( scene, camera );
}
animate();