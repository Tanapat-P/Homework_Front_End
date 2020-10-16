//Homework Function No.1

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        ans = ans + "*";
    }
    return ans;
}

// No.2

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans = ans + "*";
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.3

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans = ans + j;
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.4

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans = ans + i;
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.5

function draw(n) {
    ans = "";
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= n; j++) {
            ans = ans + i;
        }
        ans = ans + "</br>";
    }
    return ans;
}


// No.6
function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans += j + (i - 1) * n;
        }
        ans = ans + "</br>";
    }
    return ans;
}

// No.7
function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans += (n ** 2) - (n * (i - 1)) - j + 1;
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.8

function draw(n) {
    ans = "";
    for (i = 0; i < n; i++) {
        ans = ans + (2 * i);
        ans = ans + "/br";
    }

    return ans;
}

//No.9

function draw(n) {
    ans = "";
    for (i = 1; i <= n; i++) {
        ans = ans + (2 * i);
        ans = ans + "<br>";
    }
    return ans;
}

//No.10

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            ans = ans + (i * j);
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.11

function draw(int_n) {
    ans = "";
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++) {
            if (j !== i) {
                ans = ans + "*";
            } else {
                ans = ans + "-";
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.12

function draw(n) {
    ans = "";
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= n; j++) {
            if (i !== j) {
                ans = ans + "*";
            } else {
                ans = ans + "-";
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}


//No.13

function draw(n) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                ans = ans + "*";
            } else {
                ans = ans + "-";
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}

//No.14

function draw(n) {
    ans = "";
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                ans = ans + "*";
            } else {
                ans = ans + "-";
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}


//No.15

function drawStarUp(n, skip, char1, char2) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        if (i > skip) {
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    
                    ans += char1;

                } else {

                    ans += char2;

                }
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}

function drawStarDown(n, skip, char1, char2) {
    ans = "";
    for (let i = n; i > 0; i--) {
        if (n - i >= skip) {
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    
                        ans += char1;
                    
                } else {
                  
                        ans += char2;
                    
                }
            }
            ans = ans + "</br>";
        }
    }
    return ans;

}

function draw(n) {
   ans = "";
    ans += drawStarUp(n, 0, "*", "-");
    ans += drawStarDown(n, 1, "*", "-");
    return ans;
}



//no.16

function drawStarUp(n, skip, char1, char2) {
    ans = "";
    for (let i = 1; i <= n; i++) {
        if (i > skip) {
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        ans += i;
                    } else if (char1 === "j") {
                        ans += j;
                    } else {
                        ans += char1;
                    }
                } else {
                    if (char2 === "i") {
                        ans += i;
                    } else if (char2 === "j") {
                        ans += j;
                    } else {
                        ans += char2;
                    }
                }
            }
        }
        ans = ans + "</br>";
    }
    return ans;
}

function drawStarDown(n, skip, char1, char2) {
    ans = "";
    for (let i = n; i > 0; i--) {
        if (n - i >= skip) {
            for (let j = 1; j <= n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        ans += i;
                    } else if (char1 === "j") {
                        ans += j;
                    } else {
                        ans += char1;
                    }
                } else {
                    if (char2 === "i") {
                        ans += i;
                    } else if (char2 === "j") {
                        ans += j;
                    } else {
                        ans += char2;
                    }
                }
            }
            ans = ans + "</br>";
        }
    }
    return ans;

}


function draw(n) {
    ans = "";
    ans += drawStarUp(n, 0, "i", "-");
    ans += drawStarDown(n, 1, "i", "-");
    return ans;
}






//no.17

function drawDashDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (int_n - i >= j) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "</br>";
        }
    }
    return msg;
}




function draw(int_n) {
    msg = "";
    msg += drawDashDown(int_n, 0, "-", "*");
    return msg;
}


//no.18
function drawDashUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i - 1) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}

function draw(int_n) {
    msg = "";
    msg += drawDashUp(int_n, 0, "-", "*");
    return msg;
}



//no.19

function drawDashDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (int_n - i >= j) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "</br>";
        }
    }
    return msg;
}

function drawDashUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i - 1) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}


function draw(int_n) {
    msg = "";
    msg += drawDashDown(int_n, 0, "-", "*");
    msg += drawDashUp(int_n, 1, "-", "*");
    return msg;
}

//no.20

function drawDashDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (int_n - i >= j) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}
function drawDashUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i - 1) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}

function countNum() {
    return count++
}


function draw(int_n) {
    count = 1;
    msg = "";
    msg += drawDashDown(int_n, 0, "-", "count");
    msg += drawDashUp(int_n, 1, "-", "count");
    return msg;
}



//no.21

function drawArrowUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= int_n - i || j >= int_n + i) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}


function draw(int_n) {
    msg = "";
    msg += drawArrowUp(int_n, 0, "-", "*");
    return msg;
}





//no.22

function drawArrowDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= i - 1 || j >= 2 * int_n + 1 - i) {
                   
                        msg += char1;
                    
                } else {
                   
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}

function draw(int_n) {
    msg = "";
    msg += drawArrowDown(int_n, 0, "-", "*");
    return msg;
}

//no.23

function drawArrowUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= int_n - i || j >= int_n + i) {
                    
                        msg += char1;
                    
                } else {
                    
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}

function drawArrowDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= i - 1 || j >= 2 * int_n + 1 - i) {
                   
                        msg += char1;
                    
                } else {
                   
                        msg += char2;
                    
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}


function draw(int_n) {
    msg = "";
    msg += drawArrowUp(int_n, 0, "-", "*");
    msg += drawArrowDown(int_n, 1, "-", "*");
    return msg;
}

//no.24

function drawArrowUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= int_n - i || j >= int_n + i) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}
function drawArrowDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= i - 1 || j >= 2 * int_n + 1 - i) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "<br>";
        }
    }
    return msg;
}


function countNum() {
    return count++
}



function draw(int_n) {
    count = 1;
    msg = "";
    msg += drawArrowUp(int_n, 0, "-", "count");
    msg += drawArrowDown(int_n, 1, "-", "count");
    return msg;
}


