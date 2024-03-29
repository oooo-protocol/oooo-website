import { DirectionalLight, Object3D, Object3DEventMap, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EffectPass, EffectComposer, RenderPass, Effect } from 'postprocessing'

import AsciiEffect from './shaders/ascii'
import ZoomEffect from './shaders/zoom'

export class OOOO {
  private readonly camera: PerspectiveCamera
  private readonly light: DirectionalLight
  private readonly scene: Scene
  private readonly renderer: WebGLRenderer
  private readonly composer: EffectComposer
  private zoomEffect?: Effect
  private zoomPass?: EffectPass

  private readonly container: HTMLElement
  private model?: Object3D<Object3DEventMap>
  // Save mouse coordinates
  private readonly prevMouseCoord = new Vector2()
  private readonly mouseCoord = new Vector2(0.5, 0.5)
  private readonly followMouseCoord = new Vector2(0.5, 0.5)

  // Save zoom speed
  private speed = 0
  private targetSpeed = 0

  constructor (selector: string) {
    this.container = document.querySelector(selector) as HTMLElement
    this.renderer = this.createRender()
    this.scene = this.createScene()
    this.camera = this.createCamera()
    this.light = this.createLight()
    this.composer = this.createComposer()
  }

  async init () {
    this.model = await this.loadModel()

    this.scene.add(this.light, this.model)

    this.initMouseListener()
    this.initWindowListener()

    this.container.append(this.renderer.domElement)
  }

  async start () {
    requestAnimationFrame(() => {
      void this.start()
    })
    this.render()
  }

  private calcZoomMouse () {
    this.speed = Math.sqrt((this.prevMouseCoord.x - this.mouseCoord.x) ** 2 + (this.prevMouseCoord.y - this.mouseCoord.y) ** 2)

    this.targetSpeed -= 0.1 * (this.targetSpeed - this.speed)
    this.followMouseCoord.x -= 0.1 * (this.followMouseCoord.x - this.mouseCoord.x)
    this.followMouseCoord.y -= 0.1 * (this.followMouseCoord.y - this.mouseCoord.y)

    this.prevMouseCoord.x = this.mouseCoord.x
    this.prevMouseCoord.y = this.mouseCoord.y
  }

  private render () {
    this.calcZoomMouse()

    if (this.model) {
      const targetX = (this.mouseCoord.x - 0.5) * 1.5
      const targetY = (0.5 - this.mouseCoord.y) * 1.5

      this.model.rotation.y += 0.05 * (targetX - this.model.rotation.y)
      this.model.rotation.x += 0.05 * (targetY - this.model.rotation.x)
    }

    if (this.zoomEffect) {
      this.zoomEffect.uniforms.get('uMouse')!.value = this.followMouseCoord
      this.zoomEffect.uniforms.get('uVelo')!.value = Math.min(this.targetSpeed, 0.05)
      this.targetSpeed *= 0.999
    }

    this.composer.render()
  }

  private async loadModel () {
    const loader = new GLTFLoader()

    if (window.innerWidth < 1280) {
      const data = await loader.loadAsync('/assets/models/oooo.pad.gltf')

      const model = data.scene.children[0]
      model.scale.set(8, 8, 8)
      model.rotation.set(4, 0, 0)
      return model
    } else {
      const data = await loader.loadAsync('/assets/models/oooo.gltf')

      const model = data.scene.children[0]
      model.scale.set(11, 11, 11)
      return model
    }
  }

  private createRender () {
    const renderer = new WebGLRenderer()
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth, window.innerHeight, false)

    return renderer
  }

  private createComposer () {
    const composer = new EffectComposer(this.renderer)
    const renderPass = new RenderPass(this.scene, this.camera)

    composer.addPass(renderPass)

    this.zoomEffect = new ZoomEffect()
    this.zoomPass = new EffectPass(this.camera, this.zoomEffect)
    composer.addPass(this.zoomPass)

    const asciiEffect = new AsciiEffect({
      cellSize: 7,
      characters: ' +**o!:,.',
      color: '#878787',
      fontSize: 84
    })
    const asciiPass = new EffectPass(this.camera, asciiEffect)
    composer.addPass(asciiPass)

    return composer
  }

  private createScene () {
    const scene = new Scene()

    return scene
  }

  private createCamera () {
    const camera = new PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 10)

    return camera
  }

  private createLight () {
    const light = new DirectionalLight('white', 8)

    // move the light right, up, and towards us
    light.position.set(0, 10, 10)

    return light
  }

  private initMouseListener () {
    const onDocumentMouseMove = (event: MouseEvent) => {
      this.mouseCoord.x = event.clientX / window.innerWidth
      this.mouseCoord.y = 1 - (event.clientY / window.innerHeight)
    }
    document.addEventListener('mousemove', onDocumentMouseMove)
  }

  private initWindowListener () {
    const onWindowResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(width, height)
      this.renderer.setPixelRatio(window.devicePixelRatio)
    }
    window.addEventListener('resize', onWindowResize)
    onWindowResize()
  }
}
