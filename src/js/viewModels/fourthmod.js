/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * fourthmod module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'text!data/graphdata.json', 'ojs/ojchart','ojs/ojselectcombobox'
], function (oj, ko, $, file) {
    /**
     * The view model for the main content view template
     */
    function fourthmodContentViewModel() {
        var self = this;
        
        self.val = ko.observable("pie");
        
        var data = JSON.parse(file);
        if(self.val.equals("area")){            
//            data = JSON.parse("text!data/areadata.json");
//            alert(data);
           self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');  
             var areaSeries = [{name : "Series 1", items : [74, 42, 70, 46]},
                          {name : "Series 2", items : [50, 58, 46, 54]},
                          {name : "Series 3", items : [34, 22, 30, 32]},
                          {name : "Series 4", items : [18,  6, 14, 22]}];
    
        var areaGroups = ["Q1", "Q2", "Q3", "Q4"];
   
        
        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);
        
        }
        self.datasource = ko.observableArray(data);
    }
    
    return fourthmodContentViewModel;
});
