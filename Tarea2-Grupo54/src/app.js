import express from 'express';
import UsersController from './controllers/UsersController.js';
import PersonajesController from './controllers/PersonajesController.js';
import KartsController from './controllers/KartsController.js';
import TrabajosController from './controllers/TrabajosController.js';
import ReinosController from './controllers/ReinosController.js';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/users', UsersController.getUsers)
app.get('/users/:id', UsersController.getUserById)
app.post('/users', UsersController.createUser)
app.get('/users/:id/posts', UsersController.usersPosts)

// CRUD Personajes

app.get('/api/personajes', PersonajesController.GetPersonajes)
app.get('/api/personajes/:id', PersonajesController.GetPersonajesPorId) 

//----------- CRUD Karts -------------------------
app.get('/karts', KartsController.getKarts)
app.get('/karts/:id', KartsController.getKartById)
app.post('/karts', KartsController.createKarts)
app.put('/karts/:id', KartsController.updateKart)
app.delete('/karts/:id', KartsController.deleteKart)
//--------------------------------------------------

//----------- CRUD Trabajos ------------------------
app.get('/trabajos', TrabajosController.getTrabajos)
app.get('/trabajos/:id', TrabajosController.getTrabajoById)
app.post('/trabajos', TrabajosController.createTrabajo)
app.put('/trabajos/:id', TrabajosController.updateTrabajo)
app.delete('/trabajos/:id', TrabajosController.deleteTrabajo)
//--------------------------------------------------

//----------- CRUD Reinos -----------------
app.get('/reinos', ReinosController.getReinos)
app.get('/reinos/:id', ReinosController.getReinoById)
app.post('/reinos', ReinosController.createReino)
app.put('/reinos/:id', ReinosController.updateReino)
app.delete('/reinos/:id', ReinosController.deleteReino)
//------------------------

//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})