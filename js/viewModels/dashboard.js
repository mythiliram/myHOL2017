
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar',
         'jet-composites/demo-chart-orientation-control/loader', 'jet-composites/demo-chart-stack-control/loader'],
function(oj, ko, $)
{   
    function DashboardViewModel(){
        var self = this;
        self.name = ko.observable("Ram");
    }
    
    
    function ChartModel() {
        var self = this;
        
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var areaSeries = [{name : "Series 1", items : [74, 42, 70, 46]},
                          {name : "Series 2", items : [50, 58, 46, 54]},
                          {name : "Series 3", items : [34, 22, 30, 32]},
                          {name : "Series 4", items : [18,  6, 14, 22]}];
    
        var areaGroups = ["Q1", "Q2", "Q3", "Q4"];
   
        
        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);        
    }
    
    var chartModel = new ChartModel();
    
	$(
		function()
		{
    ko.applyBindings(chartModel, document.getElementById('chart-container'));
		}
	);
});	
