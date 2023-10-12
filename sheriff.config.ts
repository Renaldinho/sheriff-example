import {noDependencies, sameTag, SheriffConfig} from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {

  version: 1,
  excludeRoot: false,
  depRules: {
    root: ['*'],
    'domain:*': [sameTag, 'domain:shared'],
    'type:feature': [
      'type:ui',
      'type:data',
      'type:util',
    ],
    'type:ui': ['type:data', 'type:util'],
    'type:data': ['type:util'],
    'type:util': noDependencies,
  },
  tagging: {
    // 'src/app': {
    //   'domains/<domain>': {
    //     'feature/': ['domain:<domain>', 'type:feature'],
    //     'data/': ['domain:<domain>', 'type:data'],
    //     'util/': ['domain:<domain>', 'type: util'],
    //     'ui/': ['domain:<domain>', 'type: ui']
    //   }
    // },
    'src/app/domains/<domain>/<type>': ['domain:<domain>', 'type:<type>'],
  },
};
