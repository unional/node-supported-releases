import { cli } from 'clibuilder'
import { CLI_NAME, DESCRIPTION, VERSION } from './pkg'
import { getSupportedVersions } from '.'

export const app = cli({
  name: CLI_NAME,
  description: DESCRIPTION,
  version: VERSION
}).default({
  run() {
    this.ui.info(getSupportedVersions())
  }
})
