import path from "path";
import webpack from 'webpack';
import { buildOptions } from "./types/config";
import { buildRezolvers } from "./buildRezolvers";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import buildDevServer from "./buildDevServer/buildDevServer";


export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
  const {mode, paths: {entry, build, html}, isDev} = options
  return {
    mode: mode, 
    entry: entry,
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer:isDev ? buildDevServer(options) : undefined,
    resolve: buildRezolvers(options),
    output: {
      path: build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options)
  }
}