/* UNPLEASANT EMOTIONS */
const Afraid = [
  ["Anxious", ["Worried", "Fretful"]],
  ["Worried", ["Concerned", "Apprehensive"]],
  ["Fearful", ["Terrified", "Panicked"]],
  ["Insecure", ["Uncertain", "Vulnerable"]],
  ["Helpless", ["Powerless", "Uncontrollable"]],
  ["Frightened", ["Scared", "Shaken"]],
  ["Nervous", ["Jittery", "Tense"]],
  ["Alarmed", ["Startled", "Spooked"]],
  ["Unsafe", ["Threatened", "Cornered"]],
];

const Alone = [
  ["Lonely", ["Isolated", "Forlorn"]],
  ["Abandoned", ["Rejected", "Unwanted"]],
  ["Distant", ["Withdrawn", "Disconnected"]],
  ["Excluded", ["Forsaken", "Ostracized"]],
  ["Desolate", ["Destroyed", "Bleak"]],
];

const Sad = [
  ["Depressed", ["Morose", "Despondent"]],
  ["Disappointed", ["Crestfallen", "Discouraged"]],
  ["Grieving", ["Heartbroken", "Mournful"]],
  ["Regretful", ["Remorseful", "Sorry"]],
  ["Empty", ["Numb", "Hollow"]],
  ["Hurt", ["Deflated", "Crushed"]],
  ["Defeated", ["Beaten", "Resigned"]],
  ["Melancholy", ["Dreary", "Glum"]],
];

const Angry = [
  ["Frustrated", ["Annoyed", "Agitated"]],
  ["Resentful", ["Bitter", "Grudging"]],
  ["Hostile", ["Aggressive", "Threatening"]],
  ["Enraged", ["Livid", "Furious"]],
  ["Disrespected", ["Violated", "Contemptuous"]],
  ["Irritable", ["Snappy", "Grumpy"]],
  ["Offended", ["Indignant", "Resentful"]],
  ["Deceived", ["Manipulated", "Swindled"]],
  ["Hurt", ["Betrayed", "Anguished"]],
];

const Dislike = [
  ["Disgusted", ["Repulsed", "Sickened"]],
  ["Judged", ["Condescended", "Criticized"]],
  ["Distrustful", ["Suspicious", "Paranoid"]],
  ["Repelled", ["Repulsed", "Averse"]],
  ["Mistreated", ["Abused", "Bullied"]],
  ["Shocked", ["Aghast", "Flabbergasted"]],
  ["Fragile", ["Delicate", "Frail"]],
  ["Insulted", ["Belittled", "Condescended"]],
  ["Distressed", ["Dismayed", "Vexed"]],
];

const Embarrassed = [
  ["Ashamed", ["Humiliated", "Regretful"]],
  ["Self-conscious", ["Awkward", "Exposed"]],
  ["Guilty", ["Remorseful", "Contrite"]],
  ["Flustered", ["Bashful", "Sheepish"]],
  ["Insecure", ["Uncomfortable", "Judged"]],
  ["Foolish", ["Ridiculed", "Stupid"]],
  ["Worthless", ["Insignificant", "Unimportant"]],
  ["Inferior", ["Condescended", "Deficient"]],
  ["Shy", ["Timid", "Reserved"]],
  ["Mortified", ["Chagrined", "Overwhelmed"]],
];

const Bad = [
  ["Bored", ["Indifferent", "Apathetic"]],
  ["Busy", ["Pressured", "Rushed"]],
  ["Stressed", ["Overwhelmed", "Out of control"]],
  ["Tired", ["Exhausted", "Sleepy"]],
  ["Unfocused", ["Skattered", "Preoccupied"]],
  ["Punished", ["Chastised", "Condemned"]],
  ["Exposed", ["Unprotected", "Revealed"]],
];

/* PLEASANT EMOTIONS */
const Accepted = [
  ["Invited", ["Wanted", "Needed"]],
  ["Attractive", ["Interesting", "Beautiful"]],
  ["Loved", ["Supported", "Appreciated"]],
  ["Beloved", ["Adored", "Cherished"]],
  ["Honored", ["Important", "Esteemed"]],
  ["Popular", ["Admired", "Celebrated"]],
  ["Cooperative", ["Constructive", "Helpful"]],
  ["Respected", ["Valued", "Validated"]],
];

const Confident = [
  ["Trusting", ["Earnest", "Assured"]],
  ["Positive", ["Resilient", "Sanguine"]],
  ["Fearless", ["Intrepid", "Undaunted"]],
  ["Truthful", ["Honest", "Authentic"]],
  ["Optimistic", ["Hopeful", "Upbeat"]],
  ["Bold", ["Audacious", "Courageous"]],
  ["Powerful", ["Capable", "Influential"]],
  ["Proud", ["Expansive", "Noble"]],
];

const Interested = [
  ["Sensitive", ["Responsive", "Attuned"]],
  ["Intrigued", ["Beguiled", "Fascinated"]],
  ["Attracted", ["Enticed", "Allured"]],
  ["Intimate", ["Attentive", "Romantic"]],
  ["Charmed", ["Enchanted", "Captivated"]],
  ["Creative", ["Imaginative", "Inspired"]],
  ["Curious", ["Inquisitive", "Piqued"]],
  ["Playful", ["Fiesty", "Impish"]],
];

const Excited = [
  ["Charged", ["Animated", "Passionate"]],
  ["Expectant", ["Anticipatory", "Hopeful"]],
  ["High", ["Blissful", "Euphoric"]],
  ["Moved", ["Reverent", "Uplifted"]],
  ["Aroused", ["Stimulated", "Invigorated"]],
  ["Energetic", ["Enthusiastic", "Eager"]],
  ["Surprised", ["Thrilled", "Delighted"]],
  ["Amazed", ["Awestruck", "Wonderment"]],
];

const Loving = [
  ["Generous", ["Magnanimous", "Kindhearted"]],
  ["Grateful", ["Beneficent", "Appreciative"]],
  ["Accepting", ["Respectful", "Amicable"]],
  ["Committed", ["Devoted", "Faithful"]],
  ["Caring", ["Affectionate", "Considerate"]],
  ["Friendly", ["Amiable", "Benevelent"]],
  ["Content", ["Satisfied", "Peaceful"]],
  ["Pleased", ["Gratified", "Satiated"]],
  ["Joyful", ["Fulfilled", "Free"]],
];

const feelingsArrays = {
  uncomfortable: {
    Afraid,
    Alone,
    Sad,
    Embarrassed,
    Angry,
    Bad,
  },
  comfortable: {
    Accepted,
    Confident,
    Interested,
    Excited,
    Loving,
  },
};
