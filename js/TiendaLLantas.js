import * as THREE from 'three'; 
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@latest/dist/cannon-es.js';
export default function TiendaLlanta({ x, y, z, rotation = 0, world }) {

    // base
    var box = new THREE.BoxGeometry(50,5,50);
    var material0 = new THREE.MeshLambertMaterial({color:0x58505D});
    var mesh0 = new THREE.Mesh(box,material0);
    mesh0.receiveShadow =true;
    mesh0.position.set(5,-5,5);
  
    //edificio
    var caja=new THREE.BoxGeometry(10,9,15,7,7,5);
    var material01=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh01=new THREE.Mesh(caja,material01);
    mesh01.position.set(-4.5,0,0);

    var caja=new THREE.BoxGeometry(10,9,15,7,7,5);
    var material02=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh02=new THREE.Mesh(caja,material02);
    mesh02.position.set(-4.5,0,0);

    var caja=new THREE.BoxGeometry(10,9,15,7,7,5);
    var material03=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh03=new THREE.Mesh(caja,material03);
    mesh03.position.set(-4.5,0,-9);

    var caja=new THREE.BoxGeometry(20,9,15,20,20,20);
    var material04=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh04=new THREE.Mesh(caja,material04);
    mesh04.position.set(4,0,-9);
    
    var caja=new THREE.BoxGeometry(10,9,15,7,7,5);
    var material05=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh05=new THREE.Mesh(caja,material05);
    mesh05.position.set(-4.5,0,12);

    //torres 
    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material06=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh06=new THREE.Mesh(caja,material06);
    mesh06.position.set(0,0,20);
    
    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material07=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh07=new THREE.Mesh(caja,material07);
    mesh07.position.set(-9,0,20);

    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material08=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh08=new THREE.Mesh(caja,material08);
    mesh08.position.set(14.5,0,-2); 
    mesh08.rotation.y=Math.PI/2;
    
    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material09=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh09=new THREE.Mesh(caja,material09);
    mesh09.position.set(14.5,0,-16); 
    mesh09.rotation.y=Math.PI/2;
    
    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material10=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh10=new THREE.Mesh(caja,material10);
    mesh10.position.set(7,0,0); 
    mesh10.rotation.y=Math.PI/3;

    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material11=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh11=new THREE.Mesh(caja,material11);
    mesh11.position.set(1,0,8); 
    mesh11.rotation.y=Math.PI/3;

    //llantas
    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material12=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh12=new THREE.Mesh(llanta,material12);
    mesh12.position.set(-9,6,20);
    mesh12.scale.set(0.2, 0.2, 0.2);

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material13=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh13=new THREE.Mesh(llanta,material13);
    mesh13.position.set(0,6,20);
    mesh13.scale.set(0.2, 0.2, 0.2);

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material14=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh14=new THREE.Mesh(llanta,material14);
    mesh14.position.set(1,6,8);
    mesh14.scale.set(0.2, 0.2, 0.2);
    mesh14.rotation.y=Math.PI/3;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material15=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh15=new THREE.Mesh(llanta,material15);
    mesh15.position.set(7,6,0);
    mesh15.scale.set(0.2, 0.2, 0.2);
    mesh15.rotation.y=Math.PI/3;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material16=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh16=new THREE.Mesh(llanta,material16);
    mesh16.position.set(14.5,6,-16);
    mesh16.scale.set(0.2, 0.2, 0.2);
    mesh16.rotation.y=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material17=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh17=new THREE.Mesh(llanta,material17);
    mesh17.position.set(14.5,6,-2);
    mesh17.scale.set(0.2, 0.2, 0.2);
    mesh17.rotation.y=Math.PI/2;

    //ventanas
    var ventana=new THREE.PlaneGeometry( 5, 5 );
    var material18=new THREE.MeshLambertMaterial({color:0x767B45,side:THREE.DoubleSide});
    var mesh18=new THREE.Mesh(ventana,material18);
    mesh18.position.set(-5,1,20);

    var ventana=new THREE.PlaneGeometry( 5, 5 );
    var material19=new THREE.MeshLambertMaterial({color:0x767B45,side:THREE.DoubleSide});
    var mesh19=new THREE.Mesh(ventana,material19);
    mesh19.position.set(1,1,15);
    mesh19.rotation.y=Math.PI/2;

    var ventana=new THREE.PlaneGeometry( 6, 6 );
    var material20=new THREE.MeshLambertMaterial({color:0x767B45,side:THREE.DoubleSide});
    var mesh20=new THREE.Mesh(ventana,material20);
    mesh20.position.set(11,1,0);

    var ventana=new THREE.PlaneGeometry( 9, 6);
    var material21=new THREE.MeshLambertMaterial({color:0x767B45,side:THREE.DoubleSide});
    var mesh21=new THREE.Mesh(ventana,material21);
    mesh21.position.set(15, 1, -9);
    mesh21.rotation.y=Math.PI/2;
    
    //puerta 
    var caja=new THREE.BoxGeometry(8,9,5,5,5,5);
    var material22=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh22=new THREE.Mesh(caja,material22);
    mesh22.position.set(2,0,2);
    mesh22.rotation.y=Math.PI/4;

    var ventana=new THREE.PlaneGeometry( 6, 6);
    var material23=new THREE.MeshLambertMaterial({color:0x767B45,side:THREE.DoubleSide});
    var mesh23=new THREE.Mesh(ventana,material23);
    mesh23.position.set(4, 0, 4);
    mesh23.rotation.y=Math.PI/4;

    var caja=new THREE.BoxGeometry(2,10,1,1);
    var material24=new THREE.MeshLambertMaterial({color:0xE9CB97});
    var mesh24=new THREE.Mesh(caja,material24);
    mesh24.position.set(2,5,2); 
    mesh24.rotation.y=Math.PI/3;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material25=new THREE.MeshLambertMaterial({color:0xef0620,side:THREE.DoubleSide});
    var mesh25=new THREE.Mesh(llanta,material25);
    mesh25.position.set(2,11,2);
    mesh25.scale.set(0.2, 0.2, 0.2);
    mesh25.rotation.y=Math.PI/3;

    //llantas negras pequeñas
    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material26=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh26=new THREE.Mesh(llanta,material26);
    mesh26.position.set(-9,0,25);
    mesh26.scale.set(0.2, 0.2, 0.2);
    mesh26.rotation.z=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material27=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh27=new THREE.Mesh(llanta,material27);
    mesh27.position.set(-9,-1,25);
    mesh27.scale.set(0.2, 0.2, 0.2);
    mesh27.rotation.x=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material28=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh28=new THREE.Mesh(llanta,material28);
    mesh28.position.set(-9,-1.6,25);
    mesh28.scale.set(0.2, 0.2, 0.2);
    mesh28.rotation.x=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.282,1.485,15,47,6.283185307179586); 
    var material29=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh29=new THREE.Mesh(llanta,material29);
    mesh29.position.set(-9,-2,25);
    mesh29.scale.set(0.2, 0.2, 0.2);
    mesh29.rotation.x=Math.PI/2;

    //grupo llantas pequeñas
    var llantas=new THREE.Group();
    llantas.add(mesh26,mesh27,mesh28,mesh29);
    llantas.position.set(1,0,-2);

    var llantas1 = llantas.clone();
    llantas1.position.set(9,0,-2);

    var llantas2 = llantas.clone();
    llantas2.position.set(-4,0,-15);
    llantas2 .rotation.y=Math.PI/5;

    var llantas3 = llantas.clone();
    llantas3.position.set(9,0,-28);
    llantas3 .rotation.y=Math.PI/5;

    var llantas4 = llantas.clone();
    llantas4.position.set(9,0,-40);
    llantas4 .rotation.y=Math.PI/5;

    //llantas grandes (TORRE)
    var llanta=new THREE.TorusGeometry( 16.416,5.6925,16,100,6.283185307179586); 
    var material30=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh30=new THREE.Mesh(llanta,material30);
    mesh30.position.set(19,-2,18);
    mesh30.scale.set(0.2, 0.2, 0.2);
    mesh30.rotation.x=Math.PI/2;
    
    var llanta=new THREE.TorusGeometry( 16.416,5.6925,16,100,6.283185307179586); 
    var material31=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh31=new THREE.Mesh(llanta,material31);
    mesh31.position.set(19,2,18);
    mesh31.scale.set(0.2, 0.2, 0.2);
    mesh31.rotation.x=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 16.416,5.6925,16,100,6.283185307179586); 
    var material32=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh32=new THREE.Mesh(llanta,material32);
    mesh32.position.set(19,5,18);
    mesh32.scale.set(0.2, 0.2, 0.2);
    mesh32.rotation.x=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 16.416,5.6925,16,100,6.283185307179586); 
    var material33=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh33=new THREE.Mesh(llanta,material33);
    mesh33.position.set(19,9,18);
    mesh33.scale.set(0.2, 0.2, 0.2);
    mesh33.rotation.x=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.054,1.2375,16,47,6.283185307179586); 
    var material34=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh34=new THREE.Mesh(llanta,material34);
    mesh34.position.set(19,9,17);
    mesh34.scale.set(0.5, 0.5, 0.5);
    mesh34.rotation.z=Math.PI/2;

    var llanta=new THREE.TorusGeometry( 5.054,1.2375,16,47,6.283185307179586); 
    var material35=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
    var mesh35=new THREE.Mesh(llanta,material35);
    mesh35.position.set(19,9,19);
    mesh35.scale.set(0.5, 0.5, 0.5);
    mesh35.rotation.z=Math.PI/2;
      
    var torre=new THREE.Group();
    torre.add(mesh34,mesh35);
    torre.position.set(0,0,0);

    var torre1 = torre.clone();
    torre1.position.set(0,-6,0);
    
    var torre2 = torre.clone();
    torre2.position.set(0,-9,0);

    // GRUPO VISUAL FINAL
    const LLanta2 = new THREE.Group();
    LLanta2.add(torre2, torre1, torre,llantas ,llantas1, llantas2 ,llantas3,llantas4,
    mesh35, mesh34, mesh33, mesh32, mesh31,
    mesh30, mesh29, mesh28, mesh27, mesh26,
    mesh25, mesh24, mesh23, mesh22, mesh21,
    mesh20, mesh19, mesh18, mesh17, mesh16,
    mesh15, mesh14, mesh13, mesh12, mesh11,
    mesh10, mesh09, mesh08, mesh07, mesh06,
    mesh05, mesh04, mesh03, mesh02, mesh01, mesh0);
    
    LLanta2.position.set(x, y, z);
    LLanta2.rotation.y = rotation; 

    if (world) {
    const S = 1.5;

    const body = new CANNON.Body({
        mass: 0, // Estático
        type: CANNON.Body.STATIC
    });
    body.position.set(x, y, z);

    const quatBody = new CANNON.Quaternion();
    quatBody.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rotation);
    body.quaternion.copy(quatBody);

    const shapeBase = new CANNON.Box(new CANNON.Vec3(37.5, 3.75, 37.5));
    body.addShape(shapeBase, new CANNON.Vec3(5 * S, -5 * S, 5 * S));

    const shapeEdificio = new CANNON.Box(new CANNON.Vec3(15, 6.75, 11.25));
    body.addShape(shapeEdificio, new CANNON.Vec3(6, 0, -13.5));

    const shapeLateral = new CANNON.Box(new CANNON.Vec3(7.5, 6.75, 26.25));
    body.addShape(shapeLateral, new CANNON.Vec3(-6.75, 0, 5));

    const shapeTorre = new CANNON.Cylinder(7.5, 7.5, 25, 16);
    body.addShape(shapeTorre, new CANNON.Vec3(28.5, 5, 27));

    world.addBody(body);
    }

    return LLanta2;
}