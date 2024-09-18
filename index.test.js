const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const newBand = await Band.create({
            name:"One Direction",
            genre:"Pop"
        })
        expect(newBand).toEqual(expect.objectContaining({
            id: 1,
            name:"One Direction",
            genre:"Pop"
        }));
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({
            name: "Zayn Malik",
            instrument: "Piano"
        })
        expect(newMusician).toEqual(expect.objectContaining({
            id:1,
            name: "Zayn Malik",
            instrument: "Piano"

        }));
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const firstBand = await Band.findByPk(1)
        const updatedBand = await firstBand.update({genre: "RnB"})
        expect(updatedBand).toEqual(expect.objectContaining({
            id: 1,
            name:"One Direction",
            genre:"RnB"
        }));
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const firstMusician = await Musician.findByPk(1);
        const updatedMusician = await firstMusician.update({instrument: "Guiter"})
        expect(updatedMusician).toEqual(expect.objectContaining({
            id:1,
            name: "Zayn Malik",
            instrument: "Guiter"
        
        }));
    })

    test('can delete a Band', async () => {
        const banToDelete = await Band.findByPk(1);
        const deletedBand = await banToDelete.destroy()
        // TODO - test deleting a band
        expect(deletedBand).toEqual(expect.objectContaining({
            id: 1,
            name:"One Direction",
            genre:"RnB"
        }));
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musicianToDelete = await Musician.findByPk(1);
        const deletedMusician = await musicianToDelete.destroy()
        expect(deletedMusician).toEqual(expect.objectContaining({
            id:1,
            name: "Zayn Malik",
            instrument: "Guiter"
        
        }));
    })
})