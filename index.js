// Packages
const admin = require('firebase-admin');
// Keys
const serviceAccount = ('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

module.exports = (req, res) => {
    const data = {
        name: 'Markoz',
        lastName: 'Peña Mendez',
        age: 21,
        hobby: {
          movies: ['Avengers End Game', 'Spiderman 1'],
          animes: ['Dragon Ball', 'Dragon Ball Z', 'Naruto']
        }
    }
      
    db.collection('person').doc('Mark').set(data);
    res.end('<h1>Hi ZEIT !!!</h1>')
}
