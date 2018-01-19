import { NgMusicPage } from './app.po';

describe('ng-music App', () => {
  let page: NgMusicPage;

  beforeEach(() => {
    page = new NgMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
