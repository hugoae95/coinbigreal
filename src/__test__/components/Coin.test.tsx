import React from 'react';
import { shallow } from 'enzyme';
import Coin from '../../components/Coin';
import CoinMock from './../../__mocks__/CoinMock';
import CoinsMock from './../../__mocks__/CoinsMock';

describe('Coin' , () => {
    test('Render component' , () => {
        const coinContent = shallow(
            <CoinsMock>
              <Coin coin={CoinMock} />
            </CoinsMock>
        );
        expect(coinContent.length).toEqual(1);
    });
})