let table = document.querySelector('.demotable');
// let arrPraz=[1,2];
document.querySelector('.summaryTab').addEventListener('click', function () {
//     prazdn(arrPraz[0], arrPraz[1]);
   countHour();
    countWord();
    inWork1();
    inWork2();
    inWork3();
    inOTP1();
    inOTP2();
    inOTP3();
    inBOL1();
    inBOL2();
    inBOL3();
    inPROCH1();
    inPROCH2();
    inPROCH3();
    inRAZR1();
    inRAZR2();
    inRAZR3();
    inPROG1();
    inPROG2();
    inPROG3();
    inVIH1();
    inVIH2();
    inVIH3();
    inHOUER1();
    inHOUER2();
    inHOUER3();
    inHOURRAB1();
    inHOURRAB2();
    inHOURRAB3();
    inHOURITR1();
    inHOURITR2();
    inHOURITR3();
    inHOURSPEC1();
    inHOURSPEC2();
    inHOURSPEC3();

    inHOURSUTRAB();
    inHOURSUTITR();
    inHOURSUTSPEC();

    inOTPRAB1();
    inOTPRAB2();
    inOTPRAB3();
    inOTPITR1();
    inOTPITR2();
    inOTPITR3();
    inOTPSPEC1();
    inOTPSPEC2();
    inOTPSPEC3();
    inWORKRAB1();
    inWORKRAB2();
    inWORKRAB3();
    inWORKITR1();
    inWORKITR2();
    inWORKITR3();
    inWORKSPEC1();
    inWORKSPEC2();
    inWORKSPEC3();
    inBOLRAB1();
    inBOLRAB2();
    inBOLRAB3();
    inBOLITR1();
    inBOLITR2();
    inBOLITR3();
    inBOLSPEC1();
    inBOLSPEC2();
    inBOLSPEC3();
    inPROCHRAB1();
    inPROCHRAB2();
    inPROCHRAB3();
    inPROCHITR1();
    inPROCHITR2();
    inPROCHITR3();
    inPROCHSPEC1();
    inPROCHSPEC2();
    inPROCHSPEC3();
    inRAZRRAB1();
    inRAZRRAB2();
    inRAZRRAB3();
    inRAZRITR1();
    inRAZRITR2();
    inRAZRITR3();
    inRAZRSPEC1();
    inRAZRSPEC2();
    inRAZRSPEC3();
    inPROGRAB1();
    inPROGRAB2();
    inPROGRAB3();
    inPROGITR1();
    inPROGITR2();
    inPROGITR3();
    inPROGSPEC1();
    inPROGSPEC2();
    inPROGSPEC3();
    inVIHRAB1();
    inVIHRAB2();
    inVIHRAB3();
    inVIHITR1();
    inVIHITR2();
    inVIHITR3();
    inVIHSPEC1();
    inVIHSPEC2();
    inVIHSPEC3();
    inItogTabInWorkRAB1();
    inItogTabInWorkRAB2();
    inItogTabInWorkRAB3();
    inItogTabInWorkRAB();
    inItogTabInWorkITR1();
    inItogTabInWorkITR2();
    inItogTabInWorkITR3();
    inItogTabInWorkITR();
    inItogTabInWorkSPEC1();
    inItogTabInWorkSPEC2();
    inItogTabInWorkSPEC3();
    inItogTabInWorkSPEC();

    inItogTabInOTPRAB1();
    inItogTabInOTPRAB2();
    inItogTabInOTPRAB3();
    inItogTabInOTPRAB();
    inItogTabInOTPITR1();
    inItogTabInOTPITR2();
    inItogTabInOTPITR3();
    inItogTabInOTPITR();
    inItogTabInOTPSPEC1();
    inItogTabInOTPSPEC2();
    inItogTabInOTPSPEC3();
    inItogTabInOTPSPEC();

    inItogTabInBOLRAB1();
    inItogTabInBOLRAB2();
    inItogTabInBOLRAB3();
    inItogTabInBOLRAB();
    inItogTabInBOLITR1();
    inItogTabInBOLITR2();
    inItogTabInBOLITR3();
    inItogTabInBOLITR();
    inItogTabInBOLSPEC1();
    inItogTabInBOLSPEC2();
    inItogTabInBOLSPEC3();
    inItogTabInBOLSPEC();

    inItogTabInPROCHRAB1();
    inItogTabInPROCHRAB2();
    inItogTabInPROCHRAB3();
    inItogTabInPROCHRAB();
    inItogTabInPROCHITR1();
    inItogTabInPROCHITR2();
    inItogTabInPROCHITR3();
    inItogTabInPROCHITR();
    inItogTabInPROCHSPEC1();
    inItogTabInPROCHSPEC2();
    inItogTabInPROCHSPEC3();
    inItogTabInPROCHSPEC();

    inItogTabInRAZRRAB1();
    inItogTabInRAZRRAB2();
    inItogTabInRAZRRAB3();
    inItogTabInRAZRRAB();
    inItogTabInRAZRITR1();
    inItogTabInRAZRITR2();
    inItogTabInRAZRITR3();
    inItogTabInRAZRITR();
    inItogTabInRAZRSPEC1();
    inItogTabInRAZRSPEC2();
    inItogTabInRAZRSPEC3();
    inItogTabInRAZRSPEC();

    inItogTabInPROGRAB1();
    inItogTabInPROGRAB2();
    inItogTabInPROGRAB3();
    inItogTabInPROGRAB();
    inItogTabInPROGITR1();
    inItogTabInPROGITR2();
    inItogTabInPROGITR3();
    inItogTabInPROGITR();
    inItogTabInPROGSPEC1();
    inItogTabInPROGSPEC2();
    inItogTabInPROGSPEC3();
    inItogTabInPROGSPEC();

    inItogTabInVIHRAB1();
    inItogTabInVIHRAB2();
    inItogTabInVIHRAB3();
    inItogTabInVIHRAB();
    inItogTabInVIHITR1();
    inItogTabInVIHITR2();
    inItogTabInVIHITR3();
    inItogTabInVIHITR();
    inItogTabInVIHSPEC1();
    inItogTabInVIHSPEC2();
    inItogTabInVIHSPEC3();
    inItogTabInVIHSPEC();

    inItogTabInHOUR8RAB1();
    inItogTabInHOUR8RAB2();
    inItogTabInHOUR8RAB3();
    inItogTabInHOUR8RAB();
    inItogTabInHOUR8ITR1();
    inItogTabInHOUR8ITR2();
    inItogTabInHOUR8ITR3();
    inItogTabInHOUR8ITR();
    inItogTabInHOUR8SPEC1();
    inItogTabInHOUR8SPEC2();
    inItogTabInHOUR8SPEC3();
    inItogTabInHOUR8SPEC();

    inItogTabInHOUR7RAB1();
    inItogTabInHOUR7RAB2();
    inItogTabInHOUR7RAB3();
    inItogTabInHOUR7RAB();
    inItogTabInHOUR7ITR1();
    inItogTabInHOUR7ITR2();
    inItogTabInHOUR7ITR3();
    inItogTabInHOUR7ITR();
    inItogTabInHOUR7SPEC1();
    inItogTabInHOUR7SPEC2();
    inItogTabInHOUR7SPEC3();
    inItogTabInHOUR7SPEC();

    inItogTabInHOUR6RAB1();
    inItogTabInHOUR6RAB2();
    inItogTabInHOUR6RAB3();
    inItogTabInHOUR6RAB();
    inItogTabInHOUR6ITR1();
    inItogTabInHOUR6ITR2();
    inItogTabInHOUR6ITR3();
    inItogTabInHOUR6ITR();
    inItogTabInHOUR6SPEC1();
    inItogTabInHOUR6SPEC2();
    inItogTabInHOUR6SPEC3();
    inItogTabInHOUR6SPEC();

    inItogTabInHOUR4RAB1();
    inItogTabInHOUR4RAB2();
    inItogTabInHOUR4RAB3();
    inItogTabInHOUR4RAB();
    inItogTabInHOUR4ITR1();
    inItogTabInHOUR4ITR2();
    inItogTabInHOUR4ITR3();
    inItogTabInHOUR4ITR();
    inItogTabInHOUR4SPEC1();
    inItogTabInHOUR4SPEC2();
    inItogTabInHOUR4SPEC3();
    inItogTabInHOUR4SPEC();

    inItogTabInHOUR10RAB1();
    inItogTabInHOUR10RAB2();
    inItogTabInHOUR10RAB3();
    inItogTabInHOUR10RAB();
    inItogTabInHOUR10ITR1();
    inItogTabInHOUR10ITR2();
    inItogTabInHOUR10ITR3();
    inItogTabInHOUR10ITR();
    inItogTabInHOUR10SPEC1();
    inItogTabInHOUR10SPEC2();
    inItogTabInHOUR10SPEC3();
    inItogTabInHOUR10SPEC();

    inItogTabInHOUR12RAB1();
    inItogTabInHOUR12RAB2();
    inItogTabInHOUR12RAB3();
    inItogTabInHOUR12RAB();
    inItogTabInHOUR12ITR1();
    inItogTabInHOUR12ITR2();
    inItogTabInHOUR12ITR3();
    inItogTabInHOUR12ITR();
    inItogTabInHOUR12SPEC1();
    inItogTabInHOUR12SPEC2();
    inItogTabInHOUR12SPEC3();
    inItogTabInHOUR12SPEC();

    inItogTabInHOURALL();

    inItogTabInSP();
})
//=======================================================================================?????????????? ??????????????===========================================================================================



let persons = [
    {
        abr: 'Asmakovec',
        firstname: '?????????????????? ????????????????',
        category: 'ITR',
        prof: '????????????',
        sex: 'female',
        mode: '0', decret: true,
    },
   
    {
        abr: 'Barsukova',
        firstname: '?????????????????? ??????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'female',
        mode: '2', decret: false,
    }, {
        abr: 'Basov',
        firstname: '?????????? ??',
        category: 'Wopker',
        prof: '??????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
   
     {
        abr: 'Berlin',
        firstname: '???????????? ????????',
        category: 'Wopker',
        prof: '??????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
    {
        abr: 'Verbitskaya',
        firstname: '???????????????????? ????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'female',
        mode: '4', decret: false,
    },
    {
        abr: 'Vishnikova',
        firstname: '?????????????????? ??????????????',
        category: 'Wopker',
        prof: '??????????????????',
        sex: 'female',
        mode: '0', decret: false,
    },
    {
        abr: 'Gorbachev',
        firstname: '???????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????? ???? ?????????????????????????? ????????????',
        sex: 'male',
        mode: '4', decret: false,
    },
    {
        abr: 'Gorbovec',
        firstname: '???????????????? ????????????????',
        category: 'ITR',
        prof: '???????????? ???? ???????????????????????? ????????????????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
    {
        abr: 'Gorshunova',
        firstname: '?????????????????? ??????????',
        category: 'Wopker',
        prof: '???????????????? ??????',
        sex: 'female',
        mode: '3', decret: false,
    },
    {
        abr: 'Gremenkov',
        firstname: '?????????????????? ????????????',
        category: 'ITR',
        prof: '????????????',
        sex: 'male',
        mode: '3', decret: false,
    },
    {
        abr: 'Grozny',
        firstname: '?????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????? ???? ?????????????????????????? ????????????',
        sex: 'male',
        mode: '3', decret: false,
    },

    {
        abr: 'Gutcev',
        firstname: '?????????? ??????????',
        category: 'Wopker',
        prof: '??????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
    {
        abr: 'Danilenko',
        firstname: '?????????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Doroschenko',
        firstname: '?????????????????? ??????????????',
        category: 'Wopker',
        prof: '???????????????????? ?????????????????????????? ??????????????????',
        sex: 'male',
        mode: '2', decret: false,
    },
    {
        abr: 'Drobishevskaya',
        firstname: '???????????????????????? ??????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'female',
        mode: '1', decret: false,
    },
    {
        abr: 'Gitnik',
        firstname: '???????????? ??????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '2', decret: false,
    },
    {
        abr: 'Gurov',
        firstname: '?????????? ??????????????',
        category: 'Wopker',
        prof: '???????????????? ???? ?????????????????????????? ????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
    {
        abr: 'Zayceva',
        firstname: '?????????????? ??????????????',
        category: 'SPEC',
        prof: '??????????????-??????????????????????',
        sex: 'female',
        mode: '0', decret: false,
    },
    {
        abr: 'Ivanov',
        firstname: '???????????? ????????????',
        category: 'Wopker',
        prof: '???????????????????? ?????????????????????????? ??????????????????',
        sex: 'male',
        mode: '3', decret: false,
    },
    {
        abr: 'Ivanova',
        firstname: '?????????????? ??????????????',
        category: 'Wopker',
        prof: '????????????????',
        sex: 'female',
        mode: '0', decret: false,
    },
    {
        abr: 'Kavalyova',
        firstname: '???????????????? ????????????',
        category: 'SPEC',
        prof: '??????????????-????????????????',
        sex: 'female',
        mode: '0', decret: false,
    },
    {
        abr: 'Kazakova',
        firstname: '???????????????? ??????????????',
        category: 'Wopker',
        prof: '???????????????? ??????',
        sex: 'female',
        mode: '0', decret: true,
    },
    {
        abr: 'Kulinenkov',
        firstname: '???????????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????????? ?????????????????????????? ??????????????????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Lazovik',
        firstname: '?????????????? ??????????????????',
        category: 'Wopker',
        prof: '???????????????? ??????',
        sex: 'female',
        mode: '2', decret: false,
    },
   
   {
        abr: 'Lazovik',
        firstname: '?????????????? ?????????????????? (??????)',
        category: 'ITR',
        prof: '????????????',
        sex: 'female',
        mode: '2', decret: false,
    },
    {
        abr: 'Mazurov',
        firstname: '?????????????? ????????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '4', decret: false,
    },
    {
        abr: 'Metelyov',
        firstname: '?????????????? ??????????',
        category: 'Wopker',
        prof: '???????????????????? ?????????????????????????? ??????????????????',
        sex: 'male',
        mode: '4', decret: false,
    },
    {
        abr: 'Mileshkina',
        firstname: '?????????????????? ????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'female',
        mode: '3', decret: false,
    },
    {
        abr: 'Mislivchik',
        firstname: '?????????????????? ??????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Murashkin',
        firstname: '???????????????? ??????????????????',
        category: 'Wopker',
        prof: '???????????????? ???? ?????????????????????????? ????????????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Nidodirov',
        firstname: '?????????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '2', decret: false,
    },
    {
        abr: 'Mirzoaliev',
        firstname: '???????????????????? ????????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '3', decret: false,
    },
    {
        abr: 'Privalova',
        firstname: '?????????????????? ??????????????',
        category: 'Wopker',
        prof: '????????????????',
        sex: 'female',
        mode: '0', decret: false,
    },
    {
        abr: 'Prihodko',
        firstname: '?????????????????? ??????????????',
        category: 'Wopker',
        prof: '???????????????? ??????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'PrihodkoM',
        firstname: '?????????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????? ???? ?????????????????????????? ????????????',
        sex: 'male',
        mode: '2', decret: false,
    },
    {
        abr: 'Protchenko',
        firstname: '?????????????????? ????????????',
        category: 'ITR',
        prof: '?????????????????? ??????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
    {
        abr: 'Romanov',
        firstname: '?????????????? ????????????????',
        category: 'ITR',
        prof: '????????????',
        sex: 'male',
        mode: '2', decret: false,
    },
     {
        abr: 'Rudnikov',
        firstname: '???????????????? ??????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Serebryakov',
        firstname: 'C?????????????????? ??????????????',
        category: 'ITR',
        prof: '????????????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Tatarov',
        firstname: '?????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????? ??????',
        sex: 'male',
        mode: '4', decret: false,
    },
   {
        abr: 'Trebushevsky',
        firstname: '???????????????????????? ??????????',
        category: 'Wopker',
        prof: '??????????????',
        sex: 'male',
        mode: '1', decret: false,
    },
    {
        abr: 'Kharibin',
        firstname: '?????????????? ????????????',
        category: 'ITR',
        prof: '????????????',
        sex: 'male',
        mode: '4', decret: false,
    },
   {
        abr: 'Tsimbalov',
        firstname: '???????????????? ??',
        category: 'Wopker',
        prof: '???????????????????? ?????????????????????????? ??????????????????',
        sex: 'male',
        mode: '3', decret: false,
    },
    {
        abr: 'Chuprakov',
        firstname: '???????????????? ??????????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '4', decret: false,
    },
    {
        abr: 'Shelipaho',
        firstname: '???????????????? ????????????',
        category: 'Wopker',
        prof: '???????????????????? ??????',
        sex: 'male',
        mode: '3', decret: false,
    },
    {
        abr: 'Yaskov',
        firstname: '???????????? ??????????????',
        category: 'Wopker',
        prof: '??????????????',
        sex: 'male',
        mode: '0', decret: false,
    },
];

// =======================================================================================???????????????? ???? ????????????=================================================================================


//?????????? ?????????????????? ??????????????

let ABR = persons.map(function (x) {
    return x.abr;
});

let FIRSTNAMES = persons.map(function (x) {
    return x.firstname;
});

let NAMES = persons.map(function (x) {
    return x.name;
});
let CATEGORIES = persons.map(function (x) {
    return x.category;
});



let PROFS = persons.map(function (x) {
    return x.prof;
});
let SEXES = persons.map(function (x) {
    return x.sex;
});
let MODES = persons.map(function (x) {
    return x.mode;
});

// ???????????????? ???? ?????????????????? 

let CATRAB = persons.map(function (x) {
    if (x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});



let CATITR = persons.map(function (x) {
    if (x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


let CATSPEC = persons.map(function (x) {
    if (x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});


//???????????????? ???? ??????

let RABSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let RABSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let ITRSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let ITRSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SPECSEXMAL = persons.map(function (x) {
    if (x.sex == 'male' && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SPECSEXFEM = persons.map(function (x) {
    if (x.sex == 'female' && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

//???????????????? ????????????
let DECRAB = persons.map(function (x) {
    if (x.decret == true && x.category == 'Wopker') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let DECITR = persons.map(function (x) {
    if (x.decret == true && x.category == 'ITR') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let DECSPEC = persons.map(function (x) {
    if (x.decret == true && x.category == 'SPEC') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});
//???????????????? ???? ??????????

let SMENA0 = persons.map(function (x) {
    if (x.mode == '0') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA1 = persons.map(function (x) {
    if (x.mode == '1') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA2 = persons.map(function (x) {
    if (x.mode == '2') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA3 = persons.map(function (x) {
    if (x.mode == '3') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

let SMENA4 = persons.map(function (x) {
    if (x.mode == '4') {
        return x.abr;
    }
}).filter(function (el) {
    return el != null;
});

// =====================================================================================????????????============================================================================================

//???????????????????? ??????????

for (let k = 1; k <= ABR.length; k++) {
    let nodet = document.createElement('tr');
    nodet.innerHTML = FIRSTNAMES[k - 1];
    nodet.classList.add(CATEGORIES[k - 1]);
    nodet.classList.add(ABR[k - 1]);
    nodet.classList.add("col" + k);
    for (let i = 1; i <= 43; i++) {
        let node = document.createElement('td');
        node.classList.add("row" + i);
        node.setAttribute("contentEditable", "true");
        table.append(nodet);
        nodet.append(node);
    }
}

//???????????????? ???????????? ?? TD

//?????????? day
for (let k = 1; k <= 31; k++) {
    let rowDay = [];
    for (let www of document.querySelectorAll(".row" + k)) {
        rowDay.push(www);
        for (yyy of rowDay) {
            yyy.classList.add('day' + k);
        }
    }
}

//?????????? ??????????????????
let bossTabl = document.querySelector('.boss');
let tabITR = bossTabl.querySelectorAll('.ITR');
for (let eee of tabITR) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('ITR')
    }
}

let tabSPEC = bossTabl.querySelectorAll('.SPEC');
for (let eee of tabSPEC) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('SPEC')
    }
}

let tabWORK = bossTabl.querySelectorAll('.Wopker');
for (let eee of tabWORK) {
    for (let i = 0; i < 31; i++) {
        let t = eee.children[i]
        t.classList.add('Wopker')

    }
}

//???????????????? id ?? TD

let arrID=[];
for (let k = 1; k <= ABR.length; k++) {   
    for (let www of document.querySelectorAll('.col' + k)) {
        arrID.push(www)    
    }
}
for (let i=0; i<arrID.length; i++){
   arrID[i].id="r"+ i;
}









//?????????????????????? ????????

// for (let i = 0; i <= SMENA0.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA0[i]);
//     for (let www of COlORS) {
//         www.classList.add("color0");
//     }
// }

// for (let i = 0; i <= SMENA1.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA1[i]);
//     for (let www of COlORS) {
//         www.classList.add("color1");
//     }
// }

// for (let i = 0; i <= SMENA2.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA2[i]);
//     for (let www of COlORS) {
//         www.classList.add("color2");
//     }
// }

// for (let i = 0; i <= SMENA3.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA3[i]);
//     for (let www of COlORS) {
//         www.classList.add("color3");
//     }
// }

// for (let i = 0; i <= SMENA4.length; i++) {
//     let COlORS = document.querySelectorAll('.' + SMENA4[i]);
//     for (let www of COlORS) {
//         www.classList.add("color4");
//     }
// }

for (let i = 1; i <= ABR.length; i++) {
    let X = document.querySelector('.col' + i);
    if (i % 2 == 0)
        X.classList.add("colorGrey");
}

//?????????????? ??????????

function countHour() {
    for (let k = 1; k <= ABR.length; k++) {

        let sum = 0;
        let count = 0;
        for (let i = 1; i <= 31; i++) {
            let examination = +(document.querySelector(".col" + k).querySelector(".row" + i).innerHTML);
            if (isNaN(examination)) {
                continue;
            }
            else if (examination >= 1) {
                count++;
                sum += examination;

            }
            document.querySelector(".col" + k).querySelector(".row33").innerHTML = sum;
            document.querySelector(".col" + k).querySelector(".row32").innerHTML = count;
        }
    }
}



// ?????????????? ????????


function countWord() {
    for (let k = 1; k <= ABR.length; k++) {
        let K = [];
        let P = [];
        let B = [];
        let O = [];
        let D = [];
        let A = [];
        //let U = [];

        for (let i = 1; i <= 31; i++) {
            let examination = document.querySelector(".col" + k).querySelector(".row" + i).innerHTML;
            if (examination == '??') {
                K.push(examination);
            } else if (examination == '??') {
                P.push(examination);
            }
            else if (examination == '??') {
                B.push(examination);
            }
            else if (examination == '??') {
                O.push(examination);
            }
            else if (examination == '??') {
                D.push(examination);
            }
            else if (examination == '??') {
                A.push(examination);
            }
            // else {
            //     console.log(examination = 8)

            // }
            document.querySelector(".col" + k).querySelector(".row35").innerHTML = K.length;
            document.querySelector(".col" + k).querySelector(".row38").innerHTML = P.length;
            document.querySelector(".col" + k).querySelector(".row39").innerHTML = B.length;
            document.querySelector(".col" + k).querySelector(".row40").innerHTML = O.length;
            document.querySelector(".col" + k).querySelector(".row42").innerHTML = D.length;
            document.querySelector(".col" + k).querySelector(".row43").innerHTML = A.length;
        }

    }

}


// ?????????????? ?????????????????????? ????????

function prazdn(x=0,y=0) {

    for (let k = 1; k <= ABR.length; k++) {
        let sum = 0;
        let sum2 = 0;
        let examination = +(document.querySelector(".col" + k).querySelector(".row" + x).innerHTML);
        let examination2 = +(document.querySelector(".col" + k).querySelector(".row" + y).innerHTML);
        if (examination > 0||examination2 > 0) {
            sum += examination;
            sum2 += examination2;
        }
        document.querySelector(".col" + k).querySelector(".row37").innerHTML =(sum+sum2);
    }
}

// function prazdn2(y) {

//     for (let k = 1; k <= ABR.length; k++) {
//         let sum = 0;
//         let examination = +(document.querySelector(".col" + k).querySelector(".row" + y).innerHTML);
//         if (examination > 0&&examination!=="") {
//             sum += examination;
//         }
//         document.querySelector(".col" + k).querySelector(".row37").innerHTML =sum;
//     }
// }


//=============================================================================================??????????????===========================================================================

//?????????????????????????????? ??????????????????????

// let SREDCHISRAB = document.querySelectorAll('.sredChisRab');
// for (let www of SREDCHISRAB) {
//     www.innerHTML = CATRAB.length;
// }

let SREDCHISITR = document.querySelectorAll('.sredChisITR');
for (let www of SREDCHISITR) {
    www.innerHTML = CATITR.length;
}

let SREDCHISSPEC = document.querySelectorAll('.sredChisSPEC');
for (let www of SREDCHISSPEC) {
    www.innerHTML = CATSPEC.length;
}


//?????????????? ????????????

let FEMRAB = document.querySelectorAll('.femRab');
for (let www of FEMRAB) {
    www.innerHTML = RABSEXFEM.length;
}

let FEMITR = document.querySelectorAll('.femITR');
for (let www of FEMITR) {
    www.innerHTML = ITRSEXFEM.length;
}

let FEMSPEC = document.querySelectorAll('.femSPEC');
for (let www of FEMSPEC) {
    www.innerHTML = SPECSEXFEM.length;
}

//?????????????? ??????????????????

let decRab = document.querySelectorAll('.decRab');
for (let www of decRab) {
    www.innerHTML = DECRAB.length;
}

let decITR = document.querySelectorAll('.decITR');
for (let www of decITR) {
    www.innerHTML = DECITR.length;
}

let decSPEC = document.querySelectorAll('.decSPEC');
for (let www of decSPEC) {
    www.innerHTML = DECSPEC.length;
}


// https://www.cyberforum.ru/javascript-beginners/thread2606554.html


//?????????????? "???? ????????????"

//???????????? ??????????????

function inWork1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + i).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}

//???????????? ??????????????

function inWork2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}


//???????????? ??????????????

function inWork3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytWorker = 0;
        let ytITR = 0;
        let ytSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("Wopker")) {
                ytWorker++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("ITR")) {
                ytITR++;
            } else if (xxx.innerHTML >= 1 && xxx.getAttribute("class").includes("SPEC")) {
                ytSPEC++;
            }
            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek1').innerHTML = ytWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek1').innerHTML = ytITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek1').innerHTML = ytSPEC;
        }
    }
}




//?????????????? ????????????????


//???????????? ??????????????

function inOTP1() {

    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }
            document.querySelector('.colDek' + (i)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;
        }
    }
}

//???????????? ??????????????
function inOTP2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;

            }
            else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }
            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;
        }
    }
}

//???????????? ??????????????

function inOTP3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));
        let ytOTPWorker = 0;
        let ytOTPITR = 0;
        let ytOTPSPEC = 0;

        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytOTPWorker++;
            }
            else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytOTPITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytOTPSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek2').innerHTML = ytOTPWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek2').innerHTML = ytOTPITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek2').innerHTML = ytOTPSPEC;

        }
    }
}


//?????????????? ????????????????????

//???????????? ??????????????

function inBOL1() {

    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);
        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }
            document.querySelector('.colDek' + (i)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;
        }
    }
}

//???????????? ??????????????
function inBOL2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));
        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;
        for (let xxx of dayX) {
            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;
        }
    }
}

//???????????? ??????????????

function inBOL3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytBOLWorker = 0;
        let ytBOLITR = 0;
        let ytBOLSPEC = 0;

        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytBOLWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytBOLITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytBOLSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek4').innerHTML = ytBOLWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek4').innerHTML = ytBOLITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek4').innerHTML = ytBOLSPEC;

        }
    }
}


//?????????????? ???????????? ??????????????????(????????????????????????, ????????????)

//???????????? ??????????????

function inPROCH1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}

//???????????? ??????????????

function inPROCH2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}

//???????????? ??????????????

function inPROCH3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytPROCHWorker = 0;
        let ytPROCHITR = 0;
        let ytPROCHSPEC = 0;
        for (let xxx of dayX) {

            if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("Wopker")) {
                ytPROCHWorker++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("ITR")) {
                ytPROCHITR++;
            } else if ((xxx.innerHTML == "??" || xxx.innerHTML == "??") && xxx.getAttribute("class").includes("SPEC")) {
                ytPROCHSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek6').innerHTML = ytPROCHWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek6').innerHTML = ytPROCHITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek6').innerHTML = ytPROCHSPEC;
        }
    }
}




//?????????????? ?????????????????????? ????????????????????????????

//???????????? ??????????????

function inRAZR1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//???????????? ?????????????? 

function inRAZR2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//???????????? ??????????????

function inRAZR3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytRAZRWorker = 0;
        let ytRAZRITR = 0;
        let ytRAZRSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytRAZRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytRAZRITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytRAZRSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek7').innerHTML = ytRAZRWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek7').innerHTML = ytRAZRITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek7').innerHTML = ytRAZRSPEC;
        }
    }
}

//?????????????? ????????????????

//???????????? ??????????????

function inPROG1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}

//???????????? ?????????????? 

function inPROG2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}

//???????????? ??????????????

function inPROG3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytPROGRWorker = 0;
        let ytPROGITR = 0;
        let ytORAGSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytPROGRWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytPROGITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytORAGSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek8').innerHTML = ytPROGRWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek8').innerHTML = ytPROGITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek8').innerHTML = ytORAGSPEC;
        }
    }
}



//?????????????? ????????????????

//???????????? ??????????????

function inVIH1() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + i);

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//???????????? ?????????????? 

function inVIH2() {
    for (let i = 1; i <= 10; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 10));

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//???????????? ??????????????

function inVIH3() {
    for (let i = 1; i <= 11; i++) {
        let dayX = document.querySelectorAll('.day' + (i + 20));

        let ytVIHWorker = 0;
        let ytVIHITR = 0;
        let ytVIHSPEC = 0;
        for (let xxx of dayX) {

            if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("Wopker")) {
                ytVIHWorker++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("ITR")) {
                ytVIHITR++;
            } else if (xxx.innerHTML == "??" && xxx.getAttribute("class").includes("SPEC")) {
                ytVIHSPEC++;
            }

            document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek10').innerHTML = ytVIHWorker;
            document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek10').innerHTML = ytVIHITR;
            document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek10').innerHTML = ytVIHSPEC;
        }
    }
}

//?????????????? ?????????? ??????????

//???????????? ??????????????



function inHOUER1() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 10; i++) {
            let dayX = document.querySelectorAll('.day' + i);

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

//???????????? ?????????????? 

function inHOUER2() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 10; i++) {
            let dayX = document.querySelectorAll('.day' + (i + 10));

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

//???????????? ??????????????

function inHOUER3() {
    for (let k = 1; k <= 12; k++) {
        for (let i = 1; i <= 11; i++) {
            let dayX = document.querySelectorAll('.day' + (i + 20));

            let ytVIHWorker = 0;
            let ytVIHITR = 0;
            let ytVIHSPEC = 0;
            for (let xxx of dayX) {
                let K = String(k)
                if (xxx.innerHTML == K && xxx.getAttribute("class").includes("Wopker")) {
                    ytVIHWorker++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("ITR")) {
                    ytVIHITR++;
                } else if (xxx.innerHTML == K && xxx.getAttribute("class").includes("SPEC")) {
                    ytVIHSPEC++;
                }

                document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHWorker;
                document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHITR;
                document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek' + (k + 13)).innerHTML = ytVIHSPEC;
            }
        }
    }
}

//???????????????? ?????????????? ??????????

//??????????????????

//???????????? ??????????????

function inHOURRAB1() {
    
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek' + (k + 13)).innerHTML) ;
                t = sum*k;
            }
            
            document.querySelector('.headRAB1').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURRAB2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headRAB2').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURRAB3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headRAB3').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//??????

//???????????? ??????????????

function inHOURITR1() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headITR1').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURITR2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headITR2').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURITR3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headITR3').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//??????????????????????

//???????????? ??????????????

function inHOURSPEC1() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headSPEC1').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURSPEC2() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 10; i++) {
            if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headSPEC2').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????? ??????????????

function inHOURSPEC3() {
    for (let k = 1; k < 13; k++) {
        let sum = 0;
        let t = 0;
        for (let i = 1; i <= 11; i++) {
            if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek' + (k + 13)).innerHTML) >= 1) {
                sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek' + (k + 13)).innerHTML);
                t = sum*k;
            }
            document.querySelector('.headSPEC3').querySelector('.headDEK' + (k + 18)).innerHTML = t;
        }
    }
}

//???????????????? ?????????????? ?????????? ???? ????????????

//??????????????????

function inHOURSUTRAB() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headRAB" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}



//??????

function inHOURSUTITR() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headITR" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}


//??????????????????????

function inHOURSUTSPEC() {
    for (let k = 0; k <= 2; k++) {
        let sum = 0;
        for (let i = 1; i <= 12; i++) {
            if (+(document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML) >= 1) {
                sum += +(document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK' + (i + 18)).innerHTML);
            }
            document.querySelector(".headSPEC" + (k + 1)).querySelector('.headDEK31').innerHTML = sum;
        }
    }
}



//---------------------------------------------------------------------------???????????????? ?????????????? ????????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inOTPRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML = sum;
    }
}

//???????????? ??????????????

function inOTPRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML = sum;
    }
}

//???????????? ??????????????

function inOTPRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inOTPITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML = sum;
    }
}


//???????????? ??????????????

function inOTPITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML = sum;
    }
}


//???????????? ??????????????

function inOTPITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inOTPSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML = sum;
    }
}


//???????????? ??????????????

function inOTPSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML = sum;
    }
}


//???????????? ??????????????

function inOTPSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek2').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek2').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------???????????????? ?????????????? '???? ????????????'-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inWORKRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML = sum;
    }
}

//???????????? ??????????????

function inWORKRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML = sum;
    }
}

//???????????? ??????????????

function inWORKRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inWORKITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML = sum;
    }
}


//???????????? ??????????????

function inWORKITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML = sum;
    }
}


//???????????? ??????????????

function inWORKITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inWORKSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML = sum;
    }
}


//???????????? ??????????????

function inWORKSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML = sum;
    }
}


//???????????? ??????????????

function inWORKSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek1').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek1').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------???????????????? ?????????????? ????????????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inBOLRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML = sum;
    }
}

//???????????? ??????????????

function inBOLRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML = sum;
    }
}

//???????????? ??????????????

function inBOLRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inBOLITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML = sum;
    }
}


//???????????? ??????????????

function inBOLITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML = sum;
    }
}


//???????????? ??????????????

function inBOLITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inBOLSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML = sum;
    }
}


//???????????? ??????????????

function inBOLSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek4').innerHTML) ;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML = sum;
    }
}


//???????????? ??????????????

function inBOLSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek4').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek4').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML = sum;
    }
}




//---------------------------------------------------------------------------???????????????? ?????????????? ???????????? ????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inPROCHRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML = sum;
    }
}

//???????????? ??????????????

function inPROCHRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML = sum;
    }
}

//???????????? ??????????????

function inPROCHRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inPROCHITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROCHITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROCHITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inPROCHSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROCHSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek6').innerHTML) ;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROCHSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek6').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek6').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------???????????????? ???????????????????? ??????????????????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inRAZRRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML = sum;
    }
}

//???????????? ??????????????

function inRAZRRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML = sum;
    }
}

//???????????? ??????????????

function inRAZRRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inRAZRITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML = sum;
    }
}


//???????????? ??????????????

function inRAZRITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML = sum;
    }
}


//???????????? ??????????????

function inRAZRITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inRAZRSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML = sum;
    }
}


//???????????? ??????????????

function inRAZRSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML = sum;
    }
}


//???????????? ??????????????

function inRAZRSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek7').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek7').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------???????????????? ?????????????? ????????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inPROGRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML = sum;
    }
}

//???????????? ??????????????

function inPROGRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML = sum;
    }
}

//???????????? ??????????????

function inPROGRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inPROGITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROGITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek8').innerHTML) ;
        }
        document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROGITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inPROGSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROGSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek8').innerHTML) ;
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML = sum;
    }
}


//???????????? ??????????????

function inPROGSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek8').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek8').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML = sum;
    }
}



//---------------------------------------------------------------------------???????????????? ?????????????? ????????????????-----------------------------------------------------------------------------

//??????????????????

//???????????? ??????????????

function inVIHRAB1() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML = sum;
    }
}

//???????????? ??????????????

function inVIHRAB2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 30)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML = sum;
    }
}

//???????????? ??????????????

function inVIHRAB3() {
    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 60)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML = sum;
    }
}

//??????

//???????????? ??????????????

function inVIHITR1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 10)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML = sum;
    }
}


//???????????? ??????????????

function inVIHITR2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 40)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML = sum;
    }
}


//???????????? ??????????????

function inVIHITR3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 71)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML = sum;
    }
}


//??????????????????????

//???????????? ??????????????

function inVIHSPEC1() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 20)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML = sum;
    }
}


//???????????? ??????????????

function inVIHSPEC2() {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 50)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML = sum;
    }
}


//???????????? ??????????????

function inVIHSPEC3() {

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        if (+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek10').innerHTML) >= 1) {
            sum+=+(document.querySelector('.colDek' + (i + 82)).querySelector('.rowDek10').innerHTML);
        }
        document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML = sum;
    }
}

//---------------------------------------------------------------------------???????????????? ?????????????? ????????????-----------------------------------------------------------------------------

document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 10;
document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 10;
document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML = RABSEXFEM.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML = ITRSEXFEM.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML = SPECSEXFEM.length * 11;


//---------------------------------------------------------------------------???????????????? ?????????????? ?????????????????????????????? ??????????????????????-----------------------------------------------------------------------------
// document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML = CATRAB.length * 10;
// document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML = CATRAB.length * 10;
// document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML = CATRAB.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML = CATITR.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML = CATITR.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML = CATITR.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML = CATSPEC.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML = CATSPEC.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML = CATSPEC.length * 11;

//---------------------------------------------------------------------------???????????????? ?????????????? ??????????????????-----------------------------------------------------------------------------
document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML = DECRAB.length * 10;
document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML = DECRAB.length * 10;
document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML = DECRAB.length * 11;
document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML = DECITR.length * 10;
document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML = DECITR.length * 10;
document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML = DECITR.length * 11;
document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML = DECSPEC.length * 10;
document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML = DECSPEC.length * 10;
document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML = DECSPEC.length * 11;


//===============================================================================???????????????? ??????????????=======================================================================================================

//-------------------------------------------------------------------???????????????? ?????????????? ?????????????????????????????? ??????????????????????-------------------------------------------------------------------------------------------



document.querySelector('.colITOG1').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK4').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG2').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK4').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK4').innerHTML);

//-------------------------------------------------------------------???????????????? ?????????????? ????????????-------------------------------------------------------------------------------------------

document.querySelector('.colITOG1').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK5').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG3').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK5').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK5').innerHTML);

//-------------------------------------------------------------------???????????????? ?????????????? ??????????????????-------------------------------------------------------------------------------------------

document.querySelector('.colITOG1').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG4').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG7').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG10').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG2').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG5').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG8').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG11').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK14').innerHTML)
document.querySelector('.colITOG3').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG6').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG9').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML);
document.querySelector('.colITOG12').querySelector('.rowITOG12').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK14').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK14').innerHTML);

//-------------------------------------------------------------------------------???????????????? ?????????????? "???? ????????????"-------------------------------------------------------------------------------------------

function inItogTabInWorkRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK6').innerHTML)
};
function inItogTabInWorkSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML);
}
function inItogTabInWorkSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML);
};
function inItogTabInWorkSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG4').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK6').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK6').innerHTML)
}


//-------------------------------------------------------------------------------???????????????? ?????????????? ????????????????-------------------------------------------------------------------------------------------
function inItogTabInOTPRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK7').innerHTML)
};
function inItogTabInOTPSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML);
}
function inItogTabInOTPSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML);
};
function inItogTabInOTPSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG5').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK7').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK7').innerHTML)
}


//-------------------------------------------------------------------------------???????????????? ?????????????? ????????????????????-------------------------------------------------------------------------------------------
function inItogTabInBOLRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK9').innerHTML)
};
function inItogTabInBOLSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML);
}
function inItogTabInBOLSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML);
};
function inItogTabInBOLSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG7').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK9').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK9').innerHTML)
}


//-------------------------------------------------------------------------------???????????????? ?????????????? ???????????? ????????????-------------------------------------------------------------------------------------------
function inItogTabInPROCHRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK11').innerHTML)
};
function inItogTabInPROCHSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML);
}
function inItogTabInPROCHSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML);
};
function inItogTabInPROCHSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG9').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK11').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK11').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???????????? ????????????-------------------------------------------------------------------------------------------
function inItogTabInRAZRRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK12').innerHTML)
};
function inItogTabInRAZRSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML);
}
function inItogTabInRAZRSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML);
};
function inItogTabInRAZRSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG10').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK12').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK12').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ????????????????-------------------------------------------------------------------------------------------
function inItogTabInPROGRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK13').innerHTML)
};
function inItogTabInPROGSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML);
}
function inItogTabInPROGSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML);
};
function inItogTabInPROGSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG11').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK13').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK13').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ????????????????-------------------------------------------------------------------------------------------
function inItogTabInVIHRAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHRAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHRAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHRAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK15').innerHTML)
};
function inItogTabInVIHSPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML);
}
function inItogTabInVIHSPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHSPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML);
};
function inItogTabInVIHSPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG13').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK15').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK15').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 8 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR8RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK26').innerHTML)
};
function inItogTabInHOUR8SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK26').innerHTML);
}
function inItogTabInHOUR8SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK26').innerHTML);
};
function inItogTabInHOUR8SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG17').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK26').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK26').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 7 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR7RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK25').innerHTML)
};
function inItogTabInHOUR7SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK25').innerHTML);
}
function inItogTabInHOUR7SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK25').innerHTML);
};
function inItogTabInHOUR7SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG18').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK25').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK25').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 6 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR6RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK24').innerHTML)
};
function inItogTabInHOUR6SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK24').innerHTML);
}
function inItogTabInHOUR6SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK24').innerHTML);
};
function inItogTabInHOUR6SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG19').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK24').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK24').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 4 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR4RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK22').innerHTML)
};
function inItogTabInHOUR4SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK22').innerHTML);
}
function inItogTabInHOUR4SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK22').innerHTML);
};
function inItogTabInHOUR4SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG20').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK22').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK22').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 10 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR10RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK28').innerHTML)
};
function inItogTabInHOUR10SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK28').innerHTML);
}
function inItogTabInHOUR10SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK28').innerHTML);
};
function inItogTabInHOUR10SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG21').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK28').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK28').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???? 12 ??????????-------------------------------------------------------------------------------------------
function inItogTabInHOUR12RAB1() {
    document.querySelector('.colITOG1').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12RAB2() {
    document.querySelector('.colITOG4').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12RAB3() {
    document.querySelector('.colITOG7').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12RAB() {
    document.querySelector('.colITOG10').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headRAB1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headRAB2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headRAB3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR1() {
    document.querySelector('.colITOG2').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12ITR2() {
    document.querySelector('.colITOG5').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR3() {
    document.querySelector('.colITOG8').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12ITR() {
    document.querySelector('.colITOG11').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headITR1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headITR2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headITR3').querySelector('.headDEK30').innerHTML)
};
function inItogTabInHOUR12SPEC1() {
    document.querySelector('.colITOG3').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK30').innerHTML);
}
function inItogTabInHOUR12SPEC2() {
    document.querySelector('.colITOG6').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC2').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12SPEC3() {
    document.querySelector('.colITOG9').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC3').querySelector('.headDEK30').innerHTML);
};
function inItogTabInHOUR12SPEC() {
    document.querySelector('.colITOG12').querySelector('.rowITOG22').innerHTML = (+document.querySelector('.headSPEC1').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headSPEC2').querySelector('.headDEK30').innerHTML) + (+document.querySelector('.headSPEC3').querySelector('.headDEK30').innerHTML)
}

//-------------------------------------------------------------------------------???????????????? ?????????????? ???????? ?????????? -------------------------------------------------------------------------------------------

function inItogTabInHOURALL() {
    for (let k = 0; k < 12; k++) {
        let sum = 0;
        for (let i = 0; i < 6; i++) {
            if (+(document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG' + (i + 17)).innerHTML) >= 1) {
                sum += +(document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG' + (i + 17)).innerHTML);
            }
            document.querySelector('.colITOG' + (k + 1)).querySelector('.rowITOG23').innerHTML = sum;
        }
    }
}

//--------------------------------------------------------------------------------?????????????? ?????????????? ?????????????????????? (????) -------------------------------------------------------------------------------------

function inItogTabInSP() {
    document.querySelector('.spRAB').innerHTML = +(document.querySelector('.colITOG10').querySelector('.rowITOG2').innerHTML) / +(document.querySelector('.colvoDAY').innerHTML);
    document.querySelector('.spITR').innerHTML = +(document.querySelector('.colITOG11').querySelector('.rowITOG2').innerHTML) / +(document.querySelector('.colvoDAY').innerHTML);
    document.querySelector('.spSPEC').innerHTML = +(document.querySelector('.colITOG12').querySelector('.rowITOG2').innerHTML) / +(document.querySelector('.colvoDAY').innerHTML);
}

//================================================================================ ?????????????????? localStorage =======================================================================

document.querySelector('.storageTab').addEventListener('click', function () {
    for (let i=0; i<arrID.length; i++){
        let exInner = document.querySelector('#r'+i).innerHTML;
        localStorage.setItem("a"+i, exInner)
        
    }
    
})


document.querySelector('.onloadTab').addEventListener('click', function (e) {
        for (let i=0; i<arrID.length; i++){
             if (localStorage.getItem('a'+i) !==""){
        document.querySelector('#r'+i).innerHTML = localStorage.getItem('a'+i);
    }
        }
    })

    document.querySelector('.clearTab').addEventListener('click', function () {
        for (let i=0; i<arrID.length; i++){
        document.querySelector('#r'+i).innerHTML = localStorage.clear();  
        document.querySelector('#r'+i).innerHTML = '';
        }
    })
