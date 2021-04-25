import React, { Suspense } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import Demo from 'styles/Demo.module.scss'
// import {OrbitControls} from '@react-three/drei'

const DancingModel = dynamic(() => import('@/components/DancingModel'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div className={Demo.bg}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.3}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <meshBasicMaterial attach="material" color={'#f8f8f8'} />
        </mesh>
        <Suspense fallback={null}>
          <DancingModel position={[0, -2, 0]} />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}

export default Home
