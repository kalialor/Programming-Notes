//Scene
const scene = new THREE.Scene()

/*To create a visible object, you need a mesh 
combination of a geometry(the shape) and a material(how it looks)
Start with  a BoxGeometry and a MeshBasicMaterial

*/


//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


/*Camera (a point a view). not visible.
You can have multiple cameras. PerspectiveCamera is one of the cameras we are going to use 
in this lesson. PerspectiveCamera is for example -making close objects look more prominent than far objects.
So putting a book in your face. There are 2 parameters we need to provide: 
    The Field of View & The aspect ratio

The field of view is how large your vision angle is. If you use a very large angle, you'll be able to
see in every direction at once, but with much distortion, because the result will be drawn on a small
rectangle. It is expressed in degrees and corresponds to the vertical vision angle. 
For this exercise will will use a 75 degree angle. 

The aspect ratio is the width of the canvas divided by its height. */

//Sizes
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 5
camera.position.x = 3
camera.position.y = -1
scene.add(camera)


//Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)  //resizing the renderer

renderer.render(scene, camera)


/* To transform an object, we can use the following properties: 
    -position
    -rotation
    -scale


    The position property is an object with three relevant properties: x,y,z. 
    Y is up
    X is right
    Z is forwards/backwards
*/