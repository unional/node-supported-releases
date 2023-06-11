import { reduceByKey } from 'type-plus'
import { context } from './context'
import { onOrAfter, onOrBefore } from './dateUtils'

export function getSupportedVersions() {
  return reduceByKey(context.schedules, (p, v) => {
    const schedule = context.schedules[v]
    if (onOrBefore(context.today, schedule.start) && onOrAfter(context.today, schedule.end)) {
      p.push(v.slice(1))
    }
    return p
  }, [] as string[])
}
