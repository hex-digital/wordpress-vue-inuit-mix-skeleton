export const breakpoints = [
    'tinyPalm',
    'smallPalm',
    'mediumPalm',
    'palm',
    'device',
    'smallDesk',
    'desk',
    'largeDesk',
    'wideDesk',
    'wide1920',
];

export default function mq({ from = null, until = null }, currentScreenSize) {
    const currentBreakpointIndex = breakpoints.indexOf(currentScreenSize);

    if (from !== '' && from !== null) {
        const fromBreakpointIndex = breakpoints.indexOf(from);
        if (fromBreakpointIndex > currentBreakpointIndex) {
            return false;
        }
    }

    if (until !== '' && until !== null) {
        const untilBreakpointIndex = breakpoints.indexOf(until);
        if (untilBreakpointIndex <= currentBreakpointIndex) {
            return false;
        }
    }

    return true;
}
