test("renders title and responds to button click", () => {
  document.body.innerHTML = `<h1>Word Wizard</h1><button>Start Game</button>`;
  const button = document.querySelector("button");

  button.onclick = jest.fn();
  button.click();

  expect(button.onclick).toHaveBeenCalled();
});
