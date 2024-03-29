import { Effect } from 'postprocessing'
import { Uniform, Vector2 } from 'three'

const fragment = `
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform vec2 uMouse;
uniform float uVelo;

float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
  uv -= disc_center;
  uv*=resolution;
  float dist = sqrt(dot(uv, uv));
  return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
}

float hash12(vec2 p) {
  float h = dot(p,vec2(127.1,311.7));
  return fract(sin(h)*43758.5453123);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 newUV = uv;
  vec4 color = vec4(1.,0.,0.,1.);

  float hash = hash12(uv*10.);
  float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.01)*10.*uVelo;
  vec2 offsetVector = normalize(uMouse - uv);
  vec2 warpedUV = uv + vec2(hash - 0.5)*c; //power
  color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);

  outputColor = texture2D(inputBuffer,warpedUV) + texture2D(inputBuffer,warpedUV)*vec4(vec3(c),1.);
}
`

export default class ZoomEffect extends Effect {
  constructor () {
    const uniforms = new Map<string, Uniform>([
      ['tDiffuse', new Uniform(null)],
      ['resolution', new Uniform(new Vector2(1.0, window.innerHeight / window.innerWidth))],
      ['uMouse', new Uniform(new Vector2(-10, -10))],
      ['uVelo', new Uniform(0)],
      ['uScale', new Uniform(0)]
    ])

    super('ZoomEffect', fragment, {
      uniforms
    })
  }
}
