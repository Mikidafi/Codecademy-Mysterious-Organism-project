// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
let cees = [];
let gees = [];

// Factory function
function pAequorFactor(number, arr) {
  return {
    specimenNum: number,
    dna: arr,
    mutate() {
      // picks random letter and changes it for another and making sure it wont be the same
      let randomIndex = [Math.floor(Math.random() * 15)];
      let letterOnIndex = this.dna[randomIndex];
      let randomBase = returnRandBase();
      if (letterOnIndex === "A" && randomBase === "A") {
        const dnaBases = ["T", "C", "G"];
        randomBase = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (letterOnIndex === "T" && randomBase === "T") {
        const dnaBases = ["A", "C", "G"];
        randomBase = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (letterOnIndex === "C" && randomBase === "C") {
        const dnaBases = ["A", "T", "G"];
        randomBase = dnaBases[Math.floor(Math.random() * 3)];
      }
      if (letterOnIndex === "G" && randomBase === "G") {
        const dnaBases = ["A", "T", "C"];
        randomBase = dnaBases[Math.floor(Math.random() * 3)];
      }

      this.dna.splice(randomIndex, 1, randomBase);
    },
    compareDNA(pAequor) {
      let toCompare = pAequor.dna;
      let dnaThisObj = this.dna;
      let inCommon = [];
      for (let i = 0; i < toCompare.length; i++) {
        // console.log(`${toCompare[i]} toto`);
        for (let j = 0; j < dnaThisObj.length; j++) {
          if (toCompare[i] === dnaThisObj[j] && i === j) {
            // console.log(toCompare[i]);
            inCommon.push(toCompare[i]);
          }
        }
      }
      console.log(inCommon);
      if (inCommon.length === 0) {
        console.log(`${inCommon}: 0 % symbiosis`);
      }
      if (inCommon.length <= 3 && inCommon.length > 0) {
        console.log(`${inCommon}: cca 25 % symbiosis`);
      }
      if (inCommon.length <= 7 && inCommon.length > 3) {
        console.log(`${inCommon}: cca 50 % symbiosis`);
      }
      if (inCommon.length <= 10 && inCommon.length > 7) {
        console.log(`${inCommon}: cca 75 % symbiosis`);
      }
      if (inCommon.length === 14) {
        console.log(`${inCommon}: 100 % symbiosis`);
      }
    },
    willLikelySurvive() {
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "G") {
          gees.push(this.dna[i]);
        }
        if (this.dna[i] === "C") {
          cees.push(this.dna[i]);
        }
      }
      if (cees.length > 5 || gees.length > 5) {
        return true;
      } else {
        return false;
      }
    },
  };
}

const ex1 = pAequorFactor(1, mockUpStrand());
const ex2 = pAequorFactor(2, mockUpStrand());
const ex3 = pAequorFactor(3, mockUpStrand());
let instancies = [];
function create30Instancies() {
  for (let i = 0; i <= 30; i++) {
    instancies.push(pAequorFactor(1, mockUpStrand()));
  }
}
create30Instancies();
console.log(instancies);
