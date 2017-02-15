// # Route Mappings
// (sails.config.routes)
// For more information on configuring custom routes, check out:
// http://sailsjs.com/anatomy/config/routes-js

module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  // File Routes
  'POST /v1/file/:folder/:fileName': 'FileController.create',
  'GET /v1/file/:folder/:fileName': 'FileController.read',
  'DELETE /v1/file/:folder/:fileName': 'FileController.delete',

  // Folder Routes
  'POST /v1/folder/:folderName': 'FolderController.create',
  'GET /v1/folders': 'FolderController.list',
  'DELETE /v1/folder/:folderName': 'FolderController.delete'
};
