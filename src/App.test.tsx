import axios from 'axios'
import { expect, it, describe, vi, beforeEach } from 'vitest'

describe('<App/ >', () => {

  beforeEach(() => {
    vi.spyOn(window, 'onbeforeunload', 'set').mockImplementation(() => vi.fn());
  })
  
  it('receives a mocked response to a REST API request', async () => {
    const response = await axios.get('/users')
  
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(await response.data).toEqual(Array.from({length: 10}, (_, index) => (
      {
        id: index + 1,
        nome: `Usuário ${index + 1}`,
      }
    )))
  })
})
