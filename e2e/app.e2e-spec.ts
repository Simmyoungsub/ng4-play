import { Ng4PlayPage } from './app.po';

describe('ng4-play App', () => {
  let page: Ng4PlayPage;

  beforeEach(() => {
    page = new Ng4PlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
