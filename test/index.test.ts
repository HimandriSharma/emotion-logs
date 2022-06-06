import * as functions from "../src/index";
describe("testing function", () => {
  it('console.log the text "happy"', () => {
    console.log = jest.fn();
    functions.happy('happy')
    expect(console.log).toHaveBeenCalledWith('\x1b[33mhappy');
  });
  it('console.log the text "angry"', () => {
    console.log = jest.fn();
    functions.angry('angry')
    expect(console.log).toHaveBeenCalledWith('\x1b[31mangry');
  });
  it('console.log the text "ecstatic"', () => {
    console.log = jest.fn();
    functions.ecstatic('ecstatic')
    expect(console.log).toHaveBeenCalledWith('\x1b[92mecstatic');
  });
  it('console.log the text "admiring"', () => {
    console.log = jest.fn();
    functions.admiring('admiring')
    expect(console.log).toHaveBeenCalledWith('\x1b[92m\x1b[1madmiring');
  });
  it('console.log the text "annoying"', () => {
    console.log = jest.fn();
    functions.annoying('annoying')
    expect(console.log).toHaveBeenCalledWith('\x1b[41mannoying');
  });
  it('console.log the text "boring"', () => {
    console.log = jest.fn();
    functions.boring('boring')
    expect(console.log).toHaveBeenCalledWith('\x1b[35mboring');
  });
  it('console.log the text "disgusting"', () => {
    console.log = jest.fn();
    functions.disgusting('disgusting')
    expect(console.log).toHaveBeenCalledWith('\x1b[105mdisgusting');
  });
  it('console.log the text "sad"', () => {
    console.log = jest.fn();
    functions.sad('sad')
    expect(console.log).toHaveBeenCalledWith('\x1b[44msad');
  });
  it('console.log the text "surprising"', () => {
    console.log = jest.fn();
    functions.surprising('surprising')
    expect(console.log).toHaveBeenCalledWith('\x1b[96msurprising');
  });
  it('console.log the text "fear"', () => {
    console.log = jest.fn();
    functions.fear('fear')
    expect(console.log).toHaveBeenCalledWith('\x1b[32mfear');
  });
  it('console.log the text "terrorizing"', () => {
    console.log = jest.fn();
    functions.terrorizing('terrorizing')
    expect(console.log).toHaveBeenCalledWith('\x1b[92m\x1b[2mterrorizing');
  });
});