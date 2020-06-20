class Rain {
    constructor(x, y, width, height) {
        var options = {
            
            friction:0.1,
            'density':1.0
  
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;  
        World.add(world, this.body);
       
        
       
    }
    setImg(img){
        this.image= loadImage(img)
      
    }
    
    display(){
        var pos =  this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);
       
  
    }
}