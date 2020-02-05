import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme());

Enzyme.configure({ 
    adapter: new EnzymeAdapter(),
});