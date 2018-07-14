"use strict";

// Javascript translation of python file.
// MELONS! MELONS! MELONS!

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba'];

function countMelons(melonList) {
    let melonCounts = new Map();

    for (let melon of melonList) {
        if (melonCounts.has(melon)) {
            melonCounts.set(melon, melonCounts.get(melon) + 1);
        } else {
            melonCounts.set(melon, 1);
        }
    }
    return melonCounts;
}

console.log(countMelons(melonsToAdd));