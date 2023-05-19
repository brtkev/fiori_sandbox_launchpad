sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'currencies/test/integration/FirstJourney',
		'currencies/test/integration/pages/CurrenciesList',
		'currencies/test/integration/pages/CurrenciesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CurrenciesList, CurrenciesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('currencies') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCurrenciesList: CurrenciesList,
					onTheCurrenciesObjectPage: CurrenciesObjectPage
                }
            },
            opaJourney.run
        );
    }
);