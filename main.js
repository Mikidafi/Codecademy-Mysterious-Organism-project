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
// Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

// The first parameter is number (no two organisms should have the same number).
// The second parameter is an array of 15 DNA bases.
// pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

// You’ll also add more methods to this returned object in the later steps.

// Factory function
function pAequorFactor(number, arr) {
  return {
    specimenNum: number,
    dna: arr,
  };
}
console.log(pAequorFactor(4, mockUpStrand()));
