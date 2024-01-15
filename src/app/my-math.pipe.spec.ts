import { MyMathPipe } from './my-math.pipe';

describe('MyMathPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMathPipe();
    expect(pipe).toBeTruthy();
  });
});
