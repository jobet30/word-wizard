test("basic test", () => {
  window.alert = jest.fn();
  document.body.innerHTML = `
      <h1>Word Wizard</h1>
      <button onclick="alert('Button clicked!')">Start Game</button>
    `;

  expect(document.querySelector("h1")).toBeInTheDocument();
  document.querySelector("button").click();
  expect(window.alert).toHaveBeenCalledWith("Button clicked!");
});
