import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  // App Controller

  // should
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  // the number of users and files in DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  // User Controller

  // should 
  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  // should 
  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  // Auth Controller

  // should 
  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  // should 
  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  // Files Controller

  // should 
  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  // should 
  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  // should 
  // specific parentId and with pagination
  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  // should set 
  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });

  // should set 
  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });

  // should return 
  router.get('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
}

export default controllerRouting;
