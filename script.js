// ==================== PATTERN DATABASE & LOGIC BUILDER ====================
const patternDatabase = [
    // --- Star Patterns ---
    {
        id: "right-triangle",
        name: "Right Triangle",
        category: "star",
        difficulty: "Easy",
        description: "Prints a right-angled triangle aligned to the left.",
        logic: "Outer loop runs for each row i. Inner loop prints character i times.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push(char.repeat(i));
            }
            return res.join('\n');
        }
    },
    {
        id: "left-triangle",
        name: "Left Triangle",
        category: "star",
        difficulty: "Easy",
        description: "Prints a right-angled triangle aligned to the right by padding spaces.",
        logic: "Outer loop runs for row i. Prints (rows - i) spaces followed by i characters.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push(" ".repeat(rows - i) + char.repeat(i));
            }
            return res.join('\n');
        }
    },
    {
        id: "inverted-right-triangle",
        name: "Inverted Right Triangle",
        category: "star",
        difficulty: "Easy",
        description: "Prints an upside-down right triangle.",
        logic: "Outer loop runs from rows down to 1. Inner loop prints character i times.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = rows; i >= 1; i--) {
                res.push(char.repeat(i));
            }
            return res.join('\n');
        }
    },
    {
        id: "inverted-left-triangle",
        name: "Inverted Left Triangle",
        category: "star",
        difficulty: "Easy",
        description: "Prints an upside-down right-aligned triangle.",
        logic: "Outer loop runs from rows down to 1, printing leading spaces.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = rows; i >= 1; i--) {
                res.push(" ".repeat(rows - i) + char.repeat(i));
            }
            return res.join('\n');
        }
    },
    {
        id: "pyramid",
        name: "Pyramid",
        category: "star",
        difficulty: "Medium",
        description: "Prints a symmetrical centered triangle pyramid.",
        logic: "Outer loop controls rows. First inner loop prints spaces (rows - i), second prints stars (2*i - 1).",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat(rows - i);
                let symbols = (char + " ").repeat(i).trimEnd();
                // For simple repeating char block:
                symbols = char.repeat(2 * i - 1);
                res.push(spaces + symbols);
            }
            return res.join('\n');
        }
    },
    {
        id: "inverted-pyramid",
        name: "Inverted Pyramid",
        category: "star",
        difficulty: "Medium",
        description: "Prints an upside-down centered pyramid.",
        logic: "Outer loop runs downwards from rows to 1, increasing leading spaces.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = rows; i >= 1; i--) {
                let spaces = " ".repeat(rows - i);
                let symbols = char.repeat(2 * i - 1);
                res.push(spaces + symbols);
            }
            return res.join('\n');
        }
    },
    {
        id: "diamond",
        name: "Diamond",
        category: "star",
        difficulty: "Medium",
        description: "Combines an upward pyramid and an inverted pyramid to form a diamond.",
        logic: "First loop prints upper pyramid (1 to rows), second loop prints lower inverted pyramid (rows-1 down to 1).",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push(" ".repeat(rows - i) + char.repeat(2 * i - 1));
            }
            for (let i = rows - 1; i >= 1; i--) {
                res.push(" ".repeat(rows - i) + char.repeat(2 * i - 1));
            }
            return res.join('\n');
        }
    },
    {
        id: "hollow-diamond",
        name: "Hollow Diamond",
        category: "star",
        difficulty: "Hard",
        description: "Diamond pattern with hollow inner space.",
        logic: "Prints outer boundaries with spaces in between using conditional checks on inner columns.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            // Upper half
            for (let i = 1; i <= rows; i++) {
                let line = "";
                for (let j = 1; j <= 2 * rows - 1; j++) {
                    if (j === rows - i + 1 || j === rows + i - 1) {
                        line += char;
                    } else {
                        line += " ";
                    }
                }
                res.push(line);
            }
            // Lower half
            for (let i = rows - 1; i >= 1; i--) {
                let line = "";
                for (let j = 1; j <= 2 * rows - 1; j++) {
                    if (j === rows - i + 1 || j === rows + i - 1) {
                        line += char;
                    } else {
                        line += " ";
                    }
                }
                res.push(line);
            }
            return res.join('\n');
        }
    },
    {
        id: "square",
        name: "Square",
        category: "star",
        difficulty: "Easy",
        description: "Prints a solid square matrix of rows x columns.",
        logic: "Nested loops: outer for rows, inner prints character N times.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push(char.repeat(cols));
            }
            return res.join('\n');
        }
    },
    {
        id: "hollow-square",
        name: "Hollow Square",
        category: "star",
        difficulty: "Medium",
        description: "Square pattern with characters only on the border.",
        logic: "Print character if row is 1 or N, or column is 1 or N. Otherwise print space.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = "";
                for (let j = 1; j <= cols; j++) {
                    if (i === 1 || i === rows || j === 1 || j === cols) {
                        line += char + " ";
                    } else {
                        line += "  ";
                    }
                }
                res.push(line.trimEnd());
            }
            return res.join('\n');
        }
    },
    {
        id: "rectangle",
        name: "Rectangle",
        category: "star",
        difficulty: "Easy",
        description: "Solid rectangle with custom row and column dimensions.",
        logic: "Prints character repeated across user-defined columns for each row.",
        timeComplexity: "O(r * c)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push(char.repeat(cols));
            }
            return res.join('\n');
        }
    },
    {
        id: "hollow-rectangle",
        name: "Hollow Rectangle",
        category: "star",
        difficulty: "Medium",
        description: "Rectangle with hollow interior.",
        logic: "Border check for row and column limits.",
        timeComplexity: "O(r * c)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = "";
                for (let j = 1; j <= cols; j++) {
                    if (i === 1 || i === rows || j === 1 || j === cols) {
                        line += char;
                    } else {
                        line += " ";
                    }
                }
                res.push(line);
            }
            return res.join('\n');
        }
    },
    {
        id: "butterfly",
        name: "Butterfly Pattern",
        category: "star",
        difficulty: "Hard",
        description: "Symmetrical butterfly wing shape.",
        logic: "Combines two triangular wings with a central spacing gap that decreases and then increases.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let n = rows;
            // Upper half
            for (let i = 1; i <= n; i++) {
                let left = char.repeat(i);
                let spaces = " ".repeat(2 * (n - i));
                let right = char.repeat(i);
                res.push(left + spaces + right);
            }
            // Lower half
            for (let i = n; i >= 1; i--) {
                let left = char.repeat(i);
                let spaces = " ".repeat(2 * (n - i));
                let right = char.repeat(i);
                res.push(left + spaces + right);
            }
            return res.join('\n');
        }
    },
    {
        id: "hourglass",
        name: "Hourglass Pattern",
        category: "star",
        difficulty: "Hard",
        description: "Hourglass shape tapering inward and expanding outward.",
        logic: "Inverted pyramid followed by an upright pyramid.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let n = rows;
            for (let i = n; i >= 1; i--) {
                res.push(" ".repeat(n - i) + (char + " ").repeat(i).trimEnd());
            }
            for (let i = 2; i <= n; i++) {
                res.push(" ".repeat(n - i) + (char + " ").repeat(i).trimEnd());
            }
            return res.join('\n');
        }
    },
    {
        id: "x-pattern",
        name: "X Pattern",
        category: "star",
        difficulty: "Medium",
        description: "Cross diagonal pattern forming an X.",
        logic: "Print character when column index equals row index or (rows - row index + 1).",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let n = rows;
            for (let i = 1; i <= n; i++) {
                let line = "";
                for (let j = 1; j <= n; j++) {
                    if (j === i || j === (n - i + 1)) {
                        line += char;
                    } else {
                        line += " ";
                    }
                }
                res.push(line);
            }
            return res.join('\n');
        }
    },

    // --- Number Patterns ---
    {
        id: "number-triangle",
        name: "Number Triangle",
        category: "number",
        difficulty: "Easy",
        description: "Prints increasing numbers row by row.",
        logic: "Inner loop prints numbers from 1 up to row index i.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = 1; j <= i; j++) {
                    line.push(j);
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "inverted-number-triangle",
        name: "Inverted Number Triangle",
        category: "number",
        difficulty: "Easy",
        description: "Decreasing number count per row from top to bottom.",
        logic: "Inner loop runs from 1 up to (rows - i + 1).",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = rows; i >= 1; i--) {
                let line = [];
                for (let j = 1; j <= i; j++) {
                    line.push(j);
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "number-pyramid",
        name: "Number Pyramid",
        category: "number",
        difficulty: "Medium",
        description: "Centered pyramid filled with sequential numbers.",
        logic: "Combines space padding with incremental number sequences.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat((rows - i) * 2);
                let line = [];
                for (let j = 1; j <= i; j++) line.push(j);
                for (let j = i - 1; j >= 1; j--) line.push(j);
                res.push(" ".repeat(rows - i) + line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "floyds-triangle",
        name: "Floyd's Triangle",
        category: "number",
        difficulty: "Medium",
        description: "Right-angled triangle filled with consecutive natural numbers.",
        logic: "Maintains a running counter that increments continuously across rows.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let num = 1;
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = 1; j <= i; j++) {
                    line.push(num++);
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "pascals-triangle",
        name: "Pascal's Triangle",
        category: "number",
        difficulty: "Hard",
        description: "Mathematical triangle where each number is the sum of the two directly above it.",
        logic: "Computes binomial coefficients C(i, j) = C(i, j-1) * (i - j + 1) / j.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 0; i < rows; i++) {
                let line = [];
                let val = 1;
                for (let j = 0; j <= i; j++) {
                    line.push(val);
                    val = (val * (i - j)) / (j + 1);
                }
                let spaces = " ".repeat(rows - i);
                res.push(spaces + line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "increasing-number-pattern",
        name: "Increasing Number Pattern",
        category: "number",
        difficulty: "Easy",
        description: "Repeats the row index across each row.",
        logic: "Prints row number i repeated i times.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                res.push((i + " ").repeat(i).trimEnd());
            }
            return res.join('\n');
        }
    },
    {
        id: "decreasing-number-pattern",
        name: "Decreasing Number Pattern",
        category: "number",
        difficulty: "Easy",
        description: "Prints decreasing row values.",
        logic: "Prints numbers from rows down to current row index.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = rows; j >= rows - i + 1; j--) {
                    line.push(j);
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "palindrome-number-pyramid",
        name: "Palindrome Number Pyramid",
        category: "number",
        difficulty: "Medium",
        description: "Numbers increase up to the middle and then decrease.",
        logic: "Inner loops print 1 to i then i-1 down to 1 with proper centering spaces.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat((rows - i) * 2);
                let line = [];
                for (let j = 1; j <= i; j++) line.push(j);
                for (let j = i - 1; j >= 1; j--) line.push(j);
                res.push(spaces + line.join("  "));
            }
            return res.join('\n');
        }
    },

    // --- Alphabet Patterns ---
    {
        id: "alphabet-triangle",
        name: "Alphabet Triangle",
        category: "alphabet",
        difficulty: "Easy",
        description: "Right-angled triangle using alphabetical characters (A, B, C...).",
        logic: "Maps character codes starting from ASCII 65 ('A') based on column index.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = 0; j < i; j++) {
                    line.push(String.fromCharCode(65 + j));
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "inverted-alphabet-triangle",
        name: "Inverted Alphabet Triangle",
        category: "alphabet",
        difficulty: "Easy",
        description: "Upside-down alphabet triangle.",
        logic: "Decreases character count per row using ASCII character mapping.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = rows; i >= 1; i--) {
                let line = [];
                for (let j = 0; j < i; j++) {
                    line.push(String.fromCharCode(65 + j));
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "alphabet-pyramid",
        name: "Alphabet Pyramid",
        category: "alphabet",
        difficulty: "Medium",
        description: "Centered pyramid made of letters.",
        logic: "Combines centering spaces with expanding alphabetical sequences.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat(rows - i);
                let line = [];
                for (let j = 0; j < i; j++) line.push(String.fromCharCode(65 + j));
                for (let j = i - 2; j >= 0; j--) line.push(String.fromCharCode(65 + j));
                res.push(spaces + line.join(""));
            }
            return res.join('\n');
        }
    },
    {
        id: "repeated-alphabet-pattern",
        name: "Repeated Alphabet Pattern",
        category: "alphabet",
        difficulty: "Easy",
        description: "Repeats the same alphabet character per row.",
        logic: "Uses String.fromCharCode(65 + i - 1) repeated i times.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let letter = String.fromCharCode(64 + i);
                res.push((letter + " ").repeat(i).trimEnd());
            }
            return res.join('\n');
        }
    },
    {
        id: "alphabet-diamond",
        name: "Alphabet Diamond",
        category: "alphabet",
        difficulty: "Hard",
        description: "Symmetrical diamond formed using letters.",
        logic: "Combines alphabet pyramids in normal and reverse order.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let buildLine = (i, n) => {
                let spaces = " ".repeat(n - i);
                let line = [];
                for (let j = 0; j < i; j++) line.push(String.fromCharCode(65 + j));
                for (let j = i - 2; j >= 0; j--) line.push(String.fromCharCode(65 + j));
                return spaces + line.join("");
            };
            for (let i = 1; i <= rows; i++) res.push(buildLine(i, rows));
            for (let i = rows - 1; i >= 1; i--) res.push(buildLine(i, rows));
            return res.join('\n');
        }
    },
    {
        id: "character-square",
        name: "Character Square",
        category: "alphabet",
        difficulty: "Easy",
        description: "Solid square matrix filled with rotating characters.",
        logic: "Nested loops filling rows and columns with sequential alphabet letters.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 0; i < rows; i++) {
                let line = [];
                for (let j = 0; j < cols; j++) {
                    line.push(String.fromCharCode(65 + ((i + j) % 26)));
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },

    // --- Special Patterns ---
    {
        id: "binary-triangle",
        name: "0-1 Binary Triangle",
        category: "special",
        difficulty: "Medium",
        description: "Triangle alternating between 0 and 1 values.",
        logic: "Prints 1 if (row + col) is even, otherwise 0.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = 1; j <= i; j++) {
                    line.push((i + j) % 2 === 0 ? 1 : 0);
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "binary-pyramid",
        name: "Binary Pyramid",
        category: "special",
        difficulty: "Medium",
        description: "Centered pyramid with alternating binary digits.",
        logic: "Combines centering spaces with alternating 0/1 calculations.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let spaces = " ".repeat(rows - i);
                let line = [];
                for (let j = 1; j <= i; j++) {
                    line.push((i + j) % 2 === 0 ? 1 : 0);
                }
                res.push(spaces + line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "multiplication-pattern",
        name: "Multiplication Pattern",
        category: "special",
        difficulty: "Easy",
        description: "Multiplication table grid structure.",
        logic: "Multiplies row index by column index.",
        timeComplexity: "O(r * c)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let res = [];
            for (let i = 1; i <= rows; i++) {
                let line = [];
                for (let j = 1; j <= cols; j++) {
                    line.push(String(i * j).padStart(3, ' '));
                }
                res.push(line.join(" "));
            }
            return res.join('\n');
        }
    },
    {
        id: "zig-zag-pattern",
        name: "Zig-Zag Pattern",
        category: "special",
        difficulty: "Hard",
        description: "Wave-like zig-zag pattern across columns.",
        logic: "Uses sinusoidal conditions across 3 rows for a fixed column length.",
        timeComplexity: "O(c)",
        spaceComplexity: "O(1)",
        requiresCols: true,
        generator: (rows, cols, char) => {
            let n = Math.max(cols, 10);
            let res = [];
            // Classic 3-row zig zag
            for (let i = 1; i <= 3; i++) {
                let line = "";
                for (let j = 1; j <= n; j++) {
                    if ((i + j) % 4 === 0 || (i === 2 && j % 2 === 0)) {
                        line += char + "   ";
                    } else {
                        line += "    ";
                    }
                }
                res.push(line.trimEnd());
            }
            return res.join('\n');
        }
    },
    {
        id: "plus-pattern",
        name: "Plus (+) Pattern",
        category: "special",
        difficulty: "Medium",
        description: "Cross symbol (+) centered in a grid.",
        logic: "Prints character at middle row or middle column.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        requiresCols: false,
        generator: (rows, cols, char) => {
            let res = [];
            let n = rows % 2 === 0 ? rows + 1 : rows; // ensure odd center
            let mid = Math.ceil(n / 2);
            for (let i = 1; i <= n; i++) {
                let line = "";
                for (let j = 1; j <= n; j++) {
                    if (i === mid || j === mid) {
                        line += char + " ";
                    } else {
                        line += "  ";
                    }
                }
                res.push(line.trimEnd());
            }
            return res.join('\n');
        }
    }
];

// Code Snippets Generator for Multi-languages
function getCodeSnippet(patternId, lang, rows, cols, char) {
    switch(lang) {
        case 'python':
            return getPythonCode(patternId, rows, cols, char);
        case 'javascript':
            return getJSCode(patternId, rows, cols, char);
        case 'cpp':
            return getCPPCode(patternId, rows, cols, char);
        case 'c':
            return getCCode(patternId, rows, cols, char);
        case 'java':
            return getJavaCode(patternId, rows, cols, char);
        default:
            return "// Code snippet not available";
    }
}

function getPythonCode(id, r, c, ch) {
    if (id === 'pyramid') {
        return `rows = ${r}
char = "${ch}"

for i in range(1, rows + 1):
    spaces = " " * (rows - i)
    symbols = char * (2 * i - 1)
    print(spaces + symbols)`;
    } else if (id === 'right-triangle') {
        return `rows = ${r}
char = "${ch}"

for i in range(1, rows + 1):
    print(char * i)`;
    } else if (id === 'diamond') {
        return `rows = ${r}
char = "${ch}"

# Upper Pyramid
for i in range(1, rows + 1):
    print(" " * (rows - i) + char * (2 * i - 1))

# Lower Inverted Pyramid
for i in range(rows - 1, 0, -1):
    print(" " * (rows - i) + char * (2 * i - 1))`;
    } else if (id === 'number-triangle') {
        return `rows = ${r}

for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`;
    } else if (id === 'floyds-triangle') {
        return `rows = ${r}
num = 1

for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()`;
    } else {
        return `# Python implementation for ${id}
rows = ${r}
cols = ${c}
char = "${ch}"

for i in range(1, rows + 1):
    # Logic implementation block
    print(char * i)`;
    }
}

function getJSCode(id, r, c, ch) {
    if (id === 'pyramid') {
        return `let rows = ${r};
let char = "${ch}";

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let symbols = char.repeat(2 * i - 1);
    console.log(spaces + symbols);
}`;
    } else if (id === 'right-triangle') {
        return `let rows = ${r};
let char = "${ch}";

for (let i = 1; i <= rows; i++) {
    console.log(char.repeat(i));
}`;
    } else {
        return `let rows = ${r};
let cols = ${c};
let char = "${ch}";

for (let i = 1; i <= rows; i++) {
    console.log(char.repeat(i));
}`;
    }
}

function getCPPCode(id, r, c, ch) {
    return `#include <iostream>
using namespace std;

int main() {
    int rows = ${r};
    char ch = '${ch[0]}';

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= rows - i; j++) cout << " ";
        for (int k = 1; k <= 2 * i - 1; k++) cout << ch;
        cout << endl;
    }
    return 0;
}`;
}

function getCCode(id, r, c, ch) {
    return `#include <stdio.h>

int main() {
    int rows = ${r};
    char ch = '${ch[0]}';

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= rows - i; j++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("%c", ch);
        printf("\\n");
    }
    return 0;
}`;
}

function getJavaCode(id, r, c, ch) {
    return `public class PatternMaster {
    public static void main(String[] args) {
        int rows = ${r};
        char ch = '${ch[0]}';

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) System.out.print(" ");
            for (int k = 1; k <= 2 * i - 1; k++) System.out.print(ch);
            System.out.println();
        }
    }
}`;
}

// ==================== APPLICATION STATE & CONTROLLER ====================
let currentPatternId = "pyramid";
let favorites = JSON.parse(localStorage.getItem('pattern_master_favs')) || [];

document.addEventListener("DOMContentLoaded", () => {
    initDropdown();
    renderCatalog('all');
    renderFavorites();
    updateCounter();
    triggerGeneration();

    // Setup Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    themeBtn.addEventListener('click', () => {
        let currentTheme = htmlEl.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('show-mobile');
    });
});

// Navigation Switcher
function switchTab(tabName) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active-section'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    if (tabName === 'home') {
        document.getElementById('home-section').classList.add('active-section');
        document.querySelector('.nav-link[onclick*="home"]').classList.add('active');
    } else if (tabName === 'generator') {
        document.getElementById('generator-section').classList.add('active-section');
        document.querySelector('.nav-link[onclick*="generator"]').classList.add('active');
    } else if (tabName === 'patterns') {
        document.getElementById('patterns-section').classList.add('active-section');
        document.querySelector('.nav-link[onclick*="patterns"]').classList.add('active');
        renderCatalog('all');
    } else if (tabName === 'favorites') {
        document.getElementById('favorites-section').classList.add('active-section');
        document.querySelector('.nav-link[onclick*="favorites"]').classList.add('active');
        renderFavorites();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterAndGo(category) {
    switchTab('patterns');
    filterCatalog(category);
}

// Initialize Pattern Dropdown
function initDropdown(filteredList = patternDatabase) {
    const select = document.getElementById('pattern-select');
    select.innerHTML = '';
    filteredList.forEach(p => {
        let opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        if (p.id === currentPatternId) opt.selected = true;
        select.appendChild(opt);
    });
    document.getElementById('total-patterns-count').textContent = patternDatabase.length + "+";
    document.getElementById('cnt-total').textContent = patternDatabase.length;
}

// Search functionality
function handleSearch() {
    let query = document.getElementById('pattern-search').value.toLowerCase();
    let filtered = patternDatabase.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );
    if (filtered.length > 0) {
        currentPatternId = filtered[0].id;
        initDropdown(filtered);
        triggerGeneration();
    }
}

// On Pattern Change in Dropdown
function onPatternChange() {
    currentPatternId = document.getElementById('pattern-select').value;
    triggerGeneration();
}

// Generate Pattern and Update UI
function triggerGeneration() {
    let pattern = patternDatabase.find(p => p.id === currentPatternId);
    if (!pattern) return;

    let rowInput = document.getElementById('row-input');
    let colInput = document.getElementById('col-input');
    let charInput = document.getElementById('char-input');
    let errorAlert = document.getElementById('error-alert');
    let errorMsg = document.getElementById('error-msg');

    let rows = parseInt(rowInput.value);
    let cols = parseInt(colInput.value);
    let char = charInput.value || "*";

    // Validation
    if (isNaN(rows) || rows < 1 || rows > 50) {
        errorAlert.classList.remove('hidden');
        errorMsg.textContent = "Please enter valid rows between 1 and 50.";
        return;
    } else {
        errorAlert.classList.add('hidden');
    }

    // Toggle Column Input visibility
    let colGroup = document.getElementById('col-group');
    if (pattern.requiresCols) {
        colGroup.classList.remove('hidden');
    } else {
        colGroup.classList.add('hidden');
    }

    // Generate output
    let resultText = pattern.generator(rows, cols, char);
    document.getElementById('pattern-output-box').textContent = resultText;
    document.getElementById('current-pattern-title').textContent = pattern.name;
    
    let diffBadge = document.getElementById('current-diff');
    diffBadge.textContent = pattern.difficulty;
    diffBadge.className = "difficulty-badge " + pattern.difficulty.toLowerCase();

    // Update explanation box
    document.getElementById('exp-name').textContent = pattern.name;
    document.getElementById('exp-desc').textContent = pattern.description;
    document.getElementById('exp-logic').textContent = pattern.logic;
    document.getElementById('exp-time').textContent = pattern.timeComplexity;
    document.getElementById('exp-space').textContent = pattern.spaceComplexity;

    // Update Counters
    document.getElementById('cnt-rows').textContent = rows;
    document.getElementById('cnt-chars').textContent = resultText.replace(/\s/g, '').length;

    // Update code snippet
    updateCodeDisplay();
    updateFavoriteIconState();
}

function updateCodeDisplay() {
    let pattern = patternDatabase.find(p => p.id === currentPatternId);
    let lang = document.getElementById('code-language').value;
    let rows = parseInt(document.getElementById('row-input').value) || 5;
    let cols = parseInt(document.getElementById('col-input').value) || 5;
    let char = document.getElementById('char-input').value || "*";

    let code = getCodeSnippet(pattern.id, lang, rows, cols, char);
    document.getElementById('code-snippet-box').textContent = code;
}

function resetGenerator() {
    document.getElementById('row-input').value = 5;
    document.getElementById('col-input').value = 5;
    document.getElementById('char-input').value = "*";
    document.getElementById('pattern-search').value = "";
    initDropdown();
    currentPatternId = "pyramid";
    document.getElementById('pattern-select').value = "pyramid";
    triggerGeneration();
    showToast("Generator reset to default!");
}

// Logic Tabs Switcher
function switchLogicTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    if (tab === 'code') {
        document.querySelector('.tab-btn[onclick*="code"]').classList.add('active');
        document.getElementById('tab-content-code').classList.add('active');
        document.getElementById('code-lang-selector').classList.remove('hidden');
    } else {
        document.querySelector('.tab-btn[onclick*="explanation"]').classList.add('active');
        document.getElementById('tab-content-explanation').classList.add('active');
        document.getElementById('code-lang-selector').classList.add('hidden');
    }
}

// Catalog Rendering
function renderCatalog(category) {
    const grid = document.getElementById('patterns-catalog-grid');
    grid.innerHTML = '';

    let list = category === 'all' ? patternDatabase : patternDatabase.filter(p => p.category === category);

    list.forEach(p => {
        let card = document.createElement('div');
        card.className = 'pattern-card-item glass-card';
        card.innerHTML = `
            <div>
                <div class="pcard-top">
                    <h4>${p.name}</h4>
                    <span class="${p.difficulty.toLowerCase()}">${p.difficulty}</span>
                </div>
                <p class="pcard-desc">${p.description}</p>
            </div>
            <div class="pcard-footer">
                <span>Category: ${p.category.toUpperCase()}</span>
                <button onclick="selectAndGenerate('${p.id}')">Generate <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Update active filter chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.textContent.toLowerCase() === category || (category === 'all' && chip.textContent === 'All')) {
            chip.classList.add('active');
        }
    });
}

function filterCatalog(cat) {
    renderCatalog(cat);
}

function selectAndGenerate(id) {
    currentPatternId = id;
    document.getElementById('pattern-select').value = id;
    switchTab('generator');
    triggerGeneration();
}

// Favorites Management
function toggleCurrentFavorite() {
    let index = favorites.indexOf(currentPatternId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Removed from favorites!");
    } else {
        favorites.push(currentPatternId);
        showToast("Added to favorites! ⭐");
    }
    localStorage.setItem('pattern_master_favs', JSON.stringify(favorites));
    updateFavoriteIconState();
    renderFavorites();
}

function updateFavoriteIconState() {
    let favIcon = document.getElementById('fav-icon');
    if (favorites.includes(currentPatternId)) {
        favIcon.className = "fa-solid fa-star";
        favIcon.style.color = "#f59e0b";
    } else {
        favIcon.className = "fa-regular fa-star";
        favIcon.style.color = "inherit";
    }
}

function renderFavorites() {
    const grid = document.getElementById('favorites-catalog-grid');
    const noFavMsg = document.getElementById('no-favorites');
    grid.innerHTML = '';

    let favList = patternDatabase.filter(p => favorites.includes(p.id));

    if (favList.length === 0) {
        noFavMsg.classList.remove('hidden');
        return;
    } else {
        noFavMsg.classList.add('hidden');
    }

    favList.forEach(p => {
        let card = document.createElement('div');
        card.className = 'pattern-card-item glass-card';
        card.innerHTML = `
            <div>
                <div class="pcard-top">
                    <h4>${p.name}</h4>
                    <span class="${p.difficulty.toLowerCase()}">${p.difficulty}</span>
                </div>
                <p class="pcard-desc">${p.description}</p>
            </div>
            <div class="pcard-footer">
                <span>⭐ Starred</span>
                <button onclick="selectAndGenerate('${p.id}')">Generate <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateCounter() {
    document.getElementById('total-patterns-count').textContent = patternDatabase.length + "+";
}

// Copy & Download Utilities
function copyPatternOutput() {
    let text = document.getElementById('pattern-output-box').textContent;
    navigator.clipboard.writeText(text);
    showToast("Pattern copied to clipboard!");
}

function copyCodeSnippet() {
    let text = document.getElementById('code-snippet-box').textContent;
    navigator.clipboard.writeText(text);
    showToast("Code snippet copied successfully!");
}

function copyHeroSnippet() {
    navigator.clipboard.writeText(`let rows = 5;\nfor (let i = 1; i <= rows; i++) {\n    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));\n}`);
    showToast("Code copied successfully!");
}

function downloadPatternTXT() {
    let text = document.getElementById('pattern-output-box').textContent;
    let pattern = patternDatabase.find(p => p.id === currentPatternId);
    downloadFile(`${pattern.id}-pattern.txt`, text);
}

function downloadCodeTXT() {
    let text = document.getElementById('code-snippet-box').textContent;
    let lang = document.getElementById('code-language').value;
    let pattern = patternDatabase.find(p => p.id === currentPatternId);
    let ext = lang === 'python' ? 'py' : lang === 'javascript' ? 'js' : lang === 'cpp' ? 'cpp' : lang === 'c' ? 'c' : 'java';
    downloadFile(`${pattern.id}-solution.${ext}`, text);
}

function downloadFile(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Downloaded ${filename}!`);
}

function showToast(msg) {
    let toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}