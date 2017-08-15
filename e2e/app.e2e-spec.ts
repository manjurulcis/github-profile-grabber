import { GithubProfileGrabberPage } from './app.po';

describe('github-profile-grabber App', function() {
  let page: GithubProfileGrabberPage;

  beforeEach(() => {
    page = new GithubProfileGrabberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
