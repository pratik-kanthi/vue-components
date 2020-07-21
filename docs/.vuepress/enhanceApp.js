import Avatar from '../../src/components/Avatar';
import AvatarGroup from '../../src/components/AvatarGroup';
import AvatarInfo from '../../src/components/AvatarInfo';
import Badge from '../../src/components/Badge';
import Chart from '../../src/components/charts';
import LoginVariation1 from '../../src/views/login/variation-1/Component';
import AddressFinder from '../../src/components/address-finders';
import ColorPicker from '../../src/components/ColorPicker';
import Card from '../../src/components/Card';
import ModuleItemLayout from '../../src/layouts/ModuleItemLayout';
import Tabs from '../../src/components/Tabs';
import Button from '../../src/components/Button';
import Overlay from '../../src/components/Overlay';
import Table from '../../src/components/Table';
import Chip from '../../src/components/Chip';
import ProgressBar from '../../src/components/ProgressBar';
import Stepper from '../../src/components/Stepper';
import Shimmer from '../../src/components/shimmer/Component';
import ShimmerHeading from '../../src/components/shimmer/ShimmerHeading';
import ShimmerText from '../../src/components/shimmer/ShimmerText';
import Panel from '../../src/components/Panel';
import Tooltip from '../../src/components/Tooltip';
import Range from '../../src/components/Range';
import Timepicker from '../../src/components/Timepicker';
import TopBar from '../../src/components/TopBar';
import TabBar from '../../src/components/TabBar';
import Datepicker from '../../src/components/Datepicker';
import Modal from '../../src/components/Modal';
import '../../src/scss/style.scss';


export default ({
    Vue
}) => {
    Vue.component('LoginVariation1', LoginVariation1);
    Vue.component('ModuleItemLayout', ModuleItemLayout);
    Vue.component('Avatar', Avatar);
    Vue.component('AvatarGroup', AvatarGroup);
    Vue.component('AvatarInfo', AvatarInfo);
    Vue.component('Badge', Badge);
    Vue.component('Chart', Chart);
    Vue.component('AddressFinder', AddressFinder);
    Vue.component('ColorPicker', ColorPicker);
    Vue.component('Card', Card);
    Vue.component('Tabs', Tabs);
    Vue.component('Button', Button);
    Vue.component('Overlay', Overlay);
    Vue.component('Table', Table);
    Vue.component('Chip', Chip);
    Vue.component('ProgressBar', ProgressBar);
    Vue.component('Stepper', Stepper);
    Vue.component('Shimmer', Shimmer);
    Vue.component('ShimmerHeading', ShimmerHeading);
    Vue.component('ShimmerText', ShimmerText);
    Vue.component('Panel', Panel);
    Vue.component('Tooltip', Tooltip);
    Vue.component('Range', Range);
    Vue.component('Timepicker', Timepicker);
    Vue.component('TopBar', TopBar);
    Vue.component('TabBar', TabBar);
    Vue.component('Datepicker', Datepicker);
    Vue.component('Modal', Modal);
}
