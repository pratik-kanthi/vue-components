import Avatar from '../../src/components/Avatar';
import Chart from '../../src/components/Charts';
import LoginVariation1 from '../../src/views/login/variation-1/Component';
import AddressFinder from '../../src/components/AddressFinder';
import ColorPicker from '../../src/components/ColorPicker';
import Card from '../../src/components/Card';
import ModuleItemLayout from '../../src/layouts/ModuleItemLayout';
import Tabs from '../../src/components/Tabs';
import Button from '../../src/components/Button';
import Overlay from '../../src/components/Overlay';
import Table from '../../src/components/Table';

export default ({
    Vue
}) => {
    Vue.component('LoginVariation1', LoginVariation1);
    Vue.component('ModuleItemLayout', ModuleItemLayout);
    Vue.component('Avatar', Avatar);
    Vue.component('Chart', Chart);
    Vue.component('AddressFinder', AddressFinder);
    Vue.component('ColorPicker', ColorPicker);
    Vue.component('Card', Card);
    Vue.component('Tabs', Tabs);
    Vue.component('Button', Button);
    Vue.component('Overlay', Overlay);
    Vue.component('Table', Table);
}
