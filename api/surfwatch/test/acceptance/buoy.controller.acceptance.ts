import {createClientForHandler, supertest} from '@loopback/testlab';
import {RestServer} from '@loopback/rest';
import {SurfwatchApplication} from '../..';

describe('BuoyController', () => {
  let app: SurfwatchApplication;
  let server: RestServer;
  let client: supertest.SuperTest<supertest.Test>;

  before(givenAnApplication);

  before(givenARestServer);

  before(async () => {
    await app.boot();
    await app.start();
  });

  before(() => {
    client = createClientForHandler(server.requestHandler);
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /buoy', async () => {
    await client.get('/buoy')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  function givenAnApplication() {
    app = new SurfwatchApplication({
      rest: {
        port: 0,
      },
      disableConsoleLog: true
    });
  }

  async function givenARestServer() {
    server = await app.getServer(RestServer);
  }
});
