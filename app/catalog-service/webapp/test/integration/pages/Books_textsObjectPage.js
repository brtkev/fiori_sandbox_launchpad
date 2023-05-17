sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'catalogservice',
            componentId: 'Books_textsObjectPage',
            entitySet: 'Books_texts'
        },
        CustomPageDefinitions
    );
});