const lerp = (a, b, n) => {
    return (1 - n) * a + n * b
}
const DER = d => {
  var pi = Math.PI;
  return d * (pi/180);
}
const RED = r => {
  var pi = Math.PI;
  return r * (180/pi);
}


const gl = document.querySelector('#gl')
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( innerWidth / - 2, innerWidth / 2, innerHeight / 2, innerHeight / - 2, 1, 100000 )
camera.position.set(-300, 0, 7000);


const textureLoader = new THREE.TextureLoader()
const careeTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/careeTextureAlpha.jpg')
const careeTextureAlpha = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/careeTextureAlpha.jpg')
const oclickTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/oclickTextureAlpha.jpg')
const oclickTextureAlpha = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/oclickTextureAlpha.jpg')

const ATexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/A.jpg')
const BTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/B.jpg')
const CTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/C.jpg')
const DTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/D.jpg')
const ETexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/E.jpg')
const FTexture = textureLoader.load(window.location.origin + '/wp-content/themes/babazoo-theme/img/textures/F.jpg')

const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true, 
});
renderer.setSize( window.innerWidth, window.innerHeight );
gl.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 500, 500, 1 );

const materialA = new THREE.MeshBasicMaterial( {
  map: ATexture,
  alphaMap: ATexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );
const materialB = new THREE.MeshBasicMaterial( {
  map: BTexture,
  alphaMap: BTexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );
const materialC = new THREE.MeshBasicMaterial( {
  map: CTexture,
  alphaMap: CTexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );
const materialD = new THREE.MeshBasicMaterial( {
  map: DTexture,
  alphaMap: DTexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );
const materialE = new THREE.MeshBasicMaterial( {
  map: ETexture,
  alphaMap: ETexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );
const materialF = new THREE.MeshBasicMaterial( {
  map: FTexture,
  alphaMap: FTexture,
  transparent: true,
  color: 0xFAFAFA,
  side: THREE.DoubleSide, 
  wireframe: false
} );

const planeA = new THREE.Mesh( geometry, materialA );
planeA.position.set(0, 0, -250)
planeA.rotation.set(0, DER(180), 0)
const planeB = new THREE.Mesh( geometry, materialB );
planeB.position.set(0, 250, 0)
planeB.rotation.set(DER(-90), 0, 0)
const planeC = new THREE.Mesh( geometry, materialC );
planeC.position.set(250, 0, 0)
planeC.rotation.set(0, DER(90), 0)
const planeD = new THREE.Mesh( geometry, materialD );
planeD.position.set(0, 0, 250)
const planeE = new THREE.Mesh( geometry, materialE );
planeE.position.set(-250, 0, 0)
planeE.rotation.set(0, DER(-90), 0)
const planeF = new THREE.Mesh( geometry, materialF );
planeF.position.set(0, -250, 0)
planeF.rotation.set(DER(90), 0, 0)

const group = new THREE.Group();
group.add( planeA );
group.add( planeB );
group.add( planeC );
group.add( planeD );
group.add( planeE );
group.add( planeF );

scene.add( group );

const geometrySroke = new THREE.BoxGeometry( 500, 500, 500 );
const edges = new THREE.EdgesGeometry( geometrySroke );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xfafafa } ) );
group.add( line );
// scene.add(planeA, planeB, planeC, planeD, planeE, planeF)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

let active = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;
let lerperX = 0;
let lerperY = 0;

let posCube = {
  A: {
    x: 180,
    y: 0
  },
  B: {
    x: 0,
    y: 90
  },
  C: {
    x: 90,
    y: 0
  },
  D: {
    x: 0,
    y: 0
  },
  E: {
    x: 90,
    y: 0
  },
  F: {
    x: 0,
    y: -90
  },
}
window.addEventListener("touchstart", dragStart, false);
window.addEventListener("touchend", dragEnd, false);
window.addEventListener("touchmove", drag, false);

window.addEventListener("mousedown", dragStart, false);
window.addEventListener("mouseup", dragEnd, false);
window.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }
active = true;

}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;
  }
}
let isdbl = false

const animate = function () {
  requestAnimationFrame( animate );
  group.rotation.needsUpdate = true;
 
  raycaster.setFromCamera(mouse, camera)
  const objectsToTest = [planeA, planeB, planeC, planeD, planeE, planeF]
  const intersects = raycaster.intersectObjects(objectsToTest)
  if(intersects.length){
    currentIntersect = intersects[0]
  }
  else{
      currentIntersect = null
  }
  window.addEventListener('dblclick', () => {
    isdbl = true
    // console.log(
    //   "----" + initialX,
    //   "----" + initialY,
    //   );

    if(currentIntersect)
    {
        switch(currentIntersect.object)
        {
            case planeA:
                // delete()
                // group.rotation.set(DER(posCube.A.y),  DER(posCube.A.x) , 0)
                currentX = DER(posCube.A.x / 0.003) 
                currentY = DER(posCube.A.y / 0.003)
                delete(currentX)
                delete(currentY)
                // console.log('click on object A')
                isdbl = false
                break
            case planeB:
                currentX = DER(posCube.B.x / 0.003) 
                currentY = DER(posCube.B.y / 0.003)
                // console.log('click on object B')
                isdbl = false
                break
            case planeC:
                currentX = DER(posCube.C.x / 0.003) 
                currentY = DER(posCube.C.y / 0.003)
                // console.log('click on object C')
                isdbl = false
                break
            case planeD:
                currentX = DER(posCube.D.x / 0.003) 
                currentY = DER(posCube.D.y / 0.003)
                // console.log('click on object D')
                isdbl = false
                break
            case planeE:
                currentX = DER(posCube.E.x / 0.003) 
                currentY = DER(posCube.E.y / 0.003)
                // console.log('click on object E')
                isdbl = false
                break
            case planeF:
                currentX = DER(posCube.F.x / 0.003) 
                currentY = DER(posCube.F.y / 0.003)
                // console.log('click on object F')
                isdbl = false
                break
        }
    }
  })
  lerperX += ((currentX * 0.003 - lerperX) * 0.05) 
  lerperY += ((currentY * 0.003 - lerperY) * 0.05) 

  if(!isdbl){
    group.rotation.x = lerperY
    group.rotation.y = lerperX

  }
 
  renderer.render( scene, camera );
};

window.addEventListener('mousemove', () => {
  if(currentIntersect)
  {
      switch(currentIntersect.object)
      {
          case planeA:
              planeA.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeA.material.color.set(0xFAFAFA)
              },500)
              
              break
          case planeB:
              planeB.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeB.material.color.set(0xFAFAFA)
              },500)
              
              break
          case planeC:
              planeC.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeC.material.color.set(0xFAFAFA)
              },500)
              
              break
          case planeD:
              planeD.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeD.material.color.set(0xFAFAFA)
              },500)
              
              break
          case planeE:
              planeE.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeE.material.color.set(0xFAFAFA)
              },500)
              
              break
          case planeF:
              planeF.material.color.set(0xF2541A);
              setTimeout(()=>{
                planeF.material.color.set(0xFAFAFA)
              },500)
              break
      }
  }
})

window.addEventListener( 'mousemove', onMouseMove, false );
animate();


    
    