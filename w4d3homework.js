// Complete the following in your .js file

// Give it a property called stations and make the value an array of station objects

// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.

// Song object should have two properties: title and artist

// Create a method on your radio object that changes the station randomly

// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)



let radio = {
    radioName: 'wsb',
    stations: [{
        stationName: 'cassa',
        songs: [
            {
                'artist': 'beyonce',
                'song': 'Put a ring'
            },
            {
                'artist': 'shakira',
                'song': 'Whatever'
            }],
    },
    {
        stationName: 'Another',
        songs: [
            {
                'artist': 'John',
                'song': 'Put a ring'
            },
            {
                'artist': 'shakira',
                'song': 'Whatever'
            }]
    }]
}

radio.radioName = "example";
radio.stations[1].songs.push({ artist: 'Mike', song: 'ThreeEra' })

// radio.stations[0].songs[0].artist = 'Juan'
// console.log(radio);
console.log(radio.stations[1].songs)
radio.stations[1].songs.pop()
console.log(radio.stations[1].songs)


console.log(radio.stations[0])

//classes should be capitalized ALWAYS

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    sound() {
        console.log('The sound this animal makes is: Ahhh!')
    }
}
const mammal = new Animal()
// console.log(mammal)
mammal.sound()