import { HealthCalculatorsPage } from './app.po';

describe('health-calculators App', function() {
  let page: HealthCalculatorsPage;

  beforeEach(() => {
    page = new HealthCalculatorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
