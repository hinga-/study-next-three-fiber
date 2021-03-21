import React from 'react'
import { NextPage } from 'next'
import { Canvas } from 'react-three-fiber'
import Box from '@/components/box'
import Demo from 'styles/Demo.module.scss'

const Home: NextPage = () => {
  return (
    <div className={Demo.bg}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Home
