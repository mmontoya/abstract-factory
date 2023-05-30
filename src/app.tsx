import React from 'react'
import './app.css'
import { CharacterClass } from './constants'
import { CharacterFactory } from './classes/CharacterFactory'

export function App() {
  const printStats = (charClass: CharacterClass) => {
    const factory = CharacterFactory.getFactory(charClass)
    const weapon = factory.getWeapon()
    console.log(
      `You have chosen a ${charClass.toLowerCase()} class who fights with a ${weapon.name} and does ${
        weapon.damage
      }hp of damage}`,
    )
  }

  printStats(CharacterClass.FIGHTER)
  printStats(CharacterClass.ASSASSIN)
  printStats(CharacterClass.MAGE)

  return (
    <div className="stats-wrapper">
      <div className="char-stats">
        <div className="header">Class</div>
        <div className="header">Weapon</div>
        <div className="header">HP</div>
        {Object.keys(CharacterClass).map((char, id) => {
          const factory = CharacterFactory.getFactory(char as CharacterClass)
          const weapon = factory.getWeapon()
          return (
            <React.Fragment key={id}>
              <div>{char.toLowerCase()}</div>
              <div>{weapon.name}</div>
              <div>{weapon.damage}</div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
