function validateFormDna() {
    if (document.getElementById('dna').validity.patternMismatch) {
      document.getElementById('dna').setCustomValidity("G, C, T, A 문자만 사용");
    } else {
      document.getElementById('dna').setCustomValidity("");
      dnaToRna();
    }
}

function validateFormRna() {
    if (document.getElementById('rna').validity.patternMismatch) {
      document.getElementById('rna').setCustomValidity("C, G, A, U 문자만 사용");
    } else {
      document.getElementById('rna').setCustomValidity("");
      rnaToDna();
    }
}

  function dnaToRna () {
    let str = document.getElementById('dna').value;
    str = str.toUpperCase();
    const chars = {'G':'C','C':'G','T':'A','A':'U'};
    rna = str.replace(/[GCTA]/g, m => chars[m]);
    document.getElementById('resultDna').innerHTML = `${rna}`;
    }

  function rnaToDna () {
    let str = document.getElementById('rna').value;
    str = str.toUpperCase();
    const chars = {'C':'G','G':'C','A':'T','U':'A'};
    dna = str.replace(/[CGAU]/g, m => chars[m]);
    document.getElementById('resultRna').innerHTML = `${dna}`;
  }
