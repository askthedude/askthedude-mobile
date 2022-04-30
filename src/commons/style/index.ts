export const color = {
  primary: "#1484D7",
  backgroundPink: "#E9ECFF",
  lighterGrey: "#FAFAFB",
  borderGrey: "#DDDDDD",
  backgroundGrey: "#DAE0E6",
  white: "white",
  black: "#0D0B22",
  darkblue: "#00124A",
  error: "#ff5555",
  green: "#20C28D",
  shadowColor: "#470000",
  dimBackground: {
    color: "rgba(69, 69, 69, 0.7)",
    opacity: 0.08,
  },
};

export const size = {
  font: {
    small: 13,
    smallplus: 15,
    medium: 18,
    mediumplus: 20,
    big: 24,
  },
  fontWeight: {
    threefuckinghundred: "300",
    fourfuckinghundred: "400",
    sevenfuckinghundred: "700",
  } as {
    // These are for avoiding typescript type errors when using weights in styles
    threefuckinghundred: "300";
    fourfuckinghundred: "400";
    sevenfuckinghundred: "700";
  },
  margin: {
    small: 5,
    medium: 8,
    mediumplus: 15,
    big: 20,
    xbig: 30,
    toobig: 50,
  },
  padding: {
    xsmall: 5,
    small: 8,
    medium: 18,
    big: 25,
    xbig: 30,
    xxbig: 40,
  },
  borderRadius: {
    xsmall: 3,
    small: 5,
    medium: 10,
    big: 20,
    xbig: 30,
  },
  height: {
    zero: 0,
    one: 1,
    xsmall: 20,
    small: 35,
    medium: 40,
    big: 50,
    xbig: 120,
    xxbig: 170,
    xxbigplus: 200,
  },
  width: {
    zero: 0,
    one: 1,
    xsmall: 70,
    small: 110,
    big: 250,
    bigplus: 300,
    xbig: 360,
  },
  borderWidth: {
    zero: 0,
    small: 1,
    medium: 2,
  },
  icon: {
    xsmall: 15,
    small: 24,
    smallplus: 28,
    medium: 35,
    big: 50,
    xbig: 70,
  },
  shadowOpacity: {
    weak: 0.3,
  },
};

export const shadowStyles = {
  shadowColor: color.shadowColor,
  shadowOffset: { width: size.width.zero, height: size.height.one },
  shadowOpacity: color.dimBackground.opacity,
  elevation: 1,
};
