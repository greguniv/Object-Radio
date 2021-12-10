// Complete the following in your .js file

// Give it a property called stations and make the value an array of station objects

// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.

// Song object should have two properties: title and artist

// Create a method on your radio object that changes the station randomly

// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)



let radio = {
    radioName: 'wsb',
    stations: [{
        stationName: 'KISS FM',
        songs: [
            {
                'artist': 'Beyonce',
                'song': 'Ring On It'
            },
            {
                'artist': 'Shakira',
                'song': 'Wherever, Whenever'
            }],
    },
    {
        stationName: '98.3',
        songs: [
            {
                'artist': 'Bad Bunny',
                'song': 'Vuelve'
            },
            {
                'artist': 'Lady Gaga',
                'song': 'Sour Candy'
            }]
    }]
}



// console.log(radio.stations[1])

// console.log("Now Playing:" + songs,title + "by" + song.artist)

//classes should be capitalized ALWAYS

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    sound() {
        console.log('The sound this animal makes is: Ahhh!')
    }

}
const mammal = new Animal('giraffe', '7', 'yellow', '4')
const dog = new Animal('Casey', '7', 'tan/white', '4')
console.log(mammal)
console.log(dog)
// mammal.sound()