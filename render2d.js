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

var createRenderEngine = function (canvasTarget) {
    var self = {};
    var posInit=0;
    var state = undefined;
    var jump = undefined; 

    var init = function(){
        var canvas = document.querySelector(canvasTarget)
        var ctx = canvas.getContext("2d")
       // ctx.fillStyle = "red"
        //ctx.fillRect(25,5,100,10)
        //ctx.fillStyle = "blue"
        //ctx.fillRect(2,5,5,10)
        console.log(canvas);

        var onKeydown = function(event){
            console.log(event);
            if (event.key =="d"|| event.key =="ArrowRight") {
                state = "right";
     
            }
            if (event.key =="q" || event.key =="ArrowLeft") {
                state = "left";
            
            
            }

        }

        var render = function(){
            ctx.clearRect(0, 0, canvas.width , canvas.height )
            ctx.fillStyle = "blue"
                //console.log(posInit)
                ctx.fillRect(posInit,100,50,50);
        }

        var process = function(){
            //definir ici une mise à jour de "posInit" selon que le state du cube soit 
            // "right" ou "Left"
            if (state == "right"){
                posInit = posInit+1
            }

            if (state == "left"){
                posInit = posInit-1
            }
        }

        var renderFrame = function(){
            process()
            render()
            console.log("hello");
            window.requestAnimationFrame(renderFrame);
        }

        renderFrame()

        document.addEventListener("keydown", onKeydown)
    }

    init()

    return self
}
export{createCharac, createRenderEngine}