export { Generic };

class Generic {
  constructor(id: number) {
    this.id = id;
  }

  set id(id: number) {
    this.id = id;
  }

  toJson() {
    return {
      id: this.id,
    };
  }
}
