const request = require('supertest');

describe('FileController', function() {
  describe('#create()', function() {
    it('should create a file', function(done) {
      request(sails.hooks.http.app)
        .post('/v1/file/teamone-files/small.png')
        .field('title', 'test')
        .attach('image', 'test/assets/small.png')
        .expect(200, done);
    });
  });

  describe('#read()', function() {
    it('should get file details', function(done) {
      request(sails.hooks.http.app)
        .get('/v1/file/teamone-files/small.png')
        .expect(200, done);
    });
  });

  describe('#delete()', function() {
    it('should remove a file from folder', function(done) {
      request(sails.hooks.http.app)
        .delete('/v1/file/teamone-files/small.png')
        .send({
          fileName: 'small.png',
          folder: 'teamone-files'
        })
        .expect(200, done);
    });
  });
});
