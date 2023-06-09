import express from 'express';
import UsersController from './controllers/UsersController.js';
import PersonajesController from './controllers/PersonajesController.js';
import KartsController from './controllers/KartsController.js';
import TrabajosController from './controllers/TrabajosController.js';
import ReinosController from './controllers/ReinosController.js';
import DefensasController from './controllers/DefensasController.js';
import Personaje_tiene_trabajoController from './controllers/Personaje_tiene_trabajoController.js';
import Personaje_habita_reinoContoller from './controllers/Personaje_habita_reinoController.js';
import DiplomaciasController from './controllers/DiplomaciasController.js';
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
app.post('/api/personajes', PersonajesController.CrearPersonaje)
app.put('/api/personajes/:id', PersonajesController.ActualizarPersonaje)
app.delete('/api/personajes/:id', PersonajesController.deletePersonaje)

//----------- CRUD Karts -------------------------
app.get('/api/karts', KartsController.getKarts)
app.get('/api/karts/:id', KartsController.getKartById)
app.post('/api/karts', KartsController.createKarts)
app.put('/api/karts/:id', KartsController.updateKart)
app.delete('/api/karts/:id', KartsController.deleteKart)
//--------------------------------------------------

//----------- CRUD Trabajos ------------------------
app.get('/api/trabajos', TrabajosController.getTrabajos)
app.get('/api/trabajos/:id', TrabajosController.getTrabajoById)
app.post('/api/trabajos', TrabajosController.createTrabajo)
app.put('/api/trabajos/:id', TrabajosController.updateTrabajo)
app.delete('/api/trabajos/:id', TrabajosController.deleteTrabajo)
//--------------------------------------------------

//----------- CRUD Reinos -----------------
app.get('/api/reinos', ReinosController.getReinos)
app.get('/api/reinos/:id', ReinosController.getReinoById)
app.post('/api/reinos', ReinosController.createReino)
app.put('/api/reinos/:id', ReinosController.updateReino)
app.delete('/api/reinos/:id', ReinosController.deleteReino)
//------------------------

//----------- CRUD Defensas -----------------
app.get('/api/defensas', DefensasController.getDefensas)
app.get('/api/defensas/:id', DefensasController.getDefensaById)
app.post('/api/defensas', DefensasController.createDefensa)
app.put('/api/defensas/:id', DefensasController.updateDefensa)
app.delete('/api/defensas/:id', DefensasController.deleteDefensa)
//-----------------------------------------------------

//----------- CRUD Personaje_tiene_trabajo -----------------
app.get('/api/personaje_tiene_trabajo', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajo)
app.get('/api/personaje_tiene_trabajo/:id_pesonaje', Personaje_tiene_trabajoController.getPersonaje_tiene_trabajoById)
app.post('/api/personaje_tiene_trabajo', Personaje_tiene_trabajoController.createPersonaje_tiene_trabajo)
app.put('/api/personaje_tiene_trabajo/:id_pesonaje/:id_trabajo', Personaje_tiene_trabajoController.updatePersonaje_tiene_trabajo)
app.delete('/api/personaje_tiene_trabajo/:id_pesonaje/:id_trabajo', Personaje_tiene_trabajoController.deletePersonaje_tiene_trabajo)
//-----------------------------------------------------

//----------- CRUD Personaje_habita_reino -----------------
app.get('/api/personaje_habita_reino', Personaje_habita_reinoContoller.getPersonaje_habita_reino)
app.get('/api/personaje_habita_reino/:id_reino', Personaje_habita_reinoContoller.getPersonaje_habita_reinoById)
app.post('/api/personaje_habita_reino', Personaje_habita_reinoContoller.createPersonaje_habita_reino)
app.put('/api/personaje_habita_reino/:id_reino/:id_personaje', Personaje_habita_reinoContoller.updatePersonaje_habita_reino)
app.delete('/api/personaje_habita_reino/:id_reino/:id_personaje', Personaje_habita_reinoContoller.deletePersonaje_habita_reino)
//-----------------------------------------------------

//----------- CRUD Diplomacias -----------------
app.get('/api/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/api/diplomacias/:id_reino_1', DiplomaciasController.getDiplomaciasById)
app.post('/api/diplomacias', DiplomaciasController.createDiplomacias)
app.put('/api/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.updateDiplomacias)
app.delete('/api/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.deleteDiplomacias)
//-----------------------------------------------------

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