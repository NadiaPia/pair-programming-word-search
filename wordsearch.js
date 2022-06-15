// Starting with Nadia driving and Hope navigating

//Pseudo code
// this is a 2d array. The code begins with left to right checks, lacks up and down checks. to check verticlly we need to change the index keys of the horizontal to the verticle. horizontalJoin[l][i] = vert[i][l]

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let i = 0; i < horizontalJoin[0].length; i++) {
    let vert = "";
    for (let j = 0; j < horizontalJoin.length; j++) {
      vert += horizontalJoin[j][i];
    }
    if (vert.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
