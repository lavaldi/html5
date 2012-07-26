var movimientos = new Array();
var pulsado;

        function initCanvas() {
            var canvasDiv = document.getElementById('canvasDiv');
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', 200);
            canvas.setAttribute('height', 200);
            canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(canvas);
            if(typeof G_vmlCanvasManager != 'undefined') {
                canvas = G_vmlCanvasManager.initElement(canvas);
            }
            context = canvas.getContext("2d");

            $('#canvas').mousedown(function(e){
              pulsado = true;
              movimientos.push([e.pageX - this.offsetLeft,
                  e.pageY - this.offsetTop,
                  false]);
              repinta();
            });
            
            $('#canvas').mousemove(function(e){
              if(pulsado){
                  movimientos.push([e.pageX - this.offsetLeft,
                      e.pageY - this.offsetTop,
                      true]);
                repinta();
              }
            });
            
            $('#canvas').mouseup(function(e){
              pulsado = false;
            });
            
            $('#canvas').mouseleave(function(e){
              pulsado = false;
            });
            repinta();
        }

    function repinta(){
      canvas.width = canvas.width; // Limpia el lienzo
      
      context.strokeStyle = "#0000a0";
      context.lineJoin = "round";
      context.lineWidth = 6;
                
      for(var i=0; i < movimientos.length; i++)
      {     
        context.beginPath();
        if(movimientos[i][2] && i){
          context.moveTo(movimientos[i-1][0], movimientos[i-1][1]);
         }else{
          context.moveTo(movimientos[i][0], movimientos[i][1]);
         }
         context.lineTo(movimientos[i][0], movimientos[i][1]);
         context.closePath();
         context.stroke();
      }
    }
    function borrar(){
        canvas.width = canvas.width;
        movimientos=[];
    }