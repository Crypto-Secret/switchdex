import { ThemeProperties } from './commons';
import { DefaultTheme } from './default_theme';

const darkThemeColors: ThemeProperties = {
    background: '#000',
    borderColor: '#5A5A5A',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
    buttonConvertBackgroundColor: '#343434',
    buttonConvertBorderColor: '#000',
    buttonConvertTextColor: '#fff',
    buttonErrorBackgroundColor: '#FF6534',
    buttonPrimaryBackgroundColor: '#002979',
    buttonSecondaryBackgroundColor: '#3CB34F',
    buttonTertiaryBackgroundColor: '#F6851B',
    cardBackgroundColor: '#202123',
    cardBorderColor: '#000',
    cardTitleColor: '#fff',
    darkBlue: '#002979',
    darkGray: '#474747',
    darkerGray: '#666',
    dropdownBackgroundColor: '#202123',
    dropdownBorderColor: '#000',
    dropdownTextColor: '#fff',
    errorButtonBackground: '#FF6534',
    errorCardBackground: '#FAF4EF',
    errorCardBorder: '#F39E4B',
    errorCardText: '#F68C24',
    gray: '#808080',
    green: '#3CB34F',
    iconLockedColor: '#fff',
    iconUnlockedColor: '#B9B9B9',
    inactiveTabBackgroundColor: '#1B1B1B',
    lightGray: '#B9B9B9',
    logoColor: '#fff',
    logoTextColor: '#fff',
    marketsSearchFieldBackgroundColor: '#404041',
    marketsSearchFieldBorderColor: '#404041',
    marketsSearchFieldTextColor: '#BFBFBF',
    notificationActive: '#F8F8F8',
    notificationsBadgeColor: '#ff6534',
    numberDecimalsColor: '#5A5A5A',
    orange: '#F6851B',
    rowActive: '#1B1B1B',
    tableBorderColor: '#000',
    tdColor: '#fff',
    textColorCommon: '#fff',
    textInputBackgroundColor: '#1B1B1B',
    textInputBorderColor: '#000',
    textInputTextColor: '#fff',
    textLight: '#999',
    thColor: '#B9B9B9',
    topbarBackgroundColor: '#202123',
    topbarBorderColor: '#000',
    topbarSeparatorColor: '#5A5A5A',
    notificationIconColor: '#fff',
};

export class DarkTheme extends DefaultTheme {
    constructor() {
        super();
        this.componentsTheme = darkThemeColors;
    }
}
