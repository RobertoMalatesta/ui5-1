/** 
* Controller. Handles all events of the view. 
*/ 
sap.ui.controller("app.view.CoverageMap" , {
	
	/** 
	* Called when a controller is instantiated and its View controls (if available) are already created. 
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf app.view.page2
	*/ 
	   onInit: function() {
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.attachRouteMatched(function(oEvt) {
//				if (oEvt.getParameter("name") === "page2") {
//					var sContextPath = "/" + oEvt.getParameter("arguments").context;
//					this.getView().bindElement(sContextPath);
//				}
//			}, this);
	   },
	
	/**		
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered	
	* (NOT before the first rendering! onInit() is used for that one!).	
	* @memberOf app.view.page2
	*/		
	//   onBeforeRendering: function() { 
	//		
	//   },	
	
	/**		
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here. 
	* This hook is the same one that SAPUI5 controls get after being rendered.	
	* @memberOf app.view.page2
	*/		
	//   onAfterRendering: function() {
	//		
	//   },		
	
	/**		
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.	
	* @memberOf app.view.page2
	*/		
	//   onExit: function() {	
	//		
	//   }

    afterHereMapLoad: function(theMap) {
        map = theMap;
        map.set('zoomLevel', 2);
        map.set('center', [30, -54]);
        var container = new nokia.maps.map.Container();
        map.objects.add(container);
        //pointGenerator = new randomLocationGenerator(10);
        //$("#ticker").text("Generating 700 Coordinates. Please Wait");
        //pointGenerator.createCoordinates(onCoordinatesCreated);
        //$.getJSON('data/counterpois.json', onCoordinatesCreated);
    }
	
});