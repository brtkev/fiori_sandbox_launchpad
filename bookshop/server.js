
//cds launchpad plugin implementation
if (process.env.NODE_ENV !== 'production') {
    const cds = require ('@sap/cds')
    const {cds_launchpad_plugin} = require('cds-launchpad-plugin');

    // Enable launchpad plugin
    cds.once('bootstrap',(app)=>{
        const handler = new cds_launchpad_plugin();
        app.use(handler.setup({theme:'sap_horizon', version: '1.99.0'}));
    });
}

// module.exports = require('@capire/bookstore/server.js')
