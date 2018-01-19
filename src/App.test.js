import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

/*
*yarn add enzyme enzyme-adapter-react-16 react-test-renderer*
describe works because of enzyme
even if u use describe with out enzyme, describe wont be recognised in output and it() will work properly
for clear understanding on hooks please visit https://gist.github.com/samwize/8877226.  
Note that for enzyme before() and after() wont work. but beforeEach() and afterEach() will work
*/


describe('container1', () => {
  it('renders without crash test', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      , div);
  });
});

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>
          {count} clicks
        </div>
        <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </a>
      </div>
    );
  }
}

const wrapper = shallow(<Foo />);

expect(wrapper.find('.clicks-0').length).to.equal(1);
wrapper.find('a').simulate('click');
expect(wrapper.find('.clicks-1').length).to.equal(1);

