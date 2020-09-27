<script>
	import { onMount } from 'svelte';
	import { 
		OrthographicCamera,
		Scene,
		AmbientLight,
		HemisphereLight,
		Group,
		MeshLambertMaterial,
		ExtrudeGeometry,
		Mesh,
		Box3,
		Vector3,
		WebGLRenderer } from 'three';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
	export let activeIndex;

	const svgString = '<svg height="180" viewBox="0 0 1000 180" width="1000" xmlns="http://www.w3.org/2000/svg"><path d="m-1 160.23022v-19.8332l7.7716095-.59929c25.1512305-1.93952 43.3156985-15.71065 70.7653405-53.649688 21.734523-30.039989 27.52635-37.197145 40.66902-50.256042 25.64576-25.482299 48.20885-35.28871297 81.19403-35.28871297s55.54827 9.80641397 81.19403 35.28871297c13.14267 13.058897 18.9345 20.216053 40.66902 50.256042 30.59471 42.285928 46.87807 53.346458 78.53695 53.346458s47.94224-11.06053 78.53695-53.346458c21.73452-30.039989 27.52635-37.197145 40.66902-50.256042 25.64576-25.482299 48.20885-35.28871297 81.19403-35.28871297s55.54827 9.80641397 81.19403 35.28871297c13.14267 13.058897 18.9345 20.216053 40.66902 50.256042 30.59471 42.285928 46.87807 53.346458 78.53695 53.346458s47.94224-11.06053 78.53695-53.346458c21.73452-30.039989 27.52635-37.197145 40.66902-50.256042 23.45732-23.307806 44.07616-33.1844699 73.92953-35.41309138l7.2645-.54231142v19.8331878 19.833187l-7.77161.599304c-25.15123 1.939523-43.3157 15.710642-70.76534 53.649682-21.73452 30.039992-27.52635 37.197142-40.66902 50.256042-25.64576 25.4823-48.20885 35.28872-81.19403 35.28872s-55.54827-9.80642-81.19403-35.28872c-13.14267-13.0589-18.9345-20.21605-40.66902-50.256042-30.59471-42.285932-46.87807-53.346456-78.53695-53.346456s-47.94224 11.060524-78.53695 53.346456c-21.73452 30.039992-27.52635 37.197142-40.66902 50.256042-25.64576 25.4823-48.20885 35.28872-81.19403 35.28872s-55.54827-9.80642-81.19403-35.28872c-13.14267-13.0589-18.9345-20.21605-40.66902-50.256042-30.59471-42.285932-46.87807-53.346456-78.53695-53.346456s-47.94224 11.060524-78.53695 53.346456c-21.734524 30.039992-27.526355 37.197142-40.66902 50.256042-23.457318 23.3078-44.076165 33.18447-73.92953 35.41309l-7.2645.54232z" fill="#fff" stroke-width="1.002"/></svg>';

	const loader = new SVGLoader();

	onMount(() => {
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
		handleResize();

		function init() {
		  camera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
		  camera.position.z = 5;

		  scene = new Scene();

		  const ambientLight = new AmbientLight(0x0000ff);
		  const hemiLight = new HemisphereLight(0xffffff, 1);

		  scene.add(ambientLight);
		  scene.add(hemiLight);

			const data = loader.parse(svgString);

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
			      curveSegments: 32,
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

		  renderer = new WebGLRenderer({
	      antialias: true, 
	      alpha: true, 
	      powerPreference: 'high-performance' 
		  });
		  renderer.setPixelRatio(pixelRatio);
		  renderer.setSize(winW, winH);

			// controls = new OrbitControls(camera, renderer.domElement);
			// controls.enableDamping = true;
			// controls.dampingFactor = 0.25;
			// controls.enableZoom = true;
			// controls.screenSpacePanning = true;

		  bgEl.appendChild(renderer.domElement);

		  if (winW > 1024) window.addEventListener('resize', handleResize, false);

		}

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
		height: 100vh;
		overflow: hidden;
		opacity: 1;
		transition: opacity 250ms 250ms;

		&.hide {
			opacity: 0;
			transition: opacity 250ms 0ms;
		}
	}
</style>

<aside id="BG" class="{$activeIndex !== 0 ? 'hide' : ''}"/>