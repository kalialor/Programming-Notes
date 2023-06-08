import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from './CustomObject'

extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta
        //groupRef.current.rotation.y += delta
    })

    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight />
        <ambientLight intensity={ 0.5 } />

    <group ref={ groupRef }>
        <mesh position-x={ - 2 }>
            <sphereGeometry />
             <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref ={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    </group>

    <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
    <planeGeometry />
    <meshStandardMaterial color="greenyellow" />
    </mesh>

    <CustomObject />
    </>
}