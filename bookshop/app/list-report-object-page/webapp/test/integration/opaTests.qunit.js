sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'listreportobjectpage/test/integration/FirstJourney',
		'listreportobjectpage/test/integration/pages/BooksList',
		'listreportobjectpage/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('listreportobjectpage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);