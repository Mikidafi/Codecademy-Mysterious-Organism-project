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

// creates random nnumber for use in specimenNum
const randomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

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
      // compares 2 dnas and logs cca symbiosis

      let toCompare = pAequor.dna;
      let dnaThisObj = this.dna;
      let inCommon = [];
      for (let i = 0; i < toCompare.length; i++) {
        for (let j = 0; j < dnaThisObj.length; j++) {
          if (toCompare[i] === dnaThisObj[j] && i === j) {
            inCommon.push(toCompare[i]);
          }
        }
      }
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
      let cees = [];
      let gees = [];
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

let instancies = []; // variable with created 30 objects
let toStudyInstancies = []; // selected objects with willLikelySurvive method returned true

function create30Instancies() {
  for (let i = 0; i < 30; i++) {
    instancies.push(pAequorFactor(randomNumber(), mockUpStrand()));
  }
  for (item in instancies) {
    if (instancies[item].willLikelySurvive() === true) {
      toStudyInstancies.push(instancies[item]);
    }
  }
}

create30Instancies();
console.log(toStudyInstancies);
