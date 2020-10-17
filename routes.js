// JavaScript source code

	class Planet {
		constructor(fPolarRadius_m,fEquatorialradius_m) {
			this.fPolarRadius_m=fPolarRadius_m;
			this.fEquatorialradius_m=fEquatorialradius_m;
		};
		xy_metres(point1,point2)
		{
			var x1=point1.lng*point1.fLocalRadius_m*2*Math.PI/360; 
			var y1=point1.lat*this.fPolarRadius_m*2*Math.PI/360;
			var x2=point2.lng*point2.fLocalRadius_m*2*Math.PI/360; 
			var y2=point2.lat*this.fPolarRadius_m*2*Math.PI/360;
			return { x: x2-x1, y: y2-y1 };
		};

	};