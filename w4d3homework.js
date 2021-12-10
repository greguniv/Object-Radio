// Complete the following in your .js file

// Give it a property called stations and make the value an array of station objects

// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.

// Song object should have two properties: title and artist

// Create a method on your radio object that changes the station randomly

// When the station is changed, pick a song from that station console.log("Now Playing:" + song.title + "by" + song.artist)



let radio = {
    stations: [{
        stationName: 'KISS FM',
        songs: [
            {
                artist: 'Beyonce',
                title: 'Ring On It'
            },
            {
                artist: 'Shakira',
                title: 'Wherever, Whenever'
            }],
    },
    {
        stationName: '98.3',
        songs: [
            {
                artist: 'Bad Bunny',
                title: 'Vuelve'
            },
            {
                artist: 'Lady Gaga',
                title: 'Sour Candy'
            }]
    }],
    song() {
        const indexOfStation = Math.floor(Math.random() * radio.stations.length); 
        const indexOfSong = Math.floor(Math.random() * radio.stations[indexOfStation].songs.length); 
        return radio.stations[indexOfStation].songs[indexOfSong];
    } 
}

const song = radio.song()
console.log("Now Playing: " + song.title + " by " + song.artist)

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
    run() {
        console.log('This animal can probably chase you down.')
    }
    bite() {
        console.log('They won\'t bite.')
    }

}
// const mammal = new Animal('giraffe', '7', 'yellow', '4')
// console.log(mammal)

// const dog = new Animal('Casey', '7', 'tan/white', '4')
// console.log(dog)
// dog.sound()
// dog.run()
// dog.bite()