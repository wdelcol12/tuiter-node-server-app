import nasaTemplate from "./nasaTemplate.js";
import * as tuitsDao from '../../controllers/tuits/tuits-dao.js'
const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
  let newTuit = req.body;
  newTuit = { ...nasaTemplate, ...newTuit };
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits)
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}


export default TuitsController
