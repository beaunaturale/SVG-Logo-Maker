const { Square, Triangle, Circle } = require('./svg.test');

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';

    const circle = new Circle();
    circle.setColor('green');
    const greenCircleSvg = circle.render();
    expect(greenCircleSvg).toEqual(expectedSvg)

  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';

  });
});

describe("Triangle", () => {
  it("should render svg for a bisque polygon element", () => {
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';

      const shape = new Triangle();
      shape.setColor('bisque');
      const bisqueSvg = shape.render();
      expect(bisqueSvg).toEqual(expectedSvg)

  });
  it("should accept a fillColor param", () => {
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';

  });
});

describe("Square", () => {
  it("should render svg for a blue rect element", () => {
    const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="blue" />';

      const square = new Square();
      square.setColor('blue');
      const blue = square.render();
      expect(blueSvg).toEqual(expectedSvg)

  });
  it("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';

  });
});
