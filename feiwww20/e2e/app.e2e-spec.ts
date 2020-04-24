import { Feiwww20Page } from './app.po';

describe('feiwww20 App', () => {
  let page: Feiwww20Page;

  beforeEach(() => {
    page = new Feiwww20Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Feichapp!');
  });
});
