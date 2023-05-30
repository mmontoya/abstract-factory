import { CharacterClass } from '../constants'
import { FighterFactory } from './FighterFactory'
import { MageFactory } from './MageFactory'
import { AssassinFactory } from './AssassinFactory'

export abstract class CharacterFactory {
  static getFactory(key: CharacterClass) {
    const fighterFactory = new FighterFactory()
    const mageFactory = new MageFactory()
    const assassinFactory = new AssassinFactory()

    switch (key) {
      case CharacterClass.FIGHTER:
        return fighterFactory
      case CharacterClass.MAGE:
        return mageFactory
      case CharacterClass.ASSASSIN:
        return assassinFactory
      default:
        return fighterFactory
    }
  }
}
