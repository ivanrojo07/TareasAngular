import { ListaDePendientesPage } from './app.po';

describe('lista-de-pendientes App', () => {
  let page: ListaDePendientesPage;

  beforeEach(() => {
    page = new ListaDePendientesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
