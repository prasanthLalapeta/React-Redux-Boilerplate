import { Model, attr } from 'redux-orm';
import { REQUEST_API } from 'containers/HomePage/constants';

export default class HomePage extends Model {
  static reducer(action, Homepages) {
    switch (action.type) {
      case REQUEST_API: {
        Homepages.upsert('page1');
        break;
      }
      default:
        break;
    }
  }
}

HomePage.modelName = 'HomePage';
HomePage.fields = {
  id: attr(),
};
