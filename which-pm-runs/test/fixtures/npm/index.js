'use strict'
const whichPmRuns = require('which-pm-runs')

const pm = whichPmRuns()
if (pm.name !== 'npm' || !pm.version) process.exit(1)
