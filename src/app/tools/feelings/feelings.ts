import { FeelingsWheel } from "@/ts/Feeling";

export const feelingsWheel: FeelingsWheel = {
  sad: {
    name: "Sad",
    // hsl(240, 100%, 61.2%)
    baseColor: { h: 240, s: 1, l: 0.612 },
    secondaryFeelings: [
      {
        name: "Depressed",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Bleak", color: { h: 0, s: 0, l: 0 } },
          { name: "Dejected", color: { h: 0, s: 0, l: 0 } },
        ],
      },
      {
        name: "Hurt",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Deflated", color: { h: 0, s: 0, l: 0 } },
          { name: "Injured", color: { h: 0, s: 0, l: 0 } },
        ],
      },
    ],
  },

  angry: {
    name: "Angry",
    // hsl(0, 100%, 50%)
    baseColor: { h: 0, s: 1, l: 0.5 },
    secondaryFeelings: [
      {
        name: "Frustrated",
        color: { h: 0, s: 0.0, l: 0.0 },
        leafFeelings: [
          { name: "Infuriated", color: { h: 0.0, s: 0.0, l: 0.0 } },
          { name: "Annoyed", color: { h: 0, s: 0, l: 0 } },
        ],
      },
    ],
  },

  fearful: {
    name: "Fearful",
    // hsl(300, 100%, 50%)
    baseColor: { h: 300, s: 1.0, l: 0.5 },
    secondaryFeelings: [
      {
        name: "Worried",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Alarmed", color: { h: 0, s: 0, l: 0 } },
          { name: "Anxious", color: { h: 0, s: 0, l: 0 } },
        ],
      },
      {
        name: "helpless",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "out of control", color: { h: 0, s: 0, l: 0 } },
          { name: "powerless", color: { h: 0, s: 0, l: 0 } },
        ],
      },
    ],
  },

  bad: {
    name: "Bad",
    baseColor: { h: 30, s: 1, l: 0.5 },
    secondaryFeelings: [
      {
        name: "Tired",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Sleepy", color: { h: 0, s: 0, l: 0 } },
          { name: "Exhausted", color: { h: 0, s: 0, l: 0 } },
        ],
      },
    ],
  },

  disgusted: {
    name: "Disgusted",
    // hsl(120, 100%, 50%)
    baseColor: { h: 120, s: 1, l: 0.5 },
    secondaryFeelings: [
      {
        name: "Appalled",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Aghast", color: { h: 0, s: 0, l: 0 } },
          { name: "Astonished", color: { h: 0, s: 0, l: 0 } },
          { name: "Flabbergasted", color: { h: 0, s: 0, l: 0 } },
          { name: "Sickened", color: { h: 0, s: 0, l: 0 } },
          { name: "Stunned", color: { h: 0, s: 0, l: 0 } },
        ],
      },
      {
        name: "Disapproving",
        color: { h: 0, s: 0, l: 0 },
        leafFeelings: [
          { name: "Judgmental", color: { h: 0, s: 0, l: 0 } },
          { name: "Turned off", color: { h: 0, s: 0, l: 0 } },
          // { name: "abhorred", color: { h: 0, s: 0, l: 0 } },
          // { name: "abominable", color: { h: 0, s: 0, l: 0 } },
          // { name: "loathe", color: { h: 0, s: 0, l: 0 } },
          // { name: "nauseated", color: { h: 0, s: 0, l: 0 } },
          // { name: "repelled", color: { h: 0, s: 0, l: 0 } },
          // { name: "repulsed", color: { h: 0, s: 0, l: 0 } },
          // { name: "revolted", color: { h: 0, s: 0, l: 0 } },
          // { name: "turned off", color: { h: 0, s: 0, l: 0 } },
        ],
      },
    ],
  },
};

//   {
//     name: "dislike",
//     baseColor: "hsl(0, 100%, 50%)",
//     feelings: [
//       {
//         name: "appalled",
//         feelings: [
//           { name: "aghast", leafFeelings: null },
//           { name: "astonished", leafFeelings: null },
//           { name: "flabbergasted", leafFeelings: null },
//           { name: "sickened", leafFeelings: null },
//           { name: "stunned", leafFeelings: null },
//         ],
//       },
//       {
//         name: "disgusted",
//         leafFeelings: [
//           { name: "abhorred", leafFeelings: null },
//           { name: "abominable", leafFeelings: null },
//           { name: "loathe", leafFeelings: null },
//           { name: "nauseated", leafFeelings: null },
//           { name: "repelled", leafFeelings: null },
//           { name: "repulsed", leafFeelings: null },
//           { name: "revolted", leafFeelings: null },
//           { name: "turned off", leafFeelings: null },
//         ],
//       },
//       {
//         name: "dismissive",
//         leafFeelings: [
//           { name: "contemptuous", leafFeelings: null },
//           { name: "disdainful", leafFeelings: null },
//           { name: "disinterested", leafFeelings: null },
//           { name: "scornful", leafFeelings: null },
//         ],
//       },

//       {
//         name: "skeptical",
//         leafFeelings: [
//           { name: "critical", leafFeelings: null },
//           { name: "disapproving", leafFeelings: null },
//           { name: "doubtful", leafFeelings: null },
//           { name: "judgemental", leafFeelings: null },
//         ],
//       },
//       {
//         name: "suspicious",
//         leafFeelings: [
//           { name: "disturbed", leafFeelings: null },
//           { name: "concerned", leafFeelings: null },
//           { name: "cynical", leafFeelings: null },
//           { name: "distrustful", leafFeelings: null },
//           { name: "incredulous", leafFeelings: null },
//           { name: "wary", leafFeelings: null },
//         ],
//       },
//     ],
//   },
//   {
//     name: "withdrawn",
//     leafFeelings: [
//       { name: "distant", leafFeelings: null },
//       { name: "detached", leafFeelings: null },
//       { name: "aloof", leafFeelings: null },
//       { name: "guarded", leafFeelings: null },
//       { name: "standoffish", leafFeelings: null },
//       { name: "closed off", leafFeelings: null },
//     ],
//   },
//   {
//     name: "lonely",
//     leafFeelings: [
//       { name: "isolated", leafFeelings: null },
//       { name: "forlorn", leafFeelings: null },
//       { name: "estranged", leafFeelings: null },
//       { name: "solitary", leafFeelings: null },
//       { name: "secluded", leafFeelings: null },
//       { name: "alienated", leafFeelings: null },
//     ],
//   },
//   {
//     name: "excluded",
//     leafFeelings: [
//       { name: "deserted", leafFeelings: null },
//       { name: "forsaken", leafFeelings: null },
//       { name: "separate", leafFeelings: null },
//       { name: "ostricized", leafFeelings: null },
//       { name: "outcast", leafFeelings: null },
//       { name: "banished", leafFeelings: null },
//       { name: "exiled", leafFeelings: null },
//       { name: "marginalized", leafFeelings: null },
//       { name: "disregarded", leafFeelings: null },
//       { name: "segregated", leafFeelings: null },
//       { name: "banished", leafFeelings: null },
//       { name: "ignored", leafFeelings: null },
//     ],
//   },
//   {
//     name: "fragile",
//     leafFeelings: [
//       { name: "vulnerable", leafFeelings: null },
//       { name: "exposed", leafFeelings: null },
//       { name: "frail", leafFeelings: null },
//       { name: "brittle", leafFeelings: null },
//       { name: "shaky", leafFeelings: null },
//     ],
//   },
//   {
//     name: "abandoned",
//     leafFeelings: [
//       { name: "rejected", leafFeelings: null },
//       { name: "friendless", leafFeelings: null },
//       { name: "deserted", leafFeelings: null },
//       { name: "forgotten", leafFeelings: null },
//       { name: "discarded", leafFeelings: null },
//       { name: "neglected", leafFeelings: null },
//       { name: "jilted", leafFeelings: null },
//     ],
//   },
//   {
//     name: "desolate",
//     leafFeelings: [
//       { name: "bleak", leafFeelings: null },
//       { name: "empty", leafFeelings: null },
//       { name: "dreary", leafFeelings: null },
//     ],
//   },
//   {
//     name: "afraid",
//     leafFeelings: [
//
//       {
//         name: "threatened",
//         leafFeelings: [
//           { name: "exposed", leafFeelings: null },
//           { name: "intimidated", leafFeelings: null },
//         ],
//       },
//       {
//         name: "confused",
//         leafFeelings: [
//           { name: "bewildered", leafFeelings: null },
//           { name: "perturbed", leafFeelings: null },
//         ],
//       },
//       {
//         name: "inadequate",
//         leafFeelings: [
//           { name: "insecure", leafFeelings: null },
//           { name: "inferior", leafFeelings: null },
//           { name: "feeble", leafFeelings: null },
//         ],
//       },
//       {
//         name: "worried",
//         leafFeelings: [
//           { name: "alarmed", leafFeelings: null },
//           { name: "anxious", leafFeelings: null },
//           { name: "distraught", leafFeelings: null },
//         ],
//       },
//       {
//         name: "stressed",
//         leafFeelings: [
//           { name: "desperate", leafFeelings: null },
//           { name: "overwhelmed", leafFeelings: null },
//         ],
//       },
//       {
//         name: "apprehensive",
//         leafFeelings: [
//           { name: "timid", leafFeelings: null },
//           { name: "nervous", leafFeelings: null },
//           { name: "cautious", leafFeelings: null },
//           { name: "uneasy", leafFeelings: null },
//         ],
//       },
//     ],
//   },

//   {
//     name: "angry",
//     leafFeelings: [
//       {
//         name: "rushed",
//         leafFeelings: [
//           { name: "pushed", leafFeelings: null },
//           { name: "pressured", leafFeelings: null },
//           { name: "strained", leafFeelings: null },
//           { name: "impelled", leafFeelings: null },
//           { name: "frenzied", leafFeelings: null },
//           { name: "forced", leafFeelings: null },
//           { name: "coerced", leafFeelings: null },
//         ],
//       },
//       {
//         name: "harassed",
//         leafFeelings: [
//           { name: "persecuted", leafFeelings: null },
//           { name: "provoked", leafFeelings: null },
//           { name: "pestered", leafFeelings: null },
//           { name: "bullied", leafFeelings: null },
//           { name: "badgered", leafFeelings: null },
//           { name: "tormented", leafFeelings: null },
//           { name: "hassled", leafFeelings: null },
//         ],
//       },
//       {
//         name: "aggressive",
//         leafFeelings: [
//           { name: "belligerent", leafFeelings: null },
//           { name: "hostile", leafFeelings: null },
//           { name: "combative", leafFeelings: null },
//           { name: "confrontational", leafFeelings: null },
//           { name: "violent", leafFeelings: null },
//           { name: "forceful", leafFeelings: null },
//         ],
//       },
//       {
//         name: "frustrated",
//         leafFeelings: [
//           { name: "infuriated", leafFeelings: null },
//           { name: "annoyed", leafFeelings: null },
//           { name: "irritated", leafFeelings: null },
//           { name: "exasperated", leafFeelings: null },
//           { name: "discontented", leafFeelings: null },
//           { name: "agitated", leafFeelings: null },
//           { name: "vexed", leafFeelings: null },
//         ],
//       },
//       {
//         name: "bitter",
//         leafFeelings: [
//           { name: "jealous", leafFeelings: null },
//           { name: "resentful", leafFeelings: null },
//           { name: "cynical", leafFeelings: null },
//           { name: "acrimonious", leafFeelings: null },
//           { name: "vitriolic", leafFeelings: null },
//           { name: "vindictive", leafFeelings: null },
//         ],
//       },
//       {
//         name: "dismayed",
//         leafFeelings: [
//           { name: "betrayed", leafFeelings: null },
//           { name: "let down", leafFeelings: null },
//           { name: "shocked", leafFeelings: null },
//           { name: "troubled", leafFeelings: null },
//           { name: "shaken", leafFeelings: null },
//         ],
//       },
//       {
//         name: "indignant",
//         leafFeelings: [
//           { name: "outraged", leafFeelings: null },
//           { name: "violated", leafFeelings: null },
//           { name: "scandalized", leafFeelings: null },
//           { name: "affronted", leafFeelings: null },
//           { name: "irate", leafFeelings: null },
//           { name: "fuming", leafFeelings: null },
//           { name: "displeased", leafFeelings: null },
//         ],
//       },
//       {
//         name: "offended",
//         leafFeelings: [
//           { name: "insulted", leafFeelings: null },
//           { name: "mocked", leafFeelings: null },
//           { name: "slighted", leafFeelings: null },
//           { name: "snubbed", leafFeelings: null },
//         ],
//       },
//     ],
//   },

//   {
//     name: "bad",
//     leafFeelings: [
//       {
//         name: "bored",
//         leafFeelings: [
//           { name: "indifferent", leafFeelings: null },
//           { name: "apathetic", leafFeelings: null },
//         ],
//       },
//       {
//         name: "busy",
//         leafFeelings: [
//           { name: "pressured", leafFeelings: null },
//           { name: "overloaded", leafFeelings: null },
//         ],
//       },
//       {
//         name: "stressed",
//         leafFeelings: [
//           { name: "out of control", leafFeelings: null },
//           { name: "overwhelmed", leafFeelings: null },
//         ],
//       },
//       {
//         name: "tired",
//         leafFeelings: [
//           { name: "sleepy", leafFeelings: null },
//           { name: "exhausted", leafFeelings: null },
//           { name: "drained", leafFeelings: null },
//           { name: "fatigued", leafFeelings: null },
//           { name: "lethargic", leafFeelings: null },
//         ],
//       },
//       {
//         name: "unfocused",
//         leafFeelings: [
//           { name: "dazed", leafFeelings: null },
//           { name: "scatterbrained", leafFeelings: null },
//           { name: "distracted", leafFeelings: null },
//           { name: "absentminded", leafFeelings: null },
//           { name: "preoccupied", leafFeelings: null },
//         ],
//       },
//     ],
//   },
//   {
//     name: "embarrassed",
//     leafFeelings: [
//       {
//         name: "inferior",
//         leafFeelings: [
//           { name: "weak", leafFeelings: null },
//           { name: "small", leafFeelings: null },
//           { name: "deficient", leafFeelings: null },
//           { name: "subpar", leafFeelings: null },
//           { name: "lesser than", leafFeelings: null },
//           { name: "unworthy", leafFeelings: null },
//         ],
//       },
//       {
//         name: "ashamed",
//         leafFeelings: [
//           { name: "humiliated", leafFeelings: null },
//           { name: "mortified", leafFeelings: null },
//           { name: "disgraced", leafFeelings: null },
//           { name: "chagrined", leafFeelings: null },
//         ],
//       },
//       {
//         name: "sheepish",
//         leafFeelings: [
//           { name: "abashed", leafFeelings: null },
//           { name: "contrite", leafFeelings: null },
//           { name: "self-conscious", leafFeelings: null },
//           { name: "bashful", leafFeelings: null },
//           { name: "meek", leafFeelings: null },
//           { name: "awkward", leafFeelings: null },
//         ],
//       },
//       {
//         name: "guilty",
//         leafFeelings: [
//           { name: "repentant", leafFeelings: null },
//           { name: "remorseful", leafFeelings: null },
//           { name: "culpable", leafFeelings: null },
//           { name: "reproachful", leafFeelings: null },
//           { name: "blame-worthy", leafFeelings: null },
//         ],
//       },
//       {
//         name: "worthless",
//         leafFeelings: [
//           { name: "inadequate", leafFeelings: null },
//           { name: "insignificant", leafFeelings: null },
//           { name: "useless", leafFeelings: null },
//           { name: "pathetic", leafFeelings: null },
//           { name: "meaningless", leafFeelings: null },
//           { name: "trivial", leafFeelings: null },
//         ],
//       },
//       {
//         name: "disrespected",
//         leafFeelings: [
//           { name: "humiliated", leafFeelings: null },
//           { name: "ridiculed", leafFeelings: null },
//           { name: "belittled", leafFeelings: null },
//           { name: "dismissed", leafFeelings: null },
//           { name: "undermined", leafFeelings: null },
//           { name: "derided", leafFeelings: null },
//           { name: "devalued", leafFeelings: null },
//         ],
//       },
//     ],
//   },
//   {
//     name: "sad",
//     leafFeelings: [
//       {
//         name: "depressed",
//         leafFeelings: [
//           { name: "bleak", leafFeelings: null },
//           { name: "dejected", leafFeelings: null },
//           { name: "despondent", leafFeelings: null },
//           { name: "dolorous", leafFeelings: null },
//           { name: "miserable", leafFeelings: null },
//           { name: "morose", leafFeelings: null },
//           { name: "sullen", leafFeelings: null },
//         ],
//       },
//       {
//         name: "hurt",
//         leafFeelings: [
//           { name: "deflated", leafFeelings: null },
//           { name: "injured", leafFeelings: null },
//           { name: "distressed", leafFeelings: null },
//           { name: "devastated", leafFeelings: null },
//           { name: "destroyed", leafFeelings: null },
//           { name: "crushed", leafFeelings: null },
//         ],
//       },
//       {
//         name: "bereft",
//         leafFeelings: [
//           { name: "disconsolate", leafFeelings: null },
//           { name: "inconsolable", leafFeelings: null },
//         ],
//       },
//       {
//         name: "melancholy",
//         leafFeelings: [
//           { name: "sorrowful", leafFeelings: null },
//           { name: "wistfulness", leafFeelings: null },
//           { name: "regretful", leafFeelings: null },
//           { name: "longing", leafFeelings: null },
//           { name: "subdued", leafFeelings: null },
//           { name: "sombre", leafFeelings: null },
//         ],
//       },
//       {
//         name: "subdued",
//         leafFeelings: [
//           { name: "gloomy", leafFeelings: null },
//           { name: "sullen", leafFeelings: null },
//           { name: "restrained", leafFeelings: null },
//         ],
//       },
//       {
//         name: "aggrieved",
//         leafFeelings: [
//           { name: "agonized", leafFeelings: null },
//           { name: "bereft", leafFeelings: null },
//           { name: "desolate", leafFeelings: null },
//           { name: "disconsolate", leafFeelings: null },
//           { name: "dispossessed", leafFeelings: null },
//           { name: "heartbroken", leafFeelings: null },
//           { name: "mistreated", leafFeelings: null },
//         ],
//       },
//       {
//         name: "discouraged",
//         leafFeelings: [
//           { name: "broken", leafFeelings: null },
//           { name: "hopeless", leafFeelings: null },
//           { name: "demoralized", leafFeelings: null },
//           { name: "disheartened", leafFeelings: null },
//           { name: "downcast", leafFeelings: null },
//         ],
//       },
//     ],
//   },
// ];
//
5;
