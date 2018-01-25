export interface BEMStyle {
  b: () => string
  e: (elm: string, ...mod: string[]) => string
  m: (...mod: string[]) => string
}

export class BEM implements BEMStyle {
  private cn: string
  constructor(rootCn: string) {
    this.cn = rootCn
  }
  public b(): string {
    return this.cn
  }
  public e(elm: string, ...mod: string[]): string {
    return mod.reduce((acc, m) => `${acc}--${m}`, `${this.cn}__${elm}`)
  }
  public m(...mod: string[]): string {
    return mod.reduce((acc, m) => `${acc}--${m}`, this.cn)
  }
}
