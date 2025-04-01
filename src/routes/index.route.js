import homeRouter from "./home.route.js";
import authRouter from "./auth.route.js";
import modelRouter from "./model.route.js";

export function routes(app) {
  const version = "/";
  app.use(version, homeRouter);
  app.use(version + "auth", authRouter);
  app.use(version + "model", modelRouter);
}
