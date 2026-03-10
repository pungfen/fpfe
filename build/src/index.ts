import { cwd, argv, execArgv, argv0 } from 'node:process'

import { findWorkspacePackages, type Project, type ProjectManifest } from '@fpfe/pnpm'
import { WORKSPACE_ROOT } from './constants'

export interface BuildProjectOptions {
  type?: 'origin' | 'lib'
  vue?: boolean
}
export interface BuildProjectManifest extends ProjectManifest {
  build?: BuildProjectOptions
}

export interface BuildProject extends Project {
  manifest: BuildProjectManifest
}

const build = async (project: BuildProject) => {
  const { type } = project.manifest.build!
  if (type === 'origin') {
  }
}

const run = async () => {
  const projects = (await findWorkspacePackages(WORKSPACE_ROOT)) as Array<BuildProject>
  const pendings = projects.slice(0).filter((p) => p.manifest.build)
  await Promise.all(pendings.map(build))
}

void run()