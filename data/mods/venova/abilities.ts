export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
    sayolda: {
        num: -1,
        name: "Encanto Maldito",
        rating: 2,
        // Sube el ataque si pelea contra un Pokémon de género opuesto
        onModifyAtkPriority: 5,
        onModifyAtk(atk, source, target, move) {
            if (target && source.gender && target.gender && source.gender !== target.gender) {
                return this.chainModify(1.5);
            }
        },
        // Puede enamorar al rival que lo golpee por contacto (30%, como Cute Charm)
        onDamagingHit(damage, target, source, move) {
            if (source.status || source.volatiles['dynamax']) return;
            if (move.flags['contact']) {
                if (this.randomChance(3, 10)) {
                    source.addVolatile('attract', target);
                }
            }
        },
        flags: {breakable: 1},
    },

    arepaquemada: {
        num: -2,
        name: "Arepa Quemada",
        rating: 2,
        // Puede quemar al rival que lo golpee por contacto (30%, como Flame Body)
        onDamagingHit(damage, target, source, move) {
            if (move.flags['contact']) {
                if (this.randomChance(3, 10)) {
                    source.trySetStatus('brn', target);
                }
            }
        },
        flags: {breakable: 1},
    },
};