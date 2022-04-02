import { makeAutoObservable } from "mobx";

export default class InputStore {
  inputs = [
      
  ]

  constructor() {
    makeAutoObservable(this);
  }
}