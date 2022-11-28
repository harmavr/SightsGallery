
const mongoose = require('mongoose');
const Sight = require('../models/sight');

mongoose.connect('mongodb://127.0.0.1:27017/myApp',{
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log("Database connected")
});

const seedDB = async ()=>{
    await Sight.deleteMany({});
   
        const sight1 = new Sight({
            author:'6380906a02e868a0bc43e825',
            location: 'France',
            title: 'Eiffel Tower',
            image: 'https://www.kids-world-travel-guide.com/images/xparis_eiffeltower_ssk500.jpeg.pagespeed.ic.2lwZPZtnJ8.jpg',
            description : 'This metal tower with three floors stands in the city centre of Paris. It was built for the 1889 World Fair (Universal Expo) to celebrate the 100th anniversary of the French Revolution.\
            The 324metres/1062ft high Eiffel Tower was constructed by Auguste Eiffel and a team of engineers. If you would like to take the steps up to the tower viewing platform on the second floor, there are 704 steps to climb, but luckily there are also lifts in each of the leg up to the second floor.\
            The tower has been visited by over 250 million people since its opening and in 2016 more than 7 million visitors were welcomed on the tower"s top platform! More info about the Eiffel Tower and facts for children about the famous landmark here.'

        })
        await sight1.save();

        const sight2 = new Sight({
            author:'6380906a02e868a0bc43e825',
            location: 'China',
            title: 'Great Wall',
            image: 'https://www.kids-world-travel-guide.com/images/xchina_wall_ssk500.jpeg.pagespeed.ic.g_9Qpc2Tzf.jpg',
            description : '﻿The Great Wall is one of the seven wonders of the world. It runs in sections over a very long distance across China.\
            The wall is also referred to as Long Wall as it is over 21,196 km/13,171 miles long. It was built with stones, bricks and tiles, earth as well as of wooden material. The wall was completed in 1644, but it took more than 2,000 years to build.\
            There are more than 20,000 watchtowers along the wall as it was built to protect the country against invasions from nomads and enemies and to make it easier to collect duty for goods that were transported along the Silk Road.\
            Today the wall is the most popular tourist attraction in China with more than 10 million visitors per year. Contrary to popular belief the Great Wall cannot be seen from the moon!'
        })
        await sight2.save();

        const sight3 = new Sight({
            author:'6380906a02e868a0bc43e825',
            location: 'Russia',
            title: 'Kremlin',
            image: 'https://www.kids-world-travel-guide.com/images/xrussia_kremlin_500.jpeg.pagespeed.ic.7xplAtki0b.jpg',
            description : '﻿The Great Wall is one of the seven wonders of the world. It runs in sections over a very long distance across China.\
            The wall is also referred to as Long Wall as it is over 21,196 km/13,171 miles long. It was built with stones, bricks and tiles, earth as well as of wooden material. The wall was completed in 1644, but it took more than 2,000 years to build.\
            There are more than 20,000 watchtowers along the wall as it was built to protect the country against invasions from nomads and enemies and to make it easier to collect duty for goods that were transported along the Silk Road.\
            Today the wall is the most popular tourist attraction in China with more than 10 million visitors per year. Contrary to popular belief the Great Wall cannot be seen from the moon!'
        })
        await sight3.save();

        const sight4 = new Sight({
            author:'6380906a02e868a0bc43e825',
            location: 'Egypt',
            title: 'Great Pyramid of Giza',
            image: 'https://www.kids-world-travel-guide.com/images/xital_pisa_500.jpg.pagespeed.ic.tOXMILMJS7.jpg',
            description : 'The Great Pyramid of Giza near Cairo is one of the Seven Wonders of the Ancient World and the only one of these ancient world wonders which still exists. The pyramids are made of stone and bricks and stand near Cairo which is the capital of Egypt.\
            The Egyptian pyramids were built during a time when there was only manual labour and no machine lifting equipment available. The pyramids were build to house the bodies of the pharaoh who ruled in ancient Egypt. Next to the Giza pyramids there is the Sphinx, the famous monument of a lion body with a pharaoh’s head.'
        })
        await sight4.save();
    }

seedDB().then(()=>{
    mongoose.connection.close()
});