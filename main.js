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
  };
}

const ex1 = pAequorFactor(1, mockUpStrand());
console.log(ex1);
ex1.mutate();
console.log(ex1);
const ex2 = pAequorFactor(2, mockUpStrand());
const ex3 = pAequorFactor(3, mockUpStrand());
