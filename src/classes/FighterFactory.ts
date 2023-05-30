import { Broadsword } from './Weapons'
import { Weaponable } from './Weaponable'

export class FighterFactory implements Weaponable {
  getWeapon() {
    return new Broadsword()
  }
}
