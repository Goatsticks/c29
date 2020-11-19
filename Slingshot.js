class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.load1 = loadImage("sprites/sling1.png");
        this.load2 = loadImage("sprites/sling2.png")
        this.load3 = loadImage("sprites/sling3.png")

        World.add(world, this.sling);
    
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.load1, 200,20)
        image(this.load2,170,20)
        
        
                if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            stroke(48,22,8)
            if(pointA.x<220){
            strokeWeight(10);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3)
            image(this.load3,pointA.x-30,pointA.y-10,20,20)
            
            }
            else{
                strokeWeight(6);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3)
                image(this.load3,pointA.x+20,pointA.y-10,20,20)
            }
            pop();
        }

    }
    
}