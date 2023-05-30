export abstract class Weapon {
  private _damage!: number
  private _name!: string

  constructor(name: string, damage: number) {
    this._name = name
    this._damage = damage
  }

  get damage() {
    return this._damage
  }

  get name() {
    return this._name
  }
}
