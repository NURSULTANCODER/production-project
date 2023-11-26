import { buildOptions } from "../types/config";
import { Configuration } from "webpack-dev-server";

export default function buildDevServer(options: buildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}