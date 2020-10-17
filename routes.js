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


		class Vehicle {
		constructor() {
		};
	};

	class Path {
		constructor(Xs,Ys,Attributes,colour) {
			this.xs=Xs;
			this.ys=Ys;
			this.attributes=Attributes;
			this.colour=colour;
		};
		
		addBefore(Xs,Ys,Attributes) {
			this.xs=Xs.concat(this.xs);			
			this.ys=Ys.concat(this.ys);			
			this.attributes=Attributes.concat(this.attributes);			
		};

		addAfter(Xs,Ys,Attributes) {
			this.xs=this.xs.concat(Xs);			
			this.ys=this.ys.concat(Ys);			
			this.attributes=this.attributes.concat(Attributes);			
		};

		
		rotate(fAngle) {
			var iItems=this.xs.length;
			for (var i=0;i<iItems;i++)
			{
        			var tempX=Math.cos(fAngle)*this.xs[i]-Math.sin(fAngle)*this.ys[i];
        			var tempY=Math.sin(fAngle)*this.xs[i]+Math.cos(fAngle)*this.ys[i];
				this.xs[i]=tempX;
				this.ys[i]=tempY;
			};
		};
	};

	class Point {
		constructor(lng,lat,name,func,planet) {
      			this.marker=new L.Marker({lon: lng, lat: lat}, {draggable:'true'});
      			this.marker.bindPopup(name).addTo(map).on('dragend', func);
			document.getElementById(name+'lng').value=lng;
			document.getElementById(name+'lat').value=lat;
			this.lng=lng;
			this.lat=lat;
			this.planet=planet;
			this.fLocalRadius_m=Math.abs(Math.cos(2*Math.PI*lat/360))*planet.fEquatorialradius_m;

		};

		xy_metres()
		{
			return { x: this.lng*this.fLocalRadius_m*2*Math.PI/360, y: this.lat*this.planet.fPolarRadius_m*2*Math.PI/360 };
		};
	};

