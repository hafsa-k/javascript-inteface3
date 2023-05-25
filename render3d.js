import * as THREE from "three"

var createCharac = function(name, pv,tex){
    var self = {}; 
    self.name = name;
    self.pv = pv;
    var texture = tex;
    var pos = {x:0,y:0};

    var getDamage = function(qt){
        pv = pv-qt
        if(pv<=0){
            alert("aaaaaarrrghh")
        }
        return pv
    }
    var getPv = function(){
        return pv
    }

    var getTexture= function(){
        return texture
    }

    var setPosition = function(x,y){
        pos.x = x; 
        pos.y = y;
    }

    var translate = function(x){
        pos.x = pos.x + x;
    }

    var getPosition = function(){
        return pos
    }

    self.getPv = getPv;
    self.getDamage = getDamage;
    self.setPosition = setPosition;
    self.getTexture = getTexture;
    self.tranlate = translate;
    self.getPosition = getPosition;
    return self
}

var createRenderEngine3d = function (canvasTarget) {
    var self = {};
    var posInit=100;
    var posY = 200;
    var state = undefined;
    var isJumping = false; 
    var isFalling = false; 
    var speed = 1;
    var jumpspeed = 5;
    var img = new Image();
    img.src = "./img/pc.png";
    console.log(img);
    // Variable globale
    var scene = undefined; 
    var camera = undefined;
    var lamp = undefined;
    var mech = undefined;
    var renderer = undefined;
    var cube = undefined;

    var createEnv = function () {
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000)
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        renderer.render(scene, camera)

        // CREATE ZE CUBE BABY
        var geometry = new THREE.BoxGeometry(1,1,1)
        // CREATE BASICFIT
        var material = new THREE.MeshBasicMaterial({color:0x00ff00})
        cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        camera.position.z = 5
        //renderer.render(scene, camera)
    }

    var init = function(){
        var canvas = document.querySelector(canvasTarget)
        var ctx = canvas.getContext("2d")
        createEnv()
       // ctx.fillStyle = "red"
        //ctx.fillRect(25,5,100,10)
        //ctx.fillStyle = "blue"
        //ctx.fillRect(2,5,5,10)
        console.log(canvas);

        var onKeydown = function(event){
            console.log(event);
            if (event.key =="d"|| event.key =="ArrowRight") {
                state = "right";
                cube.rotation.x = cube.rotation.x+0.1
     
            }
            if (event.key =="q" || event.key =="ArrowLeft") {
                state = "left";
            
            
            }
            if (event.key =="z" && isJumping == false || event.key =="ArrowUp" && isJumping == false) {
                isJumping = true
            
            
            }
        }

        var onKeyup = function(event){
            console.log(event);
            if (event.key =="d"|| event.key =="ArrowRight" || event.key =="q" || event.key =="ArrowLeft") {
                state = undefined;
            }
            // if (event.key =="z"  || event.key =="ArrowUp" ) {
            //     isJumping = false
            //     isFalling = false
            // }

        }

        

        var render = function(){
            ctx.clearRect(0, 0, canvas.width , canvas.height )
            ctx.fillStyle = "blue"
            ctx.drawImage(img, posInit, posY)
            //console.log(posInit)
            //ctx.fillRect(posInit,posY,50,50);
            renderer.render(scene, camera)
            
        }

        var process = function(){
            //definir ici une mise à jour de "posInit" selon que le state du cube soit 
            // "right" ou "Left"
            if (state == "right"){
                posInit = posInit + speed
            }
            if (state == "left"){
                posInit = posInit - speed
            }
            if (isJumping){
                posY = posY - jumpspeed
                if (posY < 50){
                    isJumping = false; 
                    isFalling = true;
                }
            }
            if(isFalling){
                posY = posY + jumpspeed
                if( posY > 200){
                isJumping = false; 
                isFalling = false;
            }
            }
        }

        var renderFrame = function(){
            process()
            render()
            //console.log("hello");
            window.requestAnimationFrame(renderFrame);
        }

        renderFrame()

        document.addEventListener("keydown", onKeydown)
        document.addEventListener("keyup", onKeyup)
    }

    init()

    return self
}
export{createRenderEngine3d}