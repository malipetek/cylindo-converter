import convertJSONtoMetafield from './lib/convertJSONtoMetafield.js';
import testDataSets from './testdata.js';
import assert from 'assert';


convertJSONtoMetafield(testDataSets[0], ({ identified_cols, col_values, metafield }) => {
    assert.deepEqual(identified_cols, {
      "0": "YSETCONSES",
      "1": "YSETCOJSES",
      "2": "YSETCONSKE",
      "3": "YSETCONSTS",
      "4": "YSETDVFDFS",
      "5": "YSETDVKDFS",
      "6": "YSETDVKDKS"
    });

  assert.deepEqual(metafield, {
    YSETCOLI: 'YSETCONSES',
    YSETCODD: 'YSETCONSES',
    YSETCOBB: 'YSETCOJSES',
    YSETCOFF: 'YSETCOJSES',
    YSETCOLF: 'YSETCOJSES',
    YSETCOFL: 'YSETCOJSES',
    YSETCOQV: 'YSETCOJSES',
    YSETCOTX: 'YSETCOJSES',
    COPA: 'YSETCOJSES',
    COMC: 'YSETCOJSES',
    COLQ: 'YSETCOJSES',
    COBQ: 'YSETCOJSES',
    YSETCOGH: 'YSETCONSKE',
    YSETCOBU: 'YSETCONSKE',
    YSETCOSV: 'YSETCONSKE',
    COPV: 'YSETCONSKE',
    COVC: 'YSETCONSKE',
    YSETCONM: 'YSETCONSTS',
    YSETCOPB: 'YSETCONSTS',
    COTQ: 'YSETCONSTS',
    YSETDVAC: 'YSETDVFDFS',
    YSETDVCO: 'YSETDVKDFS',
    YSETDVCT: 'YSETDVFDFS',
    YSETDVDS: 'YSETDVFDFS',
    YSETDVHB: 'YSETDVFDFS',
    YSETDVIM: 'YSETDVFDFS',
    YSETDVLB: 'YSETDVFDFS',
    YSETDVMA: 'YSETDVFDFS',
    YSETDVPV: 'YSETDVFDFS',
    YSETDVSE: 'YSETDVFDFS',
    YSETDVSH: 'YSETDVFDFS',
    YSETDVSN: 'YSETDVFDFS',
    YSETDVSL: 'YSETDVFDFS',
    YSETDVTM: 'YSETDVFDFS',
    DVJF: 'YSETDVFDFS',
    YSETDVAA: 'YSETDVKDFS',
    YSETDVBR: 'YSETDVKDFS',
    YSETDVBS: 'YSETDVKDFS',
    YSETDODK: 'YSETDVKDFS',
    YSETDVID: 'YSETDVKDFS',
    YSETDVNE: 'YSETDVKDFS',
    YSETDVRO: 'YSETDVKDFS',
    YSETDVSD: 'YSETDVKDFS',
    YSETDVSM: 'YSETDVKDFS',
    YSETDVTL: 'YSETDVKDFS',
    YSETDVLI: 'YSETDVKDKS',
    YSETDVSO: 'YSETDVKDKS'
  });
});
  
convertJSONtoMetafield(testDataSets[1], ({ identified_cols, col_values, identified_col_templates, metafield }) => {
  assert.deepEqual(identified_cols, {
    "0": "PW2222",
    '1': 'PW2424',
    '2': 'PW2626',
    '3': 'PW3616',
    '4': 'PW3630',
    '5': 'THPAD',
    '6': 'PWIF1612',
    '7': 'COPAD3625',
    '8': 'PWTSF3630'
  });

  assert.deepEqual(metafield, {
    'PWAP2222-BEA': 'PW2222',
    'PWAP2222-PRL': 'PW2222',
    'PWBL2222-AQU': 'PW2222',
    'PWBL2222-LEA': 'PW2222',
    'PWBL2222-YEL': 'PW2222',
    'PWBM2222-BLE': 'PW2222',
    'PWCO2222-PLA': 'PW2222',
    'PWCO2222-PRL': 'PW2222',
    'PWCO2222-SAN': 'PW2222',
    'PWCO2222-SLA': 'PW2222',
    'PWCY2222-BLE': 'PW2222',
    'PWDC2222-AGL': 'PW2222',
    'PWDC2222-BTS': 'PW2222',
    'PWDC2222-CHA': 'PW2222',
    'PWDC2222-CHM': 'PW2222',
    'PWDC2222-DUS': 'PW2222',
    'PWDC2222-ECR': 'PW2222',
    'PWDC2222-FBL': 'PW2222',
    'PWDC2222-GLD': 'PW2222',
    'PWDC2222-LAK': 'PW2222',
    'PWDC2222-NAV': 'PW2222',
    'PWDC2222-SIL': 'PW2222',
    'PWAL2424-YEL': 'PW2424',
    'PWAG2424-AQU': 'PW2424',
    'PWAG2424-PUM': 'PW2424',
    'PWAG2424-SMP': 'PW2424',
    'PWAI2424-OCE': 'PW2424',
    'PWAR2424-SUN': 'PW2424',
    'PWAV2424-MIS': 'PW2424',
    'PWBL2424-AQU': 'PW2424',
    'PWBL2424-LEA': 'PW2424',
    'PWBL2424-YEL': 'PW2424',
    'PWCP2424-ICE': 'PW2424',
    'PWCF2424-BLK': 'PW2424',
    'PWCF2424-WHI': 'PW2424',
    'PWCE2424-SIL': 'PW2424',
    'PWCT2424-NAC': 'PW2424',
    'PWDI2424-PRL': 'PW2424',
    'PWDM2424-GRY': 'PW2424',
    'PWDW2424-HEA': 'PW2424',
    'PWEG2424-NIL': 'PW2424',
    'PWEF2424-NIL': 'PW2424',
    'PWEH2424-NAT': 'PW2424',
    'PWFA2424-UMB': 'PW2424',
    'SHBME-BLE': 'PW2626',
    'SHSOE-PYR': 'PW2626',
    'SHCYE-BLE': 'PW2626',
    'SHCIE-BWH': 'PW2626',
    'SHCIE-PRL': 'PW2626',
    'SHCME-NIG': 'PW2626',
    'SHDLE-MIS': 'PW2626',
    'SHDLE-PUM': 'PW2626',
    'SHDLE-STE': 'PW2626',
    'SHFVE-BLU': 'PW2626',
    'SHFVE-KHA': 'PW2626',
    'SHFVE-NBL': 'PW2626',
    'SHFVE-RHU': 'PW2626',
    'SHFVE-SIL': 'PW2626',
    'SHFVE-TER': 'PW2626',
    'SHHOE-GLD': 'PW2626',
    'SHHOE-SMO': 'PW2626',
    'SHICE-BLK': 'PW2626',
    'SHICE-PRL': 'PW2626',
    'SHICE-TAU': 'PW2626',
    'SHKIE-MAR': 'PW2626',
    'SHLNE-BLK': 'PW2626',
    'PWSO3616-PYR': 'PW3616',
    'PWEH3616-NAT': 'PW3616',
    'PWPS3616-NAT': 'PW3616',
    'PWJO3616-MUL': 'PW3616',
    'PWTO3616-WHI': 'PW3616',
    'PWLA3616-MUL': 'PW3616',
    'PWAI3616-OCE': 'PW3616',
    'PWCP3616-ICE': 'PW3616',
    'PWEG3616-NIL': 'PW3616',
    'PWFV3616-BLU': 'PW3616',
    'PWFV3616-KHA': 'PW3616',
    'PWFV3616-NBL': 'PW3616',
    'PWFV3616-RHU': 'PW3616',
    'PWFV3616-SIL': 'PW3616',
    'PWFV3616-TER': 'PW3616',
    'PWML3616-BLS': 'PW3616',
    'PWMV3616-ABL': 'PW3616',
    'PWMV3616-AZU': 'PW3616',
    'PWMV3616-CHA': 'PW3616',
    'PWMV3616-SIL': 'PW3616',
    'PWMV3616-SNO': 'PW3616',
    'PWMV3616-TAU': 'PW3616',
    'PWAR3630-SUN': 'PW3630',
    'PWAP3630-BEA': 'PW3630',
    'PWAP3630-PRL': 'PW3630',
    'PWAS3630-AZU': 'PW3630',
    'PWAS3630-GRY': 'PW3630',
    'PWAS3630-PRL': 'PW3630',
    'PWAS3630-WHI': 'PW3630',
    'PWCO3630-PLA': 'PW3630',
    'PWCO3630-PRL': 'PW3630',
    'PWCO3630-SAN': 'PW3630',
    'PWCO3630-SLA': 'PW3630',
    'PWCI3630-BWH': 'PW3630',
    'PWCI3630-PRL': 'PW3630',
    'PWSO3630-PYR': 'PW3630',
    'PWDL3630-MIS': 'PW3630',
    'PWDL3630-PUM': 'PW3630',
    'PWDL3630-STE': 'PW3630',
    'PWDI3630-PRL': 'PW3630',
    'PWFV3630-BLU': 'PW3630',
    'PWFV3630-KHA': 'PW3630',
    'PWFV3630-NBL': 'PW3630',
    'PWFV3630-RHU': 'PW3630',
    'THAL-YEL': 'THPAD',
    'THAG-AQU': 'THPAD',
    'THAG-PUM': 'THPAD',
    'THAG-SMP': 'THPAD',
    'THAI-OCE': 'THPAD',
    'THAR-SUN': 'THPAD',
    'THAV-MIS': 'THPAD',
    'THBM-BLE': 'THPAD',
    'THCY-BLE': 'THPAD',
    'THCI-BWH': 'THPAD',
    'THCI-PRL': 'THPAD',
    'THCP-ICE': 'THPAD',
    'THSO-PYR': 'THPAD',
    'THCF-BLK': 'THPAD',
    'THCF-WHI': 'THPAD',
    'THCE-SIL': 'THPAD',
    'THCT-NAC': 'THPAD',
    'THDI-PRL': 'THPAD',
    'THDL-MIS': 'THPAD',
    'THDL-PUM': 'THPAD',
    'THDL-STE': 'THPAD',
    'THDW-HEA': 'THPAD',
    'PWVN2222-VN': 'PWIF1612',
    'COGC-ECR': 'COPAD3625',
    'COGC-SIL': 'COPAD3625',
    'COHW-ECR': 'COPAD3625',
    'COHW-SIL': 'COPAD3625',
    'COHW-STE': 'COPAD3625',
    'COSN-AQU': 'COPAD3625',
    'COSN-GLD': 'COPAD3625',
    'COSN-ROS': 'COPAD3625',
    'COSN-SIL': 'COPAD3625',
    'PWNQ3630-CHA': 'PWTSF3630',
    'PWNQ3630-FRO': 'PWTSF3630',
    'PWNQ3630-IVO': 'PWTSF3630',
    'PWNQ3630-MET': 'PWTSF3630',
    'PWNQ3630-MYS': 'PWTSF3630',
    'PWNQ3630-PUM': 'PWTSF3630',
    'PWNQ3630-SAN': 'PWTSF3630',
    'PWNQ3630-SIL': 'PWTSF3630',
    'PWNQ3630-WHI': 'PWTSF3630',
    'PWSR3630-SIL': 'PWTSF3630',
    'PWMC3630-NAT': 'PWTSF3630',
    'PWHQ3630-CHM': 'PWTSF3630',
    'PWHQ3630-TAU': 'PWTSF3630',
    'PWTQ3630-AQU': 'PWTSF3630',
    'PWTQ3630-CBN': 'PWTSF3630',
    'PWTQ3630-GRY': 'PWTSF3630',
    'PWTQ3630-IVO': 'PWTSF3630',
    'PWTQ3630-NAV': 'PWTSF3630',
    'PWTQ3630-PER': 'PWTSF3630',
    'PWTQ3630-PUM': 'PWTSF3630',
    'PWTQ3630-SIL': 'PWTSF3630',
    'PWTQ3630-TAU': 'PWTSF3630'
  })
});


convertJSONtoMetafield(testDataSets[2], ({ identified_cols, col_values, identified_col_templates, metafield }) => {
  assert.deepEqual(identified_cols, {
    '0': 'YSETDVKDFS',
    '1': 'YSETDVKDKS',
    '2': 'PW2222'
  });

  assert.deepEqual(metafield, {
    YSETDVAA: 'YSETDVKDFS',
    YSETDVBR: 'YSETDVKDFS',
    YSETDVBS: 'YSETDVKDFS',
    YSETDVCO: 'YSETDVKDFS',
    YSETDODK: 'YSETDVKDFS',
    YSETDVID: 'YSETDVKDFS',
    YSETDVNE: 'YSETDVKDFS',
    YSETDVRO: 'YSETDVKDFS',
    YSETDVSD: 'YSETDVKDFS',
    YSETDVSM: 'YSETDVKDFS',
    YSETDVTL: 'YSETDVKDFS',
    YSETDVLI: 'YSETDVKDKS',
    YSETDVSO: 'YSETDVKDKS',
    'PWAP2222-BEA': 'PW2222',
    'PWAP2222-PRL': 'PW2222',
    'PWBL2222-AQU': 'PW2222',
    'PWBL2222-LEA': 'PW2222',
    'PWBL2222-YEL': 'PW2222',
    'PWBM2222-BLE': 'PW2222',
    'PWCO2222-PLA': 'PW2222',
    'PWCO2222-PRL': 'PW2222',
    'PWCO2222-SAN': 'PW2222',
    'PWCO2222-SLA': 'PW2222',
    'PWCY2222-BLE': 'PW2222',
    'PWDC2222-AGL': 'PW2222',
    'PWDC2222-BTS': 'PW2222',
    'PWDC2222-CHA': 'PW2222',
    'PWDC2222-CHM': 'PW2222',
    'PWDC2222-DUS': 'PW2222',
    'PWDC2222-ECR': 'PW2222',
    'PWDC2222-FBL': 'PW2222',
    'PWDC2222-GLD': 'PW2222',
    'PWDC2222-LAK': 'PW2222',
    'PWDC2222-NAV': 'PW2222',
    'PWDC2222-SIL': 'PW2222'
  });
});