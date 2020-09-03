import { getSupportedVersions } from '.'
import { context, resetContext } from './context'

beforeEach(() => resetContext())

describe('getSupportedReleased()', () => {
  test('default gets supported major versions', () => {
    context.today = new Date('2020-09-01').getTime()
    context.schedules = {
      'v10': {
        'start': '2018-04-24',
        'lts': '2018-10-30',
        'maintenance': '2020-05-19',
        'end': '2021-04-30',
        'codename': 'Dubnium'
      },
      'v11': {
        'start': '2018-10-23',
        'maintenance': '2019-04-22',
        'end': '2019-06-01'
      },
      'v12': {
        'start': '2019-04-23',
        'lts': '2019-10-21',
        'maintenance': '2020-10-20',
        'end': '2022-04-30',
        'codename': 'Erbium'
      },
      'v13': {
        'start': '2019-10-22',
        'maintenance': '2020-04-01',
        'end': '2020-06-01'
      },
      'v14': {
        'start': '2020-04-21',
        'lts': '2020-10-20',
        'maintenance': '2021-10-19',
        'end': '2023-04-30',
        'codename': ''
      },
    }

    expect(getSupportedVersions()).toEqual(['10', '12', '14'])
  })
})
