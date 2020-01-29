// Taken from my Codesandbox: https://codesandbox.io/s/random-with-rest-y1tgf

function baseRandom(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

export default function rand(input = [0, 100]) {
  let start = 0;
  let end;

  if (Array.isArray(input)) {
    start = input[0];
    end = input[1];
  } else {
    end = input;
  }

  if (start >= end) {
    throw new Error(
      "Number has to be bigger than the starting one (default: 0).",
    );
  }

  return baseRandom(start, end);
}
