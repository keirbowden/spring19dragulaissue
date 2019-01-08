({
    doInit : function(component, event) {
        var container = component.find('container');
        var from = component.find('from');
        var to = component.find('to');
        
        var drake = dragula([from.getElement(), to.getElement()], {
            direction: 'vertical',
            mirrorContainer: container.getElement()
        });
    }
})