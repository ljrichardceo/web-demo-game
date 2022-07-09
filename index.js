const cors = require('cors');
const express = require('express');
const application = express();
const PORT = process.env.PORT || 5000;

application.use(cors());
application.use('/', express.static('./game'));
application.use('/qa', express.static('./qa'));
application.use('/content', express.static('./content'));
application.listen(PORT, ()=>{
    console.clear();
    console.info('Demo Game');
    console.info('Hylon Interactive Group LLC');
    console.info('Copyright 2022. All Rights Reserved');
});
