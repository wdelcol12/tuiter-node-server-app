import posts from "./tuits.js";
import nasaTemplate from "./nasaTemplate.js";
let tuits = posts;

const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
  let newTuit = req.body;
  newTuit._id = (new Date()).getTime() + '';
  newTuit = { ...nasaTemplate, ...newTuit };
  console.log(newTuit);
  tuits.push(newTuit);
  res.json(newTuit);
}
const findTuits = (req, res) => {
  const type = req.query.type
  if (type) {
    const tuitsOfType = tuits
      .filter(t => t.type === type)
    res.json(tuitsOfType)
    return
  }
  res.json(tuits)
}
const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex(
    (t) => t._id.toString() === tuitdIdToUpdate)
  tuits[tuitIndex] =
    { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) =>
    t._id.toString() !== tuitdIdToDelete);
  res.sendStatus(200);
}


export default TuitsController
