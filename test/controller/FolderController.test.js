const request = require('supertest');

describe('FolderController', function() {
  describe('#create()', function() {
    it('should create a folder', function(done) {
      request(sails.hooks.http.app)
        .post('/v1/folder/test-folder-123456abc')
        .send({
          folder: 'test-folder'
        })
        .expect(200, done);
    });
  });

  describe('#list()', function() {
    it('should return all folders', function(done) {
      request(sails.hooks.http.app)
        .get('/v1/folders')
        .expect(200, done);
    });
  });

  describe('#delete()', function() {
    it('should remove a folder', function(done) {
      request(sails.hooks.http.app)
        .delete('/v1/folder/test-folder-123456abc')
        .send({
          folder: 'test-folder'
        })
        .expect(200, done);
    });
  });
});
