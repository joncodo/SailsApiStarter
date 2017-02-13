/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /** *************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  '/docs': function(req, res, next) {
    console.log(sails.config.appPath);
    res.sendFile(sails.config.appPath + '/docs/index.html');
  },

  // Files
  'POST /v1/file/:folder/:fileName': 'FileController.create',
  'GET /v1/file/:folder/:fileName': 'FileController.read',
  'DELETE /v1/file/:folder/:fileName': 'FileController.delete',

  // Folders
  'POST /v1/folder/:folderName': 'FolderController.create',
  'GET /v1/folders': 'FolderController.list',
  'DELETE /v1/folder/:folderName': 'FolderController.delete'
};
