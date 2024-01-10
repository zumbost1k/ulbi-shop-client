import { makeAutoObservable } from 'mobx';
export default class BasketStore {
  constructor() {
    this._basketDevices = [];
    makeAutoObservable(this);
  }

  setBasket(devices) {
    this._basketDevices = devices;
  }

  get basketDevices() {
    return this._basketDevices;
  }
}
