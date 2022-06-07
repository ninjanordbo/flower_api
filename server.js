const express = require('express')
const app = express()
const PORT = 8000

const flowers ={

    'rose':{
        'scientific name': 'rosa',
        'symbolise': 'love, affection and beauty',
        'colour': 'purple, apricot, yellow, white and red'
    },
    'lily':{
        'scientific name': 'lilium',
        'symbolise': 'purity, passion, rebirth and royalty',
        'colour': 'white, yellow, pink, red, and orange'
    },
    'tulip':{
        'scientific name': 'tulipa',
        'symbolise': 'wealth and abundance',
        'colour': 'pink, red, yellow, light yellow cream, white, and orange'
    },
    'orchid':{
        'scientific name': 'phalaenopsis',
        'symbolise': 'love, luxury, beauty and strength',
        'colour': 'red, pink, white, blue, green, purple, orange, and yellow'
    },
    'carnation':{
        'scientific name': 'dianthus',
        'symbolise': 'fascination, distinction, and love',
        'colour': 'white, yellow, pink, orange, red, and green'
    },
    'freesia':{
        'scientific name': 'freesia',
        'symbolise': 'friendship, trust, thoughtfulness and innocence',
        'colour': 'white, cream, yellow, orange, red, pink, mauve, lavender and purple'
    },
    'unknown':{
        'scientific name': 'unknown',
        'symbolise': 'unknown',
        'colour': 'unknown'
    },
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    })

app.get('/api/:name', (request, response)=>{
    const flowerName = request.params.name.toLowerCase()
    if(flowers[flowerName]){
        response.json(flowers[flowerName])
    }else{
        response.json(flowers['unknown'])
    }
    
})




app.listen(PORT, ()=>{
        console.log(`Server is up!`)
})