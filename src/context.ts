import schedules from 'node-releases/schedule.json'
import { getTodayTime } from './dateUtils'

export interface Schedule {
  start: string,
  end: string,
  codename?: string,
  lts?: string,
  maintenance?: string,
}

export const context: {
  today: number,
  schedules: Record<string, Schedule>
} = {
  today: getTodayTime(),
  schedules
}

export function resetContext() {
  context.today = getTodayTime()
  context.schedules = schedules
}
