const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
Band.hasMany(Musician)
Musician.belongsTo(Band)

Song.belongsToMany(Band, {through: "SongBand"})
Band.belongsToMany(Song, {through: "SongBand"})


module.exports = {
    Band,
    Musician,
    Song
};
