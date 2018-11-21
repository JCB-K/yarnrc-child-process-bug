const { spawnSync } = require('child_process')

spawnSync('yarn', ['config', 'list'], {
  stdio: 'inherit',
});

