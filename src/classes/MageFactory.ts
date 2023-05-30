import { MagicStaff } from './Weapons'
import { Weaponable } from './Weaponable'

export class MageFactory implements Weaponable {
  getWeapon() {
    return new MagicStaff()
  }
}
