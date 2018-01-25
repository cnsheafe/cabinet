import { BEM, BEMStyle } from './bem'

describe('BEM', () => {
  let cn: BEMStyle
  beforeEach(() => {
    cn = new BEM('block')
  });
  it('should create a block with b()', () => {
    const block = cn.b()
    expect(block).toBe('block')
  })
  it('should create a element with e()', () => {
    const elm = cn.e('element')
    expect(elm).toBe('block__element')
  })
  it('should create an element with optional modifiers with e()', () => {
    const elmWithMods = cn.e('element', 'mod1', 'mod2', 'mod3')
    expect(elmWithMods).toBe('block__element--mod1--mod2--mod3')
  })
  it('should create a block with optional modifiers using m()', () => {
    const blockWithMods = cn.m('mod1', 'mod2', 'mod3')
    expect(blockWithMods).toBe('block--mod1--mod2--mod3')
  });
})
