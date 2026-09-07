#!/usr/bin/env node
import { app } from './cli'
import { pkg } from './pkg'

async function main() {
  const { default: updateNotifier } = await import('update-notifier')
  updateNotifier({ pkg }).notify()

  await app.parse(process.argv)
}

main().catch(err => console.error(err))
