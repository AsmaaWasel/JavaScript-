const poll = {
  question: "What is your favourire programming language?",
  options: ["0 : JavaScript", "1 : python", "2 : Rust", "3 : c++"],
  answers: new Array(4).fill(0),
  regusterNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n (write option number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll results are ${this.answers.join(",")}`);
    }
  },
};

poll.regusterNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.regusterNewAnswer.bind(poll));

//change color of header
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
