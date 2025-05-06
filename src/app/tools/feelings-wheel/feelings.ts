// import { Feeling } from "@/ts/Feeling"

import { Feeling } from "@/ts/Feeling";

export const colors = {
  blue: {
    light: '',
    mid: '',
    dark: '#1358d3',
  },
  green: {
    light: '',
    mid: '',
    dark: '',
  },
  yellow: {
    light: '',
    mid: '',
    dark: '',
  },
  orange: {
    light: '',
    mid: '',
    dark: '',
  },
  red: {
    light: '',
    mid: '',
    dark: '',
  },
  pink: {
    light: '',
    mid: '',
    dark: '',
  },
  purple: {
    light: '',
    mid: '',
    dark: '',
  },
}

export const feelings = [
  {
    name: 'dislike',
    children: [
      {
        name: 'appalled',
        children: [
          { name: 'aghast', children: null },
          { name: 'astonished', children: null },
          { name: 'flabbergasted', children: null },
          { name: 'sickened', children: null },
          { name: 'stunned', children: null },
        ]
      },
      {
        name: 'disgusted',
        children: [
          { name: 'abhorred', children: null },
          { name: 'abominable', children: null },
          { name: 'loathe', children: null },
          { name: 'nauseated', children: null },
          { name: 'repelled', children: null },
          { name: 'repulsed', children: null },
          { name: 'revolted', children: null },
          { name: 'turned off', children: null },
        ]
      },
      {
        name: 'dismissive',
        children: [
          { name: 'contemptuous', children: null },
          { name: 'disdainful', children: null },
          { name: 'disinterested', children: null },
          { name: 'scornful', children: null },
        ]
      },

      {
        name: 'skeptical',
        children: [
          { name: 'critical', children: null },
          { name: 'disapproving', children: null },
          { name: 'doubtful', children: null },
          { name: 'judgemental', children: null },
        ]
      },
      {
        name: 'suspicious',
        children: [
          { name: 'disturbed', children: null },
          { name: 'concerned', children: null },
          { name: 'cynical', children: null },
          { name: 'distrustful', children: null },
          { name: 'incredulous', children: null },
          { name: 'wary', children: null },
        ]
      },
    ]
  },
  {
    name: 'withdrawn',
    children: [
      { name: 'distant', children: null },
      { name: 'detached', children: null },
      { name: 'aloof', children: null },
      { name: 'guarded', children: null },
      { name: 'standoffish', children: null },
      { name: 'closed off', children: null },
    ],
  },
  {
    name: 'lonely',
    children: [
      { name: 'isolated', children: null },
      { name: 'forlorn', children: null },
      { name: 'estranged', children: null },
      { name: 'solitary', children: null },
      { name: 'secluded', children: null },
      { name: 'alienated', children: null },
    ],
  },
  {
    name: 'excluded',
    children: [
      { name: 'deserted', children: null },
      { name: 'forsaken', children: null },
      { name: 'separate', children: null },
      { name: 'ostricized', children: null },
      { name: 'outcast', children: null },
      { name: 'banished', children: null },
      { name: 'exiled', children: null },
      { name: 'marginalized', children: null },
      { name: 'disregarded', children: null },
      { name: 'segregated', children: null },
      { name: 'banished', children: null },
      { name: 'ignored', children: null },
    ],
  },
  {
    name: 'fragile',
    children: [
      { name: 'vulnerable', children: null },
      { name: 'exposed', children: null },
      { name: 'frail', children: null },
      { name: 'brittle', children: null },
      { name: 'shaky', children: null },
    ],
  },
  {
    name: 'abandoned',
    children: [
      { name: 'rejected', children: null },
      { name: 'friendless', children: null },
      { name: 'deserted', children: null },
      { name: 'forgotten', children: null },
      { name: 'discarded', children: null },
      { name: 'neglected', children: null },
      { name: 'jilted', children: null },
    ],
  },
  {
    name: 'desolate',
    children: [
      { name: 'bleak', children: null },
      { name: 'empty', children: null },
      { name: 'dreary', children: null },
    ],
  },
  {
    name: 'afraid',
    children: [
      {
        name: 'helpless',
        children: [
          { name: 'out of control', children: null },
          { name: 'powerless', children: null },
        ],
      },
      {
        name: 'threatened',
        children: [
          { name: 'exposed', children: null },
          { name: 'intimidated', children: null },
        ],
      },
      {
        name: 'confused',
        children: [
          { name: 'bewildered', children: null },
          { name: 'perturbed', children: null },
        ],
      },
      {
        name: 'inadequate', children: [
          { name: 'insecure', children: null },
          { name: 'inferior', children: null },
          { name: 'feeble', children: null },
        ],
      },
      {
        name: 'worried',
        children: [
          { name: 'alarmed', children: null },
          { name: 'anxious', children: null },
          { name: 'distraught', children: null },
        ],
      },
      {
        name: 'stressed',
        children: [
          { name: 'desperate', children: null },
          { name: 'overwhelmed', children: null },
        ],
      },
      {
        name: 'apprehensive',
        children: [
          { name: 'timid', children: null },
          { name: 'nervous', children: null },
          { name: 'cautious', children: null },
          { name: 'uneasy', children: null },
        ],
      },
    ],
  },

  {
    name: 'angry',
    children: [
      {
        name: 'rushed',
        children: [
          { name: 'pushed', children: null },
          { name: 'pressured', children: null },
          { name: 'strained', children: null },
          { name: 'impelled', children: null },
          { name: 'frenzied', children: null },
          { name: 'forced', children: null },
          { name: 'coerced', children: null },
        ],
      },
      {
        name: 'harassed',
        children: [
          { name: 'persecuted', children: null },
          { name: 'provoked', children: null },
          { name: 'pestered', children: null },
          { name: 'bullied', children: null },
          { name: 'badgered', children: null },
          { name: 'tormented', children: null },
          { name: 'hassled', children: null },
        ],
      },
      {
        name: 'aggressive',
        children: [
          { name: 'belligerent', children: null },
          { name: 'hostile', children: null },
          { name: 'combative', children: null },
          { name: 'confrontational', children: null },
          { name: 'violent', children: null },
          { name: 'forceful', children: null },
        ],
      },
      {
        name: 'frustrated',
        children: [
          { name: 'infuriated', children: null },
          { name: 'annoyed', children: null },
          { name: 'irritated', children: null },
          { name: 'exasperated', children: null },
          { name: 'discontented', children: null },
          { name: 'agitated', children: null },
          { name: 'vexed', children: null },
        ],
      },
      {
        name: 'bitter', children: [
          { name: 'jealous', children: null },
          { name: 'resentful', children: null },
          { name: 'cynical', children: null },
          { name: 'acrimonious', children: null },
          { name: 'vitriolic', children: null },
          { name: 'vindictive', children: null },
        ],
      },
      {
        name: 'dismayed',
        children: [
          { name: 'betrayed', children: null },
          { name: 'let down', children: null },
          { name: 'shocked', children: null },
          { name: 'troubled', children: null },
          { name: 'shaken', children: null },
        ],
      },
      {
        name: 'indignant',
        children: [
          { name: 'outraged', children: null },
          { name: 'violated', children: null },
          { name: 'scandalized', children: null },
          { name: 'affronted', children: null },
          { name: 'irate', children: null },
          { name: 'fuming', children: null },
          { name: 'displeased', children: null },
        ],
      },
      {
        name: 'offended', children: [
          { name: 'insulted', children: null },
          { name: 'mocked', children: null },
          { name: 'slighted', children: null },
          { name: 'snubbed', children: null },
        ],
      }
    ],
  },

  {
    name: 'bad',
    children: [
      {
        name: 'bored',
        children: [
          { name: 'indifferent', children: null },
          { name: 'apathetic', children: null },
        ],
      },
      {
        name: 'busy',
        children: [
          { name: 'pressured', children: null },
          { name: 'overloaded', children: null },
        ],
      },
      {
        name: 'stressed',
        children: [
          { name: 'out of control', children: null },
          { name: 'overwhelmed', children: null },
        ],
      },
      {
        name: 'tired',
        children: [
          { name: 'sleepy', children: null },
          { name: 'exhausted', children: null },
          { name: 'drained', children: null },
          { name: 'fatigued', children: null },
          { name: 'lethargic', children: null },
        ],
      },
      {
        name: 'unfocused',
        children: [
          { name: 'dazed', children: null },
          { name: 'scatterbrained', children: null },
          { name: 'distracted', children: null },
          { name: 'absentminded', children: null },
          { name: 'preoccupied', children: null },
        ]
      },
    ],
  },
  {
    name: 'embarrassed',
    children: [
      {
        name: 'inferior',
        children: [
          { name: 'weak', children: null },
          { name: 'small', children: null },
          { name: 'deficient', children: null },
          { name: 'subpar', children: null },
          { name: 'lesser than', children: null },
          { name: 'unworthy', children: null },

        ],
      },
      {
        name: 'ashamed',
        children: [
          { name: 'humiliated', children: null },
          { name: 'mortified', children: null },
          { name: 'disgraced', children: null },
          { name: 'chagrined', children: null },
        ],
      },
      {
        name: 'sheepish',
        children: [
          { name: 'abashed', children: null },
          { name: 'contrite', children: null },
          { name: 'self-conscious', children: null },
          { name: 'bashful', children: null },
          { name: 'meek', children: null },
          { name: 'awkward', children: null },

        ],
      },
      {
        name: 'guilty',
        children: [
          { name: 'repentant', children: null },
          { name: 'remorseful', children: null },
          { name: 'culpable', children: null },
          { name: 'reproachful', children: null },
          { name: 'blame-worthy', children: null },
        ],
      },
      {
        name: 'worthless',
        children: [
          { name: 'inadequate', children: null },
          { name: 'insignificant', children: null },
          { name: 'useless', children: null },
          { name: 'pathetic', children: null },
          { name: 'meaningless', children: null },
          { name: 'trivial', children: null },
        ],
      },
      {
        name: 'disrespected',
        children: [
          { name: 'humiliated', children: null },
          { name: 'ridiculed', children: null },
          { name: 'belittled', children: null },
          { name: 'dismissed', children: null },
          { name: 'undermined', children: null },
          { name: 'derided', children: null },
          { name: 'devalued', children: null },
        ],
      },
    ],
  },
  {
    name: 'sad',
    children: [
      {
        name: 'depressed',
        children: [
          { name: 'bleak', children: null },
          { name: 'dejected', children: null },
          { name: 'despondent', children: null },
          { name: 'dolorous', children: null },
          { name: 'miserable', children: null },
          { name: 'morose', children: null },
          { name: 'sullen', children: null },
        ]
      },
      {
        name: 'hurt', children: [
          { name: 'deflated', children: null },
          { name: 'injured', children: null },
          { name: 'distressed', children: null },
          { name: 'devastated', children: null },
          { name: 'destroyed', children: null },
          { name: 'crushed', children: null },
        ]
      },
      {
        name: 'bereft',
        children: [

          { name: 'disconsolate', children: null },
          { name: 'inconsolable', children: null },
        ],
      },
      {
        name: 'melancholy',
        children: [
          { name: 'sorrowful', children: null },
          { name: 'wistfulness', children: null },
          { name: 'regretful', children: null },
          { name: 'longing', children: null },
          { name: 'subdued', children: null },
          { name: 'sombre', children: null },

        ]
      },
      {
        name: 'subdued',
        children: [
          { name: 'gloomy', children: null },
          { name: 'sullen', children: null },
          { name: 'restrained', children: null },
        ]
      },
      {
        name: 'aggrieved',
        children: [
          { name: 'agonized', children: null },
          { name: 'bereft', children: null },
          { name: 'desolate', children: null },
          { name: 'disconsolate', children: null },
          { name: 'dispossessed', children: null },
          { name: 'heartbroken', children: null },
          { name: 'mistreated', children: null },
        ]
      },
      {
        name: 'discouraged',
        children: [
          { name: 'broken', children: null },
          { name: 'hopeless', children: null },
          { name: 'demoralized', children: null },
          { name: 'disheartened', children: null },
          { name: 'downcast', children: null },
        ],
      },
    ],
  },
];
