const wordSearch = (letters, word) => {
    // Horizontal search
    let horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    // Veritcal search
    for (let i = 0; i < letters[0].length; i++) {
        let verticalLine = "";
        for (let j = 0; j < letters.length; j++) {
            verticalLine = verticalLine.concat(letters[j][i]);
        }
        if (verticalLine.includes(word)) {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = wordSearch;