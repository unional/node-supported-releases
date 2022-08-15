#!/usr/bin/env node
import updateNotifier from 'update-notifier'
import { app } from './cli'
import { pkg } from './pkg'

updateNotifier({ pkg }).notify()

app.parse(process.argv).catch(err => console.error(err))
