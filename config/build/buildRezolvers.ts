import { ResolveOptions } from "webpack";
import { buildOptions } from "./types/config";

export function buildRezolvers(options: buildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  }
}