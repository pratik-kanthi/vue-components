import AvatarExample from '@/app/components/AvatarExample';
import AvatarInfoExample from '@/app/components/AvatarInfoExample';
import AvatarGroupExample from '@/app/components/AvatarGroupExample';
import BadgeExample from '@/app/components/BadgeExample';
import BreadcrumbsExample from '@/app/components/BreadcrumbsExample';
import BreadcrumbsLevel1 from '@/app/components/BreadcrumbsLevel1';
import BreadcrumbsLevel2 from '@/app/components/BreadcrumbsLevel2';
import ButtonExample from '@/app/components/ButtonExample';
import CardExample from '@/app/components/CardExample';
import CardCustomMediaExample from '@/app/components/CardCustomMediaExample';
import CardCustomSlotExample from '@/app/components/CardCustomSlotExample';
import CardExpandedSlotExample from '@/app/components/CardExpandedSlotExample';
import ColorPickerExample from '@/app/components/ColorPickerExample';
import ChipsExample from '@/app/components/ChipsExample';
import ProgressBarExample from '@/app/components/ProgressBarExample';
import StepperExample from '@/app/components/StepperExample';
import TabsExample from '@/app/components/TabsExample';
import ChartExample from '@/app/components/ChartExample';
import TableExample from '@/app/components/TableExample';
import PanelExample from '@/app/components/PanelExample';
import RangeExample from '@/app/components/RangeExample';
import TooltipExample from '@/app/components/TooltipExample';
import OverlaysExample from '@/app/components/OverlaysExample';
import AddressFinderExample from '@/app/components/AddressFinderExample';

export const routes= [
    {
        path: '/avatar',
        name: 'Avatar',
        component: AvatarExample,
    },
    {
        path: '/avatar-info',
        name: 'Avatar Info',
        component: AvatarInfoExample,
    },
    {
        path: '/avatar-group',
        name: 'Avatar Group',
        component: AvatarGroupExample,
    },
    {
        path: '/badge',
        name: 'Badge',
        component: BadgeExample,
    },
    {
        path: '/breadcrumbs',
        name: 'BreadCrumbs',
        component: BreadcrumbsExample,
        children: [
            {
                path: 'level-1',
                name: 'Level 1',
                component: BreadcrumbsLevel1,
                children:[
                    {
                        path: 'level-2',
                        name: 'Level 2',
                        component: BreadcrumbsLevel2
                    },
                ]
            }
           
        ]
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: ButtonExample,
    },
    {
        path: '/card',
        name: 'Card',
        component: CardExample,
    },
    {
        path: '/card-custom-media',
        name: 'CardCustomMediaExample',
        component: CardCustomMediaExample,
    },
    {
        path: '/card-custom-slot',
        name: 'CardCustomSlotExample',
        component: CardCustomSlotExample,
    },
    {
        path: '/card-expanded-slot',
        name: 'CardExpandedSlotExample',
        component: CardExpandedSlotExample,
    },
    {
        path: '/color-picker',
        name: 'Color Picker',
        component: ColorPickerExample,
    },
    {
        path: '/chips',
        name: 'Chips',
        component: ChipsExample,
    },
    {
        path: '/progress-bar',
        name: 'Progress Bar',
        component: ProgressBarExample,
    },
    {
        path: '/stepper',
        name: 'Stepper',
        component: StepperExample,
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: TabsExample,
    },
    {
        path: '/charts',
        name: 'Charts',
        component: ChartExample,
    },
    {
        path: '/table',
        name: 'Table',
        component: TableExample,
    },
    {
        path: '/panel',
        name: 'Panel',
        component: PanelExample,
    },
    {
        path: '/range',
        name: 'Range',
        component: RangeExample,
    },                          
    {
        path: '/tooltip',
        name: 'Tooltip',
        component: TooltipExample,
    },
    {
        path: '/overlays',
        name: 'Overlays',
        component: OverlaysExample,
    },
    {
        path: '/address-finders/google-address-finder',
        name: 'Address Finder',
        component: AddressFinderExample,
    }                         
];