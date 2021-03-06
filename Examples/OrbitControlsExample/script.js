import * as THREE from '/jsm/three.module.js';
import { OrbitControls } from '/jsm/OrbitControls.js';

// add in stats FPS
(function(){
    var script=document.createElement('script');
    script.onload=function(){
        var stats=new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop(){
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src='/jsm/stats.min.js';
    document.head.appendChild(script);
})()

var camera, controls, scene, renderer;

init();

animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc)
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    // TODO: remove axes helper
    var axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // TODO: implement controls
    controls = new OrbitControls( camera, renderer.domElement);

    // TODO: add a box to visualize rotation
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00}, wireframe=true );
    var geometry = new THREE.TorusKnotBufferGeometry( 3, 1, 256, 32 );
    var material = new THREE.MeshStandardMaterial( { color: 0x6083c2 } );

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );




}

function animate() {
    requestAnimationFrame( animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}