import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function CasaHipe({ x, y, z, world }) {

    const casaGeo = new THREE.SphereGeometry(5, 8, 7, 0, Math.PI * 2, 0, Math.PI / 2);
    const casaMat = new THREE.MeshNormalMaterial({ wireframe: false });
    const casaMesh = new THREE.Mesh(casaGeo, casaMat);

    const wireGeo = new THREE.WireframeGeometry(casaGeo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x850078 });
    const wire = new THREE.LineSegments(wireGeo, wireMat);

    const casaCompleta = new THREE.Group();
    casaCompleta.add(casaMesh, wire);

    casaCompleta.position.set(x, y, z);

    const hotel = new THREE.Group();
    hotel.add(casaCompleta);

    if (world) {

    const ESCALA = 4; 
    const radio = 5 * ESCALA;
    const altura = 5 * ESCALA;

    const shape = new CANNON.Cylinder(radio, radio, altura, 16);
        
    const body = new CANNON.Body({
    mass: 0,
    type: CANNON.Body.STATIC,
    shape: shape
    });

    const ajusteBajada = 8; // <--- Modifica este número si quieres subirla o bajarla más

    body.position.set(
    x * ESCALA, 
    (y * ESCALA) + (altura / 2) - ajusteBajada, 
    z * ESCALA
    );

    world.addBody(body);
    }

    return hotel;
}