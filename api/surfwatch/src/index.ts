import {SurfwatchApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {SurfwatchApplication};

export async function main(options?: ApplicationConfig) {
  const app = new SurfwatchApplication(options);
  await app.boot();
  await app.start();
  return app;
}
