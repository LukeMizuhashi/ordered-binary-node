module.exports = () => {

  it("Does not throw error when no options object passed",() => {
    assert.doesNotThrow(() => {
      new BinaryNode();
    });
  });

 it("Sets BinaryNode.compare from options.comparator appropriately",() => {
    let uut;
    let customComparator = () => {};

    uut = new BinaryNode();
    assert.strictEqual(uut.compare,BinaryNode.prototype.compare);
    assert.notStrictEqual(uut.compare,customComparator);

    uut = new BinaryNode({ comparator: customComparator });
    assert.strictEqual(uut.compare,customComparator);
    assert.notStrictEqual(uut.compare,BinaryNode.prototype.compare);
 }); 

 it("Sets BinaryNode.key from options.key appropriately",() => {
    let uut;

    uut = new BinaryNode();
    assert.strictEqual(uut.key,undefined);

    uut = new BinaryNode({ key: 'foo' });
    assert.strictEqual(uut.key,'foo');
 }); 

};

