// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		name: "[Gen 8] Venova Custom Battle",
		desc: "Teams built only from custom Venova species.",
		mod: 'venova',
		team: 'random',
		ruleset: ['Species Clause', 'HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Venova Random Battle",
		desc: "Randomized teams using the Venova mod.",
		mod: 'venova',
		team: 'random',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Venova Custom Random Battle",
		desc: "Random teams built only from custom Venova species.",
		mod: 'venova',
		team: 'random',
		ruleset: ['Species Clause', 'HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
	},
];
