import { BookshelfPage } from './app.po';

describe('bookshelf App', function() {
  let page: BookshelfPage;

  beforeEach(() => {
    page = new BookshelfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
