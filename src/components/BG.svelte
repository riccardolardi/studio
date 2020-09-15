<script>
	import { onMount } from 'svelte';
	import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera.js';
	import { Scene } from 'three/src/scenes/Scene.js';
	import { AmbientLight } from 'three/src/lights/AmbientLight.js';
	import { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
	import { Group } from 'three/src/objects/Group.js';
	import { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial.js';
	import { ExtrudeGeometry } from 'three/src/geometries/ExtrudeGeometry.js';
	import { Mesh } from 'three/src/objects/Mesh.js';
	import { Box3 } from 'three/src/math/Box3.js';
	import { Vector3 } from 'three/src/math/Vector3.js';
	import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	export let activeIndex;

	onMount(async () => {
		let camera, scene, renderer, controls, group;
		let pixelRatio, winW, winH, aspect, bgEl, frustumSize;

		pixelRatio = window.devicePixelRatio;
		winW = window.innerWidth;
		winH = window.innerHeight;
		aspect = winW / winH;
		frustumSize = 5;
		bgEl = document.querySelector('#BG');

		init();
		animate();

		function init() {
		  camera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
		  camera.position.z = 5;

		  scene = new Scene();

		  const ambientLight = new AmbientLight(0x0000ff);
		  const hemiLight = new HemisphereLight(0xffffff, 1);

		  scene.add(ambientLight);
		  scene.add(hemiLight);

			const loader = new SVGLoader();
			loader.load('/logo.svg', (data) => {
				const paths = data.paths;
				group = new Group();
				group.scale.multiplyScalar(0.005);
				group.scale.y *= -1;
			  group.rotation.x = Math.random();
			  group.rotation.y = Math.random();
			  group.rotation.z = Math.random();

				const material = new MeshLambertMaterial({
					color: 0xffffff,
					depthWrite: true,
					flatShading: false
				});

				data.paths.forEach((path, i) => {
				  const shapes = path.toShapes(true);
				  shapes.forEach((shape, j) => {
				    const geometry = new ExtrudeGeometry(shape, {
				      depth: 100,
				      bevelEnabled: false
				    });
				    geometry.mergeVertices();
				    geometry.center();
				    const mesh = new Mesh(geometry, material);
				    group.add(mesh);
				  });
				});

				const box = new Box3().setFromObject(group);
				const center = new Vector3();
				box.getCenter(center);
				group.position.sub(center);
				scene.add(group);
			});

		  renderer = new WebGLRenderer({
	      antialias: true, 
	      alpha: true, 
	      powerPreference: 'high-performance' 
		  });
		  renderer.setPixelRatio(window.devicePixelRatio);
		  renderer.setSize(winW, winH);

			// controls = new OrbitControls(camera, renderer.domElement);
			// controls.enableDamping = true;
			// controls.dampingFactor = 0.25;
			// controls.enableZoom = true;
			// controls.screenSpacePanning = true;

		  bgEl.appendChild(renderer.domElement);

		  if (winW > 768) window.addEventListener('resize', handleResize, false);

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
	    setTimeout(() => {
	      requestAnimationFrame(animate);
	    }, 1000 / 30);

		  if (!group || $activeIndex !== 0) return;
		  
		  group.rotation.x -= 0.0008;
		  group.rotation.y -= 0.0011;
		  group.rotation.z -= 0.00071;

		  renderer.render(scene, camera);
		}
	});
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
		transition: opacity 250ms;

		&.hide {
			opacity: 0;
		}
	}
</style>

<aside id="BG" class="{$activeIndex !== 0 ? 'hide' : ''}" />