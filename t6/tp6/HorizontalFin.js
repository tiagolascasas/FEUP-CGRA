
function HorizontalFin(scene) {
    CGFobject.call(this, scene);
    this.scene = scene;

    this.prism = new MyPrism(this.scene, 1, 1);
    this.cube = new MyUnitCubeQuad(this.scene);

    this.isGoingUp = false;
    this.isGoingDown = false;
    this.currentAngle = 0;

};

HorizontalFin.prototype = Object.create(CGFobject.prototype);
HorizontalFin.prototype.constructor = HorizontalFin;

HorizontalFin.prototype.display = function() 
{
	this.scene.rotate(this.currentAngle, 1, 0, 0);
	
	this.scene.pushMatrix();	//back h fin edge #2
		this.scene.rotate(3 * Math.PI / 2, 0, 0, 1);
		this.scene.translate(0, -0.82, 0);
		this.scene.scale(0.075, 0.35, 0.25);
		this.scene.rotate(-Math.PI, 1, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.translate(-1, 0, -0.5);
		this.prism.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();	//back h fin edge #1
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.scene.translate(0, -0.82, 0);
		this.scene.scale(0.075, 0.35, 0.25);
		this.scene.rotate(-Math.PI, 1, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.translate(-1, 0, -0.5);
		this.prism.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();	//back horizontal fin
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.scene.scale(0.075, 1.64, 0.25);
		this.scene.translate(0, 0, -0.5);
		this.cube.display();
	this.scene.popMatrix();
};

HorizontalFin.prototype.update = function()
{
     if (this.isGoingUp) {
        if(this.currentAngle > -(Math.PI /6))
         this.currentAngle -= Math.PI / 120;
     }
     else  if (this.isGoingDown){
         if(this.currentAngle < Math.PI /6)
             this.currentAngle += Math.PI / 120;
     }
     else{
         if(this.currentAngle != 0)
         this.currentAngle += -1 * this.currentAngle/20;
     }
}