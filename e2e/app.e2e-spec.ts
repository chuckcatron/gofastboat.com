import { Gofastboat.ComPage } from './app.po';

describe('gofastboat.com App', () => {
  let page: Gofastboat.ComPage;

  beforeEach(() => {
    page = new Gofastboat.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
