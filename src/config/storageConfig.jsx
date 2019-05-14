import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer from 'reducers';

const persistConfig = {
    key: 'root',
    storage,
}

export let store = createStore(persistReducer(persistConfig, reducer), applyMiddleware(thunk));
export let persistor = persistStore(store);