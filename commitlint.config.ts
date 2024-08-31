import { UserConfig } from '@commitlint/types';

const Config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['docs', 'fix', 'feat', 'chore', 'refactor', 'build'],
    ],
  },
};

export default Config;
