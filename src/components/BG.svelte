<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	let camera, scene, renderer, controls, group;
	let pixelRatio, winW, winH, aspect, bgEl;
	const frustumSize = 5;

	onMount(() => {
		pixelRatio = window.devicePixelRatio;
		winW = window.innerWidth;
		winH = window.innerHeight;
		aspect = winW / winH;
		bgEl = document.querySelector('#BG');

		init();
		animate();
	});

	function init() {
	  // camera = new THREE.OrthographicCamera(winW / -256, winW / 256, winH / 256, winH / -256, 1, 1000);
	  camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
	  camera.position.z = 5;

	  scene = new THREE.Scene();

	  const ambientLight = new THREE.AmbientLight(0x0000ff);
	  const hemiLight = new THREE.HemisphereLight(0xffffff, 1);

	  scene.add(ambientLight);
	  scene.add(hemiLight);

		const loader = new SVGLoader();
		loader.load('/logo.svg', (data) => {
			const paths = data.paths;
			group = new THREE.Group();
			group.scale.multiplyScalar(0.005);
			group.scale.y *= -1;
		  group.rotation.x = Math.random();
		  group.rotation.y = Math.random();
		  group.rotation.z = Math.random();

			const material = new THREE.MeshLambertMaterial({
				color: 0xffffff,
				depthWrite: true
			});

			data.paths.forEach((path, i) => {
			  const shapes = path.toShapes(true);
			  shapes.forEach((shape, j) => {
			    const geometry = new THREE.ExtrudeGeometry(shape, {
			      depth: 100,
			      bevelEnabled: false
			    });
			    geometry.center();
			    const mesh = new THREE.Mesh(geometry, material);
			    group.add(mesh);
			  });
			});

			const box = new THREE.Box3().setFromObject(group);
			const center = new THREE.Vector3();
			box.getCenter(center);
			group.position.sub(center);
			scene.add(group);
		});

	  renderer = new THREE.WebGLRenderer({
	  	antialias: true,
	  	alpha: true
	  });
	  renderer.setPixelRatio(window.devicePixelRatio);
	  renderer.setSize(winW, winH);

		// controls = new OrbitControls(camera, renderer.domElement);
		// controls.enableDamping = true;
		// controls.dampingFactor = 0.25;
		// controls.enableZoom = true;
		// controls.screenSpacePanning = true;

	  bgEl.appendChild(renderer.domElement);

	  window.addEventListener('resize', handleResize, false);

		function handleResize() {
			winW = window.innerWidth;
			winH = window.innerHeight;
			aspect = winW / winH;
			camera.aspect = aspect;
			camera.fov = winH / window.screen.height;
			camera.left = frustumSize * aspect / - 2;
			camera.right = frustumSize * aspect / 2;
			camera.top = frustumSize / 2;
			camera.bottom = - frustumSize / 2;
			camera.updateProjectionMatrix();
			renderer.setSize(winW, winH);
		}
	}

	function animate() {
	  requestAnimationFrame(animate);

	  if (!group) return;
	  
	  group.rotation.x -= 0.0008;
	  group.rotation.y -= 0.0011;
	  group.rotation.z -= 0.00071;

	  renderer.render(scene, camera);
	}
</script>

<style type="text/scss">
	#BG {
		position: fixed;
		top: 0px;
		left: 0px;
		display: block;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
</style>

<aside id="BG" />