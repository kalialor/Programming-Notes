import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)        //the size of the box
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })    //color of box
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({       //grab renderer from HTML
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)




//Animations

//let time = Date.now()    //getting the current time stamp

//we are animating the mesh.position
//gsap.to(mesh.position, { duration: 3, delay: 2, x: 5 })


/*What you need now is to subtract the current timestamp to that of the previous 
frame to get what we can call the deltaTime and use this value when animating objects:
*/

gsap.to(mesh.position, {duration: 5, delay: 2, z:-1})

//const clock = new THREE.Clock()

const tick = () =>
{

    //const elapsedTime = clock.getElapsedTime()

        //Time
    //const currentTime = Date.now()
    //const deltaTime = currentTime - time
    //time = currentTime 


    
    //Update objects      //you can do mesh.position & mesh.rotation   and += or -= 
    //camera.position.x = Math.cos(elapsedTime)
    //camera.position.y = Math.sin(elapsedTime)
    //camera.lookAt(mesh.position)




    //Render
    renderer.render(scene, camera)

    //Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()