const request = require('supertest');

describe('FileController', function() {

  const file = {
    fileName: 'test.txt',
    bucket: 'teamone-files'
  };
  describe('#upload()', function() {
    // clean up the created files
    after(function(done) {
      request(sails.hooks.http.app)
        .post('/file/delete')
        .send({
          fileName: 'test.txt',
          folder: 'teamone-files'
        }, done);
    });

    it('should upload a text file to s3', function(done) {
      request(sails.hooks.http.app)
        .post('/file/create')
        .send(file)
        .expect(200, done);
    });
  });

  describe('#delete()', function() {
    // create something to delete
    before(function(done) {
      request(sails.hooks.http.app)
        .post('/file/create')
        .send(file, done);
    });

    it('should remove a file from s3', function(done) {
      request(sails.hooks.http.app)
        .post('/file/delete')
        .send({
          fileName: 'test.txt',
          folder: 'teamone-files'
        })
        .expect(200, done);
    });
  });


  // describe('#login()', function() {
  //   it('should redirect to /mypage', function (done) {
  //     request(sails.hooks.http.app)
  //       .post('/file/upload')
  //       .send({ name: 'test', password: 'test' })
  //       .expect(302)
  //       .expect('location','/mypage', done);
  //   });
  // });

});
