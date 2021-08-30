// Create variable that holds all of the terms and definitions needed and place in this file.

/* 
This information will be referenced for the following:

- flip card function
- next card function
- previous card function

*/

let terms = [
	{
		term: 'Cooling',
		definition:
			'Herbs that sedate or slow down metabolism to decrease energy production while cooling and soothing irritation and redness.',
	},
	{
		term: 'Warming',
		definition:
			'Herbs that stimulate or speed up metabolism. Increases energy production and brings warmth and vitality to tissues.',
	},
	{
		term: 'Neutral',
		definition:
			'Herbs that are neither warm nor cool. They do not have a strong effect on circulation or metabolism.',
	},
	{
		term: 'Moistening',
		definition:
			'Increases moisture content of tissues. Lubricates and softens dry, brittle tissues.',
	},
	{
		term: 'Drying',
		definition:
			'Removes excess fluid from tissue. Relieves conditions of dampness and swelling.',
	},
	{
		term: 'Balancing',
		definition:
			'Normalizes tissues, balancing moisture and solids within tissues.',
	},
	{
		term: 'Constricting',
		definition:
			'Herbs that increase tone or tension in tissues. Stops excess flow and secretions.',
	},
	{
		term: 'Relaxing',
		definition:
			'Herbs that relax muscle cramps and spams, relieving excess tension in tissues and promotes easier flow and movement.',
	},
	{
		term: 'Nourishing',
		definition:
			'Provides essential nutrients that aid tissue healing, improving structure and function.',
	},
];

const herbCats = [
	{
		term: 'Pungent Herbs',
		definition:
			'Spicy, hot taste. Sharp aroma. Warming and drying. Dispels stagnation, stimulates circulation, induces perspiration, and enhances appetite.',
	},
	{
		term: 'Aromatic Herbs',
		definition:
			'Contain volatile oils. Normally warming and drying. Have strong effect on nervous system, either calming or stimulating.',
	},
	{
		term: 'Simple Bitters',
		definition:
			'Most are cooling and drying. Tend to be detoxifying. Primary use is to stimulate production of hydrochloric acid, bile, and pancreatic enzymes.',
	},
	{
		term: 'Alkaloidal Bitters',
		definition:
			'Tend to be cooling and drying. Have very specific effects on nervous and glandular systems. Can mimic hormones and neurotransmitters, stimulating or sedating specific body processes.',
	},
	{
		term: 'Fragrant Bitters',
		definition:
			'Cross between simple bitters and aromatics, are warming and drying. Many are used to expel parasites, and in small amounts, stimulate appetite and digestion.',
	},
	{
		term: 'Acrid Herbs',
		definition:
			'Have bitter, nasty, burning taste. Tend to be relaxing, opening up flow of blood, lymph and energy. Primary action is relaxing cramps.',
	},
	{
		term: 'Astringent Herbs',
		definition:
			'Constrict and dry tissues. Used to stop excessive secretions, tighten loose tissue, reduce swelling, and help blood coagulate. Anti-venomous when applied topically.',
	},
	{
		term: 'Sour Herbs',
		definition:
			'Are cooling and nourishing. Used to reduce tissue inflammation and irritation and reduce free radical damage. Good for liver and eyes.',
	},
	{
		term: 'Salty Herbs',
		definition:
			'Are balancing and nourishing. Supply minerals that help tone and heal tissues. Clears lymphatics, promotes lymph flow, loosens mucus and soften swollen lymph nodes.',
	},
	{
		term: 'Sweet Herbs',
		definition:
			'Tend to be moistening and neutral. Used to build up weakened conditions, counteract wasting, strengthen glands, and replenish energy reserves.',
	},
	{
		term: 'Mucilant Herbs',
		definition:
			'Are moistening, cooling, and nourishing. Are used to soothe irritated tissues. Can help stop diarrhea. Supports friendly gut bacteria and intestinal health.',
	},
	{
		term: 'Oily Herbs',
		definition:
			'Are nourishing and cooling. Provide body with fatty acids used for energy production and immune, nerve and glandular function.',
	},
];

const tissueStates = [
	{
		term: 'Irritation',
		definition:
			'Linked to oxidation, inflammation, and fever. Symptoms: sharp pain, rapid pulse, hyperactivity, etc. Is the mechanism used by cells to start the healing process through inflammation. Balanced with cooling and moistening herbs.',
	},
	{
		term: 'Depression',
		definition:
			'Tissues are cool to the touch and pale. Pain tends to be dull and achy. Symptoms: pale complexion and tongue, slow pulse, general fatigue. Balanced with warming herbs.',
	},
	{
		term: 'Stagnation',
		definition:
			'Fluid accumulates in tissues. Can be edema, swollen lymph nodes, sluggish flow of body fluids. Symptoms: tissues are soft and spongy or hard and swollen to touch. Treat with bitter, aromatic, pungent, or astringent herbs.',
	},
	{
		term: 'Atrophy',
		definition:
			'Tissues become hard and brittle, are deficient in good fats and water. Ex: osteoporosis, bone spurs, arterial plaque, emphysema, etc. Treat with tonics, sweet, mucilant, and oily herbs.',
	},
	{
		term: 'Constriction',
		definition:
			'Muscles are tight as a result of overuse. Spasm when fatigued, causing sharp pain and constricted movement. Treat primarily with acrid herbs.',
	},
	{
		term: 'Relaxation',
		definition:
			'TIssue are unable to hold fluids due to damage or loss of muscle tone. Occurs in diarrhea, leaky gut, excessive mucus production, bleeding, etc. Treat with astringent herbs.',
	},
];
