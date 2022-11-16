const btnVoiceA = document.getElementById("btnvoicea");
const btnVoiceB = document.getElementById("btnvoiceb");
const btnVoiceC = document.getElementById("btnvoicec");
const btnVoiceD = document.getElementById("btnvoiced");
const btnVoiceE = document.getElementById("btnvoicee");
const btnVoiceF = document.getElementById("btnvoicef");
const btnVoiceG = document.getElementById("btnvoiceg");

const btnDrumA = document.getElementById("btndruma");
const btnDrumB = document.getElementById("btndrumb");
const btnDrumC = document.getElementById("btndrumc");
const btnDrumD = document.getElementById("btndrumd");
const btnDrumE = document.getElementById("btndrume");
const btnDrumF = document.getElementById("btndrumf");
const btnDrumG = document.getElementById("btndrumg");
const btnDrumH = document.getElementById("btndrumh");
const btnDrumI = document.getElementById("btndrumi");

const btnSynthA = document.getElementById("btnsyna");
const btnSynthB = document.getElementById("btnsynb");
const btnSynthC = document.getElementById("btnsync");
const btnSynthD = document.getElementById("btnsynd");
const btnSynthE = document.getElementById("btnsyne");
const btnSynthF = document.getElementById("btnsynf");
const btnSynthG = document.getElementById("btnsyng");
const btnSynthH = document.getElementById("btnsynh");
const btnSynthI = document.getElementById("btnsyni");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const dirVoice = "miku/";
const playlistVoice = ["a", "b", "c", "d", "e", "f", "g"];
const extVoice = ".wav";

const dirDrum = "beat/";
const playlistDrum = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const extDrum = ".wav";

const dirSynth = "synth/";
const playlistSynth = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const extSynth = ".wav";

btnVoiceA.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVA = new Audio();
  audioVA.src = dirVoice + playlistVoice[0] + extVoice;
  audioVA.loop = false;
  audioVA.play();
});

btnVoiceB.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVB = new Audio();
  audioVB.src = dirVoice + playlistVoice[1] + extVoice;
  audioVB.loop = false;
  audioVB.play();
});

btnVoiceC.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVC = new Audio();
  audioVC.src = dirVoice + playlistVoice[2] + extVoice;
  audioVC.loop = false;
  audioVC.play();
});

btnVoiceD.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVD = new Audio();
  audioVD.src = dirVoice + playlistVoice[3] + extVoice;
  audioVD.loop = false;
  audioVD.play();
});

btnVoiceE.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVE = new Audio();
  audioVE.src = dirVoice + playlistVoice[4] + extVoice;
  audioVE.loop = false;
  audioVE.play();
});

btnVoiceF.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVF = new Audio();
  audioVF.src = dirVoice + playlistVoice[5] + extVoice;
  audioVF.loop = false;
  audioVF.play();
});

btnVoiceG.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioVG = new Audio();
  audioVG.src = dirVoice + playlistVoice[6] + extVoice;
  audioVG.loop = false;
  audioVG.play();
});

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyZ") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVA = new Audio();
    audioVA.src = dirVoice + playlistVoice[0] + extVoice;
    audioVA.loop = false;
    audioVA.play();
  } else if (event.code == "KeyX") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVB = new Audio();
    audioVB.src = dirVoice + playlistVoice[1] + extVoice;
    audioVB.loop = false;
    audioVB.play();
  } else if (event.code == "KeyC") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVC = new Audio();
    audioVC.src = dirVoice + playlistVoice[2] + extVoice;
    audioVC.loop = false;
    audioVC.play();
  } else if (event.code == "KeyV") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVD = new Audio();
    audioVD.src = dirVoice + playlistVoice[3] + extVoice;
    audioVD.loop = false;
    audioVD.play();
  } else if (event.code == "KeyB") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVE = new Audio();
    audioVE.src = dirVoice + playlistVoice[4] + extVoice;
    audioVE.loop = false;
    audioVE.play();
  } else if (event.code == "KeyN") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVF = new Audio();
    audioVF.src = dirVoice + playlistVoice[5] + extVoice;
    audioVF.loop = false;
    audioVF.play();
  } else if (event.code == "KeyM") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioVG = new Audio();
    audioVG.src = dirVoice + playlistVoice[6] + extVoice;
    audioVG.loop = false;
    audioVG.play();
  }
});

//beats

btnDrumA.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDA = new Audio();
  audioDA.src = dirDrum + playlistDrum[0] + extDrum;
  audioDA.loop = false;
  audioDA.play();
});

btnDrumB.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDB = new Audio();
  audioDB.src = dirDrum + playlistDrum[1] + extDrum;
  audioDB.loop = false;
  audioDB.play();
});

btnDrumC.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDC = new Audio();
  audioDC.src = dirDrum + playlistDrum[2] + extDrum;
  audioDC.loop = false;
  audioDC.play();
});

btnDrumD.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDD = new Audio();
  audioDD.src = dirDrum + playlistDrum[3] + extDrum;
  audioDD.loop = false;
  audioDD.play();
});

btnDrumE.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDE = new Audio();
  audioDE.src = dirDrum + playlistDrum[4] + extDrum;
  audioDE.loop = false;
  audioDE.play();
});

btnDrumF.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDF = new Audio();
  audioDF.src = dirDrum + playlistDrum[5] + extDrum;
  audioDF.loop = false;
  audioDF.play();
});

btnDrumG.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDG = new Audio();
  audioDG.src = dirDrum + playlistDrum[6] + extDrum;
  audioDG.loop = false;
  audioDG.play();
});

btnDrumH.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDH = new Audio();
  audioDH.src = dirDrum + playlistDrum[7] + extDrum;
  audioDH.loop = false;
  audioDH.play();
});

btnDrumI.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioDI = new Audio();
  audioDI.src = dirDrum + playlistDrum[8] + extDrum;
  audioDI.loop = false;
  audioDI.play();
});

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyA") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDA = new Audio();
    audioDA.src = dirDrum + playlistDrum[0] + extDrum;
    audioDA.loop = false;
    audioDA.play();
  } else if (event.code == "KeyS") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDB = new Audio();
    audioDB.src = dirDrum + playlistDrum[1] + extDrum;
    audioDB.loop = false;
    audioDB.play();
  } else if (event.code == "KeyD") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDC = new Audio();
    audioDC.src = dirDrum + playlistDrum[2] + extDrum;
    audioDC.loop = false;
    audioDC.play();
  } else if (event.code == "KeyF") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDD = new Audio();
    audioDD.src = dirDrum + playlistDrum[3] + extDrum;
    audioDD.loop = false;
    audioDD.play();
  } else if (event.code == "KeyG") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDE = new Audio();
    audioDE.src = dirDrum + playlistDrum[4] + extDrum;
    audioDE.loop = false;
    audioDE.play();
  } else if (event.code == "KeyH") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDF = new Audio();
    audioDF.src = dirDrum + playlistDrum[5] + extDrum;
    audioDF.loop = false;
    audioDF.play();
  } else if (event.code == "KeyJ") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDG = new Audio();
    audioDG.src = dirDrum + playlistDrum[6] + extDrum;
    audioDG.loop = false;
    audioDG.play();
  } else if (event.code == "KeyK") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDH = new Audio();
    audioDH.src = dirDrum + playlistDrum[7] + extDrum;
    audioDH.loop = false;
    audioDH.play();
  } else if (event.code == "KeyL") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioDI = new Audio();
    audioDI.src = dirDrum + playlistDrum[8] + extDrum;
    audioDI.loop = false;
    audioDI.play();
  }
});

//synth

btnSynthA.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSA = new Audio();
  audioSA.src = dirSynth + playlistSynth[0] + extSynth;
  audioSA.loop = false;
  audioSA.play();
});

btnSynthB.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSB = new Audio();
  audioSB.src = dirSynth + playlistSynth[1] + extSynth;
  audioSB.loop = false;
  audioSB.play();
});

btnSynthC.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSC = new Audio();
  audioSC.src = dirSynth + playlistSynth[2] + extSynth;
  audioSC.loop = false;
  audioSC.play();
});

btnSynthD.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSD = new Audio();
  audioSD.src = dirSynth + playlistSynth[3] + extSynth;
  audioSD.loop = false;
  audioSD.play();
});

btnSynthE.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSE = new Audio();
  audioSE.src = dirSynth + playlistSynth[4] + extSynth;
  audioSE.loop = false;
  audioSE.play();
});

btnSynthF.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSF = new Audio();
  audioSF.src = dirSynth + playlistSynth[5] + extSynth;
  audioSF.loop = false;
  audioSF.play();
});

btnSynthG.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSG = new Audio();
  audioSG.src = dirSynth + playlistSynth[6] + extSynth;
  audioSG.loop = false;
  audioSG.play();
});

btnSynthH.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSH = new Audio();
  audioSH.src = dirSynth + playlistSynth[7] + extSynth;
  audioSH.loop = false;
  audioSH.play();
});

btnSynthI.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioSI = new Audio();
  audioSI.src = dirSynth + playlistSynth[8] + extSynth;
  audioSI.loop = false;
  audioSI.play();
});

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSA = new Audio();
    audioSA.src = dirSynth + playlistSynth[0] + extSynth;
    audioSA.loop = false;
    audioSA.play();
  } else if (event.code == "KeyW") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSB = new Audio();
    audioSB.src = dirSynth + playlistSynth[1] + extSynth;
    audioSB.loop = false;
    audioSB.play();
  } else if (event.code == "KeyE") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSC = new Audio();
    audioSC.src = dirSynth + playlistSynth[2] + extSynth;
    audioSC.loop = false;
    audioSC.play();
  } else if (event.code == "KeyR") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSD = new Audio();
    audioSD.src = dirSynth + playlistSynth[3] + extSynth;
    audioSD.loop = false;
    audioSD.play();
  } else if (event.code == "KeyT") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSE = new Audio();
    audioSE.src = dirSynth + playlistSynth[4] + extSynth;
    audioSE.loop = false;
    audioSE.play();
  } else if (event.code == "KeyY") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSF = new Audio();
    audioSF.src = dirSynth + playlistSynth[5] + extSynth;
    audioSF.loop = false;
    audioSF.play();
  } else if (event.code == "KeyU") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSG = new Audio();
    audioSG.src = dirSynth + playlistSynth[6] + extSynth;
    audioSG.loop = false;
    audioSG.play();
  } else if (event.code == "KeyI") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSH = new Audio();
    audioSH.src = dirSynth + playlistSynth[7] + extSynth;
    audioSH.loop = false;
    audioSH.play();
  } else if (event.code == "KeyO") {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    audioSI = new Audio();
    audioSI.src = dirSynth + playlistSynth[8] + extSynth;
    audioSI.loop = false;
    audioSI.play();
  }
});
