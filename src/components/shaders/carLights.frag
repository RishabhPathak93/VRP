#define USE_FOG;
${THREE.ShaderChunk["fog_pars_fragment"]}
varying vec3 vColor;
varying vec2 vUv; 
uniform vec2 uFade;
void main() {
  vec3 color = vec3(vColor);
  float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
  gl_FragColor = vec4(color, alpha);
  if (gl_FragColor.a < 0.0001) discard;
  ${THREE.ShaderChunk["fog_fragment"]}
}