import { createCli } from 'clibuilder'
import { CLI_NAME, DESCRIPTION, VERSION } from './pkg'
import { getSupportedVersions } from '.'

export const cli = createCli({
  name: CLI_NAME,
  description: DESCRIPTION,
  version: VERSION,
  run() {
    this.ui.info(getSupportedVersions())
  }
})
