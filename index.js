const Nothing = value => ({
  isJust: () => false,
  isNothing: () => true,
  map: () => this,
  ap: () => this,
  chian: () => this
});


const Just = value => ({
  isJust: () => true,
  isNothing: () => false,
  join: () => value,
  map: func => Maybe.of(func(value)),
  chain: func => this.map(func).join()
});

const Maybe = value => ({
  of: (this.value === null || this.value === undefined) ? Nothing() : Just(value)
});


Maybe.prototype['fantasy-land/of'] = function(value) {
  return Maybe.of(value);
};