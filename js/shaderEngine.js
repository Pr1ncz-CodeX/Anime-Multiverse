// Persistent WebGL Shader Engine powered by Three.js
export class ShaderEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mouse = new THREE.Vector2(0.5, 0.5);
    this.targetColorA = new THREE.Color('#00f0ff');
    this.targetColorB = new THREE.Color('#090a14');
    this.targetMode = 0.0; // 0: Ambient Plasma, 1: Slash/Lightning, 2: Black Hole Vortex, 3: Solar Flare
    this.targetIntensity = 0.65;

    this.uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: this.mouse },
      uColorA: { value: new THREE.Color('#00f0ff') },
      uColorB: { value: new THREE.Color('#090a14') },
      uMode: { value: 0.0 },
      uIntensity: { value: 0.65 }
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform float uMode;
      uniform float uIntensity;
      varying vec2 vUv;

      // Simplex-style hash & noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.05 + vec2(1.7, 9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
        vec2 m = (uMouse - 0.5) * 0.6;
        float dist = length(uv - m);

        // Base flowing energy field
        float n1 = fbm(uv * 3.0 + vec2(uTime * 0.18, -uTime * 0.14));
        float n2 = fbm(uv * 5.5 - n1 * 1.8 + uTime * 0.25);

        // Mode 1: High-frequency Slash / Lightning arcs (Sukuna, Ichigo, Sasuke, Zoro)
        float angle = atan(uv.y - m.y, uv.x - m.x);
        float slash = smoothstep(0.96, 1.0, sin(uv.x * 18.0 + uv.y * 12.0 + n2 * 8.0 + uTime * 5.0));
        float bolts = smoothstep(0.92, 1.0, abs(sin(angle * 6.0 + n1 * 10.0 + uTime * 3.0))) * exp(-dist * 2.2);

        // Mode 2: Gravitational Lensing / Domain Vortex (Gojo, Blackbeard, Obito, Madara)
        float ring = smoothstep(0.06, 0.0, abs(dist - 0.28 - 0.04 * sin(uTime * 3.0 + angle * 4.0)));
        float swirl = fbm(vec2(dist * 8.0 - uTime * 0.9, angle * 2.0));

        // Mode 3: Rising Solar / Aura Shockwaves (Goku, Naruto, Luffy, Kenpachi)
        float aura = fbm(vec2(uv.x * 4.0, uv.y * 2.5 - uTime * 0.85));
        float shock = smoothstep(0.04, 0.0, abs(fract(dist * 2.5 - uTime * 0.45) - 0.5));

        float effect = n2 * 0.7;
        if (uMode > 0.5 && uMode < 1.5) {
          effect += (slash * 0.85 + bolts * 0.95);
        } else if (uMode >= 1.5 && uMode < 2.5) {
          effect += (ring * 1.3 + swirl * 0.65);
        } else if (uMode >= 2.5) {
          effect += (aura * 0.9 + shock * 0.45);
        }

        // Mouse proximity energy boost
        effect += exp(-dist * 3.2) * 0.35;

        vec3 col = mix(vec3(0.015, 0.016, 0.028), uColorB, n1);
        col = mix(col, uColorA, clamp(effect * uIntensity, 0.0, 1.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = 1.0 - e.clientY / window.innerHeight;
    });

    this.animate();
  }

  setState({ colorA, colorB = '#090a14', mode = 0, intensity = 0.7 }) {
    this.targetColorA.set(colorA);
    this.targetColorB.set(colorB);
    this.targetMode = mode;
    this.targetIntensity = intensity;
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.uniforms.uTime.value += 0.016;
    this.uniforms.uColorA.value.lerp(this.targetColorA, 0.07);
    this.uniforms.uColorB.value.lerp(this.targetColorB, 0.07);
    this.uniforms.uMode.value += (this.targetMode - this.uniforms.uMode.value) * 0.08;
    this.uniforms.uIntensity.value += (this.targetIntensity - this.uniforms.uIntensity.value) * 0.08;
    this.renderer.render(this.scene, this.camera);
  }
}