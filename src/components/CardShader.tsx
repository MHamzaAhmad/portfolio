"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
import * as THREE from "three";

const FragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;

varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.08;

  // Mouse interaction
  float mouseDist = distance(uv, uMouse);
  float mouseGlow = smoothstep(0.5, 0.0, mouseDist) * uHover;

  // Elegant dark gradient base
  vec3 colorDark = vec3(0.02, 0.02, 0.03);
  vec3 colorMid = vec3(0.06, 0.06, 0.08);
  vec3 colorAccent = vec3(0.12, 0.12, 0.15);

  // Soft flowing noise
  float n1 = snoise(uv * 2.0 + t) * 0.5 + 0.5;
  float n2 = snoise(uv * 4.0 - t * 0.5) * 0.5 + 0.5;

  // Diagonal gradient for depth
  float diag = (uv.x + uv.y) * 0.5;
  vec3 baseGradient = mix(colorDark, colorMid, diag * 0.6);

  // Add subtle noise variation
  baseGradient = mix(baseGradient, colorAccent, n1 * n2 * 0.3);

  // Interactive cursor spotlight
  vec3 spotlightColor = vec3(0.15, 0.15, 0.20);
  baseGradient = mix(baseGradient, spotlightColor, mouseGlow * 0.8);

  // Soft inner glow on edges when hovered
  float edgeDist = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
  float edgeGlow = smoothstep(0.0, 0.1, edgeDist) * uHover * 0.1;
  baseGradient += vec3(edgeGlow);

  // Very subtle grain texture
  float grain = snoise(uv * 100.0 + t * 10.0) * 0.02;
  baseGradient += grain * (0.5 + uHover * 0.5);

  gl_FragColor = vec4(baseGradient, 1.0);
}
`;

const VertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export default function CardMesh({ isHovered }: { isHovered: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useRef(new Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();

      const targetHover = isHovered ? 1.0 : 0.0;
      material.uniforms.uHover.value = THREE.MathUtils.lerp(
        material.uniforms.uHover.value,
        targetHover,
        0.08
      );

      mouse.current.lerp(state.pointer, 0.06);
      material.uniforms.uMouse.value.set(
        (mouse.current.x + 1) / 2,
        (mouse.current.y + 1) / 2
      );
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={FragmentShader}
        vertexShader={VertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
