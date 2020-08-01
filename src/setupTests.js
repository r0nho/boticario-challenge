import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import 'jest-canvas-mock';

chai.use(chaiEnzyme());

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
