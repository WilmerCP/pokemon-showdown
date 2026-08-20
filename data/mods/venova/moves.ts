export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
  "posesioninfernal": {
    "num": -1,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Posesion Infernal",
    "pp": 10,
    "type": "Dark",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
        "chance": 30, 
        "status": "par"
    }
  },
  "silbidoespectral": {
    "num": -2,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Silbido Espectral",
    "pp": 10,
    "type": "Ghost",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
        "chance": 20,
        "boosts": {
            "def": -1,
            "spd": -1
        }
    }
  },
  "hachazo": {
    "num": -3,
    "accuracy": 85,
    "basePower": 110,
    "category": "Physical",
    "name": "Hachazo",
    "pp": 20,
    "type": "Steel",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
	  "contact": 1
    },
    "secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "def": 1
        }
      }
    }
  },
  "plumamagica": {
    "num": -4,
    "accuracy": 100,
    "basePower": 100,
    "category": "Special",
    "name": "Pluma magica",
    "pp": 15,
    "type": "Fairy",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"secondary": {
        "chance": 30, 
        "status": "brn"
    }
  },
  "venenolaser": {
    "num": -5,
    "accuracy": 95,
    "basePower": 90,
    "category": "Physical",
    "name": "Veneno Laser",
    "pp": 20,
    "type": "Poison",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"secondary": {
        "chance": 30, 
        "status": "psn"
    }
  },
  "acuatridente": {
    "num": -6,
    "accuracy": 100,
    "basePower": 70,
    "category": "Physical",
    "name": "Acua Tridente",
    "pp": 20,
    "type": "Water",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"secondary": {
      "chance": 100,
      "self": {
        "boosts": {
          "spe": 1
        }
      }
    }
  },
  "estocadamarcial": {
    "num": -7,
    "accuracy": 95,
    "basePower": 90,
    "category": "Physical",
    "name": "Estocada Marcial",
    "pp": 10,
    "type": "Fighting",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "secondary": {
        "chance": 30, 
        "status": "slp"
    }
  },
  "proyectilesberetta": {
    "num": -8,
    "accuracy": 100,
    "basePower": 30,
    "category": "Physical",
    "name": "Proyectiles Beretta",
    "pp": 30,
    "type": "Dark",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"multihit": [2, 5],
  },
  "cubrebasura": {
    "num": -9,
    "accuracy": 0,
    "basePower": 0,
    "category": "Status",
    "name": "Cubrebasura",
    "pp": 20,
    "type": "Dark",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"boosts": {
        "def": 2,
    },
  },
  "cantomagico": {
    "num": -10,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Canto Magico",
    "pp": 30,
    "type": "Fairy",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	secondaries: [
        {
            chance: 10,
            status: "brn",
        },
        {
            chance: 10,
            volatileStatus: "par",
        },
		{
            chance: 10,
            volatileStatus: "frz",
        },
    ],
  },
  "cantooscuro": {
    "num": -11,
    "accuracy": 100,
    "basePower": 60,
    "category": "Special",
    "name": "Canto Oscuro",
    "pp": 30,
    "type": "Dark",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	secondaries: [
        {
            chance: 10,
            status: "brn",
        },
        {
            chance: 10,
            volatileStatus: "par",
        },
		{
            chance: 10,
            volatileStatus: "frz",
        },
    ],
  },
  "notasllameantes": {
    "num": -12,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Notas llameantes",
    "pp": 30,
    "type": "Fire",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	secondaries: [
        {
            chance: 10,
            status: "brn",
        },
        {
            chance: 10,
            volatileStatus: "flinch",
        },
    ],
  },
  "comecables": {
    "num": -13,
    "accuracy": 100,
    "basePower": 80,
    "category": "Physical",
    "name": "Come Cables",
    "pp": 20,
    "type": "Dragon",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
	  "contact": 1
    },
	"secondary": {
        "chance": 100,
        "boosts": {
            "accuracy": -1,
        }
    }

  },
  "mangazo": {
    "num": -14,
    "accuracy": 85,
    "basePower": 30,
    "category": "Physical",
    "name": "Mangazo",
    "pp": 15,
    "type": "Grass",
    "target": "normal",
    "priority": 0,
    "multihit": [2, 5],
    "flags": {
      "protect": 1,
      "mirror": 1
    }
  },
  "acuarosa": {
    "num": -15,
    "accuracy": 100,
    "basePower": 90,
    "category": "Special",
    "name": "Acuarosa",
    "pp": 15,
    "type": "Water",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "boosts": {
        "evasion": -1
    },
	onHit(target, source, move) {
        // Remueve hazards y pantallas del lado del objetivo
        const removeTarget = ['lightscreen', 'reflect', 'auroraveil'];
        for (const condition of removeTarget) {
            if (target.side.removeSideCondition(condition)) {
                this.add('-sideend', target.side, this.dex.conditions.get(condition).name, '[from] move: Neblina Borradora', '[of] ' + source);
            }
        }
    },
  },
  "energiaoscura": {
    "num": -16,
    "accuracy": 80,
    "basePower": 100,
    "category": "Special",
    "name": "Energia Oscura",
    "pp": 20,
    "type": "Dark",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	onHit(target) {
        target.clearBoosts();
        this.add('-clearboost', target);
    },
  },
  "flechanociva": {
    "num": -17,
    "accuracy": 90,
    "basePower": 110,
    "category": "Physical",
    "name": "Flecha Nociva",
    "pp": 20,
    "type": "Poison",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"secondary": {
        "chance": 30, 
        "status": "psn"
    }
  },
  "arepazos": {
    "num": -18,
    "accuracy": 100,
    "basePower": 110,
    "category": "Physical",
    "name": "Arepazos",
    "pp": 15,
    "type": "Normal",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    }
  },
  "picaduraextrema": {
    "num": -19,
    "accuracy": 100,
    "basePower": 65,
    "category": "Physical",
    "name": "Picadura Extrema",
    "pp": 10,
    "type": "Bug",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
      "contact": 1
    },
	onBasePower(basePower, source, target) {
        if (target.status || target.hasAbility('comatose')) {
            return this.chainModify(2);
        }
    },
  },
  "sollozo": {
    "num": -20,
    "accuracy": 90,
    "basePower": 60,
    "category": "Special",
    "name": "Sollozo",
    "pp": 10,
    "type": "Water",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
	"drain": [1, 2]
  },
  "rompecraneos": {
    "num": -21,
    "accuracy": 80,
    "basePower": 110,
    "category": "Physical",
    "name": "Rompecraneos",
    "pp": 15,
    "type": "Rock",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1,
	  "contact": 1
    },
	secondary: {
        chance: 30, 
        volatileStatus: 'flinch',
    },
  },
  "hackeo": {
    "num": -22,
    "accuracy": 90,
    "basePower": 80,
    "category": "Special",
    "name": "Hackeo",
    "pp": 10,
    "type": "Electric",
    "target": "normal",
    "priority": 0,
    "flags": {
      "protect": 1,
      "mirror": 1
    },
    "drain": [1, 2]
  }
}


