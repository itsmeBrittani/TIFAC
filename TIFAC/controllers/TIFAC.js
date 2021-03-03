const express = require('express');
const router = express.Router();
const Incident = require('../models/TIFAC.js');

//Routes
//seed

router.get('/seed', async (req, res) => {
    const newReports =
        [
            {
            establishment: 'Insight Studios',
            location: '1062 N Milwaukee Ave, Chicago, IL',
            date: '01/06/2021',
            description: 'Participated in the riot at the Capitol in January 2021',
            type: ['racism', 'domestic terrorism']
        }, {
            establishment: 'Tank Noodle',
            location: '4953-55 N Broadway, Chicago, IL, 60640',
            date: '01/06/2021',
            description: 'Participated in the riot at the Capitol in January 2021',
            type: ['domestic terrorism']
        }, {
            establishment: 'Chicago\'s Best Barbershop',
            location: '2318 N California Ave, Chicago, IL',
            date: '01/06/2021',
            description: 'Participated in the riot at the Capitol in January 2021',
            type: ['domestic terrorism']
        }
    ]

    try {
        const seedItems = await Incident.create(newReports)
        res.send(seedItems)
    } catch (err) {
        res.send('This is not what I want');
    }
});


//index
router.get('/', (req, res) => {
    Incident.find({}, (err, reports) => {
    res.render('index.ejs', {
        allReports: reports
    });
    });
});

//new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//create


//edit



//update



//show
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Incident.findById(req.params.id, (err, foundReport) => {res.render('show.ejs', {
        report: foundReport
    });
});
})

//destroy


module.exports = router;



