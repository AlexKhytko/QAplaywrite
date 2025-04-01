import { test, expect } from './HW27.fixtures';
// import { userGaragePage } from './HW27.setup';

test('Перевірка доступу до гаража', async ({ userGaragePage}) => {

  await userGaragePage.goto('https://guest:welcome2qauto@qauto.forstudy.space/panel/garage');

  await userGaragePage.context().storageState({ path: 'storageState.json' });
});

