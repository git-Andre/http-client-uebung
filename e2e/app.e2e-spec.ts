import { HttpClientUebungPage } from './app.po';

describe('http-client-uebung App', () => {
  let page: HttpClientUebungPage;

  beforeEach(() => {
    page = new HttpClientUebungPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
