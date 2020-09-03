import schedules from 'node-releases/data/release-schedule/release-schedule.json'
import { getTodayTime } from './dateUtils'

export const context: {
  today: number,
  schedules: Record<string, Schedule>
} = {
  today: getTodayTime(),
  schedules
}

export type Schedule = {
  start: string,
  end: string,
  codename?: string,
  lts?: string,
  maintenance?: string,
}

export function resetContext() {
  context.today = getTodayTime()
  context.schedules = schedules
}
