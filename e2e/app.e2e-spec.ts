import { RepAssignmentsPage } from './app.po';

describe('rep-assignments App', function() {
  let page: RepAssignmentsPage;

  beforeEach(() => {
    page = new RepAssignmentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
