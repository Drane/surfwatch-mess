import * as supertest from 'supertest';

const request = supertest('http://localhost:3000');

describe('Getting waves', () => {

    it('should have an endpoint to get the waves that returns json', (done) => {
        request.get('/waves')
            .expect('Content-Type', /json/)
            .expect(200, /Hello Waves!/ig)
            .end(done);
    });
    
});


describe('Updating waves', () => {

    it('should have an endpoint to get the waves that returns json', (done) => {
        request.get('/')
            .expect('content-type', /json/)
            .expect(200, /Hello Waves!/ig)
            .end(done);
    });
    
});