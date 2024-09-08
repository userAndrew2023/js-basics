const crypto = (string) => {
    let arr = string.split("");
    let middleIndex = Math.floor(arr.length / 2);

    for (let i = 0; i < middleIndex; i++) {
        [arr[i], arr[middleIndex + i]] = [arr[middleIndex + i], arr[i]];
    }

    return arr.reverse().join("");
}

const check = (encrypted, original) => crypto(encrypted) === original;