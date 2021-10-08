<template>
  <figure ref="el" class="Three" />
</template>

<script>
import {
  PerspectiveCamera,
  Scene,
  AmbientLight,
  HemisphereLight,
  Group,
  MeshLambertMaterial,
  ExtrudeGeometry,
  Mesh,
  Box3,
  Vector3,
  WebGLRenderer,
} from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
const svgMarkup =
  '<svg height="180" viewBox="0 0 1000 180" width="1000" xmlns="http://www.w3.org/2000/svg"><path d="m-1 160.23022v-19.8332l7.7716095-.59929c25.1512305-1.93952 43.3156985-15.71065 70.7653405-53.649688 21.734523-30.039989 27.52635-37.197145 40.66902-50.256042 25.64576-25.482299 48.20885-35.28871297 81.19403-35.28871297s55.54827 9.80641397 81.19403 35.28871297c13.14267 13.058897 18.9345 20.216053 40.66902 50.256042 30.59471 42.285928 46.87807 53.346458 78.53695 53.346458s47.94224-11.06053 78.53695-53.346458c21.73452-30.039989 27.52635-37.197145 40.66902-50.256042 25.64576-25.482299 48.20885-35.28871297 81.19403-35.28871297s55.54827 9.80641397 81.19403 35.28871297c13.14267 13.058897 18.9345 20.216053 40.66902 50.256042 30.59471 42.285928 46.87807 53.346458 78.53695 53.346458s47.94224-11.06053 78.53695-53.346458c21.73452-30.039989 27.52635-37.197145 40.66902-50.256042 23.45732-23.307806 44.07616-33.1844699 73.92953-35.41309138l7.2645-.54231142v19.8331878 19.833187l-7.77161.599304c-25.15123 1.939523-43.3157 15.710642-70.76534 53.649682-21.73452 30.039992-27.52635 37.197142-40.66902 50.256042-25.64576 25.4823-48.20885 35.28872-81.19403 35.28872s-55.54827-9.80642-81.19403-35.28872c-13.14267-13.0589-18.9345-20.21605-40.66902-50.256042-30.59471-42.285932-46.87807-53.346456-78.53695-53.346456s-47.94224 11.060524-78.53695 53.346456c-21.73452 30.039992-27.52635 37.197142-40.66902 50.256042-25.64576 25.4823-48.20885 35.28872-81.19403 35.28872s-55.54827-9.80642-81.19403-35.28872c-13.14267-13.0589-18.9345-20.21605-40.66902-50.256042-30.59471-42.285932-46.87807-53.346456-78.53695-53.346456s-47.94224 11.060524-78.53695 53.346456c-21.734524 30.039992-27.526355 37.197142-40.66902 50.256042-23.457318 23.3078-44.076165 33.18447-73.92953 35.41309l-7.2645.54232z" fill="#fff" stroke-width="1.002"/></svg>'
const loader = new SVGLoader()
const blueColor = 0x0018cc
export default {
  name: 'LazyThree',
  props: {
    isIntro: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      pixelRatio: undefined,
      winDim: [],
      aspectRatio: undefined,
      renderer: undefined,
      camera: undefined,
      scene: undefined,
      group: undefined,
    }
  },
  watch: {
    isIntro(flag) {
      if (flag) this.setRandomRotation()
    },
  },
  mounted() {
    this.pixelRatio = window.devicePixelRatio
    this.winDim[0] = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    this.winDim[1] = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    this.aspectRatio = this.winDim[0] / this.winDim[1]
    this.initScene()
    this.animate()
  },
  methods: {
    setRandomRotation() {
      const x = -Math.random()
      const y = Math.random()
      const z = Math.random()
      this.group.rotation.set(x, y, z)
    },
    initScene() {
      this.camera = new PerspectiveCamera(
        10,
        this.winDim[0] / this.winDim[1],
        0.1,
        3000
      )
      this.camera.position.set(0, 0, this.winDim[0] < 768 ? 10 : 5)
      this.scene = new Scene()
      this.scene.add(new AmbientLight(blueColor))
      this.scene.add(new HemisphereLight(0xffffff, 1))
      const data = loader.parse(svgMarkup)
      this.group = new Group()
      this.group.scale.multiplyScalar(0.005)
      this.group.scale.y *= -1
      if (this.winDim[0] < 768) {
        this.group.rotation.set(0.7, 0.5, 0.8)
      } else {
        this.group.rotation.set(0.2, 0.5, 0)
      }
      const material = new MeshLambertMaterial({
        color: 0xffffff,
        depthWrite: true,
      })
      data.paths.forEach((path, i) => {
        const shapes = path.toShapes(true)
        shapes.forEach((shape, j) => {
          const geometry = new ExtrudeGeometry(shape, {
            depth: 100,
            curveSegments: 16,
            bevelEnabled: false,
          })
          geometry.center()
          const mesh = new Mesh(geometry, material)
          this.group.add(mesh)
        })
      })
      const box = new Box3().setFromObject(this.group)
      const center = new Vector3()
      box.getCenter(center)
      this.group.position.sub(center)
      this.scene.add(this.group)
      this.renderer = new WebGLRenderer({
        antialias: false,
        alpha: false,
      })
      this.renderer.setClearColor(blueColor)
      this.renderer.setPixelRatio(this.pixelRatio)
      this.renderer.setSize(this.winDim[0], this.winDim[1])
      this.$refs.el.appendChild(this.renderer.domElement)
      this.renderer.render(this.scene, this.camera)
    },
    animate() {
      setTimeout(
        () => {
          requestAnimationFrame(this.animate)
        },
        1000 / this.winDim[0] < 768 ? 5 : 30
      )
      if (!this.isIntro) return
      // this.group.rotation.x -= 0.0008
      this.group.rotation.y -= 0.0011
      this.group.rotation.z -= 0.00071
      this.renderer.render(this.scene, this.camera)
    },
  },
}
</script>

<style lang="scss" scoped>
.Three {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  transition: opacity 250ms;
  @media (min-width: $bp-2) {
    display: block;
  }
  ::v-deep canvas {
    transform: scale(1.1);
    filter: blur(16px);
    @media (min-width: $bp-3) {
      filter: blur(24px);
    }
  }
}
</style>
