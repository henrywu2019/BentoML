import path from "path";
import morgan from "morgan";
import { Request, Response } from "express";
import express from "express";
import { kappa } from "./generated/kappa_grpc";
import { createGammaClient } from "./gamma_client";
import { getLogger } from "./logger";
import axios from "axios";

const logger = getLogger();
const ALL_NAMESPACE_TAG = "__BENTOML_ALL_NAMESPACE";

const createAPIRoutes = (app, gammaClient) => {
  let router = express.Router();
  router.get("/api/ListBento", async (req: Request, res: Response) => {
    const requestQuery: any = Object.assign({}, req.query);
    if (req.query.limit && typeof req.query.limit == "string") {
      requestQuery.limit = Number(req.query.limit);
    }
    if (req.query.offset && typeof req.query.offset == "string") {
      requestQuery.offset = Number(req.query.offset);
    }
    let verifyError = kappa.ListBentoRequest.verify(requestQuery);
    if (verifyError) {
      logger.error({ request: "ListBento", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.ListBentoRequest.create(requestQuery);
    try {
      const result = await gammaClient.listBento(requestMessage);
      logger.info({
        request: "ListBento",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({ request: "ListBento", error: JSON.stringify(error) });
      return res.status(500).json(error);
    }
  });

  router.get("/api/GetBento", async (req: Request, res: Response) => {
    let verifyError = kappa.GetBentoRequest.verify(req.query);
    if (verifyError) {
      logger.error({ request: "GetBento", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.GetBentoRequest.create(req.query);
    try {
      const result = await gammaClient.getBento(requestMessage);
      logger.info({
        request: "GetBento",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({ request: "GetBento", error: JSON.stringify(error) });
      return res.status(500).json(error);
    }
  });

  router.get("/api/GetDeployment", async (req: Request, res: Response) => {
    let verifyError = kappa.GetDeploymentRequest.verify(req.query);
    if (verifyError) {
      logger.error({ request: "GetDeployment", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.GetDeploymentRequest.create(req.query);
    try {
      const result = await gammaClient.getDeployment(requestMessage);
      logger.info({
        request: "GetDeployment",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({ request: "GetDeployment", error: JSON.stringify(error) });
      return res.status(500).json(error);
    }
  });

  router.get("/api/ListDeployments", async (req: Request, res: Response) => {
    const requestQuery: any = Object.assign({}, req.query);
    if (req.query.limit && typeof req.query.limit == "string") {
      requestQuery.limit = Number(req.query.limit);
    }
    if (!req.query.namespace) {
      requestQuery.namespace = ALL_NAMESPACE_TAG;
    }
    let verifyError = kappa.ListDeploymentsRequest.verify(requestQuery);
    if (verifyError) {
      logger.error({ request: "ListDeployments", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.ListDeploymentsRequest.create(requestQuery);
    try {
      const result = await gammaClient.listDeployments(requestMessage);
      logger.info({
        request: "ListDeployments",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({ request: "ListDeployment", error: JSON.stringify(error) });
      return res.status(500).json(error);
    }
  });

  router.post("/api/DeleteDeployment", async (req: Request, res: Response) => {
    let verifyError = kappa.DeleteDeploymentRequest.verify(req.body);
    if (verifyError) {
      logger.error({ request: "DeleteDeployment", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.DeleteDeploymentRequest.create(req.body);
    try {
      const result = await gammaClient.deleteDeployment(requestMessage);
      logger.info({
        request: "DeleteDeployment",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({
        request: "DeleteDeployment",
        error: JSON.stringify(error),
      });
      return res.status(500).json(error);
    }
  });

  router.post("/api/DeleteBento", async (req: Request, res: Response) => {
    let verifyError = kappa.DangerouslyDeleteBentoRequest.verify(req.body);
    if (verifyError) {
      logger.error({ request: "DeleteBento", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.DangerouslyDeleteBentoRequest.create(req.body);
    try {
      const result = await gammaClient.dangerouslyDeleteBento(requestMessage);
      logger.info({
        request: "DeleteBento",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({ request: "DeleteBento", error: JSON.stringify(error) });
      return res.status(500).json(error);
    }
  });

  router.post("/api/ApplyDeployment", async (req: Request, res: Response) => {
    let verifyError = kappa.ApplyDeploymentRequest.verify(req.body);
    if (verifyError) {
      logger.error({ request: "ApplyDeployment", error: verifyError });
      return res.status(400).json({ error: verifyError });
    }
    let requestMessage = kappa.ApplyDeploymentRequest.create(req.body);
    try {
      const result = await gammaClient.applyDeployment(requestMessage);
      logger.info({
        request: "ApplyDeployment",
        data: requestMessage,
        result: result,
      });
      if (result.status.status_code != 0) {
        return res.status(400).json({ error: result.status.error_message });
      }
      return res.status(200).json(result);
    } catch (error) {
      logger.error({
        request: "ApplyDeployment",
        error: JSON.stringify(error),
      });
      return res.status(500).json(error);
    }
  });

  return router;
};

export const getExpressApp = (
  grpcAddress: string | null,
  baseURL: string,
  prometheusAddress: string
) => {
  const app = express();
  const cookieParser = require("cookie-parser");
  app.use(cookieParser());
  app.use(function (req, res, next) {
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
      res.cookie("baseURLCookie", baseURL, { maxAge: 900000, httpOnly: false });
      console.log("cookie created successfully");
    } else {
      console.log("cookie exists", cookie);
    }
    next();
  });

  app.use(express.json());
  app.use(
    morgan("combined", {
      stream: { write: (message) => logger.info(message.trim()) },
    })
  );
  const gammaClient = createGammaClient(grpcAddress);
  const router = createAPIRoutes(app, gammaClient);
  const apiUrlPrefix = baseURL == "." ? "/" : "/" + baseURL;
  app.use(apiUrlPrefix, router);

  app.get("/healthz", (req, res) => res.status(200).json());

  app.get("/metrics", async (req, res) => {
    const metricsResponse = await axios.get(prometheusAddress);
    res.end(metricsResponse.data);
  });

  app.get("/*", (req, res) => {
    let directory = req.path.split("/").slice(-2, -1);
    let filename = req.path.split("/").pop();
    if (/.js$|.css$/.test(req.path)) {
      res.sendFile(
        path.join(__dirname, `../dist/client/static/${directory}/${filename}`)
      );
    } else if (/favicon.png$|logo192.png$/.test(req.path)) {
      res.sendFile(path.join(__dirname, `../dist/client/${filename}`));
    } else if (/.png/.test(req.path)) {
      res.sendFile(
        path.join(__dirname, `../dist/client/static/${directory}/${filename}`)
      );
    } else {
      res.sendFile(path.join(__dirname, "../dist/client/index.html"));
    }
  });

  app.use(express.static(path.join(__dirname, "../dist/client")));
  return app;
};
