/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-chart-view.html', './my-chart-viewModel', 'text!./component.json', 'css!./my-chart-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);