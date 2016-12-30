import { PageTurnerPage } from './app.po';

describe('page-turner App', function() {
  let page: PageTurnerPage;

  beforeEach(() => {
    page = new PageTurnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
