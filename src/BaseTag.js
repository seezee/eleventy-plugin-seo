class BaseTag {
  constructor(liquidEngine, config) {
    this.liquidEngine = liquidEngine;
    this._config = config;
  }

  get config() {
    return this._config.get();
  }

  get baseURL() {
    return this.config.url;
  }
}

module.exports = BaseTag;