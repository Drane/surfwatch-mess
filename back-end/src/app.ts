import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as debug from "debug";
import * as jwt from "express-jwt";

// declare var jwtAuthz: any;
import * as jwtAuthz from "express-jwt-authz";

import * as jwksRsa from "jwks-rsa";

let log = debug("back-end:app");

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    debug("ts-express:server");
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    const checkScopes = jwtAuthz(["read:messages"]);

    // Authentication middleware. When used, the
    // Access Token must exist and be verified against
    // the Auth0 JSON Web Key Set
    const checkJwt = jwt({
      // Dynamically provide a signing key
      // based on the kid in the header and
      // the signing keys provided by the JWKS endpoint.
      secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://prefabsoft.eu.auth0.com/.well-known/jwks.json`
      }),

      // Validate the audience and the issuer.
      audience: "http://localhost:3000",
      issuer: `https://prefabsoft.eu.auth0.com/`,
      algorithms: ["RS256"]
    });

    /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get("/waves", (req, res, next) => {
      log('Getting "/waves" route.');
      // res.set('Content-Type', 'application/json');
      res.json({
        message: "Hello Waves!"
      });
    });

    router.get("/secure", checkJwt/* , checkScopes */, (req, res, next) => {
      log('Getting "/secure" route.');
      // res.set('Content-Type', 'application/json');
      res.json({
        message: "Hello Secured!"
      });
    });

    // placeholder route handler
    // router.post("/waves", (req, res, next) => {
    //   log("Posting \"/waves\" route.");
    //   res.set('Content-Type', 'application/json');
    //   res.json({
    //     message: "Hello Waves!"
    //   });
    // });

    this.express.use("/", router);
  }
}

export default new App().express;
