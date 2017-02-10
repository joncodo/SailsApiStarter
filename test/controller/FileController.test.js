const request = require('supertest');

describe('FileController', function() {
  describe('#create()', function() {
    it('should upload an image file to s3', function(done) {
      request(sails.hooks.http.app)
        .post('/file/create')
        .field('title', 'test')
        .attach('image', 'test/assets/small.png')
        .expect(200, done);
    });
  });

  describe('#read()', function() {
    it('should get an image file from s3', function(done) {
      request(sails.hooks.http.app)
        .get('/file/read/teamone-files/small.png')
        .expect(200, done);
    });
  });

  describe('#delete()', function() {
    it('should remove a file from s3', function(done) {
      request(sails.hooks.http.app)
        .delete('/file/delete')
        .send({
          fileName: 'small.png',
          folder: 'teamone-files'
        })
        .expect(200, done);
    });
  });
});
